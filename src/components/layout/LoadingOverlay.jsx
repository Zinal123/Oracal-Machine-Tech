import { useEffect, useState } from 'react'

export default function LoadingOverlay() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`loading-overlay${hidden ? ' hidden' : ''}`}>
      <div className="loader" />
    </div>
  )
}
