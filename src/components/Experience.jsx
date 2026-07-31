import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const experiences = [
  {
    role: "Koordinator Kaderisasi dan Pembinaan — UKMI",
    period: "2024 – 2025",
    desc: "Merancang dan mengelola program pembinaan kader secara terstruktur, termasuk penetapan target capaian dan evaluasi program.",
    images: [
      "/experience/ukmi-kaderisasi-1.png",
      "/experience/ukmi-kaderisasi-2.png",
      "/experience/ukmi-kaderisasi-3.png",
    ],
  },
  {
    role: "Anggota Divisi Riset dan Teknologi — ITSA",
    period: "2025 – 2026",
    desc: "Memfasilitasi dan memetakan kebutuhan belajar mahasiswa di bidang teknologi, merancang program pendampingan yang relevan.",
    images: [
      "/experience/itsa-ristek-1.png",
      "/experience/itsa-ristek-2.png",
    ],
  },
  {
    role: "Anggota Divisi Perlengkapan — CTS",
    period: "",
    desc: "Mengelola kebutuhan logistik dan fasilitas organisasi secara menyeluruh melalui koordinasi lintas divisi.",
    images: [
      "/experience/cts-perlengkapan-1.png",
    ],
  },
    {
    role: "Ketua Pelaksana — Grand Opening SII (UKMI)",
    period: "",
    desc: "Memimpin perencanaan dan eksekusi acara penyambutan mahasiswa baru muslim, mengoordinasikan seluruh divisi panitia.",
    images: [
      "/images/experience/SII-1.JPG",
      "/images/experience/SII-2.jpg",
      "/images/experience/SII-3.jpg",
    ],
  },
  {
    role: "Pementor Studi Islam Intensif — UKMI",
    period: "",
    desc: "Mendampingi dan memonitor perkembangan mahasiswa secara rutin dalam program Studi Islam Intensif.",
    images: [
      "/images/experience/mentoring-1.jpg",
      "/images/experience/mentoring-2.jpg",
    ],
  },
  {
    role: "Koordinator Publikasi Mubes ITSA",
    period: "",
    desc: "Menyusun strategi komunikasi dan mengoordinasikan publikasi kegiatan Musyawarah Besar ITSA di berbagai media sosial.",
    images: [
      "/experience/mubes-itsa-1.png",
      "/experience/mubes-itsa-2.png",
    ],
  },
  {
    role: "Pendamping & Supervisor Matrikulasi Beasiswa SDM Sawit BPDPKS",
    period: "2024",
    desc: "Mendampingi dan mensupervisi proses orientasi akademik dan administrasi mahasiswa baru penerima beasiswa.",
    images: [
      "/images/experience/sawit-1.jpg",
      "/images/experience/sawit-2.jpeg",
      "/images/experience/sawit-3.jpeg",
    ],
  },
  {
    role: "Tim Promosi GTS 2023",
    period: "2023",
    desc: "Mempromosikan Politeknik Caltex Riau kepada calon mahasiswa baru di wilayah Pekanbaru.",
    images: [
      "/experience/gts-2023-1.png",
    ],
  },
]

function Experience() {
  const [ref, visible] = useScrollReveal()
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setActiveIndex(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const active = activeIndex !== null ? experiences[activeIndex] : null

  return (
    <section id="experience" ref={ref} className={`experience reveal reveal-up ${visible ? 'reveal-visible' : ''}`}>
      <h2>Pengalaman Organisasi</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <button
            key={exp.role}
            className="timeline-item"
            onClick={() => setActiveIndex(i)}
          >
            <div className="timeline-thumb-stack">
              {exp.images.slice(0, 3).map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt=""
                  className={`timeline-thumb timeline-thumb-${idx}`}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              ))}
              {exp.images.length > 1 && (
                <span className="timeline-count">{exp.images.length} foto</span>
              )}
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h4>{exp.role}</h4>
                {exp.period && <span className="timeline-period">{exp.period}</span>}
              </div>
              <p>{exp.desc}</p>
              <span className="timeline-cta">Lihat galeri →</span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="gallery-overlay" onClick={() => setActiveIndex(null)}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-modal-header">
              <div>
                <h3>{active.role}</h3>
                {active.period && <span className="timeline-period">{active.period}</span>}
              </div>
              <button className="gallery-close" onClick={() => setActiveIndex(null)}>✕</button>
            </div>
            <p className="gallery-desc">{active.desc}</p>
            <div className="gallery-grid">
              {active.images.map((img) => (
                <div key={img} className="gallery-grid-item">
                  <img src={img} alt={active.role} onError={(e) => { e.target.parentElement.style.display = 'none' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Experience