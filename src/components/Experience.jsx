import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
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

  useEffect(() => {
    if (activeGalleryIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeGalleryIndex])

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

      {/* Alternating Zigzag Layout: Wide Card with Natural Overlapping Photo Cards */}
      <div className="w-full space-y-4 sm:space-y-5 lg:space-y-6 my-4 sm:my-6">
        {experiencesList.map((exp, idx) => {
          const desc = lang === 'en' ? exp.desc_en : exp.desc_id
          const isEven = idx % 2 === 0
          return (
            <div
              key={idx}
              className={`bg-white/95 dark:bg-slate-900/90 rounded-2xl px-5 sm:px-7 lg:px-9 py-3.5 sm:py-4 border border-slate-200/90 dark:border-slate-800 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1),0_4px_12px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_40px_-5px_rgba(0,0,0,0.16)] dark:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)] hover:border-secondary/40 transition-all duration-300 flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center justify-between gap-5 sm:gap-6 lg:gap-8 group relative`}
            >
              {/* Photo Card: Polaroid miring artistik yang menimpa card lain secara alami */}
              <div
                onClick={() => setActiveGalleryIndex(idx)}
                className={`w-full sm:w-64 md:w-72 lg:w-80 xl:w-88 shrink-0 bg-white dark:bg-slate-800 p-2.5 sm:p-3 pb-3 sm:pb-3.5 rounded-2xl sm:rounded-3xl shadow-[0_18px_36px_-6px_rgba(0,0,0,0.28),0_6px_14px_rgba(0,0,0,0.12)] border-2 border-white dark:border-slate-700/80 transition-all duration-300 transform ${
                  isEven ? '-rotate-2 sm:-rotate-3 lg:-rotate-3 lg:-my-8 xl:-my-10' : 'rotate-2 sm:rotate-3 lg:rotate-3 lg:-my-8 xl:-my-10'
                } hover:scale-105 hover:rotate-0 hover:z-30 cursor-pointer group/photo select-none relative z-20`}
                title="Klik untuk membuka dokumentasi foto"
              >
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-inner relative">
                  <img
                    src={exp.thumbnail}
                    alt={exp.role}
                    className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/images/experience/sawit-1.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[24px] drop-shadow-md">
                      fullscreen
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2.5 px-0.5">
                  <p className="font-bold text-xs sm:text-sm text-on-surface tracking-tight truncate">
                    {exp.role}
                  </p>
                  <span className="text-[11px] font-bold text-secondary flex items-center gap-0.5 shrink-0 ml-1">
                    {exp.images.length} Foto ↗
                  </span>
                </div>
              </div>

              {/* Information / Content details: Compact & Space-efficient */}
              <div className="flex-1 w-full min-w-0 flex flex-col justify-center py-0.5">
                {/* Top metadata row: Period and Status */}
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="bg-surface-container-high/80 text-on-surface-variant font-label-sm text-[11px] px-2.5 py-0.5 rounded-full font-semibold border border-outline-variant/15">
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-secondary-fixed text-on-secondary-fixed shadow-xs border border-secondary-fixed/50">
                    <span className="material-symbols-outlined text-[12px]">check_circle</span>
                    <span>{t.experience.statusCompleted}</span>
                  </span>
                </div>

                {/* Role title */}
                <h3 className="font-headline-sm text-sm sm:text-base lg:text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                  {exp.role}
                </h3>

                {/* Organization name */}
                <p className="text-secondary font-semibold text-xs mt-0.5 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">corporate_fare</span>
                  <span>{exp.org}</span>
                </p>

                {/* Description */}
                <p className="text-xs text-on-surface-variant leading-relaxed mt-1 font-normal line-clamp-2">
                  {desc}
                </p>

                {/* Interactive button to open documentation */}
                <div className="mt-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveGalleryIndex(idx)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container hover:bg-secondary-fixed hover:text-on-secondary-fixed text-on-surface text-xs font-semibold transition-all shadow-xs cursor-pointer group/btn"
                  >
                    <span className="material-symbols-outlined text-[15px] group-hover/btn:scale-110 transition-transform">
                      photo_library
                    </span>
                    <span>Lihat Dokumentasi ({exp.images.length} Foto)</span>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Large Pop-up Gallery Modal: Rendered via portal to document.body for full-screen unclipped backdrop */}
      {activeExp && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-sm transition-all duration-300"
          onClick={() => setActiveGalleryIndex(null)}
        >
          <div
            className="relative max-w-6xl xl:max-w-7xl w-full bg-white dark:bg-slate-900 text-on-surface rounded-3xl p-5 sm:p-7 lg:p-8 shadow-2xl border border-slate-200/90 dark:border-slate-800 animate-modal-pop max-h-[92vh] flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar: Title & Controls */}
            <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-surface-container-high shrink-0">
              <div className="pr-4">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-headline-sm text-lg sm:text-2xl font-bold text-on-surface tracking-tight">
                    {activeExp.role}
                  </h3>
                  <span className="bg-secondary-fixed text-on-secondary-fixed text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {activeExp.images.length} {t.experience.photoCount} Dokumentasi
                  </span>
                </div>
                <p className="text-on-surface-variant text-xs sm:text-sm mt-1">
                  <span className="text-secondary font-semibold">{activeExp.org}</span> • {activeExp.period}
                </p>
              </div>

              <button
                onClick={() => setActiveGalleryIndex(null)}
                className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors font-bold text-lg cursor-pointer shrink-0"
                aria-label={t.experience.closeGallery}
              >
                ✕
              </button>
            </div>

            {/* Photos Grid: All photos shown large, high-res & directly visible side-by-side */}
            <div
              className={`grid grid-cols-1 ${
                activeExp.images.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
              } gap-4 sm:gap-6 py-5 sm:py-6`}
            >
              {activeExp.images.map((img, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-md border border-slate-200/80 dark:border-slate-700 h-[280px] sm:h-[380px] lg:h-[460px] flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt={`${activeExp.role} foto dokumentasi ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.parentElement.style.display = 'none'
                    }}
                  />
                  {/* Subtle photo number overlay tag */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full opacity-80 group-hover:opacity-100 transition-opacity">
                    Dokumentasi {i + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom info bar */}
            <div className="pt-3 border-t border-surface-container-high flex items-center justify-between text-xs text-on-surface-variant/70 shrink-0">
              <span>{activeExp.org} • Rekam Jejak Kegiatan</span>
              <span>Tekan Esc atau klik di luar untuk menutup</span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

export default Experience