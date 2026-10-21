import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const experiencesData = [
  {
    role: "Koordinator Kaderisasi dan Pembinaan",
    org: "UKMI Politeknik Caltex Riau",
    period: "2024 — 2025",
    color: "primary",
    deliverables: [
      "Merancang dan mengelola kurikulum program pembinaan kader secara terstruktur dan terukur.",
      "Menetapkan metrik pencapaian capaian kompetensi kader serta memimpin evaluasi berkala program.",
      "Mengoordinasikan tim pembina dan fasilitator dalam pelaksanaan agenda kepemimpinan mahasiswa.",
    ],
    images: [
      "/experience/ukmi-kaderisasi-1.png",
      "/experience/ukmi-kaderisasi-2.png",
      "/experience/ukmi-kaderisasi-3.png",
    ],
  },
  {
    role: "Anggota Divisi Riset dan Teknologi",
    org: "ITSA (Information Technology Student Association)",
    period: "2025 — 2026",
    color: "secondary",
    deliverables: [
      "Memetakan kebutuhan riset dan pembelajaran mahasiswa di ranah software engineering & AI.",
      "Menginisiasi workshop teknologi dan sesi sharing teknis seputar modern web & mobile dev.",
      "Berkolaborasi dalam pengembangan inisiatif digital internal himpunan mahasiswa.",
    ],
    images: [
      "/experience/itsa-ristek-1.png",
      "/experience/itsa-ristek-2.png",
    ],
  },
  {
    role: "Ketua Pelaksana — Grand Opening SII",
    org: "UKMI Politeknik Caltex Riau",
    period: "2024",
    color: "tertiary",
    deliverables: [
      "Memimpin perencanaan strategis dan eksekusi acara berskala besar penyambutan ratusan mahasiswa baru.",
      "Mengoordinasikan seluruh divisi panitia (acara, logistik, publikasi, sponsor) demi kelancaran agenda.",
      "Mencapai target kepesertaan 100% dengan evaluasi kepuasan peserta yang sangat tinggi.",
    ],
    images: [
      "/images/experience/SII-1.JPG",
      "/images/experience/SII-2.jpg",
      "/images/experience/SII-3.jpg",
    ],
  },
  {
    role: "Supervisor & Pendamping Matrikulasi",
    org: "Beasiswa SDM Sawit BPDPKS",
    period: "2024",
    color: "primary",
    deliverables: [
      "Mendampingi orientasi akademik, adaptasi kampus, dan supervisi administrasi mahasiswa penerima beasiswa.",
      "Memberikan bimbingan terfokus pada kesiapan teknis dasar perkuliahan teknologi informasi.",
    ],
    images: [
      "/images/experience/sawit-1.jpg",
      "/images/experience/sawit-2.jpeg",
      "/images/experience/sawit-3.jpeg",
    ],
  },
  {
    role: "Pementor Studi Islam Intensif",
    org: "UKMI Politeknik Caltex Riau",
    period: "2024",
    color: "secondary",
    deliverables: [
      "Mendampingi dan memonitor perkembangan mahasiswa secara intensif dalam program mentoring berkala.",
      "Membangun lingkungan diskusi kondusif untuk pembentukan karakter dan integritas mahasiswa.",
    ],
    images: [
      "/images/experience/mentoring-1.jpg",
      "/images/experience/mentoring-2.jpg",
    ],
  },
  {
    role: "Koordinator Publikasi Mubes ITSA",
    org: "ITSA (Information Technology Student Association)",
    period: "2024",
    color: "tertiary",
    deliverables: [
      "Menyusun strategi konten komunikasi visual dan kampanye publikasi Musyawarah Besar.",
      "Mengelola saluran media sosial resmi dan dokumentasi real-time rangkaian sidang pleno.",
    ],
    images: [
      "/experience/mubes-itsa-1.png",
      "/experience/mubes-itsa-2.png",
    ],
  },
]

function Experience() {
  const [ref, visible] = useScrollReveal()
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setActiveGalleryIndex(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const activeExp = activeGalleryIndex !== null ? experiencesData[activeGalleryIndex] : null

  return (
    <section id="experience" ref={ref} className={`stitch-experience ${visible ? 'reveal-visible' : ''}`}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-pill-secondary">
            <span className="material-symbols-outlined text-xs">history_edu</span>
            CAREER PATH
          </span>
          <h2 className="section-title">WORK &amp; LEADERSHIP EXPERIENCE</h2>
          <p className="section-subtitle">
            Track record of technical execution, agile velocity, and team elevation.
          </p>
        </div>

        {/* Glowing Vertical Timeline */}
        <div className="timeline-container">
          {/* Vertical Connecting Line */}
          <div className="timeline-line"></div>

          {/* Timeline Nodes */}
          {experiencesData.map((exp, idx) => (
            <div key={exp.role} className="timeline-node-group">
              {/* Glowing Node Marker */}
              <div className={`timeline-marker marker-${exp.color}`}></div>

              {/* Node Card */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-org">{exp.org}</p>
                  </div>
                  <div className="timeline-header-actions">
                    <span className="timeline-period-badge">{exp.period}</span>
                    {exp.images && exp.images.length > 0 && (
                      <button
                        className="timeline-gallery-btn"
                        onClick={() => setActiveGalleryIndex(idx)}
                      >
                        <span className="material-symbols-outlined text-xs">photo_library</span>
                        <span>{exp.images.length} Foto</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Deliverables List */}
                <ul className="timeline-deliverables">
                  {exp.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="timeline-deliverable-item">
                      <span className="material-symbols-outlined text-tertiary deliverable-icon">check_circle</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Gallery */}
        {activeExp && (
          <div className="gallery-overlay" onClick={() => setActiveGalleryIndex(null)}>
            <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
              <div className="gallery-modal-header">
                <div>
                  <h3 className="gallery-title">{activeExp.role}</h3>
                  <span className="timeline-period-badge">{activeExp.org} • {activeExp.period}</span>
                </div>
                <button
                  className="gallery-close-btn"
                  onClick={() => setActiveGalleryIndex(null)}
                  aria-label="Tutup Galeri"
                >
                  ✕
                </button>
              </div>
              <div className="gallery-grid">
                {activeExp.images.map((img, i) => (
                  <div key={i} className="gallery-grid-thumb">
                    <img
                      src={img}
                      alt={`${activeExp.role} photo ${i + 1}`}
                      onError={(e) => {
                        e.target.parentElement.style.display = 'none'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience