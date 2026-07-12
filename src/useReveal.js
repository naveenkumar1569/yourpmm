import { useEffect } from 'react'

// Fade/slide-up elements with the `.reveal` class as they scroll into view.
// Robust against jump-scrolls and deep links: anything already in (or above)
// the viewport is revealed immediately so content is never left hidden.
export default function useReveal(deps = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    const reveal = (el) => el.classList.add('in')

    if (!('IntersectionObserver' in window)) {
      els.forEach(reveal)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((el) => io.observe(el))

    // Safety net: reveal anything already within view (handles jump-scrolls,
    // hash links, and observers that don't fire on instant navigation).
    const sweep = () => {
      const h = window.innerHeight || document.documentElement.clientHeight
      els.forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top < h * 0.92 && r.bottom > 0) {
          reveal(el)
          io.unobserve(el)
        }
      })
    }
    const raf = requestAnimationFrame(sweep)
    window.addEventListener('scroll', sweep, { passive: true })

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', sweep)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
