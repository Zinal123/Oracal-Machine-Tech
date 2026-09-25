import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/oracle-logo-navbar.png'

export default function Footer({ contactEmail = 'info@oraclemachinetech.com' }) {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-3 col-md-6 footer-section">
            <img src={logo} alt="Oracle Machine Tech" style={{ height: '42px', marginBottom: '1rem' }} />
            <p>
              Leading manufacturer of CNC and Fiber Laser machines since 2022. Serving global
              industries with precision and innovation.
            </p>
            <div className="social-links" style={{ justifyContent: 'flex-start' }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-section">
            <h5>Quick Links</h5>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/products" className="footer-link">Products</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <Link to="/careers" className="footer-link">Careers</Link>
          </div>

          <div className="col-lg-3 col-md-6 footer-section">
            <h5>Contact Info</h5>
            <p>
              <i className="fas fa-map-marker-alt" /> 62, Aatmiya 3 Industrial Park, Near Por
              GIDC, Karjan, Vadodara, Gujarat - 391240
            </p>
            <p>
              <i className="fas fa-phone" /> <a href="tel:+9107096487806">+91-07096487806</a>
            </p>
            <p>
              <i className="fas fa-envelope" />{' '}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-section">
            <h5>Newsletter</h5>
            <p>Subscribe to get latest updates and offers.</p>
            {subscribed ? (
              <p style={{ color: 'var(--accent-orange)' }}>
                <i className="fas fa-check-circle" /> Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.6rem 0.8rem',
                    borderRadius: '6px',
                    border: 'none',
                  }}
                />
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-arrow-right" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Oracle Machine Tech. All rights reserved. |{' '}
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a> |{' '}
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms &amp; Conditions</a>
          </p>
          <p>
            Developed by{' '}
            <a href="https://lotusgleaminfotech.com/" target="_blank" rel="noreferrer">
              Lotus Gleam Infotech
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
