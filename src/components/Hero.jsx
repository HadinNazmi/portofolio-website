import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

function Hero() {
  const { lang, t } = useLanguage()

  // Typing animation for role
  const roleText = 'Full-Stack Web & Mobile Developer'
  const [typedText, setTypedText] = useState('')
  const [isTypingDone, setIsTypingDone] = useState(false)

  useEffect(() => {
    let index = 0
    setTypedText('')
    setIsTypingDone(false)
    const interval = setInterval(() => {
      index++
      setTypedText(roleText.slice(0, index))
      if (index >= roleText.length) {
        clearInterval(interval)
        setIsTypingDone(true)
      }
    }, 70)

    return () => clearInterval(interval)
  }, [roleText])

  // Name entrance animation trigger
  const [nameVisible, setNameVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setNameVisible(true), 150)
    return () => clearTimeout(timer)
  }, [])

  // Interactive 3D tilt & Spotlight cursor color reveal on the photo card
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate spotlight position in pixels
    setSpotlight({ x, y, active: true })

    // Calculate subtle 3D tilt (-7deg to +7deg)
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -7
    const rotateY = ((x - centerX) / centerX) * 7
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, active: false }))
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-[#f9f9f7] pt-28 pb-20 md:pt-36 md:pb-28 flex flex-col justify-between overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(#d5d5cf 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* 1. Social Icons Row */}
            <div className="flex items-center gap-4 text-on-surface-variant">
              {/* GitHub */}
              <a
                href="https://github.com/HadinNazmi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/hadinnazmi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-primary transition-transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:hadinnazmi21@gmail.com"
                aria-label="Email"
                className="hover:text-primary transition-transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l9.518 7.713 9.518-7.713v11.817h-19.036z" />
                </svg>
              </a>
            </div>

            {/* 2. Location Tracker */}
            <div className="font-label-sm uppercase tracking-[0.25em] text-secondary text-xs font-semibold">
              PEKANBARU — INDONESIA
            </div>

            {/* 3. Main Name Headline with Entrance Animation */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                nameVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <h1 className="font-display-xl text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] text-primary font-normal tracking-tight leading-[1.08]">
                Hi, I’m <span className="italic font-normal">Hadin.</span>
              </h1>
            </div>

            {/* 4. Typing Subtitle with Block Cursor */}
            <div className="min-h-[44px] flex items-center">
              <span className="font-body-lg text-2xl sm:text-3xl md:text-4xl text-on-surface-variant font-light tracking-tight">
                {typedText}
              </span>
              {/* Reference-style gray block cursor */}
              <span className="w-3.5 h-7 sm:h-9 bg-zinc-500 inline-block align-middle ml-1.5 animate-pulse" />
            </div>

            {/* 5. Resume Action Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-on-primary font-label-md uppercase tracking-widest text-xs rounded-full hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all shadow-md"
              >
                RESUME
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE CARD ================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: spotlight.active ? 'transform 0.1s ease-out' : 'transform 0.6s ease-out',
              }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] bg-[#1a1c1e] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] overflow-hidden cursor-crosshair select-none"
            >
              {/* Background Watermark Code Brackets </> (Matches Reference Image) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none opacity-20 text-white font-mono text-7xl font-bold select-none"
              >
                <span className="transform -translate-y-6">&lt;/&gt;</span>
                <span className="transform -translate-y-6">&lt;/&gt;</span>
              </div>

              {/* 1. Base Layer: Grayscale Image */}
              <img
                src="/images/hero_person.png"
                alt="Hadin Nazmi"
                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-125 brightness-95 pointer-events-none"
                onError={(e) => {
                  e.target.src = '/images/hero.png'
                }}
              />

              {/* 2. Interactive Spotlight Layer: Full Color Image revealed under cursor */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  opacity: spotlight.active ? 1 : 0,
                  maskImage: `radial-gradient(circle 120px at ${spotlight.x}px ${spotlight.y}px, black 0%, black 60%, transparent 100%)`,
                  WebkitMaskImage: `radial-gradient(circle 120px at ${spotlight.x}px ${spotlight.y}px, black 0%, black 60%, transparent 100%)`,
                }}
              >
                <img
                  src="/images/hero_person.png"
                  alt="Hadin Nazmi Colored"
                  className="w-full h-full object-cover object-top filter contrast-110 saturate-125"
                  onError={(e) => {
                    e.target.src = '/images/hero.png'
                  }}
                />
              </div>

              {/* Card Bottom Floating Tag (Matches Reference Image) */}
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <div className="bg-[#141517]/85 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center justify-between shadow-lg">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-semibold text-white tracking-wide">
                      @hadinnazmi
                    </span>
                    <span className="font-label-sm text-[11px] text-zinc-400">
                      Available for work!
                    </span>
                  </div>

                  {/* Pulsing Green Indicator */}
                  <div className="relative flex h-3 w-3 mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM CENTER SCROLL INDICATOR ================= */}
      <div className="w-full flex flex-col items-center justify-center pt-8 pb-4 text-outline z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 group hover:text-primary transition-colors"
        >
          {/* Mouse Icon */}
          <div className="w-4 h-6 border-2 border-current rounded-full flex justify-center pt-1">
            <span className="w-1 h-1.5 bg-current rounded-full animate-bounce"></span>
          </div>
          <span className="font-label-sm uppercase tracking-[0.2em] text-[9px]">
            SCROLL DOWN
          </span>
          <span className="text-xs -mt-1 group-hover:translate-y-0.5 transition-transform">
            ↓
          </span>
        </a>
      </div>

      {/* Arched Bottom transition curve to the next dark section */}
      <div className="w-full h-8 md:h-12 bg-transparent relative overflow-hidden -mb-px">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-tertiary-container preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48H1440C960 0 480 0 0 48Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero