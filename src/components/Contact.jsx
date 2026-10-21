import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Contact() {
  const [ref, visible] = useScrollReveal()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <>
      <section id="contact" ref={ref} className={`stitch-contact ${visible ? 'reveal-visible' : ''}`}>
        <div className="section-container">
          {/* Section Header */}
          <div className="section-header-center">
            <span className="badge-pill-primary">
              <span className="material-symbols-outlined text-xs">mail</span>
              CONNECT
            </span>
            <h2 className="section-title">LET'S HAVE A CHAT / WORK TOGETHER</h2>
            <p className="section-subtitle">
              Have a flagship mobile product or mission-critical web application to build? Drop a message.
            </p>
          </div>

          {/* 2-Column Contact Layout */}
          <div className="contact-grid">
            {/* Left Column: Direct Info & Socials */}
            <div className="contact-info-col">
              {/* Email Card */}
              <div className="contact-info-card">
                <div className="contact-icon-box bg-primary-container text-on-primary-container">
                  <span className="material-symbols-outlined text-xl">alternate_email</span>
                </div>
                <div>
                  <p className="contact-label">Direct Email</p>
                  <a
                    href="mailto:hadinnazmi21@gmail.com"
                    className="contact-value-link"
                  >
                    hadinnazmi21@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-info-card">
                <div className="contact-icon-box bg-secondary-container text-on-secondary-container">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <p className="contact-label">Base &amp; Relocation</p>
                  <p className="contact-value">Pekanbaru, Riau / Remote Worldwide</p>
                </div>
              </div>

              {/* Availability Beacon Card */}
              <div className="contact-beacon-card">
                <div className="beacon-left">
                  <span className="beacon-indicator">
                    <span className="beacon-ping"></span>
                    <span className="beacon-dot"></span>
                  </span>
                  <span className="beacon-text">Available for Projects &amp; Collaboration</span>
                </div>
                <span className="beacon-tag">Active</span>
              </div>

              {/* Developer Footprint Card */}
              <div className="contact-social-card">
                <p className="contact-label">Developer Footprint</p>
                <div className="social-links-row">
                  <a
                    href="https://github.com/HadinNazmi"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-btn"
                    title="GitHub"
                  >
                    <span className="material-symbols-outlined text-lg">code</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/tengku-muhammad-hadin"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-btn"
                    title="LinkedIn"
                  >
                    <span className="material-symbols-outlined text-lg">share</span>
                  </a>
                  <a
                    href="mailto:hadinnazmi21@gmail.com"
                    className="social-icon-btn"
                    title="Email"
                  >
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Sleek Glass Contact Form */}
            <div className="contact-form-col">
              <form onSubmit={handleSubmit} className="contact-glass-form">
                {formSubmitted && (
                  <div className="form-alert-success">
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>Pesan berhasil dikirim! Hadin akan segera merespons via email.</span>
                  </div>
                )}

                <div className="form-row-2">
                  <div className="form-field">
                    <label htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-subject">Subject / Opportunity</label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="Full Stack Project / Mobile App Development"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    rows="5"
                    required
                    placeholder="Provide an overview of the scope, milestones, or role details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM FOOTER BAR */}
      <footer className="stitch-footer">
        <div className="footer-glow-blob"></div>
        <div className="section-container relative-z">
          {/* Top Banner Row */}
          <div className="footer-banner-row">
            <div className="footer-banner-left">
              <div className="footer-beacon-pill">
                <span className="beacon-indicator">
                  <span className="beacon-ping"></span>
                  <span className="beacon-dot"></span>
                </span>
                <span className="beacon-text">Available for new projects</span>
              </div>
              <h2 className="footer-banner-title">LET'S WORK TOGETHER</h2>
            </div>
            <div className="footer-banner-right">
              <a href="#contact" className="btn-stitch-primary">
                <span>GET IN TOUCH</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* 4-Column Grid */}
          <div className="footer-grid">
            {/* Col 1 */}
            <div className="footer-col">
              <h3 className="footer-col-title">Hadin Nazmi</h3>
              <p className="footer-desc">
                Passionate Full Stack &amp; Mobile Developer crafting resilient web architectures and native mobile apps with rock-solid cloud scalability.
              </p>
              <a href="#contact" className="btn-stitch-secondary footer-cv-btn">
                <span className="material-symbols-outlined text-sm text-tertiary">download</span>
                <span>DOWNLOAD CV</span>
              </a>
            </div>

            {/* Col 2 */}
            <div className="footer-col">
              <p className="footer-label">QUICK LINKS</p>
              <ul className="footer-links">
                <li><a href="#about"><span className="material-symbols-outlined text-xs">chevron_right</span> About</a></li>
                <li><a href="#skills"><span className="material-symbols-outlined text-xs">chevron_right</span> Skills</a></li>
                <li><a href="#projects"><span className="material-symbols-outlined text-xs">chevron_right</span> Projects</a></li>
                <li><a href="#experience"><span className="material-symbols-outlined text-xs">chevron_right</span> Experience</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="footer-col">
              <p className="footer-label">CONNECT</p>
              <div className="footer-connect-list">
                <a href="mailto:hadinnazmi21@gmail.com" className="footer-email-link">
                  hadinnazmi21@gmail.com
                </a>
                <div className="footer-location-row">
                  <span className="material-symbols-outlined text-sm text-secondary">location_on</span>
                  <span>Pekanbaru / Remote</span>
                </div>
                <div className="social-links-row mt-2">
                  <a href="https://github.com/HadinNazmi" target="_blank" rel="noreferrer" className="social-icon-btn-sm" title="GitHub">
                    <span className="material-symbols-outlined text-sm">code</span>
                  </a>
                  <a href="https://linkedin.com/in/tengku-muhammad-hadin" target="_blank" rel="noreferrer" className="social-icon-btn-sm" title="LinkedIn">
                    <span className="material-symbols-outlined text-sm">share</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Col 4 */}
            <div className="footer-col">
              <p className="footer-label">CORE TECH</p>
              <div className="footer-tech-wrap">
                <span className="footer-tech-pill text-primary">Kotlin</span>
                <span className="footer-tech-pill text-secondary">React</span>
                <span className="footer-tech-pill text-tertiary">Python</span>
                <span className="footer-tech-pill text-on-surface">Supabase</span>
                <span className="footer-tech-pill text-secondary">Jetpack Compose</span>
                <span className="footer-tech-pill text-primary">Tailwind</span>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="footer-bottom-row">
            <p className="footer-copyright">© 2026 Hadin Nazmi. All rights reserved.</p>
            <a href="#hero" className="footer-back-to-top">
              <span>Back to top ↑</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact