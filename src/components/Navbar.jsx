import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-space-sm">
          <a
            href="#"
            className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-space-xs rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
          >
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
            <span className="font-label-lg text-label-lg text-on-surface tracking-tight font-bold">
              {t.navbar.brand}
            </span>
          </a>
          <span className="hidden xl:inline-flex items-center px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
            {t.navbar.tagline}
          </span>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-xs bg-surface-container-lowest/80 px-space-xs py-space-xs rounded-full shadow-[0_1px_6px_rgba(0,0,0,0.02)]">
          <a
            href="#about-me"
            className="px-space-sm py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
          >
            {t.navbar.about}
          </a>
          <a
            href="#skills"
            className="px-space-sm py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
          >
            {t.navbar.skills}
          </a>
          <a
            href="#projects"
            className="px-space-sm py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
          >
            {t.navbar.projects}
          </a>
          <a
            href="#experience"
            className="px-space-sm py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
          >
            {t.navbar.experience}
          </a>
          <a
            href="#contact"
            className="px-space-sm py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
          >
            {t.navbar.contact}
          </a>
        </nav>

        {/* Right: Language Switcher, Contact CTA, Avatar & Mobile Toggle */}
        <div className="flex items-center gap-space-sm">
          {/* Bilingual Switcher */}
          <div className="flex items-center bg-surface-container-low p-1 rounded-full text-on-surface-variant font-label-sm text-label-sm">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full transition-all font-semibold ${
                lang === 'en'
                  ? 'bg-surface-container-lowest text-on-surface shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('id')}
              className={`px-2.5 py-1 rounded-full transition-all font-semibold ${
                lang === 'id'
                  ? 'bg-surface-container-lowest text-on-surface shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              ID
            </button>
          </div>

          {/* Contact Pill CTA */}
          <a
            href="#contact"
            className="group hidden sm:flex items-center gap-space-xs bg-primary text-on-primary pl-space-md pr-space-xs py-space-xs rounded-full hover:bg-primary-container transition-all shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
          >
            <span className="font-label-md text-label-md text-on-primary">{t.navbar.contact}</span>
            <span className="w-7 h-7 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-label-md text-label-md transition-transform group-hover:scale-105 group-hover:rotate-45">
              ↗
            </span>
          </a>

          {/* Profile Circle Icon */}
          <a
            href="#about-me"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary-container transition-colors"
            title="Hadin Profile"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-container-highest px-margin-mobile py-space-md shadow-lg">
          <nav className="flex flex-col gap-2">
            <a
              href="#about-me"
              onClick={() => setMobileMenuOpen(false)}
              className="px-space-md py-2.5 rounded-xl text-on-surface font-semibold hover:bg-surface-container transition-colors"
            >
              {t.navbar.about}
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-space-md py-2.5 rounded-xl text-on-surface font-semibold hover:bg-surface-container transition-colors"
            >
              {t.navbar.skills}
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-space-md py-2.5 rounded-xl text-on-surface font-semibold hover:bg-surface-container transition-colors"
            >
              {t.navbar.projects}
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-space-md py-2.5 rounded-xl text-on-surface font-semibold hover:bg-surface-container transition-colors"
            >
              {t.navbar.experience}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-space-md py-2.5 rounded-xl text-on-surface font-semibold hover:bg-surface-container transition-colors"
            >
              {t.navbar.contact}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar