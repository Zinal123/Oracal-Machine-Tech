import useCountUp from '../../hooks/useCountUp.js'
import useReveal from '../../hooks/useReveal.js'

export default function StatCounter({ target, label }) {
  const [countRef, value] = useCountUp(target)
  const [revealRef, active] = useReveal()

  return (
    <div ref={revealRef} className={`col-md-3 col-sm-6 stat-card reveal${active ? ' active' : ''}`}>
      <div className="stat-number" ref={countRef}>
        {value.toLocaleString()}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
