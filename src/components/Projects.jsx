import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function Projects() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const filterTabs = [
    { key: 'all', label: t.projects.filters.all },
    { key: 'web', label: t.projects.filters.web },
    { key: 'mobile', label: t.projects.filters.mobile },
    { key: 'ml', label: t.projects.filters.ml },
  ]

  const filteredProjects = t.projects.items.filter((item) => {
    if (activeFilter === 'all') return true
    return item.category === activeFilter
  })

  return (
    <section className="w-full bg-surface-container-low py-24 border-b border-outline-variant" id="projects">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin flex flex-col gap-10">
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant pb-6">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-1">
              {t.projects.tag}
            </span>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary">
              {t.projects.title}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 flex-wrap" id="project-filters">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`font-label-sm text-label-sm uppercase tracking-wider px-4 py-2 border transition-all ${
                    isActive
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-transparent text-on-surface border-outline-variant hover:border-primary'
                  }`}
                  type="button"
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-container">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-surface-container-lowest border border-outline-variant p-8 flex flex-col justify-between hover:border-primary transition-colors group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-outline">{project.index}</span>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-label-sm text-label-sm uppercase px-2.5 py-0.5 bg-surface-container border border-outline-variant text-on-surface"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Preview Canvas */}
                <div className="w-full h-56 bg-surface-container flex items-center justify-center border border-outline-variant relative overflow-hidden my-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
                  <div className="flex flex-col items-center gap-2 z-10">
                    <span className="material-symbols-outlined text-[48px] text-primary transition-transform group-hover:scale-110">
                      {project.icon}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-secondary">
                      {project.runtimeBadge}
                    </span>
                  </div>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-primary">{project.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-outline-variant mt-6">
                <a
                  className="font-label-md text-label-md uppercase tracking-wider text-primary hover:underline underline-offset-4 flex items-center gap-1"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projects.liveDemo}{' '}
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
                <a
                  className="font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-primary transition-colors flex items-center gap-1"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projects.githubSource}{' '}
                  <span className="material-symbols-outlined text-[14px]">code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects