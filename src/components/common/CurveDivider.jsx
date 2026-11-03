import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll } from '../../context/SmoothScrollContext'

gsap.registerPlugin(ScrollTrigger)

/**
 * CurveDivider
 * Scrubbed SVG curve divider that flattens into a straight line as the user scrolls,
 * creating a cinematic seamless transition between light and dark sections.
 *
 * @param {('convex-top'|'convex-bottom')} direction - Direction of the arch curve
 * @param {string} fillColor - Fill color of the curve (e.g. '#141517')
 * @param {number} maxCurveHeight - Maximum curve apex height in pixels (default: 80)
 * @param {string} className - Additional CSS classes
 */
function CurveDivider({
  direction = 'convex-top',
  fillColor = '#141517',
  maxCurveHeight = 85,
  className = '',
}) {
  const containerRef = useRef(null)
  const pathRef = useRef(null)
  const { reducedMotion } = useSmoothScroll() || {}

  useEffect(() => {
    if (!containerRef.current || !pathRef.current) return

    if (reducedMotion) {
      // In reduced-motion mode, keep it straight without scrub morph
      if (direction === 'convex-top') {
        pathRef.current.setAttribute('d', 'M0 0 L1440 0 L1440 100 L0 100 Z')
      } else {
        pathRef.current.setAttribute('d', 'M0 0 L1440 0 L1440 100 L0 100 Z')
      }
      return
    }

    const pathEl = pathRef.current
    const proxy = { progress: 0 }

    const updatePath = () => {
      const p = proxy.progress
      const currentH = maxCurveHeight * (1 - p)

      if (direction === 'convex-top') {
        // Curve apex at center starts at y=0, sides at y=currentH.
        // As p -> 1, currentH -> 0, flattening to y=0 completely straight!
        pathEl.setAttribute(
          'd',
          `M0 ${currentH} Q 720 0 1440 ${currentH} L1440 120 L0 120 Z`
        )
      } else {
        // Mirrored bottom curve: arches downward into the light section and flattens
        pathEl.setAttribute(
          'd',
          `M0 0 L1440 0 L1440 ${120 - currentH} Q 720 120 0 ${120 - currentH} Z`
        )
      }
    }

    // Initialize path
    updatePath()

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5,
      onUpdate: (self) => {
        proxy.progress = self.progress
        updatePath()
      },
    })

    return () => {
      trigger.kill()
    }
  }, [direction, maxCurveHeight, reducedMotion])

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden leading-none block select-none pointer-events-none ${className}`}
      style={{ lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-20 md:h-28 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path ref={pathRef} fill={fillColor} />
      </svg>
    </div>
  )
}

export default CurveDivider
