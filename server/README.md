# Oracle Mail Server

Small Express API that sends contact-form emails through the Hostinger Mail API. It exists so the Hostinger API token never has to live in the browser bundle — the React site (`Contact.jsx`) POSTs form data here, and this server holds the credential and talks to Hostinger.

## Setup on Hostinger

1. In hPanel, create a **Node.js** application (Advanced > Node.js), pointing its app root at this `server/` folder. Set the startup file to `src/index.js`.
2. Copy `.env.example` to `.env` in the app's root and fill in:
   - `HOSTINGER_MAIL_API_TOKEN` — from hPanel > Emails > your mailbox > API/tokens.
   - `MAIL_ADDRESS` — the mailbox address that token is authorized for (defaults to `info@oraclemachinetech.com`).
   - `FRONTEND_ORIGIN` — your site's domain(s), comma-separated, so CORS only allows your site to call this API.
3. Run `npm install` (hPanel usually does this automatically on deploy) and start the app.
4. In the React app's build environment, set `VITE_CONTACT_API_URL` to this app's public URL plus `/api/contact` (e.g. `https://api.oraclemachinetech.com/api/contact`), then rebuild the static site.

## Local development

```
cd server
cp .env.example .env   # fill in HOSTINGER_MAIL_API_TOKEN
npm install
npm start
```

Then in the root project's `.env`, set `VITE_CONTACT_API_URL=http://localhost:3000/api/contact` and run `npm run dev`.

## Notes

- The token and `.env` files are gitignored — never commit real credentials.
- `POST /api/contact` is rate-limited (5 requests / 10 minutes per IP) since it has no auth of its own.
