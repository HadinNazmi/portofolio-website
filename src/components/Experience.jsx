import SectionHeader from './common/SectionHeader'

function Experience() {
  const experiences = [
    {
      id: 'pertamina',
      company: 'PT Pertamina Patra Niaga',
      role: 'Programmer',
      type: 'Internship',
      period: 'Oct 2026 — Present',
      duration: '2 mos',
      location: 'Kota Dumai, Riau, Indonesia · On-site',
      logo: '/images/pertaminalogo.png',
      image: '/images/coverallbg.jpeg',
      desc: 'Developing operational software, automation pipelines, and internal monitoring systems at Refinery Unit II Dumai. Streamlining data flow, reporting dashboards, and database integrations for energy refinery systems.',
      skills: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Industrial IT'],
    },
    {
      id: 'bji',
      company: 'Bank Jatah Indonesia',
      role: 'Web & App Developer',
      type: 'Freelance & PKM',
      period: 'Nov 2025 — Present',
      duration: '1 yr 1 mo',
      location: 'Pekanbaru, Riau, Indonesia · Hybrid',
      logo: '/images/bankjatahlogo.png',
      image: '/images/bji.jpeg',
      desc: 'Engineered the native Android e-wallet mobile application featuring biometric security, ledger synchronization, and automated daily balance tracking. Built the responsive corporate company profile website.',
      skills: ['Android Development', 'Kotlin', 'Jetpack Compose', 'Supabase', 'Tailwind CSS'],
    },
  ]

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <SectionHeader subtitle="CAREER & INTERNSHIP" title="WORK EXPERIENCE" />

        {/* 2-Column Experience Cards with Full Clean Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Full Image Header (Unobstructed & Clean) */}
              <div className="relative w-full aspect-[16/10] sm:aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.company}
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
                  }}
                  className={`w-full h-full object-cover ${
                    exp.id === 'pertamina' ? 'object-[center_18%]' : 'object-center'
                  } group-hover:scale-105 transition-transform duration-500`}
                />

                {/* Status Badge in Top Right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#222222]/85 backdrop-blur-sm text-white px-3 py-1 font-heading shadow-sm">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Company Logo & Titles Header Row */}
                  <div className="flex items-center space-x-3.5 mb-4">
                    <div className="w-12 h-12 bg-white p-1.5 rounded-sm shadow-xs border border-gray-200 flex items-center justify-center shrink-0">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#666666] font-heading block">
                        {exp.company}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide text-[#222222] font-heading">
                        {exp.role}
                      </h3>
                    </div>
                  </div>

                  {/* Period & Location */}
                  <div className="text-xs text-[#888888] font-heading mb-4 flex flex-col space-y-1.5 border-b border-gray-100 pb-4">
                    <div className="flex items-center space-x-2">
                      <svg className="w-3.5 h-3.5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>
                        <strong className="text-[#222222]">{exp.period}</strong> · {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-3.5 h-3.5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-body mb-6">
                    {exp.desc}
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="border-t border-gray-100 pt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-bold uppercase tracking-wider bg-[#F0F0F0] text-[#222222] px-2.5 py-1 font-heading border border-[#E5E5E5]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience