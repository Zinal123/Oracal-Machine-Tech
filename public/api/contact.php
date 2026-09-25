<?php
declare(strict_types=1);

/**
 * Contact form -> Hostinger Mail API bridge.
 *
 * Reads the API token from (in order): the HOSTINGER_MAIL_API_TOKEN /
 * MAIL_ADDRESS environment variables, or a config file one level ABOVE
 * public_html named mail-config.php, e.g.:
 *
 *   <?php
 *   return [
 *       'token' => 'xxxxxxxx',
 *       'mail_address' => 'info@oraclemachinetech.com',
 *   ];
 *
 * Keeping that file outside public_html means it is never served over
 * HTTP and never touches git.
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

function load_mail_config(): array
{
    $token = getenv('HOSTINGER_MAIL_API_TOKEN') ?: null;
    $mailAddress = getenv('MAIL_ADDRESS') ?: null;

    $configFile = dirname(__DIR__, 2) . '/mail-config.php';
    if ((!$token || !$mailAddress) && is_file($configFile)) {
        $config = require $configFile;
        $token = $token ?: ($config['token'] ?? null);
        $mailAddress = $mailAddress ?: ($config['mail_address'] ?? null);
    }

    if (!$token || !$mailAddress) {
        throw new RuntimeException('Mail API is not configured.');
    }

    return [$token, $mailAddress];
}

function is_rate_limited(string $ip): bool
{
    $dir = sys_get_temp_dir() . '/oracle-contact-rl';
    if (!is_dir($dir)) {
        @mkdir($dir, 0700, true);
    }
    $file = $dir . '/' . md5($ip) . '.json';
    $now = time();
    $windowSeconds = 600;
    $maxRequests = 5;

    $timestamps = [];
    if (is_file($file)) {
        $raw = @file_get_contents($file);
        $timestamps = $raw ? (json_decode($raw, true) ?: []) : [];
    }
    $timestamps = array_values(array_filter($timestamps, fn ($t) => $now - $t < $windowSeconds));
    $timestamps[] = $now;
    @file_put_contents($file, json_encode($timestamps));

    return count($timestamps) > $maxRequests;
}

function clean_field($value, int $max = 200): string
{
    if (!is_string($value)) {
        return '';
    }
    return mb_substr(trim($value), 0, $max);
}

/** @return array{0:int,1:array|null} */
function hostinger_request(string $method, string $path, string $token, ?array $body = null): array
{
    $ch = curl_init('https://api.mail.hostinger.com' . $path);
    $headers = ['Authorization: Bearer ' . $token, 'Accept: application/json'];
    $options = [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_TIMEOUT => 15,
    ];
    if ($body !== null) {
        $headers[] = 'Content-Type: application/json';
        $options[CURLOPT_POSTFIELDS] = json_encode($body);
    }
    $options[CURLOPT_HTTPHEADER] = $headers;
    curl_setopt_array($ch, $options);

    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $err = curl_error($ch);
    curl_close($ch);

    if ($response === false) {
        throw new RuntimeException('Hostinger API request failed: ' . $err);
    }

    return [$status, $response === '' ? null : json_decode($response, true)];
}

try {
    [$token, $mailAddress] = load_mail_config();
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Server is not configured to send email yet.']);
    exit;
}

$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$ip = trim(explode(',', $ip)[0]);
if (is_rate_limited($ip)) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too many requests. Please try again later.']);
    exit;
}

$input = json_decode((string) file_get_contents('php://input'), true) ?: [];

$name = clean_field($input['name'] ?? '');
$company = clean_field($input['company'] ?? '');
$email = clean_field($input['email'] ?? '');
$phone = clean_field($input['phone'] ?? '', 40);
$country = clean_field($input['country'] ?? '', 60);
$city = clean_field($input['city'] ?? '', 60);
$product = clean_field($input['product'] ?? '', 120);
$message = clean_field($input['message'] ?? '', 5000);

if (!$name || !$email || !$phone || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please fill in all required fields correctly.']);
    exit;
}

$subject = "Website inquiry from {$name}" . ($product ? " - {$product}" : '');
$bodyLines = array_filter([
    "Name: {$name}",
    $company ? "Company: {$company}" : null,
    "Email: {$email}",
    "Phone: {$phone}",
    $country ? "Country: {$country}" : null,
    $city ? "City: {$city}" : null,
    $product ? "Interested Product: {$product}" : null,
    '',
    'Message:',
    $message,
]);

try {
    [$meStatus, $me] = hostinger_request('GET', '/api/v1/me', $token);
    if ($meStatus !== 200) {
        throw new RuntimeException('Could not authenticate with mail API (status ' . $meStatus . ')');
    }

    $resourceId = null;
    foreach ($me['data']['mailboxes'] ?? [] as $mailbox) {
        if (strcasecmp($mailbox['address'] ?? '', $mailAddress) === 0) {
            $resourceId = $mailbox['resourceId'];
            break;
        }
    }
    if (!$resourceId) {
        throw new RuntimeException("No mailbox matching {$mailAddress} is authorized for this token");
    }

    [$sendStatus] = hostinger_request(
        'POST',
        '/api/v1/mailboxes/' . rawurlencode($resourceId) . '/send',
        $token,
        ['to' => [$mailAddress], 'subject' => $subject, 'text' => implode("\n", $bodyLines)],
    );

    if ($sendStatus !== 204) {
        throw new RuntimeException('Mail API returned status ' . $sendStatus);
    }

    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    error_log('Contact form mail error: ' . $e->getMessage());
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Could not send your message right now. Please try again shortly.']);
}
