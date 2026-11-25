import { useState, useEffect, useRef } from 'react'
import { projects } from '../data/projects'

const heroImages = [
  '/hero/IMG_7448.JPG',
  '/hero/20251106_095722.jpg',
  '/hero/1a021d19-9770-444b-9346-0a48e4923ca4.jpeg',
  '/hero/0692853b-7011-488a-86cd-e81a841d5c62.jpeg',
  '/hero/6ac99c9f-f65e-4638-9cc5-bae0228a8073.jpeg',
  '/hero/7b374e17-4eeb-4ac9-bd38-17f97b3d33d4.jpeg',
]

function Stats() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const containerRef = useRef(null)

  const stats = [
    {
      target: projects.length,
      suffix: '+',
      label: 'Products Shipped',
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 stroke-current fill-none text-white/90" viewBox="0 0 24 24" strokeWidth="1.75">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      target: 4,
      suffix: '+',
      label: 'Years Building',
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 stroke-current fill-none text-white/90" viewBox="0 0 24 24" strokeWidth="1.75">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      target: 15,
      suffix: '+',
      label: 'Workshops Delivered',
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 stroke-current fill-none text-white/90" viewBox="0 0 24 24" strokeWidth="1.75">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

  // 1. Auto-transition very slowly and smoothly across all hero images (every 7 seconds)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 7000)
    return () => clearInterval(slideTimer)
  }, [currentImageIndex])

  // 2. Interactive scroll transition: gentle change on scroll with slow cooldown
  useEffect(() => {
    let lastScrollY = window.scrollY
    let accumulatedScroll = 0
    let lastChangeTime = Date.now()

    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      // Only active when section is visible in viewport
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0
      if (!isVisible) return

      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY
      lastScrollY = currentScrollY

      accumulatedScroll += delta
      const now = Date.now()

      // Require significant scroll (~320px) and long cooldown (2.2s) for very calm, slow changes
      if (Math.abs(accumulatedScroll) >= 320 && now - lastChangeTime > 2200) {
        if (accumulatedScroll > 0) {
          // Scrolling down: advance forward
          setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
        } else {
          // Scrolling up: advance backward
          setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
        }
        accumulatedScroll = 0
        lastChangeTime = now
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 3. Counter increment animation on intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 1800
          const steps = 50
          const intervalTime = duration / steps
          let step = 0

          const timer = setInterval(() => {
            step++
            const progress = step / steps
            const easeOutProgress = 1 - Math.pow(1 - progress, 3)

            setCounts(
              stats.map((s) => Math.floor(easeOutProgress * s.target))
            )

            if (step >= steps) {
              clearInterval(timer)
              setCounts(stats.map((s) => s.target))
            }
          }, intervalTime)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[320px] flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Auto-Slide & Scroll Parallax Hero Images */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black pointer-events-none">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 w-full h-full will-change-[opacity] ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)), url('${src}')`,
              backgroundPosition: 'center 30%',
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              transition: 'opacity 2000ms ease-in-out',
            }}
          />
        ))}
      </div>

      {/* Foreground Stats Content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-3 gap-6 sm:gap-12 text-center text-white">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="flex flex-col items-center">
              {/* White minimalist icon */}
              {stat.icon}

              {/* Large bold white number with thin white underline */}
              <div className="border-b border-white/80 pb-2 mb-3">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight">
                  {counts[idx]}
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-gray-200 font-heading">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
