import { useScrollReveal } from '../hooks/useScrollReveal'

function About() {
  const [ref, visible] = useScrollReveal()

  const polaroids = [
    {
      src: "/images/achievements/kmipn-1.png",
      fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxdvo7ujDCoNVj4tvVzga9-DCsa5GeOlxJuIzUXmlKzEMcAJCnSQpoXRkKTxihflf6NVJeFFvioahcnv6qSumb_AgMhCSy5mUnemWJDrQh5n6L4pSfjW4Npti7h1XiNL8pe-4uOfIUrvbsBtJTtOcq4abgf5F32_1VOr-ujkmR0i0yuHTkMt_t-Uiociyd4iM25U36va-02-TJEqbhlOrONoZkS4dLPf0l2nsWfUfoH8hyG-xSPyvpFQ",
      caption: "Juara 1 • KMIPN 7 2025",
      rotate: "-3deg",
    },
    {
      src: "/images/achievements/permikomnas-1.jpg",
      fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuALb4YYgOmNctA8Iwsaqy8xXDN-ePDNtRUnJoIdK1_6Lo50cmpORjef-DcDG4qjlDTZS857-fo2zjLEtWEak09hfbTzI61r90G0-bEGdDxH5guaOx60UX47Riv51e9OUNRN5J-Hum4lhOOf5h7BeldpJA3Wq_iM6i0Oq9N3z-Sd0mGLXItyFnrTpEyDDnPE4Ck3syqHa7PVbRatKnlKp4tuxaN8BFJ1TdTsv1Is8kAchbTwzPSKJpgSQw",
      caption: "Juara 1 Data Analyst • Permikomnas",
      rotate: "2deg",
    },
    {
      src: "/images/achievements/sic-1.jpg",
      fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhq2RVwFT9KJRzZkHOyGEpxtEVYKTHmZFY3lF4ZAh7aPevrLEcHWc1sWykVuMtyU3rZ6C98rTFEovQHehlr35qYKkFojzpN2LnnQJMcb0KV8FLnEQwzqv5kkuluDhvTDfogoqUY-BKLxjxbp1ySMo-7obpqM3JqPf_IutUC7iAhU7tS0u1qG-ZD5bYFLRWslFdqWN1POh-mOToWvK1_E6sLUp3ZtS_4pj6y9d7QPrbNPjD3eQzlzLr_Q",
      caption: "Inovasi Terbaik • SIC 2024",
      rotate: "-1deg",
    },
  ]

  return (
    <section id="about" ref={ref} className={`stitch-about ${visible ? 'reveal-visible' : ''}`}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-pill-primary">
            <span className="material-symbols-outlined text-xs">fingerprint</span>
            ABOUT ME
          </span>
          <h2 className="section-title">WHO AM I?</h2>
          <div className="section-divider-bar"></div>
        </div>

        {/* 2-Column Content */}
        <div className="about-grid">
          {/* Polaroid Snapshots Column */}
          <div className="about-polaroids-col">
            {polaroids.map((item, idx) => (
              <div
                key={idx}
                className="polaroid-card"
                style={{ transform: `rotate(${item.rotate})` }}
              >
                <div className="polaroid-img-wrapper">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="polaroid-img"
                    onError={(e) => {
                      e.target.src = item.fallback
                    }}
                  />
                </div>
                <p className="polaroid-caption">{item.caption}</p>
              </div>
            ))}
          </div>

          {/* Bio & Metrics Column */}
          <div className="about-details-col">
            {/* Bio Card */}
            <div className="about-bio-card">
              <div className="about-bio-header">
                <span className="about-icon-pill">
                  <span className="material-symbols-outlined text-2xl">code_blocks</span>
                </span>
                <div>
                  <h3 className="about-bio-title">Architecting High-Throughput Digital Products</h3>
                  <p className="about-bio-role">Senior Full-Stack & Native Mobile Specialist</p>
                </div>
              </div>
              <p className="about-bio-text">
                Mahasiswa D4 Teknik Informatika Politeknik Caltex Riau dengan <span className="text-primary font-semibold">fokus mendalam pada rekayasa perangkat lunak</span> modern. Berpengalaman membangun sistem berskala tinggi, aplikasi Android native menggunakan Kotlin & Jetpack Compose, arsitektur cross-platform dengan Flutter, hingga aplikasi web responsif berbasis React & Laravel.
              </p>
              <p className="about-bio-text">
                Mulai dari perancangan skema basis data terdistribusi di Supabase & PostgreSQL, optimasi performa rendering antarmuka, hingga orkestrasi pipeline backend—fokus utama saya selalu mengutamakan clean architecture, keandalan sistem tanpa downtime, dan kepuasan pengguna akhir.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="about-metrics-grid">
              <div className="metric-box">
                <div className="metric-val text-primary">4+</div>
                <div className="metric-lbl">Years Experience</div>
              </div>
              <div className="metric-box">
                <div className="metric-val text-secondary">35+</div>
                <div className="metric-lbl">Shipped Products</div>
              </div>
              <div className="metric-box">
                <div className="metric-val text-tertiary">99.9%</div>
                <div className="metric-lbl">Uptime Architected</div>
              </div>
              <div className="metric-box">
                <div className="metric-val text-primary-dim">15k+</div>
                <div className="metric-lbl">Global Users</div>
              </div>
            </div>

            {/* Education Box */}
            <div className="about-edu-card">
              <div className="edu-card-header">
                <span className="material-symbols-outlined text-secondary text-xl">school</span>
                <span className="font-semibold text-on-surface">Riwayat Pendidikan</span>
              </div>
              <div className="edu-list">
                <div className="edu-item">
                  <div className="edu-meta-row">
                    <strong className="text-on-surface">Politeknik Caltex Riau</strong>
                    <span className="edu-year-badge">2023 – Sekarang</span>
                  </div>
                  <div className="edu-sub">D4 Teknik Informatika · IPK 3.76 / 4.00</div>
                </div>
                <div className="edu-item">
                  <div className="edu-meta-row">
                    <strong className="text-on-surface">MAN 3 Pekanbaru</strong>
                    <span className="edu-year-badge">2020 – 2023</span>
                  </div>
                  <div className="edu-sub">MIPA · Nilai Rata-rata 92.85 / 100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About