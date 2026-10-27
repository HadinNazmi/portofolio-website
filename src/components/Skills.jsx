import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

function Skills() {
  const [ref, visible] = useScrollReveal()
  const { t } = useLanguage()

  return (
    <section
      id="skills"
      ref={ref}
      className={`max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-xl w-full transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center max-w-2xl mx-auto mb-space-lg">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        {/* Frontend Web */}
        <div className="bg-surface-container-lowest p-space-lg rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-secondary text-[28px]">web</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
              {t.skills.cat1Title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              {t.skills.cat1Desc}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="bg-surface-container-low text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              Next.js 14
            </span>
            <span className="bg-surface-container-low text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              React 18
            </span>
            <span className="bg-surface-container-low text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              TypeScript
            </span>
            <span className="bg-secondary-fixed text-on-secondary-fixed font-bold font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              Tailwind CSS
            </span>
            <span className="bg-surface-container-low text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              HTML5 / CSS3
            </span>
            <span className="bg-surface-container-low text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              Redux / Zustand
            </span>
          </div>
        </div>

        {/* Mobile & Backend Services */}
        <div className="bg-primary-container text-on-primary p-space-lg rounded-3xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-[28px]">smartphone</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-primary mb-2">
              {t.skills.cat2Title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-primary-container mb-space-md">
              {t.skills.cat2Desc}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="bg-secondary-fixed text-on-secondary-fixed font-bold font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              Kotlin (Android)
            </span>
            <span className="bg-surface-container-lowest/10 text-on-primary font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              Jetpack Compose
            </span>
            <span className="bg-surface-container-lowest/10 text-on-primary font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              Flutter SDK
            </span>
            <span className="bg-secondary-fixed text-on-secondary-fixed font-bold font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              FastAPI &amp; Python
            </span>
            <span className="bg-surface-container-lowest/10 text-on-primary font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              Laravel 10
            </span>
            <span className="bg-surface-container-lowest/10 text-on-primary font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              Node.js Express
            </span>
          </div>
        </div>

        {/* Data, Cloud & Infra */}
        <div className="bg-surface-container-lowest p-space-lg rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-secondary text-[28px]">cloud_sync</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
              {t.skills.cat3Title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              {t.skills.cat3Desc}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="bg-surface-container-low text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              PostgreSQL
            </span>
            <span className="bg-secondary-fixed text-on-secondary-fixed font-bold font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              Supabase BaaS
            </span>
            <span className="bg-surface-container-low text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              Docker Engine
            </span>
            <span className="bg-surface-container-low text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              Git &amp; GitHub Actions
            </span>
            <span className="bg-surface-container-low text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              Redis In-Memory
            </span>
            <span className="bg-surface-container-low text-on-surface font-label-sm text-label-sm px-3 py-1.5 rounded-full">
              Figma UI Systems
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
