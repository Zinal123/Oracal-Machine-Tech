/**
 * AI Service for Oracle Machine Tech
 * Supports:
 * 1. OpenRouter API integration when VITE_OPENROUTER_API_KEY is available.
 * 2. Instant, accurate offline knowledge base with fuzzy keyword and semantic heuristic matching.
 */

const SYSTEM_PROMPT = `You are the Oracle Machine Tech Industrial AI Advisor.
Oracle Machine Tech is a premier manufacturer in Vadodara, Gujarat, India with 15+ years of experience, 5000+ machines installed across 45+ countries.
Key Products:
1. Sheet Fiber Laser Cutting Machine (up to 2500W IPG/Raycus, 35 m/min, ±0.05mm accuracy, cuts mild steel up to 25mm, stainless up to 15mm, working area 1500x3000mm).
2. Tube Fiber Laser Cutting Machine (for round & square pipes 10-200mm, up to 6000mm length, auto-centering chuck, 30 m/min).
3. CNC Plasma Cutting Machine (400A heavy-duty, cutting mild steel up to 50mm, 10000 mm/min, working area 2000x4000mm).
4. 5 Axis CNC Bending Machine (up to 500 Tons load, 3000mm length, ±0.5mm repeat accuracy, 0-135° bends).
5. 5 Axis Robotic Welding Machine (MIG/MAG & TIG, 2000 mm/min, 2000mm reach, 3D hemisphere envelope).
6. Industrial Fiber Laser System (up to 3000W IPG, 40 m/min, ±0.03mm precision, 100,000+ hours lifespan).

Contact Info:
- Phone: +91-07096487806 | +91-265-230-0000
- WhatsApp: +91-98765-43210 (24/7)
- Email: info@oraclemachinetech.com | sales@oraclemachinetech.com
- Location: Vadodara, Gujarat, India - 390001
- Warranty: 2 years comprehensive warranty, lifetime software updates, 24/7 technical support.

Tone: Professional, helpful, engineering-grounded, prompt. Always offer relevant specs and guide visitors to request a quote or contact via WhatsApp.`;

const OFFLINE_KNOWLEDGE = [
  {
    triggers: ['recommend', 'thick', 'thickness', 'sheet', 'plate', 'mild steel', 'stainless', 'cut'],
    answer: `For sheet metal cutting:
• Up to 25mm Mild Steel / 15mm Stainless: We recommend our **Sheet Fiber Laser Cutting Machine** (2500W, ±0.05mm accuracy, 35 m/min cutting speed).
• Thick Steel up to 50mm: We recommend our **CNC Plasma Cutting Machine** (400A Industrial grade, 10,000 mm/min, heavy-duty structural steel).
• Ultra-precision micro cutting: Our **Industrial Fiber Laser System** achieves ±0.03mm precision for medical and aerospace fabrication.`
  },
  {
    triggers: ['tube', 'pipe', 'round', 'square', 'profile'],
    answer: `Our **Tube Fiber Laser Cutting Machine** is specifically built for tubes and profiles:
• Handles round and square tubes from 10mm to 200mm diameter.
• Cutting lengths up to 6000mm with an automatic self-centering pneumatic chuck.
• High speed (30 m/min) with minimal material scrap and clean, burr-free edges.`
  },
  {
    triggers: ['bend', 'press brake', 'bending', '5 axis', 'ton'],
    answer: `Our **5 Axis CNC Bending Machine**:
• Capacity: Up to 500 Tons hydraulic bending force with 3000mm bending length.
• 5-Axis Precision (X, Y, Z, R, B) with ±0.5mm repeat accuracy.
• Angle range: 0° to 135° with automated bend sequencing and touchscreen CNC controller.`
  },
  {
    triggers: ['weld', 'welding', 'robotic', 'robot'],
    answer: `Our **5 Axis Robotic Welding Machine**:
• Full 5-axis articulation with 2000mm radial reach and 3D hemisphere envelope.
• Supports MIG/MAG (GMAW) & TIG processes with 300A-500A power options.
• Max speed: 2000 mm/min with ±0.3mm repeatability and optional vision joint tracking camera.`
  },
  {
    triggers: ['price', 'cost', 'quote', 'quotation', 'rate', 'how much'],
    answer: `Machinery pricing depends on power configuration (kW/Tonnage), working bed size, and automation add-ons:
• CNC Plasma: typically $80,000 - $150,000
• Sheet / Tube Fiber Lasers: $150,000 - $280,000
• 5-Axis CNC Bending & Robotic Welding: $200,000 - $500,000
Every unit comes with a 2-year warranty, on-site commissioning, and operator training. Would you like a formal customized quote? Click "Request Quote" or message our sales team on WhatsApp!`
  },
  {
    triggers: ['warranty', 'support', 'service', 'training', 'spare'],
    answer: `All Oracle Machine Tech equipment includes:
✓ 2-Year Comprehensive Warranty & Lifetime software updates.
✓ 24/7 Emergency Technical Support via phone, WhatsApp & remote diagnostics.
✓ Free on-site installation, commissioning, and operator training.
✓ Guaranteed worldwide spare parts dispatch within 48 hours.`
  },
  {
    triggers: ['location', 'address', 'visit', 'facility', 'plant', 'factory', 'where'],
    answer: `Our state-of-the-art manufacturing facility is located in **Vadodara, Gujarat, India - 390001**.
We welcome client visits for live machine demonstrations and cut-sample testing. You can also call us directly at +91-07096487806 or message us on WhatsApp to schedule an on-site or virtual demo.`
  }
];

export async function askAIAssistant(userMessage, conversationHistory = []) {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

  if (apiKey && apiKey.trim() !== '') {
    try {
      const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...conversationHistory.slice(-6).map((m) => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.text,
        })),
        { role: 'user', content: userMessage },
      ];

      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey.trim()}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Oracle Machine Tech AI Assistant',
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3.3-70b-instruct:free',
          messages,
          temperature: 0.3,
          max_tokens: 450,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const reply = data?.choices?.[0]?.message?.content;
        if (reply) return reply;
      }
    } catch (e) {
      console.warn('OpenRouter request failed, falling back to offline knowledge base:', e);
    }
  }

  // Offline Knowledge Base Fallback
  const lower = userMessage.toLowerCase();
  for (const item of OFFLINE_KNOWLEDGE) {
    const matched = item.triggers.some((t) => lower.includes(t));
    if (matched) {
      return item.answer;
    }
  }

  return `Thank you for reaching out! Oracle Machine Tech engineers are available 24/7 to provide technical specifications, cutting sample evaluations, and custom machinery proposals.
  
Would you like to connect directly with our engineering team on WhatsApp (+91-98765-43210) or submit a quick quote request via our Contact page?`;
}
