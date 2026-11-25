import { useState } from 'react'
import SectionHeader from './common/SectionHeader'
import { projects } from '../data/projects'

function Works() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState(null)

  const filterTabs = ['ALL', 'WEB', 'MOBILE', 'DEVELOPMENT']

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case 'WEB':
        return 'bg-blue-600'
      case 'MOBILE':
        return 'bg-emerald-600'
      case 'DEVELOPMENT':
        return 'bg-purple-600'
      default:
        return 'bg-gray-800'
    }
  }

  return (
    <section id="works" className="py-24 sm:py-32 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <SectionHeader subtitle="PORTFOLIO" title="MY LATEST WORKS" />

        {/* Filter Tabs: Separated by slashes */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-14 text-xs sm:text-sm font-heading">
          {filterTabs.map((tab, idx) => (
            <div key={tab} className="flex items-center">
              <button
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`uppercase tracking-widest font-bold py-1 px-2 transition-colors ${
                  activeFilter === tab
                    ? 'text-[#222222] border-b-2 border-[#222222]'
                    : 'text-[#888888] hover:text-[#222222]'
                }`}
              >
                {tab}
              </button>
              {idx < filterTabs.length - 1 && (
                <span className="text-[#CCCCCC] ml-2 sm:ml-4 select-none">/</span>
              )}
            </div>
          ))}
        </div>

        {/* 3-Column Modern Rounded Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden cursor-pointer"
            >
              {/* Card Image Header */}
              <div className="w-full h-48 sm:h-52 bg-gray-100 overflow-hidden relative flex-shrink-0">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1c1c1c] to-[#2b2b2b] flex flex-col items-center justify-center p-5 text-center text-gray-300">
                    <svg className="w-9 h-9 mb-2 text-gray-400 stroke-current fill-none opacity-75" viewBox="0 0 24 24" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-300 border border-gray-600 px-2 py-0.5 rounded mb-1">
                      Gambar Tidak Tersedia
                    </span>
                    <span className="text-xs font-semibold text-white line-clamp-1 px-2">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Category Pill */}
                  <span
                    className={`inline-block text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full text-white shadow-sm ${getCategoryBadgeClass(
                      project.category
                    )}`}
                  >
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 font-heading mt-3 mb-2 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6 font-body">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Author Avatar & Meta */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-9 h-9 rounded-full overflow-hidden mr-3 ring-2 ring-gray-100 flex-shrink-0">
                      <img
                        src="/hero/IMG_7448.JPG"
                        alt="Hadin Nazmi"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-800 font-heading">
                        Hadin Nazmi
                      </span>
                      <span className="text-[10px] text-gray-400 font-body line-clamp-1 max-w-[150px]">
                        {project.year} • {project.client}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs text-gray-400 group-hover:text-blue-600 font-semibold transition-colors flex items-center gap-1">
                    Details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white max-w-3xl sm:max-w-4xl w-full p-5 sm:p-8 relative shadow-2xl rounded-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-600 hover:text-black flex items-center justify-center shadow-md transition-all hover:scale-105"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Full Image Container - Scaled & Adapted without cropping */}
            <div className="w-full min-h-[220px] max-h-[62vh] bg-gradient-to-b from-[#18181b] to-[#09090b] rounded-xl overflow-hidden mb-6 flex items-center justify-center p-2 sm:p-4 border border-gray-800/50 shadow-inner relative group/preview">
              {selectedProject.image ? (
                <>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-h-[58vh] w-auto max-w-full object-contain mx-auto rounded-lg drop-shadow-lg"
                  />
                  <a
                    href={selectedProject.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm transition-all flex items-center gap-1.5 shadow-sm opacity-90 hover:opacity-100"
                    title="Buka gambar ukuran penuh"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Full Size
                  </a>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-8">
                  <svg className="w-12 h-12 mb-3 text-gray-500 stroke-current fill-none opacity-80" viewBox="0 0 24 24" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span className="text-xs uppercase tracking-widest text-gray-300 font-bold border border-gray-600 px-3 py-1 rounded mb-2">
                    Gambar Tidak Tersedia
                  </span>
                  <span className="text-xs text-gray-400 font-body">Dokumentasi visual belum diunggah untuk proyek ini</span>
                </div>
              )}
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              {selectedProject.tech?.map((t) => (
                <span key={t} className="text-[10px] uppercase font-bold tracking-wider bg-gray-100 text-[#222222] px-2.5 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl sm:text-2xl font-bold uppercase font-heading text-[#222222] mb-3">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-[#555555] leading-relaxed mb-6 font-body">
              {selectedProject.description}
            </p>

            {/* Metadata & Actions Footer */}
            <div className="border-t border-gray-100 pt-4 flex flex-wrap items-center justify-between text-xs text-[#777777] font-heading uppercase gap-3">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span>Client: <strong className="text-[#222222]">{selectedProject.client}</strong></span>
                <span>Year: <strong className="text-[#222222]">{selectedProject.year}</strong></span>
              </div>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-white bg-[#222222] hover:bg-black px-4 py-2 rounded-lg transition-colors"
                >
                  View Details &rarr;
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Works
