import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { AccountApi, SendApi, Configuration } from 'hostinger-mail-api-sdk'

const {
  HOSTINGER_MAIL_API_TOKEN,
  MAIL_ADDRESS = 'info@oraclemachinetech.com',
  FRONTEND_ORIGIN = '',
  PORT = 3000,
} = process.env

if (!HOSTINGER_MAIL_API_TOKEN) {
  throw new Error('HOSTINGER_MAIL_API_TOKEN is not set. Copy server/.env.example to server/.env and fill it in.')
}

const allowedOrigins = FRONTEND_ORIGIN.split(',').map((o) => o.trim()).filter(Boolean)

const configuration = new Configuration({ accessToken: HOSTINGER_MAIL_API_TOKEN })
const accountApi = new AccountApi(configuration)
const sendApi = new SendApi(configuration)

let mailboxResourceIdPromise = null

function getMailboxResourceId() {
  if (!mailboxResourceIdPromise) {
    mailboxResourceIdPromise = accountApi
      .getCurrentAccount()
      .then(({ data }) => {
        const mailbox = data.data.mailboxes.find((m) => m.address.toLowerCase() === MAIL_ADDRESS.toLowerCase())
        if (!mailbox) throw new Error(`No mailbox matching MAIL_ADDRESS (${MAIL_ADDRESS}) is authorized for this API token`)
        return mailbox.resourceId
      })
      .catch((err) => {
        mailboxResourceIdPromise = null // allow retrying on the next request
        throw err
      })
  }
  return mailboxResourceIdPromise
}

// Simple sliding-window rate limit to deter form spam (no auth on this endpoint).
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const requestLog = new Map()

function isRateLimited(ip) {
  const now = Date.now()
  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  timestamps.push(now)
  requestLog.set(ip, timestamps)
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_FIELD_LENGTH = 200
const MAX_MESSAGE_LENGTH = 5000

function cleanField(value, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

const app = express()
app.use(express.json({ limit: '20kb' }))
app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : false,
  }),
)

app.post('/api/contact', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress
  if (isRateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'Too many requests. Please try again later.' })
  }

  const name = cleanField(req.body?.name)
  const company = cleanField(req.body?.company)
  const email = cleanField(req.body?.email)
  const phone = cleanField(req.body?.phone, 40)
  const country = cleanField(req.body?.country, 60)
  const city = cleanField(req.body?.city, 60)
  const product = cleanField(req.body?.product, 120)
  const message = cleanField(req.body?.message, MAX_MESSAGE_LENGTH)

  if (!name || !email || !phone || !message || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ ok: false, error: 'Please fill in all required fields correctly.' })
  }

  const subject = `Website inquiry from ${name}${product ? ` - ${product}` : ''}`
  const bodyLines = [
    `Name: ${name}`,
    company && `Company: ${company}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    country && `Country: ${country}`,
    city && `City: ${city}`,
    product && `Interested Product: ${product}`,
    '',
    'Message:',
    message,
  ].filter(Boolean)

  try {
    const mailboxResourceId = await getMailboxResourceId()
    await sendApi.sendEmail(mailboxResourceId, {
      to: [MAIL_ADDRESS],
      subject,
      text: bodyLines.join('\n'),
    })
    res.json({ ok: true })
  } catch (err) {
    console.error('Failed to send contact email:', err?.response?.data || err.message)
    res.status(502).json({ ok: false, error: 'Could not send your message right now. Please try again shortly.' })
  }
})

app.listen(PORT, () => {
  console.log(`Mail server listening on port ${PORT}`)
})
