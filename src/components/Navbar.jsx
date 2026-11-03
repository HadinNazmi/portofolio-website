import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'services', label: 'SERVICES' },
    { id: 'works', label: 'WORKS' },
    { id: 'organization', label: 'ORGANIZATION' },
    { id: 'contact', label: 'CONTACT' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Only show navbar when scrolled down (> 80px)
      if (window.scrollY > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
        setMobileMenuOpen(false)
      }

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 140
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sec = document.getElementById(navLinks[i].id)
        if (sec) {
          const top = sec.offsetTop
          if (scrollPos >= top) {
            setActiveSection(navLinks[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const topOffset = id === 'home' ? 0 : element.offsetTop - 70
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out font-heading ${
        scrolled
          ? 'translate-y-0 opacity-100 pointer-events-auto bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)] py-4'
          : '-translate-y-full opacity-0 pointer-events-none py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-center relative">
        {/* Desktop Nav Links (Centered) */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-xs font-bold tracking-widest uppercase transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#222222]'
                    : 'text-[#666666] hover:text-[#222222]'
                }`}
              >
                {link.label}
                {/* Active indicator line */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#222222] transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            )
          })}
        </div>

        {/* Mobile Hamburger Button (Right-aligned on mobile) */}
        <div className="w-full flex md:hidden items-center justify-end">
          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#222222] rounded focus:outline-none transition-colors"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-gray-100 shadow-lg ${
          mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6 space-y-3 font-heading">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-xs font-bold tracking-widest uppercase py-2 transition-colors ${
                  isActive
                    ? 'text-[#222222] font-black border-l-2 border-[#222222] pl-2'
                    : 'text-[#666666] hover:text-[#222222]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar