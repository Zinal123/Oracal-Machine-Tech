import { useState } from 'react'
import './Contact.css'
import usePageMeta from '../hooks/usePageMeta.js'
import Reveal from '../components/common/Reveal.jsx'

const INFO_CARDS = [
  {
    icon: 'fas fa-map-marker-alt',
    gradient: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)',
    title: 'Location',
    body: (
      <>
        Vadodara, Gujarat
        <br />
        India - 390001
      </>
    ),
  },
  {
    icon: 'fas fa-phone',
    title: 'Phone',
    body: (
      <>
        <a href="tel:+912652300000">+91-265-230-0000</a>
        <br />
        <a href="tel:+912652400000">+91-265-240-0000</a>
      </>
    ),
  },
  {
    icon: 'fas fa-envelope',
    gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    title: 'Email',
    body: (
      <>
        <a href="mailto:info@oracle-machines.com">info@oracle-machines.com</a>
        <br />
        <a href="mailto:sales@oracle-machines.com">sales@oracle-machines.com</a>
      </>
    ),
  },
  {
    icon: 'fab fa-whatsapp',
    gradient: 'linear-gradient(135deg, #25D366 0%, #20BA5F 100%)',
    title: 'WhatsApp',
    body: (
      <>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
          +91-98765-43210
        </a>
        <br />
        <small style={{ color: '#999' }}>Available 24/7</small>
      </>
    ),
  },
]

const BUSINESS_HOURS = [
  { label: 'Monday - Friday', value: '9:00 AM - 6:00 PM IST' },
  { label: 'Saturday', value: '10:00 AM - 4:00 PM IST' },
  { label: 'Sunday', value: 'Closed' },
  { label: 'Support Hotline', value: '24/7 Emergency Support' },
]

const EMPTY_FORM = { name: '', company: '', email: '', phone: '', country: '', city: '', product: '', message: '' }
const CONTACT_EMAIL = 'info@oracle-machines.com'

export default function Contact() {
  usePageMeta('Contact Us | Oracle Machine Tech', 'Contact Oracle Machine Tech - Get in touch for inquiries and support')

  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, phone, message } = form

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setStatus('error')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setStatus('error')
      return
    }

    const subject = `Inquiry from ${name}${form.product ? ` - ${form.product}` : ''}`
    const bodyLines = [
      `Name: ${name}`,
      form.company && `Company: ${form.company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      form.country && `Country: ${form.country}`,
      form.city && `City: ${form.city}`,
      form.product && `Interested Product: ${form.product}`,
      '',
      'Message:',
      message,
    ].filter(Boolean)

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
    window.location.href = mailtoUrl

    setStatus('success')
    setForm(EMPTY_FORM)
    setTimeout(() => setStatus((s) => (s === 'success' ? null : s)), 5000)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We&apos;re here to help. Reach out to us with any questions or inquiries.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4 mb-5">
            {INFO_CARDS.map((c, i) => (
              <Reveal as="div" className="col-md-6 col-lg-3" key={c.title} delay={i * 0.1}>
                <div className="info-card">
                  <div className="info-card-icon" style={c.gradient ? { background: c.gradient } : undefined}>
                    <i className={c.icon} />
                  </div>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal as="div" className="col-lg-8 mx-auto" style={{ background: 'var(--bg-light)', borderRadius: 8, padding: 'var(--spacing-xl)' }}>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Send us a Message</h2>
            <p className="section-subtitle" style={{ margin: '0.5rem 0 1.5rem', textAlign: 'left' }}>
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>

            {status === 'success' && (
              <div className="alert-message success">
                <i className="fas fa-check-circle" />
                Thanks! We&apos;ve opened your email app with your message ready to send to {CONTACT_EMAIL} — just hit send.
              </div>
            )}
            {status === 'error' && (
              <div className="alert-message error">
                <i className="fas fa-exclamation-circle" />
                Please fill in all required fields correctly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6 form-group">
                  <label className="form-label">Full Name *</label>
                  <input className="form-control" value={form.name} onChange={update('name')} required />
                </div>
                <div className="col-md-6 form-group">
                  <label className="form-label">Company Name</label>
                  <input className="form-control" value={form.company} onChange={update('company')} />
                </div>
                <div className="col-md-6 form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" className="form-control" value={form.email} onChange={update('email')} required />
                </div>
                <div className="col-md-6 form-group">
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" className="form-control" value={form.phone} onChange={update('phone')} required />
                </div>
                <div className="col-md-6 form-group">
                  <label className="form-label">Country</label>
                  <select className="form-select" value={form.country} onChange={update('country')}>
                    <option value="">Select Country</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>Germany</option>
                    <option>United Kingdom</option>
                    <option>Japan</option>
                    <option>China</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label className="form-label">City</label>
                  <input className="form-control" value={form.city} onChange={update('city')} />
                </div>
                <div className="col-md-6 form-group">
                  <label className="form-label">Interested Product</label>
                  <select className="form-select" value={form.product} onChange={update('product')}>
                    <option value="">Select Product</option>
                    <option value="Fiber Laser Cutting">Sheet Fiber Laser Cutting</option>
                    <option value="Tube Fiber Laser">Tube Fiber Laser Cutting</option>
                    <option value="CNC Plasma">CNC Plasma Cutting</option>
                    <option value="CNC Bending">5 Axis CNC Bending</option>
                    <option value="Welding">5 Axis Robotic Welding</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-12 form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Tell us about your inquiry..."
                    value={form.message}
                    onChange={update('message')}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-paper-plane" /> Send Message
                </button>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn-whatsapp">
                  <i className="fab fa-whatsapp" /> WhatsApp
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title mb-4">Our Location</h2>
          <Reveal as="div" className="map-container">
            <i className="fas fa-map-marked-alt" />
          </Reveal>
          <p className="text-center mt-3" style={{ color: '#666' }}>
            <i className="fas fa-info-circle" /> Map integration placeholder. Click on our WhatsApp or call us for
            directions.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title mb-4">Business Hours</h2>
          <div className="col-lg-8 mx-auto">
            <div className="hours-card">
              <div className="row g-3">
                {BUSINESS_HOURS.map((h) => (
                  <div className="col-md-6" key={h.label}>
                    <div className="hours-item">
                      <strong>{h.label}</strong>
                      {h.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
