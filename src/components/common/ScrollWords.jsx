import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll } from '../../context/SmoothScrollContext'

gsap.registerPlugin(ScrollTrigger)

/**
 * ScrollWords
 * Splits text into individual words and scrubs their opacity/color from dim gray to bright white
 * as the user scrolls through a pinned section.
 *
 * @param {Array<{ text: string, isBold?: boolean }>} segments - Word segments or structured phrases
 * @param {string} className - Additional CSS classes
 * @param {Function} onProgress - Optional callback receiving scrub progress (0 to 1)
 */
function ScrollWords({ segments = [], className = '', onProgress }) {
  const containerRef = useRef(null)
  const wordsRef = useRef([])
  const { reducedMotion } = useSmoothScroll() || {}

  useEffect(() => {
    if (!containerRef.current || wordsRef.current.length === 0) return

    if (reducedMotion) {
      // In reduced motion mode, words are fully visible without pinning
      gsap.set(wordsRef.current, { opacity: 1, color: '#ffffff' })
      return
    }

    const words = wordsRef.current.filter(Boolean)

    // Set initial dim state
    gsap.set(words, { opacity: 0.22, color: '#71717a' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center center',
        end: '+=150%',
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (onProgress) {
            onProgress(self.progress)
          }
        },
      },
    })

    tl.to(words, {
      opacity: 1,
      color: '#ffffff',
      stagger: {
        each: 0.04,
      },
      ease: 'none',
    })

    return () => {
      tl.kill()
    }
  }, [segments, reducedMotion, onProgress])

  return (
    <div ref={containerRef} className={`w-full flex items-center justify-center ${className}`}>
      <p className="max-w-4xl mx-auto text-center font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.35] tracking-tight select-none">
        {segments.map((segment, sIdx) => {
          const words = segment.text.split(' ').filter(Boolean)
          const isBold = segment.isBold

          return (
            <span key={sIdx} className="inline">
              {words.map((word, wIdx) => {
                const globalIndex = wordsRef.current.length
                return (
                  <span
                    key={`${sIdx}-${wIdx}`}
                    ref={(el) => {
                      if (el) wordsRef.current.push(el)
                    }}
                    className={`inline-block mr-[0.26em] transition-colors ${
                      isBold ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    {word}
                  </span>
                )
              })}
            </span>
          )
        })}
      </p>
    </div>
  )
}

export default ScrollWords
