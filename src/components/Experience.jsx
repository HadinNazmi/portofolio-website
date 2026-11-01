import { useLanguage } from '../context/LanguageContext'

function Experience() {
  const { t } = useLanguage()

  const { entry1, entry2 } = t.experience

  return (
    <section className="w-full bg-surface py-24 border-b border-outline-variant" id="experience">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin flex flex-col gap-12">
        {/* Section Header */}
        <div className="border-b border-outline-variant pb-6">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-1">
            {t.experience.tag}
          </span>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary">
            {t.experience.title}
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Split Bento Cards */}
        <div className="flex flex-col gap-8">
          {/* Entry 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-outline-variant bg-surface-container-lowest">
            {/* Left Half: Light Editorial Content */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-outline-variant">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
                    {entry1.roleTag}
                  </span>
                  <span className="font-mono text-xs text-primary font-semibold">
                    {entry1.period}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-sm md:text-headline-md text-primary">
                  {entry1.role}
                </h3>
                <div className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                  {entry1.org}
                </div>
                <ul className="space-y-3 pt-4 text-on-surface-variant font-body-md text-body-md">
                  {entry1.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 flex items-center gap-3 flex-wrap">
                {entry1.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-label-sm text-label-sm uppercase px-3 py-1 bg-surface-container border border-outline-variant text-on-surface"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Half: Dark Slate Monochromatic Telemetry */}
            <div className="lg:col-span-5 bg-tertiary-container text-on-tertiary p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-400">
                  {entry1.telemetryTitle}
                </span>
                <span className="material-symbols-outlined text-[18px] text-zinc-400">insights</span>
              </div>
              <div className="my-8 flex flex-col gap-6">
                <div>
                  <span className="font-display-xl text-headline-lg text-white font-normal block">
                    {entry1.stat1Val}
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-400">
                    {entry1.stat1Label}
                  </span>
                </div>
                <div>
                  <span className="font-display-xl text-headline-lg text-white font-normal block">
                    {entry1.stat2Val}
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-400">
                    {entry1.stat2Label}
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 font-mono text-xs text-zinc-500">
                {entry1.hash}
              </div>
            </div>
          </div>

          {/* Entry 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-outline-variant bg-surface-container-lowest">
            {/* Left Half: Light Editorial Content */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-outline-variant">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
                    {entry2.roleTag}
                  </span>
                  <span className="font-mono text-xs text-primary font-semibold">
                    {entry2.period}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-sm md:text-headline-md text-primary">
                  {entry2.role}
                </h3>
                <div className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                  {entry2.org}
                </div>
                <ul className="space-y-3 pt-4 text-on-surface-variant font-body-md text-body-md">
                  {entry2.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 flex items-center gap-3 flex-wrap">
                {entry2.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-label-sm text-label-sm uppercase px-3 py-1 bg-surface-container border border-outline-variant text-on-surface"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Half: Editorial Quote & Principle */}
            <div className="lg:col-span-5 bg-tertiary-container text-on-tertiary p-8 md:p-12 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-zinc-400">
                  {entry2.principleTitle}
                </span>
                <span className="material-symbols-outlined text-[18px] text-zinc-400">format_quote</span>
              </div>
              <div className="my-8">
                <blockquote className="font-quote-editorial text-body-lg md:text-headline-sm text-zinc-200 italic font-normal leading-relaxed">
                  {entry2.quote}
                </blockquote>
              </div>
              <div className="pt-4 border-t border-white/10 font-label-sm text-label-sm uppercase tracking-widest text-zinc-400">
                {entry2.hash}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience