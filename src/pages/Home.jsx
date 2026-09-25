import { Link } from 'react-router-dom'
import './Home.css'
import usePageMeta from '../hooks/usePageMeta.js'
import Reveal from '../components/common/Reveal.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import StatCounter from '../components/home/StatCounter.jsx'
import { products } from '../data/products.js'
import robustArmImg from '../assets/images/manufacturing-facility.webp'

const STATS = [
  { target: 5, label: 'Years of Experience' },
  { target: 25, label: 'Machines Installed' },
  { target: 2, label: 'Countries Served' },
  { target: 150, label: 'Happy Customers' },
]

const WHY_CHOOSE_US = [
  { icon: 'fas fa-check-circle', title: 'Premium Quality', text: 'International quality standards with rigorous testing at every stage of manufacturing.' },
  { icon: 'fas fa-headset', title: '24/7 Support', text: 'Dedicated technical support team available round-the-clock for any assistance.' },
  { icon: 'fas fa-rocket', title: 'Latest Technology', text: 'Continuous innovation with cutting-edge laser and CNC technology.' },
  { icon: 'fas fa-wrench', title: 'Easy Maintenance', text: 'Simple modular design with spare parts readily available worldwide.' },
  { icon: 'fas fa-chart-line', title: 'ROI Focused', text: 'Machines designed to maximize productivity and minimize operational costs.' },
  { icon: 'fas fa-globe', title: 'Global Reach', text: 'Established network across 45+ countries with local service centers.' },
]

const INDUSTRIES = [
  { icon: 'fas fa-car', title: 'Automotive', text: 'Chassis, body panels, and component manufacturing.' },
  { icon: 'fas fa-dumbbell', title: 'Heavy Industries', text: 'Equipment, machinery, and structural components.' },
  { icon: 'fas fa-lightbulb', title: 'Electronics', text: 'Enclosures, brackets, and precision components.' },
  { icon: 'fas fa-h-square', title: 'Healthcare', text: 'Medical device and surgical instrument manufacturing.' },
  { icon: 'fas fa-building', title: 'Construction', text: 'Steel structures, frameworks, and architectural elements.' },
  { icon: 'fas fa-leaf', title: 'Agriculture', text: 'Farm equipment and machinery components.' },
]

const TESTIMONIALS = [
  {
    text: "The fiber laser cutting machine has increased our production capacity by 40%. Oracle's support team is exceptionally responsive.",
    initials: 'RK',
    name: 'Rajesh Kumar',
    title: 'Production Manager, New Delhi',
  },
  {
    text: "Excellent build quality and reliability. We've been using Oracle machines for 5 years without any major issues. Highly recommended!",
    initials: 'SM',
    name: 'Suresh Mehta',
    title: 'Factory Owner, Mumbai',
  },
  {
    text: 'Outstanding precision and cutting speed. Oracle machines have become the backbone of our manufacturing facility.',
    initials: 'AP',
    name: 'Arun Patel',
    title: 'Operations Head, Bangalore',
  },
]

const FEATURED = [
  { product: products[0], title: 'Sheet Fiber Laser Cutting', link: `/products/${products[0].id}` },
  { product: products[1], title: 'Tube Fiber Laser Cutting', link: '/products' },
  { product: products[2], title: 'CNC Plasma Cutting', link: '/products' },
]

