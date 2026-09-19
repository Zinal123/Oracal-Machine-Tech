import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
  { label: 'Careers', to: '/careers' },
]

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to))

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark${scrolled ? ' scrolled' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
          <i className="fas fa-cog" /> Oracle Machine Tech
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse${open ? ' show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {NAV_ITEMS.map((item) => (
              <li className="nav-item" key={item.to}>
                <Link
                  className={`nav-link${isActive(item.to) ? ' active' : ''}`}
                  to={item.to}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
