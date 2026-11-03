import SectionHeader from './common/SectionHeader'

function Services() {
  const services = [
    {
      title: 'WEB DEVELOPER',
      desc: 'Developing responsive, high-performance web applications using modern stacks like React, Next.js, and TypeScript with clean architectures.',
      icon: (
        <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.75">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: 'MOBILE DEVELOPER',
      desc: 'Building native Android and cross-platform mobile apps with Kotlin, Jetpack Compose, and Flutter, featuring offline data sync and fluid UX.',
      icon: (
        <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.75">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: 'BACKEND & APIS',
      desc: 'Engineering scalable microservices, RESTful and GraphQL APIs, and secure server-side logic using Laravel, Node.js, and Express.',
      icon: (
        <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.75">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: 'DATABASE & STORAGE',
      desc: 'Designing robust database schemas, distributed caching, and performant data pipelines with Supabase, PostgreSQL, MySQL, and Redis.',
      icon: (
        <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.75">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
    {
      title: 'DEVOPS & CLOUD',
      desc: 'Setting up automated CI/CD deployment pipelines, Docker containerization, cloud hosting, and zero-downtime application provisioning.',
      icon: (
        <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.75">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
    },
    {
      title: 'UI/UX DESIGN',
      desc: 'Crafting intuitive user interfaces, wireframes, and design systems in Figma that prioritize accessibility, modern minimalism, and fluid interactions.',
      icon: (
        <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.75">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <SectionHeader subtitle="SERVICES & CAPABILITIES" title="WHAT I CAN DO" />

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 pt-4">
          {services.map((item) => (
            <div
              key={item.title}
              className="group text-center flex flex-col items-center px-4 transition-transform duration-300"
            >
              {/* Circular light-gray icon wrapper */}
              <div className="w-16 h-16 rounded-full bg-[#EAEAEA] group-hover:bg-[#222222] text-[#222222] group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300">
                {item.icon}
              </div>

              {/* Bold Uppercase Title */}
              <h3 className="text-base font-bold uppercase tracking-wider text-[#222222] font-heading mb-3">
                {item.title}
              </h3>

              {/* 3-line muted gray description */}
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-xs font-body">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
