import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  { title: "Product & Project Management", items: ["Requirement Gathering", "Stakeholder Communication", "Agile/Kanban", "User Story Mapping", "Sprint Planning", "SDLC"] },
  { title: "Bahasa & Framework", items: ["JavaScript", "React.js", "Next.js", "Python", "SQL", "Laravel", "Supabase", "Java", "MySQL"] },
  { title: "Tools & Platform", items: ["Git & GitHub", "Figma", "Tableau", "Trello", "Notion", "VS Code", "MongoDB", "Unity", "Blender", "Google Colab"] },
]

const achievements = [
  "Juara 1 Kategori Dampak dan Kebermanfaatan Cipta Inovasi — KMIPN 7 2025",
  "Juara 1 Data Analyst — KMKompetisi IT Permikomnas Wilayah 2",
  "Inovasi Terbaik — SIC 2024 (Siak Innovation Challenge)",
  "Silver Medal — GINECO (Global Innovation and Entrepreneurship Competition)",
]

function About() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="about" ref={ref} className={`about reveal reveal-up ${visible ? 'reveal-visible' : ''}`}>
      <div className="about-header">
        <img src="/images/hero.png" alt="Hadin Nazmi" className="profile-photo" onError={(e) => { e.target.style.display = 'none' }} />
        <div>
          <h2>Tentang Saya</h2>
          <p>
            Mahasiswa D4 Teknik Informatika di Politeknik Caltex Riau yang fokus pada
            pengembangan produk dan sistem digital. Terbiasa terlibat langsung dalam
            seluruh proses pembuatan produk — mulai dari memahami kebutuhan pengguna,
            merencanakan fitur, mengkoordinasikan tim, hingga produk siap digunakan.
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
      <ul className="achievements-list">
        {achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </section>
  )
}

export default About