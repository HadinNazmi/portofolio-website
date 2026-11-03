import { useState, useEffect, useRef, useCallback } from 'react'
import { useLanguage } from '../context/LanguageContext'

/**
 * Interactive 3D Portfolio Folder & Project Showcase
 * Based on the reference design:
 * - Ambient architectural frame with grid lines and technical corner markers
 * - Frosted glassmorphism "Portfolio" folder with tab, "Open Folder" button, and ↗ arrow
 * - Hover / interactive trigger: Project cards pop out / emerge upwards from the folder pocket
 * - Auto-sliding carousel: Slides projects continuously/automatically
 * - Grayscale to Full Color: Cards start monochrome (black & white) and smoothly transition to full color on cursor hover
 * - Clickable: Clicking any card opens a comprehensive Project Detail Modal with live links & specs
 */
function Projects() {
  const { lang } = useLanguage()

  // Project data repository
  const projects = [
    {
      id: 'bank-jatah-app',
      index: '01',
      title: 'BANK JATAH INDONESIA',
      subtitle: lang === 'id' ? 'Aplikasi Micro-Banking & Tabungan Otomatis' : 'Local Micro-Banking & Automated Savings App',
      category: 'MOBILE ENGINEERING',
      platform: 'Android Native · Kotlin',
      desc:
        lang === 'id'
          ? 'Aplikasi native Android perbankan mikro UMKM dengan otentikasi biometrik, pembayaran QRIS instan, dan ledger tabungan terdistribusi.'
          : 'Production Android native micro-banking app for SMBs featuring biometric authentication, instant QRIS payments, and automated ledger sync.',
      highlights: [
        lang === 'id' ? 'Otentikasi Sidik Jari & Biometrik' : 'Biometric Security Protocol',
        lang === 'id' ? 'Transaksi QRIS Dinamis Real-Time' : 'Real-time Dynamic QRIS Engine',
        lang === 'id' ? 'Sinkronisasi Ledger Otomatis' : 'Distributed Balance Synchronization',
        lang === 'id' ? 'Arsitektur Jetpack Compose Modern' : 'Modern Jetpack Compose UI Runtime',
      ],
      tags: ['Kotlin', 'Jetpack Compose', 'Supabase', 'PostgreSQL', 'Coroutines'],
      image: '/projects/aplikasiBJI.jpeg',
      fallbackImage: '/images/bankjatahlogo.png',
      badge: 'PRODUCTION APP',
      year: '2024 — PRESENT',
      liveUrl: 'https://www.bjindonesia.online/aplikasi',
      githubUrl: 'https://github.com/HadinNazmi',
      accentColor: '#f59e0b', // Amber/Gold
    },
    {
      id: 'karyariau-portal',
      index: '02',
      title: 'KARYARIAU PORTAL',
      subtitle: lang === 'id' ? 'Marketplace Budaya & Escrow Terdesentralisasi' : 'Cultural Artisan Marketplace & Escrow Portal',
      category: 'ENTERPRISE WEB',
      platform: 'Full-Stack · Laravel & Tailwind',
      desc:
        lang === 'id'
          ? 'Marketplace industri kreatif dan arsip budaya yang menghubungkan ratusan pengrajin di Riau dengan sistem escrow otomatis dan katalog warisan motif Melayu.'
          : 'Creative cultural marketplace and regional archive connecting artisans with smart escrow, automated courier tracking, and digital textile preservation.',
      highlights: [
        lang === 'id' ? 'Escrow Terdesentralisasi & Verifikasi Pengrajin' : 'Decentralized Escrow System',
        lang === 'id' ? 'Integrasi Tracking Ekspedisi Otomatis' : 'Automated Courier Tracking API',
        lang === 'id' ? 'Arsip Digital Motif Kain & Kriya Melayu' : 'Digital Cultural Pattern Archive',
        lang === 'id' ? 'Optimasi Query SQL Skala Besar' : 'High-Throughput Relational Architecture',
      ],
      tags: ['Laravel', 'Tailwind CSS', 'MySQL', 'REST API', 'Alpine.js'],
      image: '/projects/sic.png',
      fallbackImage: '/images/hero.png',
      badge: 'REGIONAL ARCHIVE',
      year: '2024',
      liveUrl: 'https://github.com/HadinNazmi',
      githubUrl: 'https://github.com/HadinNazmi',
      accentColor: '#3b82f6', // Blue
    },
    {
      id: 'pulsefit-tracker',
      index: '03',
      title: 'PULSEFIT TRACKER',
      subtitle: lang === 'id' ? 'Telemetri Latihan & Pemantau Kebugaran' : 'Cross-Platform Workout Telemetry & Companion',
      category: 'CROSS-PLATFORM MOBILE',
      platform: 'Flutter · Dart & Node.js',
      desc:
        lang === 'id'
          ? 'Aplikasi telemetri latihan cross-platform dengan antrean data offline-first, sinkronisasi SQLite lokal, dan visualisasi performa grafis granular.'
          : 'Cross-platform workout telemetry companion with offline-first data caching, SQLite sync, and granular real-time progress SVG charting.',
      highlights: [
        lang === 'id' ? 'Arsitektur Offline-First & Antrean Sinkron' : 'Offline-First SQLite Cache Layer',
        lang === 'id' ? 'Mesin Grafik SVG Telemetri Denyut Nadi' : 'Granular SVG Metric Engine',
        lang === 'id' ? 'Pelacakan Pengulangan & Kalori Real-Time' : 'Real-time Rep & Calorie Tracker',
        lang === 'id' ? 'Desain Neumorphic & Micro-Interactions' : 'Fluid Reactive Flutter Architecture',
      ],
      tags: ['Flutter', 'Dart', 'Node.js', 'SQLite', 'Charts'],
      image: '/projects/game.jpg',
      fallbackImage: '/images/hero.png',
      badge: 'MOBILE TELEMETRY',
      year: '2023',
      liveUrl: 'https://github.com/HadinNazmi',
      githubUrl: 'https://github.com/HadinNazmi',
      accentColor: '#10b981', // Emerald
    },
    {
      id: 'sigap-ai',
      index: '04',
      title: 'SIGAP AI DISASTER SYSTEM',
      subtitle: lang === 'id' ? 'Sistem Prediksi Bencana Cerdas & Rute Evakuasi' : 'Intelligent Hazard Prediction & Evacuation Routing',
      category: 'AI TELEMETRY & WEB',
      platform: 'Next.js · Python & FastAPI',
      desc:
        lang === 'id'
          ? 'Platform prediksi bencana cerdas pemenang Juara 1 KMIPN VII dengan sensor geospasial real-time, pengelompokan bahaya, dan penentuan rute evakuasi terdekat dinamis.'
          : 'Intelligent hazard prediction and evacuation system awarded 1st Place at KMIPN VII, integrating geospatial clustering and dynamic shortest-path routing.',
      highlights: [
        lang === 'id' ? 'Juara 1 Nasional KMIPN VII Inovasi' : '1st Winner KMIPN VII National Contest',
        lang === 'id' ? 'Algoritma Rute Evakuasi Terpendek A*' : 'Shortest Path Dynamic Evacuation Engine',
        lang === 'id' ? 'Klaster Sensor Spasial Berkecepatan Tinggi' : 'Real-time Geospatial Sensor Network',
        lang === 'id' ? 'Gateway Peringatan Dini Multi-Kanal' : 'Low-Latency Broadcast Gateway',
      ],
      tags: ['Next.js', 'Python', 'FastAPI', 'ML Telemetry', 'Leaflet GIS'],
      image: '/images/achievements/kmipn-1.png',
      fallbackImage: '/images/hero.png',
      badge: 'KMIPN 1ST WINNER',
      year: '2024',
      liveUrl: 'https://github.com/HadinNazmi',
      githubUrl: 'https://github.com/HadinNazmi',
      accentColor: '#ec4899', // Pink
    },
    {
      id: 'bank-jatah-web',
      index: '05',
      title: 'BANK JATAH CORPORATE PORTAL',
      subtitle: lang === 'id' ? 'Portal Perusahaan & Konsol Administrasi' : 'Corporate Web Platform & Executive Admin Hub',
      category: 'ENTERPRISE ARCHITECTURE',
      platform: 'React · Tailwind CSS & Next.js',
      desc:
        lang === 'id'
          ? 'Website profil korporat dan portal nasabah berkinerja tinggi dengan keamanan enkripsi end-to-end, visualisasi data interaktif, dan performa Lighthouse 98+.'
          : 'High-performance corporate landing and administrative dashboard equipped with end-to-end data integrity, responsive metrics, and 98+ Lighthouse scores.',
      highlights: [
        lang === 'id' ? 'Waktu Muat Cepat < 0.8 Detik' : 'Sub-Second Page Load Optimization',
        lang === 'id' ? 'Panel Konsol Admin Terpusat' : 'Centralized SMB Monitoring Hub',
        lang === 'id' ? 'Desain Responsif Mobile-First' : 'Adaptive Mobile-First Geometry',
        lang === 'id' ? 'SEO & OpenGraph Otomatis' : 'Automated SEO & Accessibility (WCAG 2.1)',
      ],
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Analytics'],
      image: '/projects/webprofileBJI.jpg',
      fallbackImage: '/images/bankjatahlogo.png',
      badge: 'ENTERPRISE SUITE',
      year: '2024',
      liveUrl: 'https://www.bjindonesia.online',
      githubUrl: 'https://github.com/HadinNazmi',
      accentColor: '#8b5cf6', // Violet
    },
    {
      id: 'gineco-iot',
      index: '06',
      title: 'GINECO MEDICAL DIAGNOSTICS',
      subtitle: lang === 'id' ? 'Telemetri Kesehatan & IoT Diagnostik' : 'IoT Medical Diagnostic & Telemetry Companion',
      category: 'HARDWARE & TELEMETRY',
      platform: 'IoT Embedded · ESP32 & Web App',
      desc:
        lang === 'id'
          ? 'Sistem telemetri medis IoT untuk pemantauan parameter vital pasien jarak jauh dengan sinkronisasi cloud real-time dan notifikasi anomali otomatis.'
          : 'IoT hardware and cloud companion for real-time patient vital telemetry, automated threshold alerts, and cloud synchronization.',
      highlights: [
        lang === 'id' ? 'Inovasi Finalis Samsung Innovation Campus' : 'SIC Innovation Awardee',
        lang === 'id' ? 'Sensor Telemetri Presisi ESP32' : 'High-Precision Microcontroller Pipeline',
        lang === 'id' ? 'Web Dashboard Real-Time WebSocket' : 'Sub-50ms WebSocket Broadcast Stream',
        lang === 'id' ? 'Penyimpanan Data Riwayat Pasien' : 'Encrypted Medical Data Persistence',
      ],
      tags: ['ESP32', 'C++', 'Node.js', 'WebSocket', 'Web App'],
      image: '/images/achievements/gineco-1.jpeg',
      fallbackImage: '/images/hero.png',
      badge: 'SIC INNOVATION',
      year: '2024',
      liveUrl: 'https://github.com/HadinNazmi',
      githubUrl: 'https://github.com/HadinNazmi',
      accentColor: '#06b6d4', // Cyan
    },
  ]

  // Folder open / cards emerged state
  // Open on hover OR user click
  const [isOpen, setIsOpen] = useState(false)
  const [isManualPinned, setIsManualPinned] = useState(false)
  const isEmerged = isOpen || isManualPinned

  // Auto-sliding state
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredCardId, setHoveredCardId] = useState(null)

  // Selected project for modal detail
  const [selectedProject, setSelectedProject] = useState(null)

  // Next / Prev slide handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }, [projects.length])

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }, [projects.length])

  // Automatic slide timer:
  // Starts sliding when folder is open / emerged and not paused by cursor
  useEffect(() => {
    if (!isEmerged || isPaused) return

    const interval = setInterval(() => {
      handleNext()
    }, 3200)

    return () => clearInterval(interval)
  }, [isEmerged, isPaused, handleNext])

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section
      id="projects"
      className="relative w-full min-h-[960px] lg:min-h-screen py-16 px-3 sm:px-6 lg:px-8 bg-[#f8f6f0] text-[#16171a] flex flex-col justify-between items-center select-none overflow-hidden"
    >
      {/* Background Ambience: Subtle warm grid + soft terracotta backlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(194, 65, 12, 0.05) 0%, transparent 65%),
            linear-gradient(to right, rgba(22, 23, 26, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22, 23, 26, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 36px 36px, 36px 36px',
        }}
      />

      {/* Large subtle background watermark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-sans font-black text-[22vw] leading-none text-[#16171a]/[0.022] select-none pointer-events-none z-0 tracking-tighter"
      >
        PORTFOLIO
      </div>

      {/* ================= 1. SECTION HEADER ================= */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#e6e2d8]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#c2410c] animate-ping" />
            <span className="font-mono uppercase tracking-[0.22em] text-[#c2410c] text-[10px] font-bold">
              PORTFOLIO SHOWCASE // 03
            </span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171a] tracking-tight uppercase leading-none">
            {lang === 'id' ? 'PROYEK PILIHAN' : 'SELECTED PROJECTS'}
          </h2>
        </div>

        {/* Micro Interaction Hint & Slide Counter */}
        <div className="flex items-center gap-4 sm:gap-6 self-start sm:self-auto">
          <div className="flex flex-col sm:items-end">
            <span className="font-mono text-xs uppercase tracking-widest text-[#16171a] font-bold">
              PROJECT 0{activeIndex + 1} / 0{projects.length}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#5e616b] flex items-center gap-1.5 mt-0.5 font-medium">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isEmerged
                    ? isPaused
                      ? 'bg-[#c2410c]'
                      : 'bg-[#15803d] animate-pulse'
                    : 'bg-[#767882]'
                }`}
              />
              {isEmerged
                ? isPaused
                  ? lang === 'id'
                    ? 'DIHENTIKAN SEMENTARA'
                    : 'PAUSED (HOVERED)'
                  : lang === 'id'
                  ? 'SLIDE OTOMATIS BERJALAN'
                  : 'AUTO-SLIDING ACTIVE'
                : lang === 'id'
                ? 'ARAHKAN KURSOR KE FOLDER'
                : 'HOVER FOLDER TO REVEAL'}
            </span>
          </div>

          {/* Quick Manual Navigation Controls */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Project"
              className="w-9 h-9 rounded-full border border-[#e6e2d8] bg-white hover:bg-[#efece4] hover:border-[#c2410c] text-[#16171a] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Project"
              className="w-9 h-9 rounded-full border border-[#e6e2d8] bg-white hover:bg-[#efece4] hover:border-[#c2410c] text-[#16171a] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ================= 2. MAIN SHOWCASE CANVAS ================= */}
      {/* Inspired directly by user reference image in warm studio aesthetic */}
      <div className="relative z-10 w-full max-w-5xl my-auto py-8 sm:py-12 flex flex-col items-center justify-center">
        
        {/* Device / Presentation Frame Container */}
        <div
          className="relative w-full max-w-[680px] min-h-[580px] sm:min-h-[640px] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col justify-between items-center transition-all duration-500 overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #efece4 0%, #e6e2d8 100%)',
            boxShadow: '0 25px 50px -12px rgba(22, 23, 26, 0.1), 0 0 0 1px #dfdbd0, inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => {
            if (!isManualPinned) setIsOpen(false)
          }}
        >
          {/* Subtle Grid inside frame matching reference */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[32px] sm:rounded-[40px]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(194, 65, 12, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(194, 65, 12, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: '28px 28px',
            }}
          />

          {/* Architectural Technical Lines & Corner Dots */}
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full border border-[#c2410c]/40 bg-[#c2410c]/20" />
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full border border-[#c2410c]/40 bg-[#c2410c]/20" />
          <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full border border-[#c2410c]/40 bg-[#c2410c]/20" />
          <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full border border-[#c2410c]/40 bg-[#c2410c]/20" />
          <div className="absolute inset-x-8 top-5 h-[1px] bg-gradient-to-r from-transparent via-[#c2410c]/20 to-transparent" />
          <div className="absolute inset-x-8 bottom-5 h-[1px] bg-gradient-to-r from-transparent via-[#c2410c]/20 to-transparent" />

          {/* ----- TOP BADGE: "DESIGN PROFESSIONAL" STYLE ----- */}
          <div className="relative z-20 flex items-center justify-center">
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#c2410c] via-[#ea580c] to-[#c2410c] shadow-[0_4px_12px_rgba(194,65,12,0.3)] border border-[#fdba74]/50 flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                ⚡
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wider">
                {lang === 'id' ? 'ARSITEKTUR MOBILE & FULL-STACK' : 'FULL-STACK & MOBILE ENGINEERING ARCHIVE'}
              </span>
            </div>
          </div>

          {/* ----- CENTER: INTERACTIVE 3D FOLDER + EMERGING AUTO-SLIDING CARDS ----- */}
          <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center my-6 min-h-[380px]">
            
            {/* Ambient backlight behind folder/cards */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full transition-all duration-700 pointer-events-none ${
                isEmerged
                  ? 'bg-[#ea580c]/20 blur-3xl scale-125'
                  : 'bg-[#ea580c]/10 blur-2xl scale-95'
              }`}
            />

            {/* --- CARDS CONTAINER (EMERGES UPWARDS ON HOVER / OPEN) --- */}
            <div
              className={`relative w-full max-w-[480px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center ${
                isEmerged
                  ? '-translate-y-16 sm:-translate-y-20 z-10'
                  : 'translate-y-10 z-0'
              }`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Emerging Cards Deck / Carousel */}
              <div className="relative w-full h-[290px] sm:h-[320px] flex items-center justify-center">
                {projects.map((proj, idx) => {
                  const count = projects.length
                  let offset = (idx - activeIndex + count) % count
                  if (offset > count / 2) offset -= count

                  const isVisible = Math.abs(offset) <= 2
                  if (!isVisible) return null

                  const isCenter = offset === 0
                  const isHovered = hoveredCardId === proj.id

                  let translateX = 0
                  let translateY = 0
                  let rotateZ = 0
                  let scale = 1
                  let opacity = 1
                  let zIndex = 10 - Math.abs(offset)

                  if (isEmerged) {
                    translateX = offset * (window.innerWidth < 640 ? 120 : 170)
                    translateY = Math.abs(offset) * 12
                    rotateZ = offset * 6
                    scale = isCenter ? 1 : 0.88 - Math.abs(offset) * 0.05
                    opacity = Math.abs(offset) >= 2 ? 0.35 : 1
                  } else {
                    translateX = offset * 36
                    translateY = 40 + Math.abs(offset) * 10
                    rotateZ = offset * 5
                    scale = 0.85
                    opacity = isCenter ? 0.9 : 0.6
                  }

                  return (
                    <div
                      key={proj.id}
                      onClick={() => setSelectedProject(proj)}
                      onMouseEnter={() => setHoveredCardId(proj.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                      style={{
                        transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotateZ}deg) scale(${scale})`,
                        zIndex,
                        opacity,
                        transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease, filter 500ms ease',
                      }}
                      className={`absolute w-[220px] sm:w-[250px] h-[270px] sm:h-[300px] rounded-2xl cursor-pointer group shadow-xl overflow-hidden border bg-white ${
                        isCenter
                          ? 'border-[#c2410c]/50 shadow-[0_15px_30px_rgba(22,23,26,0.18)]'
                          : 'border-[#dfdbd0] shadow-[0_10px_20px_rgba(22,23,26,0.1)]'
                      } ${
                        isHovered ? 'ring-2 ring-[#c2410c] scale-[1.04] -translate-y-3' : ''
                      }`}
                    >
                      {/* CARD BACKGROUND IMAGE:
                          Default: Monokrom hitam-putih
                          Hover: Berubah menjadi warna penuh yang tajam
                      */}
                      <div className="absolute inset-0 overflow-hidden bg-[#16171a]">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className={`w-full h-full object-cover object-top transition-all duration-500 ease-out ${
                            isHovered
                              ? 'grayscale-0 contrast-105 brightness-105 scale-110'
                              : 'grayscale contrast-110 brightness-90 group-hover:grayscale-0 group-hover:scale-105'
                          }`}
                          onError={(e) => {
                            if (proj.fallbackImage && e.target.src !== proj.fallbackImage) {
                              e.target.src = proj.fallbackImage
                            }
                          }}
                        />
                        {/* Gradient shade overlays */}
                        <div
                          className={`absolute inset-0 transition-opacity duration-300 ${
                            isHovered
                              ? 'bg-gradient-to-t from-[#16171a]/95 via-[#16171a]/40 to-transparent'
                              : 'bg-gradient-to-t from-[#16171a]/95 via-[#16171a]/50 to-[#16171a]/20'
                          }`}
                        />
                      </div>

                      {/* Card Content Overlay */}
                      <div className="relative z-10 w-full h-full p-4 flex flex-col justify-between text-left">
                        {/* Top: Index & Badge */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-amber-300 border border-amber-400/30">
                            {proj.index} // {proj.badge}
                          </span>
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                              isHovered
                                ? 'bg-[#c2410c] text-white scale-110 rotate-45'
                                : 'bg-black/50 text-white/80'
                            }`}
                          >
                            ↗
                          </span>
                        </div>

                        {/* Bottom: Title, Subtitle, Tags */}
                        <div className="flex flex-col gap-1.5">
                          <span className="font-mono text-[8px] text-zinc-300 uppercase tracking-widest font-semibold">
                            {proj.category}
                          </span>
                          <h3 className="font-sans font-black text-sm sm:text-base text-white uppercase leading-tight line-clamp-1 group-hover:text-amber-200 transition-colors">
                            {proj.title}
                          </h3>
                          <p className="font-sans text-[10px] text-zinc-300 line-clamp-2 leading-relaxed font-normal">
                            {proj.desc}
                          </p>

                          {/* Tech chips */}
                          <div className="flex flex-wrap gap-1 pt-1">
                            {proj.tags.slice(0, 3).map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className={`font-mono text-[7px] uppercase tracking-wider px-1.5 py-0.5 rounded transition-colors ${
                                  isHovered
                                    ? 'bg-[#c2410c] text-white'
                                    : 'bg-white/15 text-zinc-200'
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hover Glow Edge */}
                      <div
                        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 border-2 rounded-2xl ${
                          isHovered
                            ? 'border-[#c2410c] opacity-100'
                            : 'border-transparent opacity-0'
                        }`}
                      />
                    </div>
                  )
                })}
              </div>
            </div>

            {/* --- 3D FROSTED GLASS FOLDER (FRONT POCKET) --- */}
            {/* Matches reference with warm amber/terracotta frosted glass */}
            <div
              className={`relative z-20 w-[300px] sm:w-[360px] h-[190px] sm:h-[210px] rounded-3xl p-5 flex flex-col justify-between cursor-pointer transition-all duration-500 select-none ${
                isEmerged
                  ? 'translate-y-4 shadow-[0_25px_45px_rgba(194,65,12,0.25)] scale-100'
                  : 'translate-y-0 shadow-[0_20px_35px_rgba(194,65,12,0.2)] scale-[1.02]'
              }`}
              style={{
                background:
                  'linear-gradient(135deg, rgba(254, 215, 170, 0.75) 0%, rgba(251, 146, 60, 0.5) 45%, rgba(194, 65, 12, 0.6) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(251, 146, 60, 0.6)',
                boxShadow:
                  '0 20px 45px -10px rgba(194, 65, 12, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.8), inset 0 -1px 2px rgba(0, 0, 0, 0.15)',
              }}
              onClick={() => {
                setIsManualPinned((prev) => !prev)
                setIsOpen((prev) => !prev)
              }}
            >
              {/* Folder Top Tab & Open Button */}
              <div className="flex items-center justify-between">
                {/* Pill "Open Folder" button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsManualPinned((prev) => !prev)
                    setIsOpen((prev) => !prev)
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#c2410c] to-[#ea580c] hover:from-[#9a3412] hover:to-[#c2410c] text-white font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-[0_4px_12px_rgba(194,65,12,0.4)] border border-[#fdba74]/50 flex items-center gap-1.5 transition-transform active:scale-95"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>
                    {isEmerged
                      ? lang === 'id'
                        ? 'TUTUP FOLDER'
                        : 'CLOSE FOLDER'
                      : lang === 'id'
                      ? 'BUKA FOLDER'
                      : 'OPEN FOLDER'}
                  </span>
                </button>

                {/* Arrow diagonal ↗ in top right */}
                <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                  ↗
                </div>
              </div>

              {/* Folder Center: Big Bold "Portfolio" Typography */}
              <div className="flex flex-col items-center justify-center my-auto pt-2">
                <span className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight drop-shadow-[0_2px_8px_rgba(194,65,12,0.4)]">
                  Portfolio
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#fff7ed] font-semibold mt-1">
                  {isEmerged
                    ? lang === 'id'
                      ? 'KLIK KARTU UNTUK LIHAT DETAIL'
                      : 'CLICK CARD TO INSPECT DETAIL'
                    : lang === 'id'
                    ? 'ARAHKAN MOUSE KE SINI'
                    : 'HOVER OR CLICK TO EXPAND'}
                </span>
              </div>

              {/* Folder Bottom Indicators */}
              <div className="flex items-center justify-between text-[9px] font-mono text-amber-950 font-bold border-t border-amber-900/15 pt-2">
                <span>0{projects.length} PROJECTS</span>
                <span>AUTO-SLIDE READY</span>
              </div>
            </div>

          </div>

          {/* ----- BOTTOM BADGE: PROFILE PILL ----- */}
          <div className="relative z-20 flex items-center justify-center">
            <div className="px-4 py-1.5 rounded-full bg-white border border-[#dfdbd0] shadow-xs flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#c2410c] flex items-center justify-center text-[10px] text-white font-bold">
                ▲
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#16171a] uppercase tracking-wider">
                Hadin Nazmi (Software Engineer)
              </span>
            </div>
          </div>

          {/* Bottom Corner Control Icons */}
          <button
            type="button"
            onClick={() => {
              setIsManualPinned((prev) => !prev)
              setIsOpen((prev) => !prev)
            }}
            title="Expand / Collapse Folder"
            className="absolute bottom-5 right-5 w-8 h-8 rounded-full border border-[#dfdbd0] bg-white hover:bg-[#efece4] hover:border-[#c2410c] text-[#16171a] flex items-center justify-center text-xs transition-all duration-200 cursor-pointer shadow-xs"
          >
            ⛶
          </button>

          <button
            type="button"
            onClick={() => handleNext()}
            title="Slide to Next Card"
            className="absolute bottom-5 left-5 w-8 h-8 rounded-full border border-[#dfdbd0] bg-white hover:bg-[#efece4] hover:border-[#c2410c] text-[#16171a] flex items-center justify-center text-xs transition-all duration-200 cursor-pointer shadow-xs"
          >
            ↻
          </button>

        </div>

      </div>

      {/* ================= 3. BOTTOM PAGINATION & METRICS ================= */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#e6e2d8]">
        
        {/* Navigation Dots */}
        <div className="flex items-center gap-2">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => {
                setActiveIndex(idx)
                setIsOpen(true)
              }}
              aria-label={`Jump to ${proj.title}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === idx
                  ? 'w-8 h-2 bg-[#c2410c]'
                  : 'w-2 h-2 bg-[#dfdbd0] hover:bg-[#767882]'
              }`}
            />
          ))}
        </div>

        {/* Status text */}
        <div className="flex items-center gap-4 text-[10px] font-mono text-[#5e616b] uppercase tracking-widest text-center sm:text-right font-medium">
          <span>{lang === 'id' ? 'SLIDE OTOMATIS & INTERAKTIF' : 'INFINITE LOOP · INTERACTIVE REVEAL'}</span>
          <span className="hidden sm:inline font-bold text-[#c2410c]">
            0{activeIndex + 1} // {projects[activeIndex]?.title}
          </span>
        </div>

      </div>

      {/* ================= 4. PROJECT DETAIL MODAL (CLICKABLE) ================= */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#16171a]/60 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#fcfbf9] border border-[#e6e2d8] text-[#16171a] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(22,23,26,0.2)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header Image with Close Button */}
            <div className="relative w-full h-56 sm:h-72 bg-[#16171a] shrink-0 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-top filter grayscale-0 contrast-105"
                onError={(e) => {
                  if (selectedProject.fallbackImage && e.target.src !== selectedProject.fallbackImage) {
                    e.target.src = selectedProject.fallbackImage
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbf9] via-transparent to-black/30" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close Modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-[#c2410c] hover:text-white text-[#16171a] border border-[#e6e2d8] flex items-center justify-center text-sm font-bold transition-all cursor-pointer shadow-sm"
              >
                ✕
              </button>

              {/* Floating badges on photo */}
              <div className="absolute bottom-4 left-6 flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#c2410c] text-white shadow-sm">
                  {selectedProject.index} // {selectedProject.badge}
                </span>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/90 border border-[#e6e2d8] text-[#16171a] font-semibold">
                  {selectedProject.year}
                </span>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-5">
              
              {/* Title & Platform */}
              <div>
                <span className="font-mono text-[11px] text-[#c2410c] uppercase tracking-widest font-bold block mb-1">
                  {selectedProject.category} · {selectedProject.platform}
                </span>
                <h3 className="font-sans font-black text-2xl sm:text-3xl text-[#16171a] uppercase tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="font-mono text-xs text-[#5e616b] uppercase tracking-wider mt-1 font-semibold">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Full Description */}
              <p className="font-sans text-sm text-[#4b4d54] leading-relaxed font-normal">
                {selectedProject.desc}
              </p>

              {/* Key Architecture Highlights */}
              <div className="bg-[#efece4] border border-[#dfdbd0] rounded-2xl p-4 sm:p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c2410c] block mb-3 font-bold">
                  {lang === 'id' ? 'SOROTAN ARSITEKTUR & FITUR UTAMA' : 'KEY ARCHITECTURE & HIGHLIGHTS'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#16171a]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#767882] block mb-2 font-semibold">
                  TECH STACK & RUNTIMES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-white border border-[#dfdbd0] rounded-lg text-[#16171a] shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Live Demo & GitHub */}
              <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-[#e6e2d8]">
                {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c2410c] hover:bg-[#9a3412] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_4px_14px_rgba(194,65,12,0.25)] active:scale-95"
                  >
                    <span>{lang === 'id' ? 'KUNJUNGI APLIKASI / DEMO' : 'VISIT LIVE DEMO'}</span>
                    <span>↗</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#efece4] text-[#16171a] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 border border-[#dfdbd0] active:scale-95 shadow-xs"
                  >
                    <span>GITHUB REPOSITORY</span>
                    <span>↗</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="ml-auto font-mono text-xs text-[#5e616b] hover:text-[#16171a] uppercase tracking-wider px-3 py-2 cursor-pointer"
                >
                  {lang === 'id' ? 'TUTUP' : 'CLOSE'}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  )
}

export default Projects