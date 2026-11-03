import { useState } from 'react'
import SectionHeader from './common/SectionHeader'

function Works() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState(null)

  const filterTabs = ['ALL', 'WEB', 'MOBILE', 'DEVELOPMENT']

  const projects = [
    {
      id: 1,
      title: 'BANK JATAH INDONESIA (BJI)',
      category: 'MOBILE',
      image: '/projects/aplikasiBJI.jpeg',
      description: 'Micro-banking and automated savings application built for local SMBs featuring biometric security, ledger synchronization, and automated daily balances.',
      client: 'Bank Jatah Indonesia (BJI)',
      year: '2024',
      liveUrl: 'https://www.bjindonesia.online/aplikasi',
      githubUrl: 'https://github.com/HadinNazmi',
      tech: ['Kotlin', 'Android Jetpack', 'Supabase', 'Biometrics'],
    },
    {
      id: 2,
      title: 'SIC IOT MONITORING PLATFORM',
      category: 'DEVELOPMENT',
      image: '/projects/sic.png',
      description: 'High-throughput telemetry and device command center developed for national competitive showcase, winning 1st Place National Champion at KMIPN VII.',
      client: 'KMIPN VII National Showcase',
      year: '2024',
      liveUrl: 'https://github.com/HadinNazmi',
      githubUrl: 'https://github.com/HadinNazmi',
      tech: ['IoT Telemetry', 'MQTT', 'Next.js', 'PostgreSQL'],
    },
    {
      id: 3,
      title: 'KARYARIAU CREATIVE PORTAL',
      category: 'WEB',
      image: '/projects/webprofileBJI.jpg',
      description: 'Creative industry marketplace and cultural archive connecting artisans across Riau province with decentralized escrow and automated delivery tracking.',
      client: 'Riau Creative Industry',
      year: '2024',
      liveUrl: 'https://github.com/HadinNazmi',
      githubUrl: 'https://github.com/HadinNazmi',
      tech: ['Laravel', 'Tailwind CSS', 'MySQL', 'Alpine.js'],
    },
    {
      id: 4,
      title: 'SIGAP AI DISASTER TELEMETRY',
      category: 'DEVELOPMENT',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      description: 'Intelligent disaster prediction and community alert platform with real-time geospatial telemetry, sensor clustering, and dynamic evacuation pathfinding.',
      client: 'Disaster Preparedness Consortium',
      year: '2024',
      liveUrl: 'https://github.com/HadinNazmi',
      githubUrl: 'https://github.com/HadinNazmi',
      tech: ['Python', 'Next.js', 'Geospatial AI', 'FastAPI'],
    },
    {
      id: 5,
      title: 'PULSEFIT TRACKER APP',
      category: 'MOBILE',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      description: 'Cross-platform workout telemetry and health metric companion featuring offline-first data queuing, SQLite synchronization, and granular SVG analytics.',
      client: 'PulseFit Health Ecosystem',
      year: '2023',
      liveUrl: 'https://github.com/HadinNazmi',
      githubUrl: 'https://github.com/HadinNazmi',
      tech: ['Flutter', 'Node.js', 'SQLite', 'Express'],
    },
    {
      id: 6,
      title: 'INTERACTIVE AUDIOVISUAL GAME',
      category: 'WEB',
      image: '/projects/game.jpg',
      description: 'Browser-native interactive experience engineered with custom physics engines, dynamic audio synthesis, and responsive canvas rendering.',
      client: 'Creative Lab Experiment',
      year: '2023',
      liveUrl: 'https://github.com/HadinNazmi',
      githubUrl: 'https://github.com/HadinNazmi',
      tech: ['HTML5 Canvas', 'Web Audio API', 'JavaScript', 'Physics Engine'],
    },
  ]

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="works" className="py-24 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <SectionHeader subtitle="PORTFOLIO" title="MY LATEST WORKS" />

        {/* Filter Tabs: Separated by slashes */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 text-xs sm:text-sm font-heading">
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

        {/* 3-Column Square Image Grid (24px gap) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-square bg-gray-100 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Minimalist Overlay on Hover */}
              <div className="absolute inset-0 bg-[#222222]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="text-[11px] uppercase tracking-widest text-gray-300 font-medium mb-2">
                  {project.category}
                </span>
                <h4 className="text-base font-bold uppercase tracking-wider font-heading mb-3 max-w-[220px]">
                  {project.title}
                </h4>
                <span className="w-8 h-[1.5px] bg-white/70 mb-4" />
                <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-[#222222] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 sm:p-6 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#222222] p-2"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-video w-full bg-gray-100 overflow-hidden mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-2">
              {selectedProject.tech?.map((t) => (
                <span key={t} className="text-[10px] uppercase font-bold tracking-wider bg-gray-100 text-[#222222] px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold uppercase font-heading text-[#222222] mt-1 mb-3">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed mb-6 font-body">
              {selectedProject.description}
            </p>

            <div className="border-t border-gray-100 pt-4 flex flex-wrap items-center justify-between text-xs text-[#888888] font-heading uppercase gap-2">
              <span>Client: <strong className="text-[#222222]">{selectedProject.client}</strong></span>
              <span>Year: <strong className="text-[#222222]">{selectedProject.year}</strong></span>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#222222] hover:underline"
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
