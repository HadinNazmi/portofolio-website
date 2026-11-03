import { useState } from 'react'
import SectionHeader from './common/SectionHeader'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <SectionHeader subtitle="CONTACT" title="GET IN TOUCH" />

        {/* Minimalist Contact Form */}
        <form onSubmit={handleSubmit} className="mt-8">
          {submitted ? (
            <div className="p-6 bg-[#F9F9F9] border border-[#222222] text-center mb-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#222222] font-heading mb-1">
                MESSAGE SENT SUCCESSFULLY
              </h4>
              <p className="text-xs text-[#666666]">
                Thank you for reaching out. I will get back to you within 24 hours.
              </p>
            </div>
          ) : null}

          {/* 2-Column Row for Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
            <div>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className="minimal-input"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                className="minimal-input"
              />
            </div>
          </div>

          {/* Full-width Subject */}
          <div className="mb-8">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="minimal-input"
            />
          </div>

          {/* Full-width Textarea with Bottom Border Only */}
          <div className="mb-12">
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you? *"
              className="minimal-input resize-none"
            />
          </div>

          {/* Centered Black SEND MESSAGE Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-[#222222] hover:bg-black text-white text-xs font-bold tracking-widest uppercase px-12 py-3.5 transition-all duration-200 font-heading"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact