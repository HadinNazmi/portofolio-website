import { useState } from 'react'
import SectionHeader from './common/SectionHeader'

function Organization() {
  const [activeGallery, setActiveGallery] = useState(null)
  const [activePhotoIdx, setActivePhotoIdx] = useState(0)

  // Pure authentic data: each organization only contains its own genuine documentation photos
  const orgExperiences = [
    {
      id: 'cts',
      role: 'Web, Mobile & UI/UX Development',
      organization: 'Caltex Techno Scientist (CTS) PCR',
      location: 'Politeknik Caltex Riau, Pekanbaru',
      period: '2024 — Sekarang',
      badge: 'TECH COMMUNITY',
      image: '/images/experience/CTS.jpg',
      desc: 'Unit Kegiatan Mahasiswa (UKM) bidang teknologi untuk belajar, berkolaborasi, dan mengasah keahlian terapan dalam pengembangan web platform modern, mobile apps, dan perancangan UI/UX.',
      tags: ['Web Dev', 'Mobile Apps', 'UI/UX Design', 'Fullstack'],
      gallery: [
        {
          src: '/images/experience/CTS.jpg',
          title: 'Caltex Techno Scientist (CTS)',
          subtitle: 'Dokumentasi Divisi Web, Mobile & UI/UX Development',
          icon: 'code',
          iconColor: 'text-rose-500',
          iconBg: 'bg-rose-50',
        },
      ],
    },
    {
      id: 'gts',
      role: 'Tim Sosialisasi & Duta Promosi Kampus',
      organization: 'PCR Goes to School (GTS)',
      location: 'Riau & Sumatera Bagian Tengah',
      period: '2024',
      badge: 'CAMPUS AMBASSADOR',
      image: '/images/experience/GTS.jpg',
      desc: 'Mempromosikan dan mengedukasi keunggulan Politeknik Caltex Riau ke berbagai sekolah menengah, mempresentasikan kurikulum teknologi terapan, serta mendampingi calon mahasiswa baru.',
      tags: ['Public Speaking', 'Outreach', 'Branding', 'Communication'],
      gallery: [
        {
          src: '/images/experience/GTS.jpg',
          title: 'PCR Goes to School (GTS)',
          subtitle: 'Kunjungan Edukasi & Sosialisasi SMK Negeri 4 Pekanbaru',
          icon: 'presentation',
          iconColor: 'text-rose-500',
          iconBg: 'bg-rose-50',
        },
      ],
    },
    {
      id: 'sii',
      role: 'Ketua Pelaksana Grand Opening SII',
      organization: 'UKMI Politeknik Caltex Riau',
      location: 'Auditorium Politeknik Caltex Riau',
      period: '2024',
      badge: 'EVENT LEADERSHIP',
      image: '/images/experience/SII-1.JPG',
      desc: 'Memimpin perencanaan dan pelaksanaan acara Grand Opening Studi Islam Intensif (SII) tingkat kampus PCR, mengoordinasikan kepanitiaan lintas divisi, dan memfasilitasi ratusan peserta mahasiswa.',
      tags: ['Leadership', 'Event Management', 'Coordination', 'Public Speaking'],
      gallery: [
        {
          src: '/images/experience/SII-1.JPG',
          title: 'Grand Opening SII Ceremonial',
          subtitle: 'Dokumentasi Pembukaan di Auditorium Utama PCR',
          icon: 'award',
          iconColor: 'text-rose-500',
          iconBg: 'bg-rose-50',
        },
        {
          src: '/images/experience/SII-2.jpg',
          title: 'Executive Committee Briefing',
          subtitle: 'Rapat Koordinasi & Pleno Panitia Pelaksana',
          icon: 'users',
          iconColor: 'text-amber-500',
          iconBg: 'bg-amber-50',
        },
        {
          src: '/images/experience/SII-3.jpg',
          title: 'Welcome Speech & Keynote',
          subtitle: 'Penyampaian Arahan Ketua Pelaksana Acara',
          icon: 'presentation',
          iconColor: 'text-emerald-500',
          iconBg: 'bg-emerald-50',
        },
      ],
    },
    {
      id: 'itsa',
      role: 'Anggota Divisi Riset & Teknologi',
      organization: 'ITSA (Informatics Technology Student Association)',
      location: 'Jurusan Teknologi Informasi PCR',
      period: '2024 — 2026',
      badge: 'TECH RESEARCH',
      image: '/images/hero/20251106_095722.jpg',
      desc: 'Menginisiasi riset arsitektur aplikasi mobile dan modern web, memimpin workshop teknis mendalam tentang Kotlin Android, serta membimbing rekan-rekan mahasiswa dalam pengembangan software.',
      tags: ['Tech Research', 'Speaker', 'Android Kotlin', 'Software Architecture'],
      gallery: [
        {
          src: '/images/hero/20251106_095722.jpg',
          title: 'ITSA Research & Development',
          subtitle: 'Eksplorasi Framework & Sesi Riset Teknologi Komputasi',
          icon: 'code',
          iconColor: 'text-rose-500',
          iconBg: 'bg-rose-50',
        },
        {
          src: '/images/hero/1a021d19-9770-444b-9346-0a48e4923ca4.jpeg',
          title: 'Technical Sharing & Mentoring',
          subtitle: 'Workshop Hands-on Modern Programming Mahasiswa',
          icon: 'presentation',
          iconColor: 'text-amber-500',
          iconBg: 'bg-amber-50',
        },
      ],
    },
    {
      id: 'sawit',
      role: 'Supervisor & Pendamping Matrikulasi',
      organization: 'Beasiswa SDM Sawit BPDPKS',
      location: 'Politeknik Caltex Riau',
      period: '2024',
      badge: 'SUPERVISION',
      image: '/images/experience/sawit-1.jpg',
      desc: 'Mendampingi dan mengawasi jalannya program matrikulasi akademik intensif bagi mahasiswa penerima beasiswa nasional BPDPKS di lingkungan kampus Politeknik Caltex Riau.',
      tags: ['Supervision', 'Mentorship', 'Academic Guidance', 'Monitoring'],
      gallery: [
        {
          src: '/images/experience/sawit-1.jpg',
          title: 'Matriculation Academic Guidance',
          subtitle: 'Pendampingan Belajar Mahasiswa Penerima Beasiswa',
          icon: 'book',
          iconColor: 'text-rose-500',
          iconBg: 'bg-rose-50',
        },
        {
          src: '/images/experience/sawit-2.jpeg',
          title: 'Supervisi Praktikum Laboratorium',
          subtitle: 'Pemantauan Aktivitas Praktikum & Problem Solving',
          icon: 'code',
          iconColor: 'text-amber-500',
          iconBg: 'bg-amber-50',
        },
        {
          src: '/images/experience/sawit-3.jpeg',
          title: 'Evaluasi Pembelajaran Intensif',
          subtitle: 'Sesi Review Perkembangan Akademik Mahasiswa',
          icon: 'award',
          iconColor: 'text-emerald-500',
          iconBg: 'bg-emerald-50',
        },
      ],
    },
    {
      id: 'kaderisasi',
      role: 'Koordinator Kaderisasi & Pembinaan',
      organization: 'UKMI Politeknik Caltex Riau',
      location: 'Politeknik Caltex Riau',
      period: '2024 — 2025',
      badge: 'HUMAN RESOURCE',
      image: '/images/experience/mentoring-1.jpg',
      desc: 'Mengarahkan alur pembinaan internal pengurus dan anggota, merancang kurikulum kaderisasi berjenjang, serta memfasilitasi pengembangan potensi kepemimpinan mahasiswa.',
      tags: ['Talent Development', 'Leadership', 'People Ops', 'Mentoring'],
      gallery: [
        {
          src: '/images/experience/mentoring-1.jpg',
          title: 'Pembinaan & Kaderisasi Berjenjang',
          subtitle: 'Dokumentasi Program Kaderisasi Anggota UKMI',
          icon: 'users',
          iconColor: 'text-rose-500',
          iconBg: 'bg-rose-50',
        },
        {
          src: '/images/experience/mentoring-2.jpg',
          title: 'Forum Konsolidasi & Leadership',
          subtitle: 'Penyelarasan Visi Kepemimpinan & Penguatan Tim',
          icon: 'award',
          iconColor: 'text-amber-500',
          iconBg: 'bg-amber-50',
        },
      ],
    },
  ]

  const openGallery = (exp) => {
    setActiveGallery(exp)
    setActivePhotoIdx(0)
  }

  // Render SVG icons for gallery pill badge items
  const renderGalleryIcon = (type, colorClass = 'text-gray-800') => {
    switch (type) {
      case 'code':
        return (
          <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${colorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        )
      case 'presentation':
        return (
          <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${colorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        )
      case 'award':
        return (
          <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${colorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        )
      case 'users':
        return (
          <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${colorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      case 'book':
        return (
          <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${colorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )
      case 'sparkles':
      default:
        return (
          <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${colorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
    }
  }

  return (
    <section id="organization" className="py-24 sm:py-32 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <SectionHeader subtitle="LEADERSHIP & COMMUNITY" title="PENGALAMAN ORGANISASI" />

        {/* 3x2 Grid of Immersive Travel/Property Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {orgExperiences.map((item) => (
            <div
              key={item.id}
              onClick={() => openGallery(item)}
              className="group relative w-full aspect-[3/4.2] sm:aspect-[3/4.3] rounded-[32px] overflow-hidden cursor-pointer shadow-[0_14px_38px_rgba(0,0,0,0.12)] hover:shadow-[0_22px_50px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between p-5 sm:p-6 text-white select-none"
            >
              {/* Full-bleed Background Image with smooth zoom */}
              <img
                src={item.image}
                alt={item.role}
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
                }}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Rich Multi-stop Gradient Overlay for Crisp Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 via-45% to-black/25 pointer-events-none" />

              {/* Top Row: Category Badge & Gallery Photo Count */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md text-white/90 px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm font-heading">
                  {item.badge}
                </span>

                <span className="text-[10px] font-bold bg-white/20 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1 font-heading">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {item.gallery.length} Foto
                </span>
              </div>

              {/* Bottom Card Content Area */}
              <div className="relative z-10">
                {/* Carousel Pagination Dots Indicator */}
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-5 h-1.5 rounded-full bg-white transition-all" />
                  {item.gallery.length > 1 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  )}
                  {item.gallery.length > 2 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  )}
                </div>

                {/* Role Title */}
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight leading-snug mb-1.5 group-hover:text-blue-200 transition-colors line-clamp-2">
                  {item.role}
                </h3>

                {/* Organization & Location Subtitle */}
                <p className="text-xs sm:text-sm text-gray-200 font-body flex items-center gap-1.5 mb-3 line-clamp-1">
                  <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="truncate">{item.organization}</span>
                </p>

                {/* Meta Specs Row with Icons & Vertical Divider */}
                <div className="flex items-center text-[10px] sm:text-[11px] text-gray-300 border-t border-white/15 pt-2.5 mb-4 gap-2.5 flex-wrap">
                  {/* Period */}
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                    </svg>
                    <span>{item.period}</span>
                  </div>

                  <span className="text-white/30">|</span>

                  {/* Primary Tag */}
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span>{item.tags[0]}</span>
                  </div>

                  <span className="text-white/30">|</span>

                  {/* Second Tag */}
                  <div className="flex items-center gap-1 truncate max-w-[120px]">
                    <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="truncate">{item.tags[1] || 'PCR'}</span>
                  </div>
                </div>

                {/* Bottom Action Bar: Period Pill & "Buka Galeri" Button */}
                <div className="flex items-center gap-3">
                  <div className="bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold font-heading text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-sm text-center">
                    {item.period.split('—')[0].trim()}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      openGallery(item)
                    }}
                    className="flex-1 bg-white hover:bg-gray-100 text-gray-900 font-bold font-heading text-xs sm:text-sm py-2.5 px-4 rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                  >
                    {item.gallery.length > 1
                      ? `Lihat Galeri (${item.gallery.length})`
                      : 'Lihat Foto'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LUXURY INTERACTIVE GALLERY MODAL */}
      {activeGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-xl animate-fadeIn"
          onClick={() => setActiveGallery(null)}
        >
          <div
            className="bg-[#0f1015] text-white max-w-5xl w-full p-5 sm:p-8 relative shadow-[0_30px_90px_rgba(0,0,0,0.9)] rounded-[32px] sm:rounded-[44px] border border-white/10 max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Elegant Floating Close Button */}
            <button
              onClick={() => setActiveGallery(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-white/15 shadow-xl backdrop-blur-md"
              aria-label="Tutup galeri"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header: Category Badge & Period */}
            <div className="flex items-center gap-2.5 mb-2 pr-14 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white/90 px-3.5 py-1 rounded-full border border-white/15 font-heading">
                {activeGallery.badge}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/10 font-heading">
                {activeGallery.period}
              </span>
              {activeGallery.gallery.length > 1 && (
                <span className="text-[10px] font-bold text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 font-heading">
                  {activePhotoIdx + 1} / {activeGallery.gallery.length} FOTO
                </span>
              )}
            </div>

            {/* Role Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-heading tracking-tight text-white mb-1 pr-14">
              {activeGallery.role}
            </h3>

            {/* Organization & Location Subtitle */}
            <p className="text-xs sm:text-sm text-gray-400 font-body flex items-center gap-1.5 mb-5 sm:mb-6">
              <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{activeGallery.organization}</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">{activeGallery.location}</span>
            </p>

            {/* CASE 1: JIKA HANYA 1 FOTO (Clean Full Card, Tanpa Accordion) */}
            {activeGallery.gallery.length === 1 && (
              <div className="relative w-full h-[340px] sm:h-[430px] md:h-[480px] rounded-[28px] sm:rounded-[36px] overflow-hidden mb-6 shadow-2xl select-none border border-white/10">
                <img
                  src={activeGallery.gallery[0].src}
                  alt={activeGallery.gallery[0].title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                
                {/* Floating Pill Badge di Kiri Bawah */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-full shadow-[0_12px_35px_rgba(0,0,0,0.4)] flex items-center gap-3 sm:gap-3.5 max-w-[90%] sm:max-w-[80%] border border-white/60">
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full ${activeGallery.gallery[0].iconBg} flex items-center justify-center shrink-0 shadow-sm border border-gray-100`}>
                    {renderGalleryIcon(activeGallery.gallery[0].icon, activeGallery.gallery[0].iconColor)}
                  </div>
                  <div className="min-w-0 pr-2">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 font-heading leading-tight truncate">
                      {activeGallery.gallery[0].title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-body leading-tight truncate mt-0.5">
                      {activeGallery.gallery[0].subtitle}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CASE 2: JIKA ADA 2 ATAU LEBIH FOTO (Ultra Smooth Expanding Accordion Slider) */}
            {activeGallery.gallery.length > 1 && (
              <div className="flex gap-2.5 sm:gap-4 items-stretch h-[340px] sm:h-[430px] md:h-[480px] w-full mb-6 select-none overflow-hidden">
                {activeGallery.gallery.map((item, idx) => {
                  const isActive = activePhotoIdx === idx

                  return (
                    <div
                      key={item.src + idx}
                      onClick={() => setActivePhotoIdx(idx)}
                      style={{
                        // Smoothly transition flex-grow without layout thrashing
                        flexGrow: isActive ? 6 : 0,
                        flexShrink: 0,
                        transition: 'flex-grow 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.3s ease, opacity 0.3s ease',
                      }}
                      className={`relative overflow-hidden cursor-pointer ${
                        isActive
                          ? 'min-w-[260px] sm:min-w-[340px] rounded-[28px] sm:rounded-[36px] shadow-2xl cursor-default'
                          : 'w-16 sm:w-20 md:w-24 rounded-[24px] sm:rounded-full opacity-75 hover:opacity-100 hover:scale-[1.02] shadow-md'
                      }`}
                    >
                      {/* Background Image: using min-w-full to prevent jerky aspect shifts */}
                      <img
                        src={item.src}
                        alt={item.title}
                        onError={(e) => {
                          e.currentTarget.src =
                            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
                        }}
                        className="pointer-events-none absolute inset-0 w-full h-full object-cover object-center"
                      />

                      {/* Gradient Overlays */}
                      {isActive ? (
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 via-35% to-transparent" />
                      ) : (
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
                      )}

                      {/* Bottom Floating Pill / Badges */}
                      {isActive ? (
                        /* Active Slide: Floating Luxury Pill Badge at Bottom-Left */
                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4.5 sm:py-3 rounded-full shadow-[0_12px_35px_rgba(0,0,0,0.4)] flex items-center gap-3 sm:gap-3.5 max-w-[90%] sm:max-w-[80%] border border-white/60 animate-fadeIn pointer-events-none">
                          <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full ${item.iconBg} flex items-center justify-center shrink-0 shadow-sm border border-gray-100`}>
                            {renderGalleryIcon(item.icon, item.iconColor)}
                          </div>
                          <div className="min-w-0 pr-2">
                            <h4 className="text-xs sm:text-sm font-bold text-gray-900 font-heading leading-tight truncate">
                              {item.title}
                            </h4>
                            <p className="text-[10px] sm:text-xs text-gray-500 font-body leading-tight truncate mt-0.5">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      ) : (
                        /* Inactive Slide: Circular Floating Icon at the Bottom */
                        <div className="pointer-events-none absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-xl flex items-center justify-center border border-white/70">
                          {renderGalleryIcon(item.icon, item.iconColor)}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            {/* Bottom Info Section: Role Description & Competencies */}
            <div className="p-4 sm:p-5 bg-white/[0.03] rounded-2xl sm:rounded-3xl border border-white/5">
              <p className="text-xs sm:text-sm text-gray-300 font-body leading-relaxed mb-4">
                {activeGallery.desc}
              </p>

              {/* Competency Badges & Interactive Hint */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-heading mr-1">
                    KOMPETENSI:
                  </span>
                  {activeGallery.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-white/10 font-heading"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {activeGallery.gallery.length > 1 && (
                  <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-gray-400 font-body italic">
                    <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span>Klik kartu samping untuk berpindah foto secara mulus</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Organization
