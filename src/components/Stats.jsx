import { useState, useEffect, useRef } from 'react'

function Stats() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef(null)

  const stats = [
    {
      target: 18,
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
    {
      target: 1,
      suffix: 'st',
      label: 'KMIPN VII Winner',
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 stroke-current fill-none text-white/90" viewBox="0 0 24 24" strokeWidth="1.75">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
    },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

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
      className="relative w-full min-h-[300px] flex items-center justify-center py-20 parallax-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)), url('/images/coverallbg.jpeg')`,
        backgroundPosition: 'center 25%',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-6xl w-full mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
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
