import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projectsData = [
  {
    title: "Bank Jatah Indonesia — E-Wallet App",
    category: "mobile",
    categoryLabel: "Mobile Native",
    period: "2026",
    description: "Aplikasi dompet digital (e-wallet) native Android untuk nasabah. Fitur mencakup manajemen saldo, transfer antar pengguna, riwayat transaksi real-time, dan autentikasi aman via Supabase.",
    tech: ["Kotlin", "Jetpack Compose", "Supabase"],
    image: "/projects/aplikasiBJI.jpeg",
    fallbackImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfeWBQIo2KClonc6IC-IJmRnXyQf5ctTzYEY88SMu0HnCWkML5yDd3Bzz-Wx1xJUyurdArwAwV4IgNxOt1dZC4ZI0mbOP1J8SIgJ_tna9ZLUKH4Vzo3MiVsoCWId5fZGcHOzLyFZuo80zGawGpsYK8almKAbdSdN0pdKwk-rZVcF7eZhvS-CbIVUAsaEtB2w1DOTz2ZTGYxy9GFT3o73Q9PFZfmAcJUl9c0pL2QzBzuG6wkOus-6by8Q",
    link: "https://www.bjindonesia.online/aplikasi",
    github: "https://github.com/HadinNazmi",
  },
  {
    title: "Bank Jatah Indonesia — Company Profile",
    category: "web",
    categoryLabel: "Web Platform",
    period: "2025",
    description: "Website company profile resmi Bank Jatah Indonesia dengan tampilan profesional, interaktif, dan responsif. Pengelolaan konten dinamis terintegrasi basis data Supabase.",
    tech: ["React.js", "Supabase", "Tailwind CSS"],
    image: "/projects/webprofileBJI.jpg",
    fallbackImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC70B0I_Rf6kjx5fuwmNQbs5IkVBZsszrx2ZrWks8OAkjf5cwfiQANFt7ag2cC9hh1EaJvCxxwjq0bsDdBvbbMSA8GGGMBRAQT9vC3BmZLYfq-JxNGXaNrwpQA0IFPvYhvyvV9GBNmVZfTmwT8hHQNbfABEpRFpWXVTrQmeFOXuP_EdHnMVe0IYtj73crPGcJzD6VehG27pJojQzofm5xdkQz0ahp9SZIZi7AWNcvg1ek8n-wm6WUUTlg",
    link: "https://www.bjindonesia.online/",
    github: "https://github.com/HadinNazmi",
  },
  {
    title: "Bank Jatah Indonesia — Web Admin",
    category: "web",
    categoryLabel: "Web Dashboard",
    period: "2026",
    description: "Dashboard admin berbasis web untuk monitoring transaksi, manajemen pengguna e-wallet, serta penugasan operasional penjemputan minyak bagi admin lapangan secara real-time.",
    tech: ["React", "Supabase", "REST API"],
    image: "/projects/bankjatah-admin.png",
    fallbackImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC70B0I_Rf6kjx5fuwmNQbs5IkVBZsszrx2ZrWks8OAkjf5cwfiQANFt7ag2cC9hh1EaJvCxxwjq0bsDdBvbbMSA8GGGMBRAQT9vC3BmZLYfq-JxNGXaNrwpQA0IFPvYhvyvV9GBNmVZfTmwT8hHQNbfABEpRFpWXVTrQmeFOXuP_EdHnMVe0IYtj73crPGcJzD6VehG27pJojQzofm5xdkQz0ahp9SZIZi7AWNcvg1ek8n-wm6WUUTlg",
    link: "",
    github: "https://github.com/HadinNazmi",
  },
  {
    title: "Sigap — Deteksi Dini Penyakit (RAG LLM)",
    category: "ml",
    categoryLabel: "ML / AI",
    period: "2025",
    description: "Sistem identifikasi gangguan awal penyakit dengan chatbot NLP berbasis Retrieval-Augmented Generation (RAG) untuk memberikan konsultasi awal yang akurat.",
    tech: ["Python", "Flask", "React", "RAG LLM"],
    image: "/projects/nadi.png",
    fallbackImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBulbn8gpUjhIkucict2CB0ru6GH9aY_BCo7M5zBJ4eI887HyUI9nATFnC0LB7t8V6e3LAnAAm61GkeCpEK8eAjZn-EysNEIwZxp8_DTk2ecI8RO57RjTg9xCwoz4QgRyd1MSVEUXP6M69yoX3EBrUTFF8pZFb-29UGZAhmbBAV4OUxa0fYkQF1OMswb-6_SYOyMLM9PE_37_GI8tfJyrPIRD31ILS4ERPytOlUaIMcoDftONDnD1hVIQ",
    link: "",
    github: "https://github.com/HadinNazmi",
  },
  {
    title: "Prediksi Curah Hujan Ekstrem Indonesia",
    category: "ml",
    categoryLabel: "Machine Learning",
    period: "2026",
    description: "Model prediksi curah hujan ekstrem berbasis Random Forest untuk sistem peringatan dini bencana hidrometeorologi, dilatih dengan data BMKG komprehensif.",
    tech: ["Python", "Random Forest", "Scikit-Learn"],
    image: "/projects/rainfall.png",
    fallbackImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBulbn8gpUjhIkucict2CB0ru6GH9aY_BCo7M5zBJ4eI887HyUI9nATFnC0LB7t8V6e3LAnAAm61GkeCpEK8eAjZn-EysNEIwZxp8_DTk2ecI8RO57RjTg9xCwoz4QgRyd1MSVEUXP6M69yoX3EBrUTFF8pZFb-29UGZAhmbBAV4OUxa0fYkQF1OMswb-6_SYOyMLM9PE_37_GI8tfJyrPIRD31ILS4ERPytOlUaIMcoDftONDnD1hVIQ",
    link: "",
    github: "https://github.com/HadinNazmi",
  },
  {
    title: "Peatland Hero — SIC 2024",
    category: "web",
    categoryLabel: "Web Platform",
    period: "2024",
    description: "Platform digital edukasi dan pemasaran produk komoditas lahan gambut berkelanjutan. Meraih predikat Inovasi Terbaik pada Siak Innovation Challenge 2024.",
    tech: ["Next.js", "Tailwind", "Product Design"],
    image: "/projects/sic.png",
    fallbackImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC70B0I_Rf6kjx5fuwmNQbs5IkVBZsszrx2ZrWks8OAkjf5cwfiQANFt7ag2cC9hh1EaJvCxxwjq0bsDdBvbbMSA8GGGMBRAQT9vC3BmZLYfq-JxNGXaNrwpQA0IFPvYhvyvV9GBNmVZfTmwT8hHQNbfABEpRFpWXVTrQmeFOXuP_EdHnMVe0IYtj73crPGcJzD6VehG27pJojQzofm5xdkQz0ahp9SZIZi7AWNcvg1ek8n-wm6WUUTlg",
    link: "https://peatlandhero.id",
    github: "https://github.com/HadinNazmi",
  },
  {
    title: "Game 3D — Petualangan 3 Dunia",
    category: "mobile",
    categoryLabel: "3D Interactive",
    period: "2025",
    description: "Perancangan gameplay 3D, interaksi kontrol karakter, physics, dan level design menggunakan Unity & C# dalam tim pengembang game independen.",
    tech: ["Unity", "C#", "3D Game Design"],
    image: "/projects/game.jpg",
    fallbackImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfeWBQIo2KClonc6IC-IJmRnXyQf5ctTzYEY88SMu0HnCWkML5yDd3Bzz-Wx1xJUyurdArwAwV4IgNxOt1dZC4ZI0mbOP1J8SIgJ_tna9ZLUKH4Vzo3MiVsoCWId5fZGcHOzLyFZuo80zGawGpsYK8almKAbdSdN0pdKwk-rZVcF7eZhvS-CbIVUAsaEtB2w1DOTz2ZTGYxy9GFT3o73Q9PFZfmAcJUl9c0pL2QzBzuG6wkOus-6by8Q",
    link: "",
    github: "https://github.com/HadinNazmi",
  },
  {
    title: "Company Profile — Dimensi Hair Studio",
    category: "web",
    categoryLabel: "Web App",
    period: "2024",
    description: "Website company profile untuk barbershop modern dengan katalog layanan, galeri gaya rambut, profil tim barber, serta integrasi pemesanan layanan.",
    tech: ["Laravel", "PHP", "MySQL"],
    image: "/projects/dimensihair.png",
    fallbackImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC70B0I_Rf6kjx5fuwmNQbs5IkVBZsszrx2ZrWks8OAkjf5cwfiQANFt7ag2cC9hh1EaJvCxxwjq0bsDdBvbbMSA8GGGMBRAQT9vC3BmZLYfq-JxNGXaNrwpQA0IFPvYhvyvV9GBNmVZfTmwT8hHQNbfABEpRFpWXVTrQmeFOXuP_EdHnMVe0IYtj73crPGcJzD6VehG27pJojQzofm5xdkQz0ahp9SZIZi7AWNcvg1ek8n-wm6WUUTlg",
    link: "",
    github: "https://github.com/HadinNazmi",
  },
]

