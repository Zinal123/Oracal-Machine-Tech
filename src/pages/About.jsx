import './About.css'
import usePageMeta from '../hooks/usePageMeta.js'
import Reveal from '../components/common/Reveal.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import manufacturingImg from '../assets/images/manufacturing-facility.webp'

const CORE_VALUES = [
  { icon: 'fas fa-medal', title: 'Excellence', text: 'We never settle for mediocrity. Excellence in every product, service, and interaction is our standard.' },
  { icon: 'fas fa-lightbulb', title: 'Innovation', text: 'Continuous improvement and cutting-edge technology drive us forward. We embrace change and lead transformation.' },
  { icon: 'fas fa-handshake', title: 'Integrity', text: 'Transparency, honesty, and ethical practices are the foundation of all our relationships.' },
  { icon: 'fas fa-users', title: 'Customer Focus', text: 'Your success is our success. We listen, understand, and deliver solutions tailored to your needs.' },
  { icon: 'fas fa-rocket', title: 'Sustainability', text: 'We are committed to environmentally responsible manufacturing and reducing our carbon footprint.' },
  { icon: 'fas fa-chart-line', title: 'Growth Mindset', text: 'We empower our team and partners to learn, innovate, and grow together in a supportive environment.' },
]

const FACILITY_HIGHLIGHTS = [
  { label: 'Advanced CNC Machinery', text: '50+ high-precision CNC machines for component manufacturing' },
  { label: 'Quality Testing Labs', text: 'Comprehensive testing facilities for performance validation' },
  { label: 'Assembly & Calibration', text: 'Clean room assembly with precision calibration equipment' },
  { label: 'Integrated Warehousing', text: 'Climate-controlled storage for sensitive components' },
  { label: 'R&D Center', text: 'Dedicated innovation lab for product development' },
]

const QUALITY_PROMISE = [
  { title: '100% Inspection', text: 'Every component is inspected and tested before assembly. No compromises on quality.' },
  { title: '48-Hour Validation', text: 'Each finished machine undergoes 48 hours of continuous performance testing.' },
  { title: 'Premium Materials', text: 'Only certified, high-grade materials from trusted suppliers are used.' },
  { title: 'Lifetime Support', text: 'Comprehensive technical support and spare parts availability for life of machine.' },
]

export default function About() {
  usePageMeta(
    'About Us | Oracle Machine Tech',
    'About Oracle Machine Tech - Our Story, Vision, Mission, Values, and Team'
  )

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Oracle Machine Tech</h1>
          <p>Our Story, Vision, and Commitment to Excellence in Manufacturing</p>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <Reveal as="div" className="col-lg-6">
              <div
                style={{
                  height: 400,
                  borderRadius: 8,
                  background: 'linear-gradient(135deg, var(--accent-orange) 0%, var(--accent-orange-light) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <i className="fas fa-user-tie" style={{ fontSize: 150, color: 'rgba(255,255,255,0.3)' }} />
              </div>
            </Reveal>
            <Reveal as="div" className="col-lg-6">
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Founder&apos;s Message
              </h2>
              <p style={{ fontStyle: 'italic', color: 'var(--accent-orange)', margin: '1rem 0' }}>
                &ldquo;Our vision is to revolutionize global manufacturing through precision, innovation, and
                unwavering commitment to excellence.&rdquo;
              </p>
              <p style={{ marginBottom: '1rem' }}>
                When we founded Oracle Machine Tech in 2022, we had a simple yet ambitious dream: to create
                world-class manufacturing equipment that would empower businesses worldwide. What started as a
                small team in Vadodara has grown into a global enterprise with thousands of satisfied customers
                across 45 countries.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Today, we&apos;re proud to be recognized as industry leaders in precision engineering and laser
                technology. Every machine that leaves our facility represents our commitment to quality,
                reliability, and customer success.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                We believe that great manufacturing doesn&apos;t just happen—it&apos;s engineered. And that&apos;s
                exactly what we do.
              </p>
              <p style={{ fontWeight: 700, color: 'var(--text-dark)' }}>- Founder &amp; CEO</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <SectionHeader title="Our Vision & Mission" />
          <div className="row g-4">
            <Reveal as="div" className="col-lg-6">
              <div className="value-card">
                <div className="value-icon" style={{ background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)' }}>
                  <i className="fas fa-eye" />
                </div>
                <h4 className="value-title">Our Vision</h4>
                <p className="value-description">
                  To be the world&apos;s most trusted and innovative manufacturer of precision engineering and
                  laser technology solutions, driving manufacturing excellence globally.
                </p>
              </div>
            </Reveal>
            <Reveal as="div" className="col-lg-6" delay={0.1}>
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-crosshairs" />
                </div>
                <h4 className="value-title">Our Mission</h4>
                <p className="value-description">
                  To deliver high-quality, precision manufacturing machines that empower our customers to achieve
                  their production goals efficiently and sustainably.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader title="Our Core Values" subtitle="These principles guide everything we do" />
          <div className="row g-4">
            {CORE_VALUES.map((v, i) => (
              <Reveal as="div" className="col-lg-4 col-md-6" key={v.title} delay={i * 0.1}>
                <div className="value-card">
                  <div className="value-icon">
                    <i className={v.icon} />
                  </div>
                  <h4 className="value-title">{v.title}</h4>
                  <p className="value-description">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Facility */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            title="Our Manufacturing Facility"
            subtitle="State-of-the-art infrastructure for precision manufacturing"
          />
          <div className="row align-items-center">
            <Reveal as="div" className="col-lg-6">
              <div style={{ height: 400, borderRadius: 8, overflow: 'hidden' }}>
                <img
                  src={manufacturingImg}
                  alt="Oracle Machine Tech Manufacturing Facility"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </Reveal>
            <Reveal as="div" className="col-lg-6">
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                World-Class Infrastructure
              </h3>
              <p style={{ marginBottom: '1.25rem' }}>
                Our 50,000 sq. ft. manufacturing facility in Vadodara is equipped with the latest precision
                machinery, testing laboratories, and quality control centers.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {FACILITY_HIGHLIGHTS.map((h) => (
                  <li key={h.label} style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '0.75rem' }}>
                    <i className="fas fa-check-circle" style={{ color: 'var(--accent-orange)', marginTop: 3 }} />
                    <span>
                      <strong>{h.label}</strong> - {h.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-blue) 100%)', color: '#fff' }}
      >
        <div className="container">
          <SectionHeader title="Our Quality Promise" light />
          <div className="row g-4">
            {QUALITY_PROMISE.map((q) => (
              <div className="col-md-6" key={q.title}>
                <div style={{ padding: 'var(--spacing-lg)', borderLeft: '4px solid var(--accent-orange)' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '0.5rem' }}>{q.title}</h4>
                  <p style={{ opacity: 0.9, margin: 0 }}>{q.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
