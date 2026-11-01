import { useLanguage } from '../context/LanguageContext'

function About() {
  const { t } = useLanguage()

  return (
    <section
      className="w-full bg-tertiary-container text-on-tertiary py-28 px-gutter-mobile md:px-margin border-b border-white/10 relative"
      id="about"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Section Tag */}
        <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-zinc-400 border border-zinc-800 px-3 py-1">
          {t.about.tag}
        </span>

        {/* Headline Statement */}
        <h2 className="font-quote-editorial text-headline-sm md:text-headline-lg lg:text-[40px] text-zinc-300 leading-snug font-normal max-w-4xl">
          {t.about.headlinePrefix}
          <span className="font-bold text-white underline underline-offset-8 decoration-1 decoration-zinc-600">
            {t.about.headlineHighlight1}
          </span>
          {t.about.headlineMid}
          <span className="font-bold text-white">
            {t.about.headlineHighlight2}
          </span>
          {t.about.headlineSuffix}
        </h2>

        {/* Manifesto Body Paragraph */}
        <p className="font-body-lg text-body-lg text-zinc-400 max-w-3xl leading-relaxed">
          {t.about.manifesto}
        </p>

        {/* Pill Badges Flex Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
          <div className="border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-zinc-300 font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 hover:border-zinc-500 transition-colors">
            <span>🎓</span>
            <span>{t.about.badgePcr}</span>
          </div>
          <div className="border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-zinc-300 font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 hover:border-zinc-500 transition-colors">
            <span>🏆</span>
            <span>{t.about.badgeWinner}</span>
          </div>
          <div className="border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-zinc-300 font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 hover:border-zinc-500 transition-colors">
            <span>⚡</span>
            <span>{t.about.badgeArch}</span>
          </div>
          <div className="border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-zinc-300 font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 hover:border-zinc-500 transition-colors">
            <span>📍</span>
            <span>{t.about.badgeLocation}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About