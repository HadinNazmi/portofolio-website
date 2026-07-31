function Navbar({ theme, toggleTheme }) {
  return (
    <div className="navbar-wrap">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-dot"></span>
          Hadin Nazmi
        </div>
        <ul className="nav-links">
          <li><a href="#about">Tentang</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#experience">Pengalaman</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </nav>
    </div>
  )
}

export default Navbar