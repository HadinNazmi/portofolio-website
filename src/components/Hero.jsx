import { useState, useEffect } from 'react'

function Hero() {
  const words = [
    'Full Stack Web Developer',
    'Mobile Developer',
    'DevOps',
  ]

  const heroImages = [
    '/hero/IMG_7448.JPG',
    '/hero/20251106_095722.jpg',
    '/hero/1a021d19-9770-444b-9346-0a48e4923ca4.jpeg',
    '/hero/0692853b-7011-488a-86cd-e81a841d5c62.jpeg',
    '/hero/6ac99c9f-f65e-4638-9cc5-bae0228a8073.jpeg',
    '/hero/7b374e17-4eeb-4ac9-bd38-17f97b3d33d4.jpeg',
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(130)

  // Auto-swipe hero background images smoothly every 4.5 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 4500)
    return () => clearInterval(slideTimer)
  }, [heroImages.length])

  // Typewriter effect
  useEffect(() => {
    const word = words[currentWordIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(word.substring(0, currentText.length + 1))
        setTypingSpeed(110)

        // If completed word, pause then delete
        if (currentText.length + 1 === word.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        // Deleting backward
        setCurrentText(word.substring(0, currentText.length - 1))
        setTypingSpeed(60)

        // If deleted completely, move to next word
        if (currentText.length - 1 === 0) {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, typingSpeed])

  const scrollToAbout = () => {
    const aboutSec = document.getElementById('about')
    if (aboutSec) {
      window.scrollTo({
        top: aboutSec.offsetTop - 70,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden clip-v-bottom"
    >
      {/* Background Auto-Slide Images with Equal Sizing and pure crossfade (NO zoom / scale jump) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1200 ease-in-out pointer-events-none will-change-[opacity] ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Dark Overlay for Consistent Text Legibility */}
      <div className="absolute inset-0 bg-black/60 z-[1] pointer-events-none" />

      {/* Centered Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pb-16">
        <h1
          style={{ color: '#FFFFFF' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight mb-4 font-heading !text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        >
          Hi! I'm Hadin Nazmi.
        </h1>

        <div
          style={{ color: '#FFFFFF' }}
          className="text-lg sm:text-2xl md:text-3xl font-light tracking-wide flex items-center justify-center font-heading !text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        >
          <span className="mr-2 opacity-90">I Am A</span>
          <span className="font-semibold text-white border-b-2 border-white pb-0.5">
            {currentText}
          </span>
          <span className="inline-block w-[3px] h-6 md:h-8 bg-white ml-1 animate-blink align-middle" />
        </div>
      </div>

      {/* Down Bouncing Arrow Button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center">
        <button
          onClick={scrollToAbout}
          aria-label="Scroll down to About section"
          className="text-white hover:text-gray-300 transition-colors p-3 group animate-bounce-down focus:outline-none"
        >
          <svg
            className="w-8 h-8 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Hero