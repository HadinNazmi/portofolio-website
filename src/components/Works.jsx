import { useState } from 'react'
import SectionHeader from './common/SectionHeader'
import { projects } from '../data/projects'

function Works({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filterTabs = ['ALL', 'WEB', 'MOBILE', 'DEVELOPMENT']

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="works" className="py-24 sm:py-32 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <SectionHeader subtitle="PORTFOLIO" title="MY LATEST WORKS" />

        {/* Filter Tabs */}
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

        {/* 3-Column White Theme Folder Cards Grid (No Black Border, Soft Depth Shadow) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject?.(project.slug)}
              className="group relative aspect-square sm:aspect-[4/4.3] rounded-[32px] bg-white overflow-hidden cursor-pointer shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:shadow-[0_22px_50px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-1.5 select-none"
            >
              {/* Layer 1: Background Project Image (Unveiled completely on Hover) */}
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-100">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#242428] via-[#1c1c20] to-[#141416] flex flex-col items-center justify-center p-6 text-center text-gray-300">
                    <svg className="w-12 h-12 mb-3 text-gray-400 stroke-current fill-none opacity-80" viewBox="0 0 24 24" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span className="text-[11px] uppercase font-bold tracking-widest text-gray-300 border border-gray-600 px-3 py-1 rounded-full mb-2">
                      Gambar Tidak Tersedia
                    </span>
                    <span className="text-xs text-gray-300 font-heading max-w-[200px]">
                      {project.title}
                    </span>
                  </div>
                )}

                {/* Subtle top gradient shadow for tag legibility */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 via-black/15 to-transparent pointer-events-none" />
              </div>

              {/* Top-Right Badge on Exposed Image Area */}
              <div className="absolute top-5 right-6 z-10 text-right pointer-events-none transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2">
                <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-widest uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm inline-block font-heading mb-1">
                  {project.category}
                </span>
                <span className="text-[10px] text-white/90 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] block font-body">
                  {project.client.split('(')[0].trim()}
                </span>
              </div>

              {/* Layer 2: White Folder / Package Sleeve */}
              {/* Slides down smoothly on hover to uncover full image, slides back up when mouse leaves */}
              <div className="absolute inset-x-0 bottom-0 z-20 transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] transform translate-y-0 group-hover:translate-y-[calc(100%-74px)] flex flex-col justify-end">
                {/* SVG Folder Tab Cap (Pure White with subtle elevation shadow) */}
                <div className="w-full h-12 sm:h-14 -mb-[1px] pointer-events-none relative flex-shrink-0 drop-shadow-[0_-5px_12px_rgba(0,0,0,0.06)]">
                  <svg
                    viewBox="0 0 360 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full fill-white"
                    preserveAspectRatio="none"
                  >
                    <path d="M 0,22 Q 0,0 22,0 L 165,0 Q 185,0 195,16 L 208,34 Q 218,44 238,44 L 338,44 Q 360,44 360,52 L 0,52 Z" />
                  </svg>
                </div>

                {/* Main White Folder Body */}
                <div className="w-full bg-white px-6 pb-6 pt-0 flex flex-col justify-between rounded-b-[32px] min-h-[170px] sm:min-h-[185px] shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                  {/* Title & Subtitle sitting directly on the elevated tab */}
                  <div className="relative -mt-9 sm:-mt-10 mb-3 z-10">
                    <div className="max-w-[55%]">
                      <h4 className="text-sm sm:text-base font-bold text-gray-900 font-heading tracking-tight leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-gray-500 font-body line-clamp-1 mt-0.5">
                        {project.tech?.slice(0, 2).join(' • ') || project.category}
                      </p>
                    </div>
                  </div>

                  {/* Description snippet */}
                  <p className="text-xs text-gray-600 font-body line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Bottom Bar: Big Number & Notes/Client */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black font-heading text-gray-900 tracking-tight">
                        0{project.id}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400">
                        {project.year}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider block font-heading truncate max-w-[140px]">
                        {project.client.split('(')[0].trim()}
                      </span>
                      <span className="text-[11px] font-bold text-blue-600 group-hover:text-blue-700 inline-flex items-center gap-1">
                        Explore &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Indicator Icon that appears in top-right when full image is exposed */}
              <div className="absolute top-5 right-5 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-gray-800 flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
