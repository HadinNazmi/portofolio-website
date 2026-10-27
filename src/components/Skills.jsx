import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

function Skills() {
  const [ref, visible] = useScrollReveal()
  const { t } = useLanguage()

  return (
    <section
      id="skills"
      ref={ref}
      className={`max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-xl w-full relative z-0 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* BACKGROUND CUTOUT PHOTO: Free-standing background element (z-0) extending downwards behind Projects with bottom fade */}
      <div
        className="absolute -right-4 sm:right-0 lg:-right-2 xl:right-2 2xl:right-6 top-28 sm:top-32 lg:top-36 pointer-events-none select-none z-0 opacity-20 sm:opacity-30 lg:opacity-100 transition-opacity"
        style={{
          maskImage: 'linear-gradient(to bottom, black 44%, rgba(0,0,0,0.25) 70%, transparent 92%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 44%, rgba(0,0,0,0.25) 70%, transparent 92%)',
        }}
      >
        <img
          src="/images/Pertamina.png"
          alt="Hadin Nazmi - Pertamina"
          className="h-[680px] sm:h-[800px] lg:h-[950px] xl:h-[1050px] w-auto max-w-none object-contain object-top drop-shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
          onError={(e) => {
            e.target.src = '/images/Pertamina.jpeg'
          }}
        />
      </div>

      <div className="text-center max-w-2xl mx-auto mb-space-lg relative z-10">
        <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
          {t.skills.badge}
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
          {t.skills.title}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">
          {t.skills.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* LEFT COLUMN: Skill Cards (Frontend, Mobile/Backend, Cloud/Infra) */}
        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 justify-between">
          {/* 1. Frontend Web */}
          <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-secondary/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-surface-container-high flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-[24px]">web</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-sm text-base sm:text-lg font-bold text-on-surface">
                  {t.skills.cat1Title}
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                  {t.skills.cat1Desc}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 pl-0 sm:pl-15">
              <span className="bg-surface-container-low text-on-surface font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                Next.js 14
              </span>
              <span className="bg-surface-container-low text-on-surface font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                React 18
              </span>
              <span className="bg-surface-container-low text-on-surface font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                TypeScript
              </span>
              <span className="bg-secondary-fixed text-on-secondary-fixed font-bold font-label-sm text-xs px-2.5 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-surface-container-low text-on-surface font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                HTML5 / CSS3
              </span>
              <span className="bg-surface-container-low text-on-surface font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                Redux / Zustand
              </span>
            </div>
          </div>

          {/* 2. Mobile & Backend Services (Featured Card) */}
          <div className="bg-primary-container text-on-primary p-5 sm:p-6 rounded-3xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">smartphone</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-sm text-base sm:text-lg font-bold text-on-primary">
                  {t.skills.cat2Title}
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-primary-container mt-1 leading-relaxed">
                  {t.skills.cat2Desc}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 pl-0 sm:pl-15">
              <span className="bg-secondary-fixed text-on-secondary-fixed font-bold font-label-sm text-xs px-2.5 py-1 rounded-full">
                Kotlin (Android)
              </span>
              <span className="bg-surface-container-lowest/15 text-white font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                Jetpack Compose
              </span>
              <span className="bg-surface-container-lowest/15 text-white font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                Flutter SDK
              </span>
              <span className="bg-secondary-fixed text-on-secondary-fixed font-bold font-label-sm text-xs px-2.5 py-1 rounded-full">
                FastAPI &amp; Python
              </span>
              <span className="bg-surface-container-lowest/15 text-white font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                Laravel 10
              </span>
              <span className="bg-surface-container-lowest/15 text-white font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                Node.js Express
              </span>
            </div>
          </div>

          {/* 3. Cloud, Data & Infrastructure */}
          <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-secondary/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-surface-container-high flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-[24px]">cloud_sync</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-sm text-base sm:text-lg font-bold text-on-surface">
                  {t.skills.cat3Title}
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                  {t.skills.cat3Desc}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 pl-0 sm:pl-15">
              <span className="bg-surface-container-low text-on-surface font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                PostgreSQL
              </span>
              <span className="bg-secondary-fixed text-on-secondary-fixed font-bold font-label-sm text-xs px-2.5 py-1 rounded-full">
                Supabase BaaS
              </span>
              <span className="bg-surface-container-low text-on-surface font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                Docker Engine
              </span>
              <span className="bg-surface-container-low text-on-surface font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                Git &amp; GitHub Actions
              </span>
              <span className="bg-surface-container-low text-on-surface font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                Redis In-Memory
              </span>
              <span className="bg-surface-container-low text-on-surface font-label-sm text-xs px-2.5 py-1 rounded-full font-medium">
                Figma UI Systems
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Spacer so the cards stay on the left (58% width) */}
        <div className="hidden lg:block lg:col-span-5 pointer-events-none" />
      </div>
    </section>
  )
}

export default Skills
