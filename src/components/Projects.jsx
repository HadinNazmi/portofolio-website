import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

const projectsData = [
  {
    id: "bank-jatah-mobile",
    title: "Bank Jatah Indonesia — Mobile App",
    category: "mobile",
    categoryLabel: "Mobile E-Wallet • Fintech",
    badgeTheme: "primary", // large midnight purple 8-col card
    isLarge: true,
    description:
      "Engineered a reactive native Android financial application with end-to-end QR payment flows, real-time ledger sync, and biometric authentication.",
    architectureNote: "Architectural Pattern: MVVM Clean Architecture",
    tech: ["Kotlin", "Jetpack Compose", "Supabase"],
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
    tech: ["React", "Tailwind", "REST APIs"],
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
    tech: ["Python", "Flask", "React"],
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
    badgeTheme: "primary",
    isLarge: false,
    description:
      "Environmental monitoring dashboard tracking peatland water table and fire danger levels using live IoT telemetry feeds.",
    tech: ["Next.js", "Mapbox", "IoT Sensor"],
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
    tech: ["Random Forest", "Pandas", "Unity / C#"],
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
    tech: ["Laravel", "PHP", "MySQL"],
    image: "/projects/dimensihair.png",
    fallbackImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC70B0I_Rf6kjx5fuwmNQbs5IkVBZsszrx2ZrWks8OAkjf5cwfiQANFt7ag2cC9hh1EaJvCxxwjq0bsDdBvbbMSA8GGGMBRAQT9vC3BmZLYfq-JxNGXaNrwpQA0IFPvYhvyvV9GBNmVZfTmwT8hHQNbfABEpRFpWXVTrQmeFOXuP_EdHnMVe0IYtj73crPGcJzD6VehG27pJojQzofm5xdkQz0ahp9SZIZi7AWNcvg1ek8n-wm6WUUTlg",
    link: "",
    github: "https://github.com/HadinNazmi"
  }
]

function Projects() {
  const [ref, visible] = useScrollReveal()
  const [activeFilter, setActiveFilter] = useState("all")
  const { t } = useLanguage()

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "all") return true
    return p.category === activeFilter
  })

  return (
    <section
      id="projects"
      ref={ref}
      className={`max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-xl w-full transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Section Header & Filter Pills */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
        <div>
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
            {t.projects.badge}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
            {t.projects.title}
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 bg-surface-container-low p-1.5 rounded-full" id="project-filters">
          {[
            { key: "all", label: t.projects.filters.all },
            { key: "mobile", label: t.projects.filters.mobile },
            { key: "web", label: t.projects.filters.web },
            { key: "ml", label: t.projects.filters.ml },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-space-md py-1 rounded-full font-label-sm text-label-sm transition-all ${
                activeFilter === cat.key
                  ? 'bg-primary-container text-secondary-fixed font-bold shadow-sm'
                  : 'text-on-surface hover:text-on-surface-variant'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid Projects Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
        {filteredProjects.map((project) => {
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
                    className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-secondary-fixed hover:text-on-secondary-fixed flex items-center justify-center transition-all text-on-surface shadow-sm"
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
                    className="font-label-md text-label-md font-bold text-secondary hover:underline flex items-center gap-1"
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
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-surface-container-low hover:bg-secondary-fixed hover:text-on-secondary-fixed text-on-surface shadow-sm"
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
    </section>
  )
}

export default Projects