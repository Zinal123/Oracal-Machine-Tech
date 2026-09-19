import { useEffect, useRef, useState } from 'react'

// Reproduces the original site's .reveal / .reveal.active behavior:
// element fades/slides in once it comes within ~150px of the viewport bottom,
// and never reverts once revealed.
export default function useReveal() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true)
          observer.unobserve(node)
        }
      },
      { rootMargin: '0px 0px 150px 0px', threshold: 0 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, active]
}
