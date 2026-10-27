import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

const projectsData = [
  {
    id: "bank-jatah-mobile",
    title: "Bank Jatah Indonesia — Mobile App",
    category: "mobile",
    categoryLabel: "Mobile E-Wallet • Fintech",
    badgeTheme: "lime",
    isLarge: true,
    description:
      "Engineered a reactive native Android financial application with end-to-end QR payment flows, real-time ledger sync, and biometric authentication.",
    architectureNote: "Architectural Pattern: MVVM Clean Architecture",
    tech: ["Kotlin", "Jetpack Compose", "Supabase", "Biometric Auth"],
    image: "/projects/aplikasiBJI.jpeg",
    fallbackImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWCwGYFXzFU5mBY5oKYIMDVlsQyY-f0qBZk4fB3Jd0-BrEicOqmTCVvb86uIrU4npsMdgG5r-pbhmHwcAhUsbhwpAieh-Dnz-5kvCtP9COUzTR2mGDctmJZ1cL-TnFsU3aHwW9iPDYXbjTpk78kKrTW187NSYoYU210HAK7Cv0fWKl90Q8r3YxvyrqKjEB6e8g6m3tYSa8Ldszj_k8tRBP2KJXzTwuukNydmK12_mzgsSf9ODci8ZKfw",
    link: "https://www.bjindonesia.online/aplikasi",
    github: "https://github.com/HadinNazmi"
  },
  {
    id: "bank-jatah-admin",
    title: "Bank Jatah Platform (Web Admin)",
    category: "web",
    categoryLabel: "Web Admin",
    badgeTheme: "surface",
    isLarge: false,
    description:
      "Back-office administrative console for transaction auditing, role-based authorization, and real-time merchant analytics.",
    architectureNote: "Architecture: Role-Based Access Control & Real-time Analytics",
    tech: ["React", "Tailwind", "REST APIs", "Chart.js"],
    image: "/projects/bankjatah-admin.png",
    fallbackImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCg0P3As7ac9NSTXjzNTXzFm_74PgPXk8uySIYGceDubl1ST7-oxyDifjtOzSPplchVBIpRSLkefjCLqDvme1xpPRjecS6KcGbuCOcmqLpc39E4BBB9gffId04cV7sP5JUOdjvNdTlWGoVmAYy8JbRivOrzZAc0g12xsshO2FgAe2czin4nuo2a_ftw8O6-4guaj1Og-05YwGkEO7UzlJpJlGR0vrYVkCIOuAQIgaCfnw33EzdjnJ9YFg",
    link: "",
    github: "https://github.com/HadinNazmi"
  },
  {
    id: "sigap-ai",
    title: "Sigap — AI Health Assistant",
    category: "ml",
    categoryLabel: "AI • RAG LLM",
    badgeTheme: "lime",
    isLarge: false,
    description:
      "Triage telemedicine application backed by contextual vector-embeddings and specialized medical literature retrieval.",
    architectureNote: "Architecture: Retrieval-Augmented Generation (RAG) & Vector Search",
    tech: ["Python", "Flask", "React", "Vector Embeddings"],
    image: "/projects/nadi.png",
    fallbackImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpGNjkrVv11j6NKjfevmeqPldHWk8YvMWGiYD6vTR7BXgimkfEJIJIkSSjmSt7OPiITMs9b-Ca7BX7Zlt-7NS1BZ4N2SXTh7Yt00hPLdjjr32zur7mBtwtlRitrsR-mj7aw9qvNWhJQI3LG7XMjHuzKAZUmunwSwcTd-GFaOYdlbazzxFJ1zpK5UmGdYC-xw_m_wEfu89iWS_BLiUjNyvRvW9y3eIIMCfmPbqat0l4IAgd-olWenRacw",
    link: "",
    github: "https://github.com/HadinNazmi"
  },
  {
    id: "peatland-hero",
    title: "Peatland Hero (SIC 2024)",
    category: "web",
    categoryLabel: "IoT • GeoJSON",
    badgeTheme: "lime",
    isLarge: false,
    description:
      "Environmental monitoring dashboard tracking peatland water table and fire danger levels using live IoT telemetry feeds.",
    architectureNote: "Architecture: Real-time Telemetry Pipeline & GeoJSON Spatial Map",
    tech: ["Next.js", "Mapbox", "IoT Sensor", "WebSocket"],
    image: "/projects/sic.png",
    fallbackImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjxMrhGWA6STtW2QRkP1bi6NeoYqtB-iKnuNzeiI7aHOvmty0Uc2zASRoK1c1xXtUZ8fZBVP6dvvv8lNUhlFOFKP5ilyivcfPJ8kYvasppqA9mhf-wTZHxU5LMaqHt9VRBRH2JaUcn51pUe_GTsdE0sP03-r8UQWYeetCZJUSHWSoCxqYzdRPeAQF4uSLkWNSBZRrKjQf5pwXD85kO0X93xjEikvlQMnNAk0IEAfAmpEdwy1gO3K-WHg",
    link: "https://peatlandhero.id",
    github: "https://github.com/HadinNazmi"
  },
  {
    id: "curah-hujan-3d",
    title: "Curah Hujan & 3D Unity",
    category: "ml",
    categoryLabel: "Data ML & Game",
    badgeTheme: "surface",
    isLarge: false,
    description:
      "Machine learning models predicting extreme precipitation via Random Forest alongside 'Petualangan 3 Dunia' Unity 3D engine.",
    architectureNote: "Architecture: Supervised Ensemble Regression & Interactive 3D Simulation",
    tech: ["Random Forest", "Pandas", "Unity / C#", "Python"],
    image: "/projects/rainfall.png",
    fallbackImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5nokBGb9530Uo3m_jK0mxs8RoaZGSsiUIHOnwmA1YrCnUNV-eicMfLbzcDASnX2qytNlzryz_BwVWbW6a5kZhjNTt8bfa8T2Emlu2-qjrZ-yB5gCoYyQDbPtBtDA3Agp6AKEX9Zo4Rn8HPxTkCyDfE37MfaGq__N6X7g-tINxHnN9yTxzZPHx7vDx5rmyxzwrQ5qPj34CIBsgW95b6s0NjSG3AlX8m6OIBKHMHTZduLPstWVMy5dnqQ",
    link: "",
    github: "https://github.com/HadinNazmi"
  },
  {
    id: "bank-jatah-compro",
    title: "Bank Jatah Indonesia — Company Profile",
    category: "web",
    categoryLabel: "Web Platform",
    badgeTheme: "surface",
    isLarge: false,
    description:
      "Corporate portal with interactive investor insights, service showcase, and direct customer onboarding.",
    architectureNote: "Architecture: Headless CMS Integration & High-Conversion Funnel",
    tech: ["React.js", "Supabase", "Tailwind CSS"],
    image: "/projects/webprofileBJI.jpg",
    fallbackImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC70B0I_Rf6kjx5fuwmNQbs5IkVBZsszrx2ZrWks8OAkjf5cwfiQANFt7ag2cC9hh1EaJvCxxwjq0bsDdBvbbMSA8GGGMBRAQT9vC3BmZLYfq-JxNGXaNrwpQA0IFPvYhvyvV9GBNmVZfTmwT8hHQNbfABEpRFpWXVTrQmeFOXuP_EdHnMVe0IYtj73crPGcJzD6VehG27pJojQzofm5xdkQz0ahp9SZIZi7AWNcvg1ek8n-wm6WUUTlg",
    link: "https://www.bjindonesia.online/",
    github: "https://github.com/HadinNazmi"
  },
  {
    id: "dimensi-hair",
    title: "Company Profile — Dimensi Hair Studio",
    category: "web",
    categoryLabel: "Web App",
    badgeTheme: "surface",
    isLarge: false,
    description:
      "Full stack booking and catalog platform with administrative reservation calendar and automated appointment reminders.",
    architectureNote: "Architecture: MVC Monolith with Automated Scheduling Engine",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    image: "/projects/dimensihair.png",
    fallbackImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC70B0I_Rf6kjx5fuwmNQbs5IkVBZsszrx2ZrWks8OAkjf5cwfiQANFt7ag2cC9hh1EaJvCxxwjq0bsDdBvbbMSA8GGGMBRAQT9vC3BmZLYfq-JxNGXaNrwpQA0IFPvYhvyvV9GBNmVZfTmwT8hHQNbfABEpRFpWXVTrQmeFOXuP_EdHnMVe0IYtj73crPGcJzD6VehG27pJojQzofm5xdkQz0ahp9SZIZi7AWNcvg1ek8n-wm6WUUTlg",
    link: "",
    github: "https://github.com/HadinNazmi"
  }
]

