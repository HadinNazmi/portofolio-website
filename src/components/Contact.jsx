import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

function Contact() {
  const [ref, visible] = useScrollReveal()
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Full Stack Web Platform (Next.js / Node / Python)',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        scope: 'Full Stack Web Platform (Next.js / Node / Python)',
        message: ''
      })
    }, 4000)
  }

  return (
    <>
      {/* 6. CONTACT SECTION & GET IN TOUCH */}
      <section
        id="contact"
        ref={ref}
        className={`max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-xl w-full transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="bg-primary-container text-on-primary rounded-3xl p-space-lg lg:p-space-xl shadow-2xl relative overflow-hidden">
          {/* Background Neon Radial */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl relative z-10">
            {/* Contact Left: Pitch & Direct Route */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-space-lg">
              <div>
                <div className="inline-flex items-center gap-2 bg-surface-container-lowest/10 px-space-sm py-1 rounded-full text-secondary-fixed font-label-sm text-label-sm mb-space-sm font-bold">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
                  <span>{t.contact.badge}</span>
                </div>
                <h2 className="font-display-hero text-headline-lg font-bold text-on-primary tracking-tight leading-tight">
                  {t.contact.titlePrefix} <br />
                  <span className="text-secondary-fixed underline decoration-secondary-fixed/30 underline-offset-8">
                    {t.contact.titleHighlight}
                  </span>
                </h2>
                <p className="font-body-md text-body-md text-on-primary-container mt-space-md">
                  {t.contact.pitch}
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-space-sm">
                <a
                  href="mailto:hadinnazmi21@gmail.com"
                  className="flex items-center gap-space-sm bg-surface-container-lowest/5 hover:bg-surface-container-lowest/10 p-space-sm rounded-2xl transition-colors block"
                >
                  <span className="material-symbols-outlined text-secondary-fixed text-[24px]">
                    alternate_email
                  </span>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-primary-container block">
                      {t.contact.mailLabel}
                    </span>
                    <p className="font-headline-sm text-headline-sm font-bold text-on-primary">
                      hadinnazmi21@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-space-sm bg-surface-container-lowest/5 p-space-sm rounded-2xl">
                  <span className="material-symbols-outlined text-secondary-fixed text-[24px]">
                    location_on
                  </span>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-primary-container block">
                      {t.contact.locationLabel}
                    </span>
                    <p className="font-body-md text-body-md font-bold text-on-primary">
                      {t.contact.locationValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Right: Fast Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest text-on-surface p-space-lg rounded-3xl shadow-xl">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[32px]">check_circle</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    {t.contact.successMsg}
                  </h3>
                </div>
              ) : (
                <form className="space-y-space-md" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface uppercase mb-1 font-bold">
                        {t.contact.formName}
                      </label>
                      <input
                        className="w-full bg-surface-container-low px-space-md py-3 rounded-xl font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary-fixed border border-transparent focus:border-secondary-fixed"
                        placeholder="Alex Morgan"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface uppercase mb-1 font-bold">
                        {t.contact.formEmail}
                      </label>
                      <input
                        className="w-full bg-surface-container-low px-space-md py-3 rounded-xl font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary-fixed border border-transparent focus:border-secondary-fixed"
                        placeholder="alex@company.com"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md text-on-surface uppercase mb-1 font-bold">
                      {t.contact.formScope}
                    </label>
                    <select
                      className="w-full bg-surface-container-low px-space-md py-3 rounded-xl font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary-fixed border border-transparent focus:border-secondary-fixed"
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    >
                      <option>Full Stack Web Platform (Next.js / Node / Python)</option>
                      <option>Native Mobile App (Kotlin / Compose)</option>
                      <option>Cross-Platform Mobile (Flutter)</option>
                      <option>Backend Microservice Architecture</option>
                      <option>Consultation &amp; Code Review</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md text-on-surface uppercase mb-1 font-bold">
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      className="w-full bg-surface-container-low px-space-md py-3 rounded-xl font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary-fixed border border-transparent focus:border-secondary-fixed"
                      placeholder="Describe your product milestones, technical expectations, or timelines..."
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
                      {t.contact.encrypted}
                    </span>
                    <button
                      className="inline-flex items-center gap-space-xs bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed font-headline-sm text-headline-sm font-bold px-space-lg py-space-sm rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
                      type="submit"
                    >
                      <span>{t.contact.submit}</span>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-lowest mt-space-xl pt-space-xl pb-space-lg shadow-[0_-1px_12px_rgba(0,0,0,0.02)] border-t border-surface-container">
        <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg mb-space-xl">
            {/* Brand column */}
            <div className="md:col-span-5 flex flex-col items-start gap-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed"></span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Hadin Nazmi
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                {t.footer.bio}
              </p>
              <div className="flex items-center gap-space-xs mt-space-xs">
                <span className="px-space-xs py-0.5 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface font-semibold">
                  {t.footer.status}
                </span>
              </div>
            </div>

            {/* Navigation links */}
            <div className="md:col-span-2 flex flex-col gap-space-xs">
              <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-space-xs font-bold">
                {t.footer.navTitle}
              </span>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                href="#about-me"
              >
                {t.navbar.about}
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                href="#skills"
              >
                {t.navbar.skills}
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                href="#projects"
              >
                {t.navbar.projects}
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                href="#experience"
              >
                {t.navbar.experience}
              </a>
            </div>

            {/* Network links */}
            <div className="md:col-span-2 flex flex-col gap-space-xs">
              <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-space-xs font-bold">
                {t.footer.networkTitle}
              </span>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                href="https://github.com/HadinNazmi"
                target="_blank"
                rel="noreferrer"
              >
                Source Hub (GitHub)
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                href="https://linkedin.com/in/tengku-muhammad-hadin"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Network
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                href="#projects"
              >
                Interactive Demos
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                href="mailto:hadinnazmi21@gmail.com"
              >
                Technical Enquiries
              </a>
            </div>

            {/* Direct Channel Box & Back to Top */}
            <div className="md:col-span-3 flex flex-col gap-space-sm items-start md:items-end justify-between">
              <div className="bg-primary-container p-space-md rounded-2xl w-full text-on-primary shadow-md">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-sm text-label-sm text-on-primary-container uppercase font-bold">
                    {t.footer.directChannel}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
                </div>
                <p className="font-headline-sm text-headline-sm text-on-primary font-bold">
                  hadinnazmi21@gmail.com
                </p>
              </div>

              <a
                className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container hover:bg-surface-container-high transition-colors font-label-md text-label-md text-on-surface font-bold"
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                {t.footer.backToTop}
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm bg-surface-container-low px-space-md py-space-sm rounded-full">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {t.footer.copyright}
            </span>
            <div className="flex items-center gap-space-md">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                {t.footer.architectureTag}
              </span>
              <div className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact