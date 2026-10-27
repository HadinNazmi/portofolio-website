import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

const experiencesList = [
  {
    role: "Koordinator Kaderisasi dan Pembinaan",
    org: "UKMI Politeknik Caltex Riau",
    period: "2024 – 2025",
    icon: "groups",
    iconBg: "bg-secondary-fixed text-on-secondary-fixed",
    statusBadge: "Dokumentasi • Internal",
    statusType: "verified",
    description:
      "Leading leadership development programs, organizational strategy, and member onboarding.",
    images: [
      "/experience/ukmi-kaderisasi-1.png",
      "/experience/ukmi-kaderisasi-2.png",
      "/experience/ukmi-kaderisasi-3.png"
    ]
  },
  {
    role: "Anggota Divisi Riset dan Teknologi",
    org: "ITSA (Informatics Engineering Student Association)",
    period: "2025 – 2026",
    icon: "biotech",
    iconBg: "bg-primary-container text-secondary-fixed",
    statusBadge: "Active Term",
    statusType: "active",
    description:
      "Managing campus tech challenges, student project repositories, and technical workshops.",
    images: [
      "/experience/itsa-ristek-1.png",
      "/experience/itsa-ristek-2.png"
    ]
  },
  {
    role: "Supervisor Matrikulasi Beasiswa SDM Sawit BPDPKS",
    org: "BPDPKS & Politeknik Caltex Riau",
    period: "2024",
    icon: "workspace_premium",
    iconBg: "bg-surface-container-highest text-on-surface",
    statusBadge: "Completed",
    statusType: "completed",
    description:
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
    icon: "campaign",
    iconBg: "bg-secondary-fixed text-on-secondary-fixed",
    statusBadge: "Completed",
    statusType: "completed",
    description:
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
    icon: "menu_book",
    iconBg: "bg-primary-container text-secondary-fixed",
    statusBadge: "Completed",
    statusType: "completed",
    description:
      "Mentored junior engineering cohorts in critical problem solving, leadership character, and study frameworks.",
    images: [
      "/images/experience/mentoring-1.jpg",
      "/images/experience/mentoring-2.jpg"
    ]
  },
  {
    role: "Koordinator Publikasi Mubes ITSA",
    org: "ITSA",
    period: "2024",
    icon: "share",
    iconBg: "bg-surface-container-highest text-on-surface",
    statusBadge: "Completed",
    statusType: "completed",
    description:
      "Led digital campaign media production, event streaming coverage, and documentation archiving.",
    images: [
      "/experience/mubes-itsa-1.png",
      "/experience/mubes-itsa-2.png"
    ]
  }
]

function Experience() {
  const [ref, visible] = useScrollReveal()
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null)
  const { t } = useLanguage()

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

      <div className="space-y-space-md">
        {experiencesList.map((exp, idx) => (
          <div
            key={idx}
            className="bg-surface-container-lowest p-space-lg rounded-3xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors"
          >
            <div className="flex items-start gap-space-md">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${exp.iconBg}`}
              >
                <span className="material-symbols-outlined text-[24px]">{exp.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    {exp.role}
                  </h3>
                  <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-semibold">
                    {exp.period}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  <span className="font-semibold text-on-surface">{exp.org}</span> • {exp.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
              {exp.images && exp.images.length > 0 && (
                <button
                  onClick={() => setActiveGalleryIndex(idx)}
                  className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors font-medium flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">photo_library</span>
                  <span>{exp.images.length} {t.experience.photoCount}</span>
                </button>
              )}

              {exp.statusType === 'active' ? (
                <span className="bg-surface-container-low px-space-sm py-1 rounded-full font-label-sm text-label-sm text-on-surface flex items-center gap-1.5 font-bold">
                  {exp.statusBadge}
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-pulse"></span>
                </span>
              ) : exp.statusType === 'completed' ? (
                <span className="bg-secondary-fixed text-on-secondary-fixed font-bold px-space-sm py-1 rounded-full font-label-sm text-label-sm">
                  {t.experience.statusCompleted}
                </span>
              ) : (
                <span className="bg-surface-container-low px-space-sm py-1 rounded-full font-label-sm text-label-sm text-on-surface flex items-center gap-1 font-semibold">
                  <span>{exp.statusBadge}</span>
                  <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Lightbox Modal */}
      {activeExp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-md"
          onClick={() => setActiveGalleryIndex(null)}
        >
          <div
            className="bg-surface-container-lowest max-w-3xl w-full rounded-3xl p-space-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-space-md border-b border-surface-container-high pb-space-sm">
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
                className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors font-bold"
                aria-label={t.experience.closeGallery}
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto p-1">
              {activeExp.images.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden aspect-video bg-surface-container-low shadow-sm">
                  <img
                    src={img}
                    alt={`${activeExp.role} photo ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
    </section>
  )
}

export default Experience