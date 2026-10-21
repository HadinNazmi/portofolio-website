function Navbar() {
  return (
    <header className="stitch-header">
      <div className="stitch-navbar">
        <div className="navbar-spacer"></div>
        <nav className="navbar-links">
          <a href="#about" className="nav-link">ABOUT ME</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a href="#projects" className="nav-link">PROJECTS</a>
          <a href="#experience" className="nav-link">EXPERIENCE</a>
        </nav>
        <div className="navbar-action">
          <a href="#contact" className="nav-contact-btn group">
            <span>CONTACT</span>
            <span className="nav-contact-icon">
              <span className="material-symbols-outlined">north_east</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar