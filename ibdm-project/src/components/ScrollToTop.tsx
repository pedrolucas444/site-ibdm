import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const scrollToHashOrTop = () => {
      if (hash) {
        const id = hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        // if element not found yet, try again shortly (element may mount after route change)
        setTimeout(() => {
          const elRetry = document.getElementById(id)
          if (elRetry) elRetry.scrollIntoView({ behavior: 'smooth', block: 'start' })
          else window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        }, 60)
      } else {
        // no hash -> scroll to top
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
    }

    scrollToHashOrTop()
  }, [pathname, hash])

  return null
}