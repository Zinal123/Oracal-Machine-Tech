import { useEffect, useRef, useState } from 'react'

// Reproduces animateCounters(): counts 0 -> target over ~50 animation frames,
// starting once the element scrolls into view (IntersectionObserver, fires once).
export default function useCountUp(target) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const increment = target / 50
        let current = 0

        const tick = () => {
          current += increment
          if (current >= target) {
            setValue(target)
            return
          }
          setValue(Math.floor(current))
          requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
        observer.unobserve(node)
      }
    })

    observer.observe(node)
    return () => observer.disconnect()
  }, [target])

  return [ref, value]
}