export default function Home() {
  usePageMeta(
    'Oracle Machine Tech | Precision Engineering & Laser Technology',
    'Oracle Machine Tech - CNC & Fiber Laser Machine Manufacturing. Precision Engineering, Advanced Laser Technology, Smart Manufacturing Solutions.'
  )

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content">
              <h1>
                Precision Engineering. <span className="highlight">Advanced Laser Technology.</span> Smart
                Manufacturing.
              </h1>
              <p>
                Leading manufacturer of CNC and Fiber Laser cutting machines. Delivering excellence in
                precision engineering since 2010. Join thousands of satisfied customers worldwide.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                  <i className="fas fa-arrow-right" /> Explore Products
                </Link>
                <Link to="/contact" className="btn btn-outline-light">
                  <i className="fas fa-envelope" /> Request a Quote
                </Link>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-image">
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="machineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#ff6b35', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#ff8c5a', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="400" fill="transparent" />
                  <rect x="80" y="200" width="240" height="120" fill="url(#machineGradient)" rx="8" />
                  <rect x="100" y="80" width="200" height="130" fill="#0d47a1" rx="8" stroke="#ff6b35" strokeWidth="2" />
                  <circle cx="200" cy="100" r="25" fill="#ff6b35" />
                  <circle cx="200" cy="100" r="18" fill="rgba(255,255,255,0.3)" />
                  <line x1="200" y1="125" x2="200" y2="180" stroke="#ff6b35" strokeWidth="3" opacity="0.7" />
                  <rect x="120" y="120" width="40" height="60" fill="rgba(255,255,255,0.1)" rx="4" />
                  <rect x="250" y="120" width="40" height="60" fill="rgba(255,255,255,0.1)" rx="4" />
                  <circle cx="130" cy="135" r="4" fill="#10b981" />
                  <circle cx="145" cy="135" r="4" fill="#f59e0b" />
                  <circle cx="130" cy="155" r="4" fill="#3b82f6" />
                  <circle cx="145" cy="155" r="4" fill="#8b5cf6" />
                  <circle cx="140" cy="320" r="20" fill="#666" stroke="#fff" strokeWidth="2" />
                  <circle cx="140" cy="320" r="14" fill="none" stroke="#fff" strokeWidth="1" />
                  <circle cx="260" cy="320" r="20" fill="#666" stroke="#fff" strokeWidth="2" />
                  <circle cx="260" cy="320" r="14" fill="none" stroke="#fff" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            {STATS.map((s) => (
              <StatCounter key={s.label} target={s.target} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            title="About Oracle Machine Tech"
            subtitle="We are a leading manufacturer of precision CNC and Fiber Laser cutting machines, serving global industries with cutting-edge technology and unmatched customer support."
          />
          <div className="row align-items-center">
            <Reveal as="div" className="col-lg-6">
              <div style={{ height: 400, borderRadius: 8, overflow: 'hidden', background: 'linear-gradient(135deg,#f5f5f5,#e0e0e0)' }}>
                <img src={robustArmImg} alt="Oracle Machine Tech Manufacturing Facility" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </Reveal>
            <Reveal as="div" className="col-lg-6">
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                Leading Innovation in Manufacturing
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                Founded in 2022, Oracle Machine Tech has established itself as a trusted name in precision
                manufacturing. Our commitment to innovation, quality, and customer satisfaction has made us a
                preferred choice for industries worldwide.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                We combine German engineering principles with Indian efficiency to deliver world-class machines
                at competitive prices. Our team of experienced engineers and technicians ensures every machine
                meets international standards.
              </p>
              <Link to="/about" className="btn btn-primary">
                <i className="fas fa-arrow-right" /> Learn More About Us
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <SectionHeader
            title="Featured Products"
            subtitle="Explore our range of high-precision CNC and Fiber Laser cutting machines designed for modern manufacturing."
          />
          <div className="row g-4">
            {FEATURED.map(({ product, title, link }, i) => (
              <Reveal as="div" className="col-lg-4 col-md-6" key={product.id} delay={i * 0.1}>
                <div className="featured-card">
                  <div className="featured-card-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="featured-card-content">
                    <h4 className="featured-card-title">{title}</h4>
                    <p className="featured-card-text">{product.shortDescription}</p>
                    <Link to={link} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-secondary">
              <i className="fas fa-cubes" /> View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            title="Why Choose Oracle Machine Tech?"
            subtitle="We set the standard for precision, reliability, and customer service in the manufacturing industry."
          />
          <div className="feature-grid">
            {WHY_CHOOSE_US.map((item, i) => (
              <Reveal as="div" className="feature-item" key={item.title} delay={i * 0.1}>
                <div className="feature-icon">
                  <i className={item.icon} />
                </div>
                <h4 className="feature-title">{item.title}</h4>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <SectionHeader
            title="Industries We Serve"
            subtitle="Our machines are trusted by leading companies in diverse sectors."
          />
          <div className="row g-4">
            {INDUSTRIES.map((item, i) => (
              <div className="col-md-4 col-sm-6" key={item.title}>
                <Reveal
                  as="div"
                  className="feature-item"
                  delay={i * 0.1}
                  style={{
                    borderLeft: '4px solid var(--primary-blue)',
                    borderTop: 'none',
                  }}
                >
                  <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)' }}>
                    <i className={item.icon} />
                  </div>
                  <h4 className="feature-title">{item.title}</h4>
                  <p>{item.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            title="Customer Testimonials"
            subtitle="What our satisfied clients have to say about our products and services."
          />
          <div className="row g-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal as="div" className="col-lg-4 col-md-6" key={t.name} delay={i * 0.1}>
                <div className="testimonial-card">
                  <i className="fas fa-quote-left quote-icon" />
                  <p>{t.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-title">{t.title}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2>Ready to Transform Your Manufacturing?</h2>
              <p>Get in touch with our team to discuss your specific requirements and find the perfect solution.</p>
            </div>
            <div className="col-lg-4 text-lg-end text-center">
              <Link to="/contact" className="btn btn-primary">
                <i className="fas fa-envelope" /> Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
