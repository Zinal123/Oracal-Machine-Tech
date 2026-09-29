# 📑 Technical Specification: Oracle Machine Tech

## 1. System Architecture
Oracle Machine Tech is a high-performance single page application (SPA) built on React 19 and Vite 8, engineered for an industrial machinery manufacturer in Vadodara, Gujarat, India.

### 1.1 Core Pages
1. **Home (`/`)**:
   - High-impact Hero with industrial credentials (15+ Years, 5000+ Machines, 45+ Countries, 8500+ Clients).
   - Featured machinery highlights.
   - Value propositions ("Why Choose Us").
   - Manufacturing process timeline.
   - Industries served & subsidiary company badges.
2. **About Us (`/about`)**:
   - Company leadership, corporate vision, and ISO certifications.
   - Manufacturing plant details and quality assurance guarantee.
3. **Products Catalog (`/products`)**:
   - Real-time client-side search and dual-axis filtering (by machine category and application).
   - Dynamic product cards with instant specification summaries.
4. **Product Details (`/products/:id`)**:
   - Full technical parameter tables, advantages, key features, and brochure downloads.
5. **Contact & Quote Request (`/contact`)**:
   - Interactive inquiry form with live field validation.
   - Dual-channel submission: Google Sheets webhook (`VITE_GOOGLE_SHEETS_WEBHOOK_URL`) + automated `mailto` & WhatsApp direct chat.
   - Working hours and Vadodara facility contact cards.
6. **Careers (`/careers`)**:
   - Open positions and modal resume submission form.

---

## 2. White-Labeled AI Assistant System
- **Component**: `src/components/ai/AIAssistantModal.jsx`
- **Engine**: `src/services/aiService.js`
- **Features**:
  - Floating launcher with animated pulse indicator.
  - Interactive prompt chips for rapid industrial questions (15mm steel cutting, tube laser specs, robotic welding cycle times, 5-axis bending capacities, warranty & pricing).
  - Online LLM completion via OpenRouter (`meta-llama/llama-3.3-70b-instruct:free`) when `VITE_OPENROUTER_API_KEY` is present in environment.
  - Zero-latency offline fallback engine answering machine specs, pricing estimates, company certifications, and direct contact options.
  - Direct conversion links to WhatsApp sales (+91-98765-43210) and Contact inquiry form.

---

## 3. Lead Capture & Automation
- **Script**: `google-sheets-lead-capture.gs`
- **Backend**: Google Apps Script Web App attached to Google Sheet `"Oracle Machine Tech Website Leads"`.
- **Payload Schema**:
  ```json
  {
    "name": "Full Name",
    "company": "Company Name",
    "email": "user@example.com",
    "phone": "+91-XXXXXXXXXX",
    "country": "Country",
    "city": "City",
    "product": "Selected Machine",
    "message": "Project specifications"
  }
  ```
- **Fallback**: Native mailto protocol prepopulated with formatted inquiry data + WhatsApp instant link.

---

## 4. Environment Configuration (`.env`)
```bash
# Optional: Google Apps Script Web App URL for Google Sheets lead capture
VITE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec

# Optional: OpenRouter API Key for live LLM responses
VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
```
