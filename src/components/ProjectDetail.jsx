import { useEffect } from 'react'

function ProjectDetail({ project, allProjects, onBack, onSelectProject }) {
  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [project.id])

  // Determine previous and next projects
  const currentIndex = allProjects.findIndex((p) => p.id === project.id)
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length]
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]

  return (
    <div className="w-full min-h-screen bg-[#FDFDFD] text-[#222222] font-body selection:bg-black selection:text-white pb-24">
      {/* 1. Header Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider font-heading text-gray-700 hover:text-black transition-colors px-3 py-1.5 rounded-full hover:bg-gray-100"
              aria-label="Kembali ke portofolio"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Works</span>
            </button>
            <span className="hidden sm:inline text-gray-300">/</span>
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-widest text-gray-400">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#191919] hover:bg-black text-white text-xs font-bold uppercase tracking-wider font-heading px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all inline-flex items-center gap-1.5"
              >
                <span>Live Project</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 hover:border-black text-gray-800 hover:text-black text-xs font-bold uppercase tracking-wider font-heading px-4 py-2.5 rounded-full transition-colors hidden sm:inline-flex items-center gap-1.5"
              >
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-8 sm:pt-12">
        {/* 2. Hero Banner Showcase (Inspired by WANDER PH Reference) */}
        <section className="relative w-full rounded-[36px] overflow-hidden bg-[#111113] min-h-[460px] sm:min-h-[540px] flex items-center justify-center p-6 sm:p-12 mb-16 shadow-2xl border-2 border-black/10">
          {/* Background Image / Pattern */}
          {project.image ? (
            <div className="absolute inset-0 w-full h-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center opacity-40 blur-[1px] scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#18181b] via-[#24242a] to-[#111113]" />
          )}

          {/* Centered Big Editorial Title & Tagline */}
          <div className="relative z-10 max-w-3xl text-center text-white px-4">
            <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-blue-400 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-4 border border-white/20">
              {project.category} CASE STUDY
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-heading tracking-tight mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-light max-w-2xl mx-auto mb-8 leading-relaxed font-body drop-shadow-md">
              {project.subtitle || project.description}
            </p>

            {/* Hero Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-[#111111] font-bold text-xs uppercase tracking-wider font-heading px-7 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
                >
                  Visit Live Site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/30 font-bold text-xs uppercase tracking-wider font-heading px-7 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
                >
                  View Source Code
                </a>
              )}
            </div>
          </div>

          {/* Bottom Floating Mockup Preview if Image Exists */}
          {project.image && (
            <div className="absolute -bottom-24 sm:-bottom-32 left-1/2 -translate-x-1/2 w-48 sm:w-64 max-w-[80%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </section>

        {/* 3. Project Overview & Highlights Section */}
        <section className="mb-20 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Description & Metrics */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#888888] font-heading block mb-2">
                OVERVIEW & BACKGROUND
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading uppercase text-gray-900 tracking-tight mb-6">
                Membangun {project.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-body leading-relaxed mb-8">
                {project.longDescription || project.description}
              </p>

              {/* Metrics Row (Inspired by WANDER 12k, 10yrs, 50+ in reference) */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                {project.metrics?.map((m) => (
                  <div key={m.label} className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-black font-heading text-gray-900 tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 3 Stacked Feature Cards (Inspired by Reference) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {project.highlights?.map((h) => (
                <div
                  key={h.title}
                  className="bg-[#F6F7F9] hover:bg-[#EEF0F4] rounded-2xl p-6 transition-all duration-300 border border-gray-100 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-gray-900 flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                    <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.75">
                      {h.icon === 'code' && (
                        <>
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </>
                      )}
                      {h.icon === 'database' && (
                        <>
                          <ellipse cx="12" cy="5" rx="9" ry="3" />
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        </>
                      )}
                      {h.icon === 'shield' && (
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      )}
                      {h.icon === 'layout' && (
                        <>
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <line x1="3" y1="9" x2="21" y2="9" />
                          <line x1="9" y1="21" x2="9" y2="9" />
                        </>
                      )}
                      {h.icon === 'globe' && (
                        <>
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </>
                      )}
                      {h.icon === 'cpu' && (
                        <>
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <rect x="9" y="9" width="6" height="6" />
                          <line x1="9" y1="1" x2="9" y2="4" />
                          <line x1="15" y1="1" x2="15" y2="4" />
                          <line x1="9" y1="20" x2="9" y2="23" />
                          <line x1="15" y1="20" x2="15" y2="23" />
                        </>
                      )}
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-heading text-gray-900 mb-1">
                      {h.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-body">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Core Features & System Modules ("Top Destinations" Style in Reference) */}
        <section className="bg-[#F3F4F6] rounded-[36px] p-8 sm:p-12 mb-20 border border-gray-200/60 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#888888] font-heading block mb-1">
                SYSTEM CAPABILITIES
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading uppercase text-gray-900 tracking-tight">
                Fitur Utama & Modul Sistem
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md font-body">
              Arsitektur modular yang dirancang untuk performa tinggi, efisiensi transaksi, dan pengalaman pengguna optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features?.map((feat, idx) => (
              <div
                key={feat.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-gray-100"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      {feat.tag}
                    </span>
                    <span className="text-xs font-bold font-heading text-gray-300">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-bold font-heading text-gray-900 mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-body">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Technology Stack Breakdown ("Tour Packages" Style in Reference) */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Dark Summary Package Card */}
            <div className="bg-[#1A1A1E] text-white rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-gray-400 font-heading block mb-2">
                  TECH STACK & TOOLS
                </span>
                <h3 className="text-2xl font-bold uppercase font-heading tracking-tight mb-4">
                  Teknologi Terintegrasi
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body mb-6">
                  Kombinasi bahasa pemrograman modern, framework industri, dan layanan cloud untuk menjamin keandalan sistem produksi.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {project.tech?.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold bg-white/10 text-white px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Highlights Cards */}
            <div className="bg-[#F8F9FA] rounded-3xl p-8 border border-gray-200/80 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold font-heading text-gray-900 mb-2">
                  Client & Institusi
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-body leading-relaxed mb-4">
                  Dikerjakan untuk <strong className="text-gray-900">{project.client}</strong> pada tahun <strong className="text-gray-900">{project.year}</strong>.
                </p>
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Status: Production Verified
              </div>
            </div>

            <div className="bg-[#F8F9FA] rounded-3xl p-8 border border-gray-200/80 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold font-heading text-gray-900 mb-2">
                  Repository & Lisensi
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-body leading-relaxed mb-4">
                  Dokumentasi source code, skema arsitektur, dan lisensi terbuka tersedia di repositori resmi GitHub.
                </p>
              </div>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  Lihat Repositori &rarr;
                </a>
              )}
            </div>
          </div>
        </section>

        {/* 6. Process Workflow ("Booking made as easy as 1-2-3" in Reference) */}
        {project.workflow && (
          <section className="bg-white rounded-[36px] p-8 sm:p-12 border border-gray-200 mb-20">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#888888] font-heading block mb-1">
                ENGINEERING LIFECYCLE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading uppercase text-gray-900 tracking-tight">
                Alur Pengerjaan & Implementasi
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {project.workflow.map((w, idx) => (
                <div key={w.step} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#1A1A1E] text-white flex items-center justify-center font-black font-heading text-lg mb-4 shadow-md">
                    {w.step}
                  </div>
                  <h4 className="text-base font-bold font-heading text-gray-900 mb-2">
                    {w.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-body max-w-xs">
                    {w.desc}
                  </p>
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-7 w-24 h-[2px] bg-gray-200" style={{ left: `${idx * 40 + 30}%` }} />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Next / Previous Project Navigator */}
        <section className="pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => onSelectProject(prevProject.slug)}
            className="flex items-center gap-4 text-left p-4 rounded-2xl hover:bg-gray-100 transition-colors w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 flex-shrink-0">
              &larr;
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                PREVIOUS PROJECT
              </span>
              <span className="text-sm font-bold font-heading text-gray-900 line-clamp-1">
                {prevProject.title}
              </span>
            </div>
          </button>

          <button
            onClick={onBack}
            className="text-xs font-bold uppercase tracking-widest font-heading px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
          >
            All Projects
          </button>

          <button
            onClick={() => onSelectProject(nextProject.slug)}
            className="flex items-center justify-end gap-4 text-right p-4 rounded-2xl hover:bg-gray-100 transition-colors w-full sm:w-auto"
          >
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                NEXT PROJECT
              </span>
              <span className="text-sm font-bold font-heading text-gray-900 line-clamp-1">
                {nextProject.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 flex-shrink-0">
              &rarr;
            </div>
          </button>
        </section>
      </main>
    </div>
  )
}

export default ProjectDetail