function Projects() {
  const [ref, visible] = useScrollReveal()
  const [gridFilter, setGridFilter] = useState("all")
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragDeltaX, setDragDeltaX] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
  const { t, lang } = useLanguage()

  // Track window resizing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const count = projectsData.length

  const filteredGridProjects = projectsData.filter((p) => {
    if (gridFilter === "all") return true
    return p.category === gridFilter
  })

  const handleNext = () => {
    if (count <= 1) return
    setActiveIndex((prev) => (prev + 1) % count)
  }

  const handlePrev = () => {
    if (count <= 1) return
    setActiveIndex((prev) => (prev - 1 + count) % count)
  }

  // Smooth Auto-Play: automatically slides on its own when idle,
  // pauses when the user hovers, touches, or drags.
  useEffect(() => {
    if (isDragging || isHovered || count <= 1) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count)
    }, 3800)

    return () => clearInterval(timer)
  }, [count, isDragging, isHovered])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [count])

  // Mouse & Touch Drag handlers
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setDragStartX(e.touches[0].clientX)
    setDragDeltaX(0)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    setDragDeltaX(currentX - dragStartX)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (dragDeltaX < -40) {
      handleNext()
    } else if (dragDeltaX > 40) {
      handlePrev()
    }
    setDragDeltaX(0)
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStartX(e.clientX)
    setDragDeltaX(0)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    setDragDeltaX(e.clientX - dragStartX)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (dragDeltaX < -45) {
      handleNext()
    } else if (dragDeltaX > 45) {
      handlePrev()
    }
    setDragDeltaX(0)
  }

  // 3D Coverflow spacing calibrated to match the user's reference exactly
  const isMobile = windowWidth < 640
  const isTablet = windowWidth >= 640 && windowWidth < 1024

  const cardSpacing = isMobile ? 120 : isTablet ? 170 : 215

  const getCardStyle = (index) => {
    let diff = index - activeIndex

    // Circular shortest path
    while (diff > count / 2) diff -= count
    while (diff < -count / 2) diff += count

    const effectiveDiff = diff + (isDragging ? dragDeltaX / cardSpacing : 0)
    const absDiff = Math.abs(effectiveDiff)

    // Only show 5 cards (diff: -2, -1, 0, 1, 2)
    if (absDiff > 2.4) {
      return {
        opacity: 0,
        pointerEvents: 'none',
        transform: `translate(-50%, -50%) translate3d(${effectiveDiff * cardSpacing}px, 0, -250px) scale(0.5)`,
        zIndex: 0,
      }
    }

    const isCenter = absDiff < 0.45

    // Symmetrical 3D Coverflow perspective:
    const translateX = effectiveDiff * cardSpacing
    const rotateY = -effectiveDiff * (isMobile ? 26 : 30)
    const translateZ = isCenter ? 60 : -Math.min(absDiff * 50, 110)
    const scale = isCenter ? 1.0 : Math.max(0.93 - absDiff * 0.05, 0.82)
    const zIndex = 30 - Math.round(absDiff * 8)
    const opacity = isCenter ? 1 : Math.max(0.9 - absDiff * 0.15, 0.65)

    return {
      transform: `translate(-50%, -50%) translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex,
      opacity,
      transition: isDragging ? 'none' : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s ease',
    }
  }

  return (
    <section
      id="projects"
      ref={ref}
      className={`w-full py-16 sm:py-24 relative overflow-hidden transition-all duration-700 select-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* 1. Header (Centered without category filters) */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-12">
        <span className="font-label-md text-xs sm:text-sm uppercase tracking-widest text-secondary font-bold px-3.5 py-1 bg-secondary-fixed/40 rounded-full mb-3 inline-block">
          {t.projects.badge}
        </span>
        <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-on-surface font-extrabold tracking-tight">
          {t.projects.title}
        </h2>
        <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-3 max-w-xl mx-auto">
          {lang === 'id'
            ? 'Jelajahi karya produksi unggulan dari aplikasi mobile native, platform web berskala, hingga kecerdasan buatan.'
            : 'Explore production-grade builds across reactive mobile apps, scalable web systems, and intelligent solutions.'}
        </p>
      </div>

      {/* 2. Top Area: 3D Coverflow Preview Showcase (Auto-sliding & Drag) */}
      <div
        className="relative w-full flex flex-col items-center justify-center mb-16 sm:mb-24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          if (isDragging) handleMouseUp()
        }}
      >
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Project"
          className="absolute left-3 sm:left-8 lg:left-16 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border border-black/[0.08] flex items-center justify-center hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all active:scale-95 text-on-surface group cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px] group-hover:-translate-x-0.5 transition-transform">
            arrow_back
          </span>
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Project"
          className="absolute right-3 sm:right-8 lg:right-16 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border border-black/[0.08] flex items-center justify-center hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all active:scale-95 text-on-surface group cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px] group-hover:translate-x-0.5 transition-transform">
            arrow_forward
          </span>
        </button>

        {/* 3D Stage: Perfectly Centered */}
        <div
          className="h-[390px] sm:h-[450px] md:h-[490px] flex items-center justify-center relative cursor-grab active:cursor-grabbing w-full overflow-visible"
          style={{
            perspective: '1400px',
            perspectiveOrigin: '50% 50%',
            transformStyle: 'preserve-3d',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {projectsData.map((project, idx) => {
            let diff = idx - activeIndex
            while (diff > count / 2) diff -= count
            while (diff < -count / 2) diff += count
            const isCenter = Math.abs(diff) === 0
            const cardStyle = getCardStyle(idx)

            const handleCardClick = () => {
              if (Math.abs(dragDeltaX) > 10) return
              if (isCenter) {
                if (project.link) {
                  window.open(project.link, '_blank', 'noopener,noreferrer')
                } else if (project.github) {
                  window.open(project.github, '_blank', 'noopener,noreferrer')
                }
              } else {
                setActiveIndex(idx)
              }
            }

            return (
              <div
                key={project.id}
                onClick={handleCardClick}
                style={cardStyle}
                /* UNIFORM CARD SIZE FOR ALL CARDS - Anchor at 50% 50% */
                className="absolute left-1/2 top-1/2 w-[230px] sm:w-[265px] md:w-[295px] lg:w-[315px] h-[370px] sm:h-[430px] md:h-[470px] cursor-pointer"
              >
                <div
                  className={`relative w-full h-full rounded-[28px] overflow-hidden shadow-[0_22px_50px_rgba(0,0,0,0.38)] border border-black/10 transition-all duration-500 group bg-slate-900 flex flex-col justify-end text-center ${
                    isCenter ? 'shadow-[0_28px_60px_rgba(0,0,0,0.45)]' : ''
                  }`}
                >
                  {/* Full Card Image Background */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = project.fallbackImage
                    }}
                  />

                  {/* High Contrast Scrim Gradient: Clean, dark gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent pointer-events-none" />

                  {/* Card Content: Pure, Minimalist, Centered Title (Exactly Like User's Reference) */}
                  <div className="relative z-10 p-5 sm:p-6 text-white flex flex-col items-center justify-center text-center space-y-2">
                    <h3 className="font-headline-sm text-base sm:text-lg md:text-xl font-bold leading-snug text-white group-hover:text-secondary-fixed transition-colors text-center drop-shadow-md">
                      {project.title}
                    </h3>

                    {/* Subtle action indicator on center card */}
                    {isCenter && (project.link || project.github) && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary-fixed pt-1 group-hover:underline">
                        <span>{project.link ? t.projects.liveDemo : t.projects.viewCode}</span>
                        <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Slide Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projectsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? 'w-8 bg-secondary-fixed shadow-sm'
                  : 'w-2 bg-on-surface-variant/25 hover:bg-on-surface-variant/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 3. Bottom Area: Bento Grid Projects Showcase with Dedicated Filter Tabs */}
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin w-full">
        {/* Category Filters exclusively controlling the Grid below */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface">
              {lang === 'id' ? 'Katalog Lengkap Proyek' : 'All Production Projects'}
            </h3>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-0.5">
              {lang === 'id'
                ? 'Filter berdasarkan platform & arsitektur sistem.'
                : 'Filter by platform & architectural stack.'}
            </p>
          </div>

          {/* Filter Pills for the Grid */}
          <div className="flex items-center gap-1.5 bg-surface-container-low p-1.5 rounded-full shadow-sm border border-black/[0.04]" id="project-grid-filters">
            {[
              { key: "all", label: t.projects.filters.all },
              { key: "mobile", label: t.projects.filters.mobile },
              { key: "web", label: t.projects.filters.web },
              { key: "ml", label: t.projects.filters.ml },
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setGridFilter(cat.key)}
                className={`px-4 py-1.5 rounded-full font-label-sm text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  gridFilter === cat.key
                    ? 'bg-primary-container text-secondary-fixed shadow-md'
                    : 'text-on-surface hover:text-on-surface-variant'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
          {filteredGridProjects.map((project) => {
            // Large Module: 8-column white card with clear elevation
            if (project.isLarge) {
              return (
                <div
                  key={project.id}
                  className="md:col-span-8 bg-white text-on-surface rounded-3xl p-space-lg shadow-[0_12px_30px_-4px_rgba(25,28,30,0.12),0_4px_12px_-2px_rgba(25,28,30,0.06)] hover:shadow-[0_20px_40px_-6px_rgba(25,28,30,0.18)] relative overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 border border-black/[0.05]"
                >
                  <div className="flex items-center justify-between mb-space-sm z-10">
                    <span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold px-3 py-1 rounded-full">
                      {project.categoryLabel}
                    </span>
                    <a
                      href={project.link || project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-secondary-fixed hover:text-on-secondary-fixed flex items-center justify-center transition-all text-on-surface shadow-sm cursor-pointer"
                      title={project.link ? t.projects.liveDemo : t.projects.viewCode}
                    >
                      <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md items-center z-10 my-space-sm">
                    <div>
                      <h3 className="font-headline-md text-headline-md font-bold text-on-surface group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map((tItem, idx) => (
                          <span
                            key={tItem}
                            className={`font-label-sm text-label-sm px-2.5 py-0.5 rounded-full border border-black/[0.03] ${
                              idx === 0
                                ? 'bg-secondary-fixed text-on-secondary-fixed font-bold'
                                : 'bg-surface-container-low text-on-surface'
                            }`}
                          >
                            {tItem}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-inner aspect-video sm:aspect-square bg-surface-container-low border border-black/[0.04]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = project.fallbackImage
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-space-xs z-10">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {project.architectureNote}
                    </span>
                    <a
                      href={project.link || project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-label-md text-label-md font-bold text-secondary hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      {project.link ? t.projects.liveDemo : t.projects.viewSpecs}
                    </a>
                  </div>
                </div>
              )
            }

            // Regular Modules: 4-column white cards with clear elevation
            return (
              <div
                key={project.id}
                className="md:col-span-4 bg-white text-on-surface rounded-3xl p-space-lg shadow-[0_12px_30px_-4px_rgba(25,28,30,0.12),0_4px_12px_-2px_rgba(25,28,30,0.06)] hover:shadow-[0_20px_40px_-6px_rgba(25,28,30,0.18)] flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 border border-black/[0.05]"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span
                      className={`font-label-sm text-label-sm px-3 py-1 rounded-full font-bold ${
                        project.badgeTheme === 'lime'
                          ? 'bg-secondary-fixed text-on-secondary-fixed'
                          : 'bg-surface-container-high text-on-surface font-semibold'
                      }`}
                    >
                      {project.categoryLabel}
                    </span>
                    <a
                      href={project.link || project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-surface-container-low hover:bg-secondary-fixed hover:text-on-secondary-fixed text-on-surface shadow-sm cursor-pointer"
                      title={project.link ? t.projects.liveDemo : t.projects.viewCode}
                    >
                      <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                    </a>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body-sm text-body-sm mt-2 line-clamp-3 text-on-surface-variant leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-inner my-space-md aspect-video bg-surface-container-low border border-black/[0.04]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = project.fallbackImage
                    }}
                  />
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((tItem) => (
                    <span
                      key={tItem}
                      className="bg-surface-container-low text-on-surface font-label-sm text-label-sm px-2.5 py-0.5 rounded-full border border-black/[0.03]"
                    >
                      {tItem}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects