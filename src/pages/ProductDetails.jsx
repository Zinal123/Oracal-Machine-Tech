import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProductDetails.css'
import usePageMeta from '../hooks/usePageMeta.js'
import Reveal from '../components/common/Reveal.jsx'
import { getProductById, getRelatedProducts } from '../data/products.js'

function PdSectionHeader({ title }) {
  return (
    <div className="pd-section-header reveal active">
      <h2 className="pd-section-title">{title}</h2>
    </div>
  )
}

export default function ProductDetails() {
  const { id } = useParams()
  const product = getProductById(id)
  const related = product ? getRelatedProducts(product.id) : []
  const [slide, setSlide] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  usePageMeta(
    product ? `${product.name} | Oracle Machine Tech` : 'Product | Oracle Machine Tech',
    product ? `${product.name} - High-precision system for industrial manufacturing` : undefined
  )

  useEffect(() => {
    setSlide(0)
    window.scrollTo({ top: 0 })
  }, [id])

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % 4), 5000)
    return () => clearInterval(timer)
  }, [product])

  if (!product) {
    return (
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="section-title">Product Not Found</h2>
          <p className="section-subtitle">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/products" className="btn btn-primary mt-3">
            Back to Products
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Product Hero */}
      <section className="product-hero">
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/products">Products</Link>
              </li>
              <li className="breadcrumb-item active">{product.name}</li>
            </ol>
          </nav>
          <h1>{product.name}</h1>
          <p>High-precision system for industrial sheet metal fabrication</p>
        </div>
      </section>

      <section className="section-padding" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal as="div" className="product-slider">
            <div className="slider-main">
              {product.image ? <img src={product.image} alt={product.name} /> : <i className={product.icon} />}
            </div>
            <button className="slider-btn prev" onClick={() => setSlide((s) => (s + 3) % 4)} aria-label="Previous slide">
              <i className="fas fa-chevron-left" />
            </button>
            <button className="slider-btn next" onClick={() => setSlide((s) => (s + 1) % 4)} aria-label="Next slide">
              <i className="fas fa-chevron-right" />
            </button>
            <div className="slider-controls">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  className={`slider-dot${slide === i ? ' active' : ''}`}
                  onClick={() => setSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="slider-thumbnails">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`slider-thumb${slide === i ? ' active' : ''}`}
                  onClick={() => setSlide(i)}
                >
                  <img src={product.image} alt="" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product Overview */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <PdSectionHeader title="Product Overview" />
          <Reveal as="div" className="overview-grid">
            {product.overview.map((o) => (
              <div className="overview-item" key={o.label}>
                <div className="overview-label">{o.label}</div>
                <div className="overview-value">{o.value}</div>
              </div>
            ))}
          </Reveal>

          <Reveal as="div" className="row align-items-center" style={{ marginTop: 'var(--spacing-xxl)' }}>
            <div className="col-lg-6">
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
                About This Machine
              </h3>
              {product.about.map((p, i) => (
                <p key={i} style={{ marginBottom: '1rem' }}>
                  {p}
                </p>
              ))}
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {product.checklist.map((item) => (
                  <li key={item} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                    <i className="fas fa-check-circle" style={{ color: 'var(--accent-orange)', marginTop: 3 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <div style={{ height: 400, borderRadius: 8, overflow: 'hidden' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding">
        <div className="container">
          <PdSectionHeader title="Technical Specifications" />
          <Reveal as="div" className="row">
            <div className="col-lg-8 mx-auto">
              <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <table className="spec-table">
                  <tbody>
                    {product.specTable.map(([label, value]) => (
                      <tr key={label}>
                        <td>{label}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <PdSectionHeader title="Key Features & Benefits" />
          <Reveal as="div" className="feature-grid">
            {product.features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">
                  <i className={f.icon} />
                </div>
                <h4 className="feature-title">{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding">
        <div className="container">
          <PdSectionHeader title="Applications & Industries" />
          <Reveal as="div" className="feature-grid">
            {product.applications.map((a) => (
              <div className="feature-card" style={{ borderTopColor: '#0d47a1' }} key={a.title}>
                <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)' }}>
                  <i className={a.icon} />
                </div>
                <h4 className="feature-title">{a.title}</h4>
                <p>{a.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Working Process Timeline */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <PdSectionHeader title="Working Process" />
          <Reveal as="div" className="row">
            <div className="col-lg-10 mx-auto">
              <div className="timeline">
                {product.process.map((step) => (
                  <div className="timeline-item" key={step.step}>
                    <div className="timeline-marker" />
                    <div className="timeline-content">
                      <div className="timeline-step">{step.step}</div>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <PdSectionHeader title="Frequently Asked Questions" />
          <Reveal as="div" className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="faqAccordion">
                {product.faq.map((item, i) => (
                  <div className="accordion-item" key={item.question}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button${openFaq === i ? '' : ' collapsed'}`}
                        type="button"
                        onClick={() => setOpenFaq((current) => (current === i ? -1 : i))}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse${openFaq === i ? ' show' : ''}`}>
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding">
        <div className="container">
          <PdSectionHeader title="Related Products" />
          <Reveal as="div" className="related-products">
            {related.map((r) => (
              <Link className="related-card" to={`/products/${r.id}`} key={r.id}>
                <div className="related-card-image">
                  <img src={r.image} alt={r.name} />
                </div>
                <div className="related-card-info">
                  <h5 className="related-card-name">{r.name}</h5>
                  <span className="btn btn-outline-secondary">View Details</span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container text-center">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '1rem' }}>
            Ready to Upgrade Your Manufacturing?
          </h2>
          <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>
            Download our product brochure or schedule a factory visit
          </p>
          <a href="/brochure.html" className="btn btn-primary" download="Oracle-Machinery-Brochure.html">
            <i className="fas fa-download" /> Download Brochure
          </a>
        </div>
      </section>
    </>
  )
}
