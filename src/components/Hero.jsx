function Hero() {
  return (
    <section className="stitch-hero" id="hero">
      {/* Atmospheric Ambient Glows */}
      <div className="hero-glow-blob-1"></div>
      <div className="hero-glow-blob-2"></div>

      <div className="hero-container">
        {/* Headline & Subtitle */}
        <div className="hero-intro">
          <div className="hero-badge">
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span className="hero-badge-text">Full Stack & Mobile Developer</span>
          </div>

          <h1 className="hero-title">
            I'm Hadin Nazmi
          </h1>

          <p className="hero-tagline">
            Crafting ultra-responsive web architectures and native mobile apps with disciplined engineering, elegant aesthetics, and rock-solid cloud scalability.
          </p>

          {/* Hero CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn-stitch-primary">
              <span>MY PROJECTS</span>
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>
            <a href="#contact" className="btn-stitch-secondary">
              <span className="material-symbols-outlined text-tertiary">description</span>
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* 2-Column Centered Hybrid Layout with Developer Cutout & Floating Metrics */}
        <div className="hero-showcase">
          {/* Left Floating Card: Client Satisfaction */}
          <div className="floating-card floating-card-left">
            <div className="floating-card-header">
              <span className="card-label-primary">Client Rating</span>
              <span className="material-symbols-outlined text-secondary text-sm">verified</span>
            </div>
            <div className="rating-score">
              <span className="rating-num">5.0</span>
              <span className="rating-max">/ 5.0</span>
            </div>
            <div className="rating-stars">
              <span className="material-symbols-outlined star-icon">star</span>
              <span className="material-symbols-outlined star-icon">star</span>
              <span className="material-symbols-outlined star-icon">star</span>
              <span className="material-symbols-outlined star-icon">star</span>
              <span className="material-symbols-outlined star-icon">star</span>
            </div>
            <div className="rating-stats">
              <div className="stat-item">
                <span className="material-symbols-outlined text-tertiary">task_alt</span>
                <span>30+ Completed Projects</span>
              </div>
              <div className="stat-item">
                <span className="material-symbols-outlined text-tertiary">schedule</span>
                <span>100% on-time delivery</span>
              </div>
            </div>
          </div>

          {/* Center: Portrait Cutout with Ambient Glow */}
          <div className="hero-portrait-wrapper">
            <div className="portrait-ambient-glow"></div>
            <div className="portrait-circle">
              <img
                src="/images/hero.png"
                alt="Hadin Nazmi - Full Stack Developer"
                className="portrait-img"
                onError={(e) => {
                  e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuCuusCxQ2CcBDJpp9u_Es6HEzzX2eABhlXaVFcbMC2CmRpJyFebh8GTydUqCRzrBHtIaODhHzqDhhb59W7_qPsqMDwBRHtSg9kxhbol2X0kKEZR41Kb9Voz5DQKHkJRXXqorZx1OvpQuS4hvc1LjdKPZjo9VScTLw6QU6Rqk7Mh0IWX_UWXL48kfkZB1VyfWuDSjQ2TtGvCfFEeYJSXkaHd37aavORavje3NQhRP4qJFOwA1RWXWa5HCw"
                }}
              />
            </div>
          </div>

          {/* Right Floating Card: Skill Proficiency Meters */}
          <div className="floating-card floating-card-right">
            <div className="floating-card-header">
              <span className="card-label-secondary">Proficiency</span>
              <span className="card-badge-tertiary">PROD READY</span>
            </div>

            {/* Backend Bar */}
            <div className="meter-group">
              <div className="meter-header">
                <span>Backend (Go, Python, Node)</span>
                <span className="text-primary font-mono">95%</span>
              </div>
              <div className="meter-track">
                <div className="meter-fill meter-fill-backend" style={{ width: '95%' }}></div>
              </div>
            </div>

            {/* Frontend Bar */}
            <div className="meter-group">
              <div className="meter-header">
                <span>Frontend (React, Tailwind)</span>
                <span className="text-primary font-mono">92%</span>
              </div>
              <div className="meter-track">
                <div className="meter-fill meter-fill-frontend" style={{ width: '92%' }}></div>
              </div>
            </div>

            {/* Mobile Bar */}
            <div className="meter-group">
              <div className="meter-header">
                <span>Mobile (Kotlin, Flutter)</span>
                <span className="text-primary font-mono">88%</span>
              </div>
              <div className="meter-track">
                <div className="meter-fill meter-fill-mobile" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero