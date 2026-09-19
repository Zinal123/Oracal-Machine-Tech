export default function BackToTop({ visible }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div
      className={`back-to-top${visible ? ' visible' : ''}`}
      onClick={scrollToTop}
      role="button"
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up" />
    </div>
  )
}
