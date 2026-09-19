import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import LoadingOverlay from './LoadingOverlay.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import BackToTop from './BackToTop.jsx'
import useScrollEffects from '../../hooks/useScrollEffects.js'

export default function Layout() {
  const { scrolled, showBackToTop } = useScrollEffects()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  const footerEmail = pathname.startsWith('/careers')
    ? 'careers@oraclemachinetech.com'
    : 'info@oraclemachinetech.com'

  return (
    <>
      <LoadingOverlay />
      <Navbar scrolled={scrolled} />
      <Outlet />
      <Footer contactEmail={footerEmail} />
      <BackToTop visible={showBackToTop} />
    </>
  )
}
