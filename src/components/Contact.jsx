import { useState } from 'react'
import SectionHeader from './common/SectionHeader'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setLoading(true)
    setErrorMessage('')

    try {
      const response = await fetch('https://formsubmit.co/ajax/hadinnazmi21@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: `New Portfolio Message from ${formData.name}: ${
            formData.subject || 'General Inquiry'
          }`,
          subject: formData.subject || 'General Inquiry',
          message: formData.message,
          _honey: '', // Anti-spam honeypot
          _template: 'table',
        }),
      })

      const data = await response.json()

      if (data.success === 'true' || data.success === true) {
        setSubmitted(true)
        setErrorMessage('')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => {
          setSubmitted(false)
        }, 8000)
      } else if (data.message && data.message.toLowerCase().includes('activat')) {
        setErrorMessage(
          'Aktivasi Diperlukan (Hanya Sekali): FormSubmit baru saja mengirim tautan konfirmasi ke hadinnazmi21@gmail.com. Silakan buka Gmail Anda (cek juga folder Spam / Junk), lalu klik "Activate Form". Setelah itu, formulir ini akan aktif secara permanen!'
        )
      } else {
        setErrorMessage(
          data.message || 'Gagal mengirim pesan. Silakan hubungi langsung ke hadinnazmi21@gmail.com'
        )
      }
    } catch (err) {
      console.error('Form submission error:', err)
      setErrorMessage(
        'Terjadi kendala jaringan saat menghubungi server. Anda juga dapat mengirim email langsung ke hadinnazmi21@gmail.com'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <SectionHeader subtitle="CONTACT" title="GET IN TOUCH" />

        {/* Minimalist Contact Form */}
        <form onSubmit={handleSubmit} className="mt-8">
          {/* Success Banner */}
          {submitted && (
            <div className="p-6 bg-[#F9F9F9] border-2 border-[#222222] text-center mb-8 animate-fade-in">
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#222222] font-heading mb-1.5">
                PESAN BERHASIL TERKIRIM
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed">
                Terima kasih telah menghubungi saya! Pesan Anda telah terkirim langsung ke inbox Gmail{' '}
                <strong className="text-[#222222]">hadinnazmi21@gmail.com</strong> dan akan saya balas secepatnya.
              </p>
            </div>
          )}

          {/* Error / Activation Banner */}
          {errorMessage && (
            <div
              className={`p-5 mb-8 text-xs leading-relaxed text-left border ${
                errorMessage.includes('Aktivasi Diperlukan')
                  ? 'bg-amber-50 border-amber-300 text-amber-900'
                  : 'bg-red-50 border-red-200 text-red-700'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-base">{errorMessage.includes('Aktivasi Diperlukan') ? '⚠️' : '❌'}</span>
                <div>
                  <p className="font-semibold">{errorMessage}</p>
                </div>
              </div>
            </div>
          )}

          {/* 2-Column Row for Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
            <div>
              <input
                type="text"
                name="name"
                required
                disabled={loading}
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Anda *"
                className="minimal-input disabled:opacity-50"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                disabled={loading}
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Anda *"
                className="minimal-input disabled:opacity-50"
              />
            </div>
          </div>

          {/* Full-width Subject */}
          <div className="mb-8">
            <input
              type="text"
              name="subject"
              disabled={loading}
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subjek / Keperluan Proyek"
              className="minimal-input disabled:opacity-50"
            />
          </div>

          {/* Full-width Textarea with Bottom Border Only */}
          <div className="mb-12">
            <textarea
              name="message"
              required
              rows="4"
              disabled={loading}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tuliskan pesan atau detail kebutuhan Anda di sini... *"
              className="minimal-input resize-none disabled:opacity-50"
            />
          </div>

          {/* Centered Black SEND MESSAGE Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center bg-[#222222] hover:bg-black text-white text-xs font-bold tracking-widest uppercase px-12 py-3.5 transition-all duration-200 font-heading disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  MENGIRIMKAN...
                </>
              ) : (
                'SEND MESSAGE'
              )}
            </button>

            <div className="mt-8 text-xs text-[#888888]">
              Atau hubungi langsung melalui email:{' '}
              <a
                href="mailto:hadinnazmi21@gmail.com"
                className="font-semibold text-[#222222] underline underline-offset-4 hover:text-black transition-colors"
              >
                hadinnazmi21@gmail.com
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact