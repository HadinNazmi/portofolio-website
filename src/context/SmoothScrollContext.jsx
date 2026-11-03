import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SmoothScrollContext = createContext(null)

export function SmoothScrollProvider({ children }) {
  const [lenis, setLenis] = useState(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handleMotionChange = (e) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleMotionChange)

    if (mediaQuery.matches) {
      return () => mediaQuery.removeEventListener('change', handleMotionChange)
    }

    // Initialize Lenis with cinematic smoothing
    const lenisInstance = new Lenis({
      duration: 1.2,
      lerp: 0.09,
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
    })

    setLenis(lenisInstance)

    // Synchronize Lenis scroll with GSAP ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update)

    // Drive Lenis RAF from GSAP ticker for 60fps lock-step
    const tickerCallback = (time) => {
      lenisInstance.raf(time * 1000)
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    // Refresh ScrollTrigger when images and fonts load
    const handleLoad = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('load', handleLoad)
    document.fonts?.ready?.then(() => {
      ScrollTrigger.refresh()
    })

    // Resize observer to refresh ScrollTrigger cleanly
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 150)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange)
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)

      gsap.ticker.remove(tickerCallback)
      lenisInstance.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={{ lenis, reducedMotion, gsap, ScrollTrigger }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext)
}