function Projects() {
  const [ref, visible] = useScrollReveal()
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "all") return true
    return p.category === activeFilter
  })

  return (
    <section id="projects" ref={ref} className={`stitch-projects ${visible ? 'reveal-visible' : ''}`}>
      <div className="section-container">
        {/* Section Title & Filter Tabs */}
        <div className="projects-header-row">
          <div className="projects-title-block">
            <span className="badge-pill-primary">
              <span className="material-symbols-outlined text-xs">rocket_launch</span>
              SHOWCASE
            </span>
            <h2 className="section-title">FEATURED PROJECTS</h2>
            <p className="section-subtitle">
              Production-tested systems engineered for security, speed, and business impact.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="filter-pill-container">
            {["all", "web", "mobile", "ml"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'filter-btn-active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat === 'all' ? 'All' : cat === 'web' ? 'Web' : cat === 'mobile' ? 'Mobile' : 'ML/Data'}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.title} className="project-card">
              {/* Card Image */}
              <div className="project-card-thumb">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  onError={(e) => {
                    e.target.src = project.fallbackImage
                  }}
                />
                <div className="project-category-tag">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-card-main">
                  {/* Tech Badges */}
                  <div className="project-tech-badges">
                    {project.tech.map((t, idx) => {
                      const colors = ['badge-tech-primary', 'badge-tech-secondary', 'badge-tech-tertiary']
                      return (
                        <span key={t} className={`project-tech-badge ${colors[idx % colors.length]}`}>
                          {t}
                        </span>
                      )
                    })}
                  </div>

                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                </div>

                {/* Card Action Buttons */}
                <div className="project-card-actions">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action-demo"
                    >
                      <span>Live Demo</span>
                      <span className="material-symbols-outlined text-xs">arrow_outward</span>
                    </a>
                  ) : (
                    <span className="project-action-demo-disabled">
                      <span>In Development</span>
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action-code"
                      title="View Code on GitHub"
                    >
                      <span className="material-symbols-outlined text-sm">code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects