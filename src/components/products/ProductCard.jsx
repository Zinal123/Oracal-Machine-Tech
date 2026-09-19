import { Link } from 'react-router-dom'
import Reveal from '../common/Reveal.jsx'

export default function ProductCard({ product, delay = 0 }) {
  return (
    <Reveal as="div" className="col-lg-6 col-xl-4" delay={delay}>
      <div className="product-card">
        <div className="product-image">
          {product.image ? <img src={product.image} alt={product.name} /> : <i className={product.icon} />}
          {product.badge && <span className="product-badge">{product.badge}</span>}
        </div>
        <div className="card-content">
          <div className="card-category">{product.category}</div>
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.shortDescription}</p>
          <div className="product-specs">
            {Object.entries(product.cardSpecs).map(([label, value]) => (
              <div className="spec-item" key={label}>
                <span className="spec-label">{label}:</span>
                <span className="spec-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <Link to={`/products/${product.id}`} className="btn btn-primary">
            View Details
          </Link>
          <Link to="/contact" className="btn btn-outline-secondary">
            Quote
          </Link>
        </div>
      </div>
    </Reveal>
  )
}
