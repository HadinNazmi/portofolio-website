import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      alert(t.contact.alertSuccess)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSent(false)
    }, 400)
  }

  return (
    <section
      className="w-full bg-tertiary-container text-on-tertiary py-28 px-gutter-mobile md:px-margin"
      id="contact"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Big Bold Statement */}
        <div className="flex flex-col gap-3">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-zinc-400">
            {t.contact.tag}
          </span>
          <h2 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-white font-normal tracking-tight">
            {t.contact.title}
          </h2>
        </div>

        {/* 2-Column Brutalist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          {/* Left: Direct Info & Social Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-12">
            <div className="flex flex-col gap-6">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-400 block mb-1">
                  {t.contact.directInquiries}
                </span>
                <a
                  className="font-headline-sm text-headline-sm text-white hover:underline underline-offset-4 break-all"
                  href={`mailto:${t.contact.email}`}
                >
                  {t.contact.email}
                </a>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-400 block mb-1">
                  {t.contact.locationZone}
                </span>
                <p className="font-body-md text-body-md text-zinc-300">
                  {t.contact.locationValue}
                </p>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-400 block mb-1">
                  {t.contact.availability}
                </span>
                <p className="font-body-md text-body-md text-zinc-300 leading-relaxed">
                  {t.contact.availabilityValue}
                </p>
              </div>
            </div>

            {/* Network Links */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-400">
                {t.contact.networkDirectory}
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {t.contact.networks.map((network, idx) => (
                  <a
                    key={idx}
                    className="font-label-md text-label-md uppercase tracking-wider text-white hover:underline underline-offset-4"
                    href={network.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {network.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Brutalist High-Contrast Contact Form */}
          <div className="lg:col-span-7">
            <form className="flex flex-col gap-8" id="contact-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-400"
                    htmlFor="contact-name"
                  >
                    {t.contact.formName}
                  </label>
                  <input
                    className="w-full bg-transparent text-white placeholder-zinc-600 py-3 border-b-2 border-zinc-700 focus:border-white outline-none font-body-md text-body-md transition-colors"
                    id="contact-name"
                    placeholder={t.contact.namePlaceholder}
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-400"
                    htmlFor="contact-email"
                  >
                    {t.contact.formEmail}
                  </label>
                  <input
                    className="w-full bg-transparent text-white placeholder-zinc-600 py-3 border-b-2 border-zinc-700 focus:border-white outline-none font-body-md text-body-md transition-colors"
                    id="contact-email"
                    placeholder={t.contact.emailPlaceholder}
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-400"
                  htmlFor="contact-subject"
                >
                  {t.contact.formSubject}
                </label>
                <input
                  className="w-full bg-transparent text-white placeholder-zinc-600 py-3 border-b-2 border-zinc-700 focus:border-white outline-none font-body-md text-body-md transition-colors"
                  id="contact-subject"
                  placeholder={t.contact.subjectPlaceholder}
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-400"
                  htmlFor="contact-message"
                >
                  {t.contact.formMessage}
                </label>
                <textarea
                  className="w-full bg-transparent text-white placeholder-zinc-600 py-3 border-b-2 border-zinc-700 focus:border-white outline-none font-body-md text-body-md transition-colors resize-none"
                  id="contact-message"
                  placeholder={t.contact.messagePlaceholder}
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-label-md text-label-md uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                  type="submit"
                  disabled={sent}
                >
                  <span>{sent ? '...' : t.contact.submitBtn}</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <span className="font-mono text-xs text-zinc-500 hidden sm:inline-block">
                  {t.contact.sla}
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* Subtle In-Section Footer Telemetry Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-500">
            {t.contact.inSectionCopyright}
          </div>
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
            href="#top"
          >
            <span>{t.contact.backToTop}</span>
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact