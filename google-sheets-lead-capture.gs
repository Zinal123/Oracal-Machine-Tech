/**
 * Google Apps Script for Oracle Machine Tech Lead Capture
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets (https://sheets.new) and name it "Oracle Machine Tech Website Leads"
 * 2. Create the following column headers in Row 1 of Sheet 1:
 *    A1: Timestamp | B1: Name | C1: Company | D1: Email | E1: Phone | F1: Country | G1: City | H1: Product Interest | I1: Message
 * 3. In Google Sheets, go to Extensions -> Apps Script.
 * 4. Paste this script into Code.gs, replacing any existing code.
 * 5. Click "Deploy" -> "New deployment".
 *    - Select type: "Web app"
 *    - Description: "Lead Capture Webhook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (allows public website submissions)
 * 6. Click "Deploy", authorize permissions, and copy the Web App URL.
 * 7. Set VITE_GOOGLE_SHEETS_WEBHOOK_URL in your .env file with this URL.
 */

const SHEET_NAME = 'Sheet1'; // Default sheet name
const NOTIFICATION_EMAIL = 'info@oraclemachinetech.com'; // Recipient for lead alerts

function doPost(e) {
  try {
    const lock = LockService.getScriptLock();
    lock.waitLock(10000); // Wait up to 10 seconds for concurrent requests

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) 
      || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    
    let data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    const timestamp = new Date();
    const name = data.name || data.fullName || '';
    const company = data.company || '';
    const email = data.email || '';
    const phone = data.phone || '';
    const country = data.country || '';
    const city = data.city || '';
    const product = data.product || data.service || '';
    const message = data.message || '';

    // Append new row to spreadsheet
    sheet.appendRow([
      timestamp,
      name,
      company,
      email,
      phone,
      country,
      city,
      product,
      message
    ]);

    // Send email notification (optional)
    if (NOTIFICATION_EMAIL) {
      try {
        MailApp.sendEmail({
          to: NOTIFICATION_EMAIL,
          subject: `[New Lead] Oracle Machine Tech - ${name} (${product || 'General Inquiry'})`,
          body: `You received a new inquiry from the Oracle Machine Tech website:
          
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Country: ${country}
City: ${city}
Product of Interest: ${product}
Time: ${timestamp.toISOString()}

Message:
${message}
`
        });
      } catch (mailErr) {
        Logger.log('Notification email failed: ' + mailErr.toString());
      }
    }

    lock.releaseLock();

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Lead recorded successfully' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'active', message: 'Oracle Machine Tech Lead Capture Webhook is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
