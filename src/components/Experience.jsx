import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

const experiencesList = [
  {
    role: "Koordinator Kaderisasi dan Pembinaan",
    org: "UKMI Politeknik Caltex Riau",
    period: "2024 – 2025",
    statusType: "completed",
    thumbnail: "/images/experience/SII-2.jpg",
    desc_id:
      "Memimpin perancangan kurikulum pembinaan karakter, manajemen kaderisasi anggota baru, dan strategi regenerasi kepengurusan organisasi.",
    desc_en:
      "Led member onboarding initiatives, leadership training programs, and strategic organizational regenerations.",
    images: [
      "/images/experience/SII-2.jpg",
      "/images/experience/SII-3.jpg",
      "/images/experience/SII-1.JPG"
    ]
  },
  {
    role: "Anggota Divisi Riset dan Teknologi",
    org: "ITSA (Informatics Engineering Student Association)",
    period: "2025 – 2026",
    statusType: "completed",
    thumbnail: "/images/achievements/kmipn-1.png",
    desc_id:
      "Mengelola workshop teknologi komputasi, pengembangan repositori proyek inovasi mahasiswa, dan koordinasi tantangan IT kampus.",
    desc_en:
      "Managing technical workshops, student project code repositories, and campus tech challenge preparation.",
    images: [
      "/images/achievements/kmipn-1.png",
      "/images/achievements/kmipn-2.jpg"
    ]
  },
  {
    role: "Supervisor Matrikulasi Beasiswa SDM Sawit BPDPKS",
    org: "BPDPKS & Politeknik Caltex Riau",
    period: "2024",
    statusType: "completed",
    thumbnail: "/images/experience/sawit-1.jpg",
    desc_id:
      "Mengawasi pelaksanaan kurikulum matrikulasi akademik, manajemen kedisiplinan asrama, serta asesmen kompetensi penerima beasiswa sawit nasional.",
    desc_en:
      "Supervised academic curriculum delivery, discipline management, and assessment frameworks for national scholarship grantees.",
    images: [
      "/images/experience/sawit-1.jpg",
      "/images/experience/sawit-2.jpeg",
      "/images/experience/sawit-3.jpeg"
    ]
  },
  {
    role: "Ketua Pelaksana Grand Opening SII",
    org: "UKMI Politeknik Caltex Riau",
    period: "2024",
    statusType: "completed",
    thumbnail: "/images/experience/SII-1.JPG",
    desc_id:
      "Memimpin tim kepanitiaan 30+ personel lintas divisi, mengoordinasikan logistik akbar, hubungan tamu stakeholder, serta eksekusi acara pembukaan.",
    desc_en:
      "Directed cross-functional committee of 30+ members, managing logistics, stakeholder relations, and event execution.",
    images: [
      "/images/experience/SII-1.JPG",
      "/images/experience/SII-2.jpg",
      "/images/experience/SII-3.jpg"
    ]
  },
  {
    role: "Pementor Studi Islam Intensif",
    org: "UKMI Politeknik Caltex Riau",
    period: "2024",
    statusType: "completed",
    thumbnail: "/images/experience/mentoring-1.jpg",
    desc_id:
      "Membimbing angkatan mahasiswa baru dalam pemecahan masalah etika, pembentukan karakter kepemimpinan, dan teknik studi adaptif.",
    desc_en:
      "Mentored junior engineering cohorts in critical problem solving, leadership character, and study frameworks.",
    images: [
      "/images/experience/mentoring-1.jpg",
      "/images/experience/mentoring-2.jpg"
    ]
  },
  {
    role: "Koordinator Publikasi Mubes ITSA",
    org: "ITSA Politeknik Caltex Riau",
    period: "2024",
    statusType: "completed",
    thumbnail: "/images/achievements/permikomnas-1.jpg",
    desc_id:
      "Memimpin produksi konten publikasi digital, liputan streaming musyawarah besar mahasiswa, serta dokumentasi digital pengarsipan sidang.",
    desc_en:
      "Led digital campaign media production, event streaming coverage, and documentation archiving.",
    images: [
      "/images/achievements/permikomnas-1.jpg",
      "/images/achievements/sic-1.jpg"
    ]
  }
]

function Experience() {
  const [ref, visible] = useScrollReveal()
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null)
  const { t, lang } = useLanguage()

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setActiveGalleryIndex(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const activeExp = activeGalleryIndex !== null ? experiencesList[activeGalleryIndex] : null

  return (
    <section
      id="experience"
      ref={ref}
      className={`max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-xl w-full transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-xl mb-space-lg">
        <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
          {t.experience.badge}
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
          {t.experience.title}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">
          {t.experience.subtitle}
        </p>
      </div>

      <div className="space-y-4">
        {experiencesList.map((exp, idx) => {
          const desc = lang === 'en' ? exp.desc_en : exp.desc_id
          return (
            <div
              key={idx}
              className="bg-white/95 dark:bg-slate-900/90 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 border border-slate-200/90 dark:border-slate-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.07)] hover:border-secondary/40 transition-all duration-300 group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6"
            >
              <div className="flex items-start sm:items-center gap-3.5 sm:gap-5 w-full md:w-auto">
                {/* Small Activity Photo as Thumbnail */}
                <button
                  type="button"
                  onClick={() => setActiveGalleryIndex(idx)}
                  className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-xs group/thumb focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer"
                  title="Lihat foto kegiatan"
                >
                  <img
                    src={exp.thumbnail}
                    alt={exp.role}
                    className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/images/experience/sawit-1.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[20px] drop-shadow-md">
                      fullscreen
                    </span>
                  </div>
                </button>

                {/* Content details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-headline-sm text-base sm:text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <span className="bg-surface-container-high/80 text-on-surface-variant font-label-sm text-xs px-2.5 py-0.5 rounded-full font-semibold border border-outline-variant/15 shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-secondary font-semibold text-xs sm:text-sm mt-0.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">corporate_fare</span>
                    <span>{exp.org}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mt-1.5 font-normal">
                    {desc}
                  </p>
                </div>
              </div>

              {/* Status Badge only (Photo count button removed as requested) */}
              <div className="shrink-0 self-start md:self-center ml-auto md:ml-0">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-secondary-fixed text-on-secondary-fixed shadow-xs border border-secondary-fixed/50">
                  <span className="material-symbols-outlined text-[15px]">check_circle</span>
                  <span>{t.experience.statusCompleted}</span>
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Interactive Lightbox Modal */}
      {activeExp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveGalleryIndex(null)}
        >
          <div
            className="bg-surface-container-lowest max-w-3xl w-full rounded-3xl p-5 sm:p-6 shadow-2xl overflow-hidden border border-slate-200/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
              <div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {activeExp.role}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {activeExp.org} • {activeExp.period}
                </p>
              </div>
              <button
                onClick={() => setActiveGalleryIndex(null)}
                className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors font-bold cursor-pointer"
                aria-label={t.experience.closeGallery}
              >
                ✕
              </button>
            </div>

            <div className="pt-4 max-h-[65vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {activeExp.images.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden aspect-video bg-surface-container-low shadow-sm group/item"
                  >
                    <img
                      src={img}
                      alt={`${activeExp.role} foto dokumentasi ${i + 1}`}
                      className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.parentElement.style.display = 'none'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Experience