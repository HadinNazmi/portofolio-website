import { useState, useEffect } from 'react'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Ardiansyah, M.T.',
      title: 'Informatics Supervisor, Politeknik Caltex Riau',
      quote:
        '“Hadin demonstrated remarkable technical leadership as the ITSA Research Division Lead. His deep understanding of reactive mobile architecture and dedication to engineering rigor set a benchmark for student researchers.”',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 2,
      name: 'Budi Santoso',
      title: 'Product Director, Bank Jatah Indonesia',
      quote:
        '“Hadin delivered the Bank Jatah Indonesia mobile application with exceptional stability, biometric reliability, and clean domain design. He is a phenomenal engineer who translates complex banking requirements into seamless user experiences.”',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 3,
      name: 'Rian Pratama',
      title: 'Engineering Lead, KMIPN VII National Showcase',
      quote:
        '“Winning 1st place at KMIPN VII was possible because of Hadin’s relentless focus on software performance, zero-latency telemetry pipelines, and flawless architectural discipline.”',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const current = testimonials[activeIndex]

  return (
    <section
      className="relative w-full min-h-[440px] flex items-center justify-center py-20 sm:py-24 parallax-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=2000&q=80')`,
      }}
    >
      <div className="max-w-3xl w-full mx-auto px-6 sm:px-8 text-center text-white">
        {/* Circular Avatar with a clean white border */}
        <div className="w-20 h-20 mx-auto rounded-full p-1 border-2 border-white overflow-hidden mb-6 shadow-md">
          <img
            src={current.avatar}
            alt={current.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Italicized Centered Quote Paragraph */}
        <p className="text-base sm:text-lg italic font-light text-gray-100 max-w-2xl mx-auto mb-6 leading-relaxed font-body">
          {current.quote}
        </p>

        {/* Name and Title */}
        <h4 className="text-base sm:text-lg font-bold uppercase tracking-widest text-white font-heading">
          {current.name}
        </h4>
        <span className="text-xs uppercase tracking-wider text-gray-300 font-medium block mt-1 mb-8">
          {current.title}
        </span>

        {/* 3 Small Horizontal Pagination Bars */}
        <div className="flex items-center justify-center space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full focus:outline-none ${
                activeIndex === idx
                  ? 'w-8 bg-white'
                  : 'w-4 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
