import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  // Prevent background scroll when menu is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const menuItems = [
    { num: '01', id: 'hero', label: lang === 'id' ? 'HOME' : 'HOME' },
    { num: '02', id: 'about', label: lang === 'id' ? 'TENTANG' : 'ABOUT' },
    { num: '03', id: 'skills', label: lang === 'id' ? 'KEAHLIAN' : 'SKILLS' },
    { num: '04', id: 'projects', label: lang === 'id' ? 'PROYEK' : 'PROJECTS' },
    { num: '05', id: 'experience', label: lang === 'id' ? 'PENGALAMAN' : 'EXPERIENCE' },
    { num: '06', id: 'contact', label: lang === 'id' ? 'KONTAK' : 'CONTACT' },
  ]

  const handleLinkClick = (id) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Top Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-12 py-6 flex items-center justify-between pointer-events-none">
        {/* Left: Brand Badges */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Slash Circle Icon */}
          <a
            href="#hero"
            aria-label="Home"
            className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm tracking-wider shadow-sm hover:scale-105 transition-transform"
          >
            /
          </a>

          {/* Identity Pill */}
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-outline-variant bg-surface/80 backdrop-blur-md text-on-surface hover:border-primary transition-colors shadow-sm"
          >
            <span className="font-label-sm uppercase tracking-widest font-semibold text-primary">
              HADIN
            </span>
            <span className="text-outline text-xs">/</span>
            <span className="font-label-sm uppercase tracking-widest text-on-surface-variant text-[11px]">
              PORTFOLIO
            </span>
          </a>
        </div>

        {/* Right: Menu + Button */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Language Toggle Pill */}
          <button
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className="px-3 py-1.5 rounded-full border border-outline-variant bg-surface/80 backdrop-blur-md font-label-sm uppercase text-[11px] font-semibold text-on-surface hover:border-primary transition-colors shadow-sm"
            type="button"
          >
            {lang === 'en' ? 'EN' : 'ID'}
          </button>

          {/* Menu Trigger Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-outline-variant bg-surface/80 backdrop-blur-md font-label-sm uppercase tracking-wider text-primary font-semibold hover:border-primary hover:bg-surface-container-high transition-all shadow-sm"
            type="button"
          >
            <span>MENU</span>
            <span className="text-base font-light leading-none">+</span>
          </button>
        </div>
      </header>

      {/* Side Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dark Dim Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={() => setMenuOpen(false)}
        />

        {/* Right Slide-in Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full sm:w-[480px] md:w-[540px] bg-[#141517] text-white p-8 sm:p-12 flex flex-col justify-between z-10 shadow-2xl transform transition-transform duration-500 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top Bar with Close Button */}
          <div className="flex items-center justify-between">
            <span className="font-label-sm uppercase tracking-widest text-zinc-500">
              NAVIGATION
            </span>

            <button
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 text-white font-label-sm uppercase tracking-wider text-xs hover:bg-zinc-800 hover:border-white transition-colors"
              type="button"
            >
              <span>CLOSE</span>
              <span className="text-sm font-light leading-none">✕</span>
            </button>
          </div>

          {/* Menu Navigation Links */}
          <nav className="my-auto py-8 flex flex-col gap-5 sm:gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="group flex items-center justify-between text-left w-full border-b border-white/5 pb-3 hover:border-white/20 transition-colors"
              >
                <span className="font-display-xl text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-200 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  {item.num}
                </span>
              </button>
            ))}
          </nav>

          {/* Bottom Drawer Footer: Socials & Details */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <span className="font-label-sm uppercase tracking-widest text-zinc-500 text-[10px]">
              SOCIALS
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="font-label-sm uppercase tracking-wider text-xs text-zinc-300 hover:text-white transition-colors"
              >
                RESUME
              </a>
              <a
                href="https://github.com/HadinNazmi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-sm uppercase tracking-wider text-xs text-zinc-300 hover:text-white transition-colors"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com/in/hadinnazmi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-sm uppercase tracking-wider text-xs text-zinc-300 hover:text-white transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-sm uppercase tracking-wider text-xs text-zinc-300 hover:text-white transition-colors"
              >
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar