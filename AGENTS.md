# 🤖 Oracle Machine Tech - AI Agent Playbook

This document defines architecture guidelines, standards, and rules for autonomous coding agents operating on the Oracle Machine Tech codebase.

---

## 1. Project Overview & Tech Stack
- **Framework**: React 19 + Vite 8 (ES modules, JSX)
- **Routing**: `react-router-dom` v7
- **Styling**: Bootstrap 5 + custom CSS custom properties (`src/assets/theme.css`)
- **Linter & Tools**: `oxlint`, `vite-plugin-image-optimizer`, `sharp`
- **Lead Capture**: Google Apps Script (`google-sheets-lead-capture.gs`) + Mailto fallback
- **AI Integration**: White-labeled AI Advisor modal (`AIAssistantModal.jsx`) backed by OpenRouter (`aiService.js`) with an offline industrial knowledge base fallback

---

## 2. Directory Structure Conventions
```
/
├── public/                 # Static assets, brochures, favicons
├── src/
│   ├── assets/             # CSS tokens, theme variables, images
│   ├── components/
│   │   ├── ai/             # AIAssistantModal.jsx, styles
│   │   ├── common/         # Reveal.jsx, SectionHeader.jsx
│   │   ├── home/           # StatCounter.jsx, etc.
│   │   ├── layout/         # Navbar, Footer, BackToTop, Layout
│   │   └── products/       # ProductCard.jsx
│   ├── data/               # Static catalogs (products.js)
│   ├── hooks/              # useScrollEffects, usePageMeta, useReveal
│   ├── pages/              # Route pages (Home, About, Products, ProductDetails, Contact, Careers)
│   ├── services/           # aiService.js
│   ├── App.jsx             # Top-level route declarations
│   └── main.jsx            # React root mount
├── google-sheets-lead-capture.gs  # Google Apps Script for Google Sheets webhook
├── SPEC.md                 # Technical specification document
└── CLIENT_PROJECT_INTAKE_TEMPLATE.md # Standard intake playbook template
```

---

## 3. Brand Identity & Design Tokens
When modifying or adding components, strictly adhere to the tokens defined in `src/assets/theme.css`:
- `--primary-dark`: `#1a1f35` (Navy dark - navigation & header backgrounds)
- `--primary-blue`: `#0d47a1` (Deep industrial blue)
- `--accent-orange`: `#ff6b35` (High-contrast industrial CTA orange)
- `--accent-orange-light`: `#ff8c5a` (Hover states)
- `--text-dark`: `#212529`
- `--bg-light`: `#f0f2f5`
- Fonts: `Poppins` (display / headings), `Inter` (body), `IBM Plex Mono` (specs / metrics).

---

## 4. Coding & Component Standards
1. **Functional React**: Use React hooks exclusively. Keep components modular and reusable.
2. **Accessible**: Include semantic HTML tags, accessible labels (`aria-label`), keyboard navigation, and focus states.
3. **Responsive**: Mobile-first design adapting smoothly across 320px, 576px, 768px, 992px, 1200px+.
4. **Performance**: No uncompressed heavy assets. Use `loading="lazy"` for below-the-fold media.
5. **Zero Lint / Build Errors**: Always verify modifications with `npm run build` and `npm run lint`.

---

## 5. Standard Client Intake Deployment Workflow
When onboarding a new client or adapting for a new brand:
1. Make a copy of `CLIENT_PROJECT_INTAKE_TEMPLATE.md` (e.g. `CLIENT_ABC.md`).
2. Fill out business profile, branding tokens, service catalog, FAQs, and Google Sheet name.
3. Run the automated playbook update:
   - Configure colors and typography in `src/assets/theme.css`.
   - Update pages (`Home`, `About`, `Products`, `Contact`).
   - Configure `AIAssistantModal.jsx` and `aiService.js` with client FAQs and offline knowledge.
   - Deploy `google-sheets-lead-capture.gs` to the client's Google Sheet and set `VITE_GOOGLE_SHEETS_WEBHOOK_URL`.
   - Validate with `npm run build`.
