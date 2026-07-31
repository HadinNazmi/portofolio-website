const skillCards = [
  { label: "Android / Kotlin", pos: "top-left" },
  { label: "React & Next.js", pos: "top-right" },
  { label: "Machine Learning", pos: "bottom-left" },
  { label: "UI/UX & Figma", pos: "bottom-right" },
]

function Hero() {
  return (
    <section className="hero">
      <p className="hero-greeting">Hello, Saya</p>
      <h1>Tengku Muhammad Hadin Nazmi</h1>
      <p className="hero-desc">
        Mahasiswa D4 Teknik Informatika yang fokus pada pengembangan produk
        dan sistem digital — dari Android, web, hingga machine learning.
      </p>

      <div className="hero-visual">
        <div className="hero-image-wrap">
          <div className="hero-ring"></div>
          <div className="hero-blob"></div>
          <img
            src="\public\images\hero.png"
            alt="Hadin Nazmi"
            className="hero-photo"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          {skillCards.map((card) => (
            <div key={card.label} className={`skill-float skill-float-${card.pos}`}>
              {card.label}
            </div>
          ))}
        </div>
      </div>

      <div className="hero-actions">
        <a href="#about" className="btn-primary">Tentang Saya</a>
        <a href="#projects" className="btn-secondary">Lihat Project</a>
      </div>
    </section>
  )
}

export default Hero