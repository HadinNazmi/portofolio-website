import { useLanguage } from '../context/LanguageContext'

function Skills() {
  const { t } = useLanguage()

  const cards = [
    {
      icon: 'terminal',
      data: t.skills.card1,
    },
    {
      icon: 'devices',
      data: t.skills.card2,
    },
    {
      icon: 'database',
      data: t.skills.card3,
    },
  ]

  return (
    <section className="w-full bg-surface-container-lowest py-24 border-b border-outline-variant" id="skills">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant pb-6">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-1">
              {t.skills.tag}
            </span>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary">
              {t.skills.title}
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Bento-Box Grid with 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-surface border border-outline-variant p-8 flex flex-col justify-between hover:border-primary transition-colors group"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center transition-transform group-hover:scale-105">
                  <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary pt-2">
                  {card.data.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {card.data.desc}
                </p>
              </div>

              <div className="pt-8">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline block mb-3">
                  {t.skills.arsenalLabel}
                </span>
                <div className="flex flex-wrap gap-2">
                  {card.data.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-label-sm text-label-sm uppercase px-3 py-1 bg-surface-container-lowest border border-outline-variant text-on-surface hover:border-primary transition-colors"
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

export default Skills
