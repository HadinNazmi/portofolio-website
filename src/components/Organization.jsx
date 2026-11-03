import { useState } from 'react'
import SectionHeader from './common/SectionHeader'

function Organization() {
  const [activeGallery, setActiveGallery] = useState(null)
  const [activePhotoIdx, setActivePhotoIdx] = useState(0)

  const orgExperiences = [
    {
      id: 'cts',
      role: 'Web, Mobile & UI/UX Development',
      organization: 'Caltex Techno Scientist (CTS) PCR',
      period: '2024 — Sekarang',
      badge: 'TECH COMMUNITY',
      image: '/images/experience/CTS.jpg',
      gallery: ['/images/experience/CTS.jpg'],
      desc: 'Unit Kegiatan Mahasiswa (UKM) bidang teknologi untuk belajar, berkolaborasi, dan mengasah keahlian terapan dalam pengembangan web platform modern, mobile apps, dan perancangan UI/UX.',
      tags: ['Web Development', 'Mobile Apps', 'UI/UX Design'],
    },
    {
      id: 'gts',
      role: 'Tim Sosialisasi & Duta Promosi Kampus',
      organization: 'PCR Goes to School (GTS)',
      period: '2024',
      badge: 'CAMPUS AMBASSADOR',
      image: '/images/experience/GTS.jpg',
      gallery: ['/images/experience/GTS.jpg'],
      desc: 'Mempromosikan dan mengedukasi keunggulan Politeknik Caltex Riau ke berbagai sekolah menengah, mempresentasikan kurikulum teknologi terapan, serta mendampingi calon mahasiswa baru.',
      tags: ['Public Speaking', 'Campus Promotion', 'Student Outreach'],
    },
    {
      id: 'sii',
      role: 'Ketua Pelaksana Grand Opening SII',
      organization: 'UKMI Politeknik Caltex Riau',
      period: '2024',
      badge: 'EVENT LEADERSHIP',
      image: '/images/experience/SII-1.JPG',
      gallery: [
        '/images/experience/SII-1.JPG',
        '/images/experience/SII-2.jpg',
        '/images/experience/SII-3.jpg',
      ],
      desc: 'Memimpin perencanaan dan pelaksanaan acara Grand Opening Studi Islam Intensif (SII) tingkat kampus PCR, mengoordinasikan kepanitiaan lintas divisi, dan memfasilitasi ratusan peserta mahasiswa.',
      tags: ['Project Leadership', 'Team Coordination', 'Event Management'],
    },
    {
      id: 'itsa',
      role: 'Anggota Divisi Riset & Teknologi',
      organization: 'ITSA (Informatics Technology Student Association)',
      period: '2024 — 2026',
      badge: 'TECH RESEARCH',
      image: '/images/hero/20251106_095722.jpg',
      gallery: [
        '/images/hero/20251106_095722.jpg',
        '/images/hero/1a021d19-9770-444b-9346-0a48e4923ca4.jpeg',
      ],
      desc: 'Menginisiasi riset arsitektur aplikasi mobile dan modern web, memimpin workshop teknis mendalam tentang Kotlin Android, serta membimbing rekan-rekan mahasiswa dalam pengembangan software.',
      tags: ['Tech Research', 'Workshop Speaker', 'Peer Mentoring'],
    },
    {
      id: 'sawit',
      role: 'Supervisor & Pendamping Matrikulasi',
      organization: 'Beasiswa SDM Sawit BPDPKS',
      period: '2024',
      badge: 'SUPERVISION',
      image: '/images/experience/sawit-1.jpg',
      gallery: [
        '/images/experience/sawit-1.jpg',
        '/images/experience/sawit-2.jpeg',
        '/images/experience/sawit-3.jpeg',
      ],
      desc: 'Mendampingi dan mengawasi jalannya program matrikulasi akademik intensif bagi mahasiswa penerima beasiswa nasional BPDPKS di lingkungan kampus Politeknik Caltex Riau.',
      tags: ['Academic Supervision', 'Mentorship', 'Student Guidance'],
    },
    {
      id: 'kaderisasi',
      role: 'Koordinator Kaderisasi & Pembinaan',
      organization: 'UKMI Politeknik Caltex Riau',
      period: '2024 — 2025',
      badge: 'HUMAN RESOURCE',
      image: '/images/experience/mentoring-1.jpg',
      gallery: [
        '/images/experience/mentoring-1.jpg',
        '/images/experience/mentoring-2.jpg',
      ],
      desc: 'Mengarahkan alur pembinaan internal pengurus dan anggota, merancang kurikulum kaderisasi berjenjang, serta memfasilitasi pengembangan potensi kepemimpinan mahasiswa.',
      tags: ['Talent Development', 'Leadership Training', 'Organizational Strategy'],
    },
  ]

  const openGallery = (exp) => {
    setActiveGallery(exp)
    setActivePhotoIdx(0)
  }

  return (
    <section id="organization" className="py-24 sm:py-32 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <SectionHeader subtitle="LEADERSHIP & COMMUNITY" title="PENGALAMAN ORGANISASI" />

        {/* 3x2 Grid of Organizational Experience Cards (6 Cards Total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orgExperiences.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Card Photo Header */}
              <div
                className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden cursor-pointer"
                onClick={() => openGallery(item)}
              >
                <img
                  src={item.image}
                  alt={item.role}
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Period Badge (Top Right) */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#222222]/85 backdrop-blur-sm text-white px-2.5 py-1 font-heading shadow-sm">
                    {item.period}
                  </span>
                </div>

                {/* Hover Overlay Hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider font-heading">
                    {item.gallery.length > 1
                      ? `${item.gallery.length} Foto Dokumentasi`
                      : 'Lihat Foto'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Organization & Category */}
                  <span className="text-xs font-bold uppercase tracking-wider text-[#666666] font-heading block mb-1">
                    {item.organization}
                  </span>

                  {/* Role Title */}
                  <h3 className="text-base font-extrabold uppercase tracking-wide text-[#222222] font-heading mb-3 line-clamp-2">
                    {item.role}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-body mb-6 line-clamp-4">
                    {item.desc}
                  </p>
                </div>

                {/* Tags & Action Button Row */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-wider bg-[#F0F0F0] text-[#222222] px-2 py-0.5 font-heading border border-[#E5E5E5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => openGallery(item)}
                    className="w-full text-center text-xs font-bold uppercase tracking-wider text-[#222222] hover:text-black py-2 bg-gray-50 hover:bg-gray-100 transition-colors font-heading border border-gray-200/80"
                  >
                    {item.gallery.length > 1
                      ? `Lihat Galeri (${item.gallery.length}) →`
                      : 'Lihat Foto →'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Activity Documentation Photos */}
      {activeGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-sm"
          onClick={() => setActiveGallery(null)}
        >
          <div
            className="bg-white max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveGallery(null)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#222222] p-2"
              aria-label="Tutup galeri"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Heading */}
            <span className="text-xs font-bold uppercase tracking-widest text-[#666666]">
              {activeGallery.organization} · {activeGallery.period}
            </span>
            <h3 className="text-lg sm:text-xl font-bold uppercase font-heading text-[#222222] mt-1 mb-4">
              {activeGallery.role}
            </h3>

            {/* Main Featured Photo */}
            <div className="aspect-video w-full bg-black overflow-hidden mb-4 relative flex items-center justify-center">
              <img
                src={activeGallery.gallery[activePhotoIdx]}
                alt=""
                className="max-w-full max-h-full object-contain"
              />

              {/* Prev / Next Controls if multiple photos */}
              {activeGallery.gallery.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActivePhotoIdx((prev) =>
                        prev === 0 ? activeGallery.gallery.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black text-white flex items-center justify-center rounded-full"
                    aria-label="Previous image"
                  >
                    &#10094;
                  </button>
                  <button
                    onClick={() =>
                      setActivePhotoIdx((prev) =>
                        (prev + 1) % activeGallery.gallery.length
                      )
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black text-white flex items-center justify-center rounded-full"
                    aria-label="Next image"
                  >
                    &#10095;
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation (Only if multiple photos) */}
            {activeGallery.gallery.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {activeGallery.gallery.map((thumb, idx) => (
                  <button
                    key={thumb}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`w-20 h-14 overflow-hidden shrink-0 border-2 transition-all ${
                      activePhotoIdx === idx
                        ? 'border-[#222222] scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={thumb} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Organization
