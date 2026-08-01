import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  {
    title: "Mobile Development",
    items: ["Kotlin", "Flutter", "Android Studio", "Java"],
  },
  {
    title: "Web Development",
    items: ["JavaScript", "React.js", "Next.js", "Laravel", "PHP", "Supabase"],
  },
  {
    title: "Bahasa Pemrograman & Database",
    items: ["Python", "SQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & Platform",
    items: ["Git & GitHub", "VS Code", "Figma", "Jupyter", "Google Colab", "Unity", "Blender", "Postman"],
  },
]

const achievements = [
  "Juara 1 Kategori Dampak dan Kebermanfaatan Cipta Inovasi — KMIPN 7 2025",
  "Juara 1 Data Analyst — KMKompetisi IT Permikomnas Wilayah 2",
  "Inovasi Terbaik — SIC 2024 (Siak Innovation Challenge)",
  "Silver Medal — GINECO (Global Innovation and Entrepreneurship Competition)",
]

const achievementPhotos = [
  { src: "/images/achievements/kmipn-1.png", alt: "Juara 1 Dampak dan Kebermanfaatan — KMIPN 7 2025" },
  { src: "/images/achievements/kmipn-2.jpg", alt: "Juara 1 Dampak dan Kebermanfaatan — KMIPN 7 2025" },
  { src: "/images/achievements/permikomnas-1.jpg", alt: "Juara 1 Data Analyst — Permikomnas Wilayah 2" },
  { src: "/images/achievements/sic-1.jpg", alt: "Inovasi Terbaik — SIC 2024" },
  { src: "/images/achievements/sic-2.jpg", alt: "Inovasi Terbaik — SIC 2024" },
  { src: "/images/achievements/sic-3.jpg", alt: "Inovasi Terbaik — SIC 2024" },
]

function About() {
  const [ref, visible] = useScrollReveal()
  const [collageRef, collageVisible] = useScrollReveal()

  return (
    <section id="about" ref={ref} className={`about reveal reveal-up ${visible ? 'reveal-visible' : ''}`}>
      <div className="about-header">
        <img src="/images/hero.png" alt="Hadin Nazmi" className="profile-photo" onError={(e) => { e.target.style.display = 'none' }} />
        <div>
          <h2>Tentang Saya</h2>
          <p>
            Mahasiswa D4 Teknik Informatika di Politeknik Caltex Riau dengan fokus
            sebagai Mobile & Web Developer. Berpengalaman membangun aplikasi Android
            native dengan Kotlin, aplikasi cross-platform dengan Flutter, hingga
            aplikasi web full-stack dengan React dan Laravel — mulai dari perancangan
            struktur data, logika backend, hingga antarmuka yang siap dipakai pengguna.
          </p>
        </div>
      </div>

      <h3>Pendidikan</h3>
      <div className="education">
        <div>
          <strong>Politeknik Caltex Riau</strong> — D4 Teknik Informatika
          <span className="edu-meta">2023 – Sekarang · IPK 3.76/4.00</span>
        </div>
        <div>
          <strong>MAN 3 Pekanbaru</strong> — IPA
          <span className="edu-meta">2020 – 2023 · Nilai 92.85/100</span>
        </div>
      </div>

      <h3>Keahlian</h3>
      {skillGroups.map((group) => (
        <div key={group.title} className="skill-group">
          <p className="skill-group-title">{group.title}</p>
          <div className="skills">
            {group.items.map((skill) => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      ))}

      <h3>Pencapaian</h3>
      <div className="achievements-block">
        <ul className="achievements-list">
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        <div ref={collageRef} className="achievements-photos">
          {achievementPhotos.map((photo, i) => {
            const positions = [
              { top: "0%", left: "6%", rot: -8 },
              { top: "2%", left: "44%", rot: 6 },
              { top: "26%", left: "0%", rot: 5 },
              { top: "24%", left: "42%", rot: -6 },
              { top: "50%", left: "10%", rot: 4 },
              { top: "48%", left: "46%", rot: -4 },
            ]
            const pos = positions[i % positions.length]
            return (
              <div
                key={photo.src}
                className={`polaroid ${collageVisible ? 'polaroid-visible' : ''}`}
                style={{
                  top: pos.top,
                  left: pos.left,
                  '--rot': `${pos.rot}deg`,
                  transitionDelay: collageVisible ? `${i * 0.12}s` : '0s',
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  onError={(e) => { e.target.parentElement.style.display = 'none' }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About