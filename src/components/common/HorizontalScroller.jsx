import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll } from '../../context/SmoothScrollContext'

gsap.registerPlugin(ScrollTrigger)

/**
 * HorizontalScroller
 * Pins the section on desktop and converts vertical scroll into horizontal movement
 * across an editorial card track with parallax, card scaling, and a progress indicator.
 * Automatically falls back to a clean responsive vertical stack on mobile devices.
 */
function HorizontalScroller({
  items = [],
  ghostWord = 'EXPERIENCE',
  eyebrow = '04 / CAREER & LEADERSHIP',
  title = 'Experiences',
  tagline = 'Demonstrated leadership across research consortiums, student developer initiatives, and production portals.',
}) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const ghostRef = useRef(null)
  const progressBarRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(1)
  const { reducedMotion } = useSmoothScroll() || {}
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return
    if (reducedMotion || isMobile) return

    const section = sectionRef.current
    const track = trackRef.current
    const ghost = ghostRef.current

    // Ghost Word Parallax
    let ghostTrigger
    if (ghost) {
      ghostTrigger = gsap.to(ghost, {
        x: -80,
        scale: 1.06,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
    }

    // Calculate total horizontal scroll distance
    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80)

    const horizontalTween = gsap.to(track, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${track.scrollWidth - window.innerWidth + 400}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Update progress bar width
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${self.progress * 100}%`
          }
          // Update active card counter
          const activeIdx = Math.min(
            items.length,
            Math.max(1, Math.round(self.progress * (items.length - 1)) + 1)
          )
          setCurrentIndex(activeIdx)
        },
      },
    })

    // Sub-card inner zoom & entry easing
    const cards = track.querySelectorAll('.experience-card')
    cards.forEach((card) => {
      const img = card.querySelector('.card-image')
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.12, x: 20 },
          {
            scale: 1,
            x: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: 'left right',
              end: 'right left',
              scrub: 0.8,
            },
          }
        )
      }
    })

    return () => {
      if (ghostTrigger) ghostTrigger.kill()
      if (horizontalTween.scrollTrigger) horizontalTween.scrollTrigger.kill()
      horizontalTween.kill()
    }
  }, [items, isMobile, reducedMotion])

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#141517] text-white overflow-hidden py-16 md:py-20"
      id="experience"
    >
      {/* 1. Huge Ghost Word in Background */}
      <div
        ref={ghostRef}
        aria-hidden="true"
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap font-display font-extrabold text-[15vw] sm:text-[18vw] leading-none text-white/[0.03] select-none pointer-events-none z-0 tracking-tighter"
      >
        {ghostWord}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full flex flex-col justify-between h-full">
        {/* 2. Eyebrow & Section Heading Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-8 md:mb-12">
          <div>
            <span className="font-label-sm uppercase tracking-widest text-zinc-400 block mb-2 text-xs">
              {eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-white">
              {title}
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-zinc-400 max-w-md md:text-right">
            {tagline}
          </p>
        </div>

        {/* 3. Horizontal Track on Desktop / Vertical Stack on Mobile */}
        <div
          ref={trackRef}
          className={`${
            isMobile
              ? 'flex flex-col gap-8 w-full'
              : 'flex items-center gap-8 w-max min-w-full pb-8'
          }`}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`experience-card border border-white/10 bg-[#1a1b1f] overflow-hidden shadow-2xl flex flex-col lg:flex-row shrink-0 ${
                isMobile
                  ? 'w-full'
                  : 'w-[85vw] sm:w-[680px] lg:w-[840px] xl:w-[920px] h-[520px]'
              }`}
            >
              {/* Left Side: Light Editorial Content Panel */}
              <div className="flex-1 bg-[#f9f9f7] text-[#1a1c1b] p-8 sm:p-10 flex flex-col justify-between overflow-y-auto">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                      {item.roleTag || 'ROLE // LEADERSHIP & ARCHITECTURE'}
                    </span>
                    <span className="font-mono text-xs text-black font-bold">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-2xl sm:text-3xl text-black font-semibold leading-tight">
                    {item.role}
                  </h3>

                  <div className="font-label-md text-xs sm:text-sm uppercase tracking-wider text-zinc-600 font-medium">
                    {item.org}
                  </div>

                  <p className="text-zinc-700 text-sm sm:text-base leading-relaxed pt-1">
                    {item.desc}
                  </p>

                  {/* Highlights Bullet List */}
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="space-y-2.5 pt-2 text-zinc-700 text-xs sm:text-sm">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Bottom Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="pt-6 flex items-center gap-2 flex-wrap">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-label-sm text-[11px] uppercase px-3 py-1 bg-white border border-zinc-300 text-black shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Side: Media Showcase & Big Index Number */}
              <div className="w-full lg:w-[320px] xl:w-[380px] bg-[#121316] relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 shrink-0 min-h-[240px] lg:min-h-full">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 z-10">
                  <span className="font-mono text-xs tracking-widest text-zinc-400">
                    INDEX // {item.index || `0${idx + 1}`}
                  </span>
                  <span className="font-mono text-xs text-emerald-400 font-semibold">
                    VERIFIED
                  </span>
                </div>

                {/* Image Canvas with inner parallax zoom */}
                <div className="relative my-auto w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-inner">
                  <img
                    src={item.image}
                    alt={item.role}
                    className="card-image w-full h-full object-cover filter contrast-110 grayscale hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      if (item.imageFallback) e.target.src = item.imageFallback
                    }}
                  />
                </div>

                {/* Big Index Watermark Number */}
                <div className="flex items-baseline justify-between z-10 pt-3 border-t border-white/10">
                  <span className="font-display font-light text-5xl sm:text-6xl text-white/30 leading-none">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    RECORD KEY // {idx + 101}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Bottom Horizontal Progress Bar & Counter (Desktop Only) */}
        {!isMobile && (
          <div className="pt-8 border-t border-white/10 flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                PROGRESS
              </span>
              <div className="w-48 sm:w-72 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="h-full bg-white transition-all duration-100 ease-out"
                  style={{ width: '0%' }}
                />
              </div>
            </div>

            <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              CARD <span className="text-white font-bold">0{currentIndex}</span> / 0{items.length}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HorizontalScroller
