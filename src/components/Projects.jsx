import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: "Bank Jatah Indonesia — Company Profile",
    period: "2025",
    description: "Website company profile resmi Bank Jatah Indonesia dengan tampilan profesional dan responsif. Konten dapat dikelola secara dinamis melalui integrasi database Supabase.",
    tech: ["React", "Supabase"],
    image: "/projects/webprofileBJI.jpg",
    link: "https://www.bjindonesia.online/",
  },
  {
    title: "Bank Jatah Indonesia — Aplikasi E-Wallet",
    period: "2026",
    description: "Aplikasi dompet digital (e-wallet) native Android untuk nasabah. Fitur mencakup manajemen saldo, transfer antar pengguna, riwayat transaksi, dan autentikasi aman. Backend Supabase dengan sinkronisasi data real-time.",
    tech: ["Kotlin", "Supabase", "Android"],
    image: "/projects/aplikasiBJI.jpeg",
    link: "https://www.bjindonesia.online/aplikasi",
  },
  {
    title: "Bank Jatah Indonesia — Web Admin",
    period: "2026",
    description: "Dashboard admin berbasis web untuk pengelolaan transaksi dan pengguna e-wallet, serta manajemen operasional penjemputan minyak bagi admin lapangan. Mencakup monitoring real-time dan kontrol akses berbasis peran.",
    tech: ["React", "Supabase"],
    image: "/projects/bankjatah-admin.png",
    link: "",
  },
  {
    title: "Sigap — Sistem Identifikasi Gangguan Awal Penyakit",
    period: "2025",
    description: "Chatbot berbasis NLP untuk diagnosis penyakit, menggunakan LLM berbasis RAG.",
    tech: ["Python", "Flask", "React", "NLP"],
    image: "/projects/nadi.png",
    link: "",
  },
  {
    title: "Prediksi Curah Hujan Ekstrem Indonesia",
    period: "2026",
    description: "Model prediksi curah hujan ekstrem berbasis Random Forest untuk mendukung sistem peringatan dini banjir. Dilatih menggunakan data historis curah hujan, klimatologi, dan variabel meteorologi dari stasiun BMKG.",
    tech: ["Python", "Machine Learning", "LLM", "RAG"],
    image: "/projects/rainfall.png",
    link: "",
  },
  {
    title: "Game 3D — Petualangan 3 Dunia",
    period: "2025",
    description: "Merancang konsep gameplay, alur cerita, dan desain level game 3D menggunakan Unity, termasuk perencanaan fitur dan pengelolaan backlog konten bersama tim.",
    tech: ["Unity", "C#", "Game Design"],
    image: "/projects/game.jpg",
    link: "",
  },
  {
    title: "Peatland Hero — SIC 2024",
    period: "2024",
    description: "Website edukasi dan penjualan produk komoditas lahan gambut untuk kompetisi Siak Innovation Challenge 2024. Meraih penghargaan Inovasi Terbaik.",
    tech: ["Web Development", "Product Design"],
    image: "/projects/sic.png",
    link: "https://peatlandhero.id",
  },
  {
    title: "Company Profile — Dimensi Hair Studio",
    period: "2024",
    description: "Website company profile untuk barbershop lokal, menampilkan layanan, galeri hasil pangkas, profil tim barber, lokasi, dan jam operasional.",
    tech: ["Laravel", "PHP", "MySQL"],
    image: "/projects/dimensihair.png",
    link: "",
  },
]

function Projects() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="projects" ref={ref} className={`projects reveal reveal-up ${visible ? 'reveal-visible' : ''}`}>
      <h2>Project</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-image">
              <img
                src={p.image}
                alt={p.title}
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            <div className="project-body">
              <div className="project-header">
                <h3>{p.title}</h3>
                <span className="project-period">{p.period}</span>
              </div>
              <p className="project-desc">{p.description}</p>
              <div className="tech-list">
                {p.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
              <div className="project-footer">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-btn">
                    Lihat Live
                  </a>
                ) : (
                  <span className="project-btn project-btn-disabled">Belum Live</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects