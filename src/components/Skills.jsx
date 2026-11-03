import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../context/LanguageContext'
import { useSmoothScroll } from '../context/SmoothScrollContext'

gsap.registerPlugin(ScrollTrigger)

/**
 * Skills Section (Light, Minimal Grid with Hairlines & GitHub Contribution Stats)
 * Restyled with heavy-sans typography and JetBrains Mono metadata
 */
function Skills() {
  const { lang, t } = useLanguage()
  const { reducedMotion } = useSmoothScroll() || {}
  const sectionRef = useRef(null)

  const skillCategories = [
    {
      num: '01',
      title: lang === 'id' ? 'FRONTEND WEB RUNTIME' : 'FRONTEND WEB RUNTIME',
      desc:
        lang === 'id'
          ? 'Rekayasa antarmuka responsif, aksesibel, dan presisi tinggi dengan standar rendering modern, SSR/SSG, dan state machine deterministik.'
          : 'Responsive, accessible, high-precision web interfaces engineered with modern rendering architectures, SSR/SSG workflows, and strict state machines.',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'],
    },
    {
      num: '02',
      title: lang === 'id' ? 'NATIVE MOBILE APPS' : 'NATIVE MOBILE RUNTIMES',
      desc:
        lang === 'id'
          ? 'Pengembangan aplikasi native Android performa tinggi dengan Jetpack Compose & Kotlin, arsitektur offline-first, dan alur cross-platform Flutter.'
          : 'High-performance native Android application engineering with Kotlin & Jetpack Compose, offline-first data architectures, and Flutter cross-platform flows.',
      skills: ['Kotlin', 'Jetpack Compose', 'Flutter', 'Android SDK', 'SQLite', 'Retrofit'],
    },
    {
      num: '03',
      title: lang === 'id' ? 'BACKEND & BASIS DATA' : 'BACKEND & DISTRIBUTED DATA',
      desc:
        lang === 'id'
          ? 'Layanan API RESTful, arsitektur microservices, orkestrasi database relasional, dan integrasi otentikasi aman ber-throughput tinggi.'
          : 'High-throughput transactional APIs, microservice design, relational schema engineering, and secure real-time message broker integrations.',
      skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'Laravel', 'Supabase', 'PostgreSQL', 'Docker'],
    },
  ]

  // Entrance reveal animation
  useEffect(() => {
    if (!sectionRef.current || reducedMotion) return

    const cards = sectionRef.current.querySelectorAll('.skill-box')
    const trigger = gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          once: true,
        },
      }
    )

    return () => trigger.kill()
  }, [reducedMotion])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full min-h-screen bg-[#f8f6f0] text-[#16171a] py-24 md:py-32 border-t border-[#e6e2d8] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e6e2d8] pb-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#c2410c] block mb-2 font-bold">
              TECHNICAL ARSENAL // 05
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-[#16171a] tracking-tight uppercase leading-[0.95]">
              {lang === 'id' ? 'KEAHLIAN TEKNIS' : 'SKILLS & CAPABILITIES'}
            </h2>
          </div>
          <p className="font-sans text-sm text-[#5e616b] max-w-md md:text-right font-normal leading-relaxed">
            {lang === 'id'
              ? 'Standar rekayasa perangkat lunak modern yang mengutamakan kecepatan render, keandalan data, dan arsitektur kode bersih.'
              : 'Disciplined modern software engineering stack emphasizing render throughput, database reliability, and clean architecture.'}
          </p>
        </div>

        {/* 3-Column Minimal Grid with Hairlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="skill-box p-8 rounded-3xl bg-white border border-[#e6e2d8] flex flex-col justify-between hover:border-[#c2410c] transition-colors shadow-xs group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-[#e6e2d8] pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#767882] font-bold">
                    INDEX // {cat.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#dfdbd0] group-hover:bg-[#c2410c] transition-colors" />
                </div>

                <h3 className="font-sans font-extrabold text-xl text-[#16171a] uppercase tracking-tight pt-2">
                  {cat.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4b4d54] leading-relaxed font-normal">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-8 border-t border-[#e6e2d8] mt-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#767882] block mb-3 font-semibold">
                  CORE TOOLS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 bg-[#efece4] border border-[#dfdbd0] rounded-md text-[#16171a] group-hover:border-[#c2410c]/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Coding Activity Stat Block */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e6e2d8] flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-xs">
          <div className="flex flex-col gap-2 max-w-md">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#15803d] animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c2410c] font-bold">
                CODING ACTIVITY // GITHUB
              </span>
            </div>
            <h4 className="font-sans font-black text-2xl text-[#16171a] uppercase tracking-tight">
              Open-Source & Production Commits
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#5e616b] font-normal">
              Active engineering workflow tracked publicly at{' '}
              <a
                href="https://github.com/HadinNazmi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[#c2410c] underline underline-offset-4 hover:text-[#9a3412] font-semibold"
              >
                @hadinnazmi
              </a>
              .
            </p>
          </div>

          {/* Activity Metric Tiles */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex flex-col">
              <span className="font-sans font-black text-3xl sm:text-4xl text-[#16171a] tracking-tight">
                04+
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#767882]">
                YEARS CODING
              </span>
            </div>
            <div className="w-[1px] h-10 bg-[#e6e2d8] hidden sm:block" />

            <div className="flex flex-col">
              <span className="font-sans font-black text-3xl sm:text-4xl text-[#16171a] tracking-tight">
                18+
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#767882]">
                REPOSITORIES
              </span>
            </div>
            <div className="w-[1px] h-10 bg-[#e6e2d8] hidden sm:block" />

            <div className="flex flex-col">
              <span className="font-sans font-black text-3xl sm:text-4xl text-[#15803d] tracking-tight">
                99.8%
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#767882]">
                BUILD STABILITY
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
