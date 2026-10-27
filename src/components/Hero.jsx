import { useLanguage } from '../context/LanguageContext'

function Hero() {
  const { lang } = useLanguage()

  return (
    <div className="relative w-full bg-surface">
      <section className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pt-4 lg:pt-8 pb-0 w-full relative z-0" id="hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* LEFT: Cutout Portrait (BEHIND the About Card, z-0) */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-start order-2 lg:order-1 self-end z-0">
            {/* Cutout Portrait Image: Sits at z-0 so it tucks BEHIND the About Card */}
            <div className="relative w-full flex items-end justify-center lg:justify-start">
              <img
                src="/images/hero_person.png?v=2"
                alt="Hadin Nazmi"
                className="h-[440px] sm:h-[500px] lg:h-[560px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)] select-none pointer-events-none"
                onError={(e) => {
                  e.target.src = '/images/hero.png'
                }}
              />
            </div>
          </div>

          {/* RIGHT: Clean, Bold Typography - Raised higher to align with portrait and balanced sizing */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center self-center order-1 lg:order-2 pl-0 lg:pl-6 pt-4 lg:pt-0 pb-12 lg:pb-16 z-10">
            {/* Top Greeting Badge: "Hello!!" in lime */}
            <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full shadow-sm mb-3 sm:mb-4">
              <span className="font-headline-sm text-sm sm:text-base font-bold tracking-tight">
                Hello!!
              </span>
            </div>

            {/* Main Bold Headline with clean, balanced font sizing */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold text-on-surface tracking-tight leading-[1.12]">
                {lang === 'id' ? 'Saya ' : "I'm "}
                <span className="inline-block bg-primary-container text-white px-3 sm:px-4 py-0.5 rounded-2xl shadow-sm rotate-[-1deg]">
                  Hadin
                </span>
                ,
              </h1>

              <h2 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold text-on-surface tracking-tight leading-[1.12]">
                {lang === 'id' ? 'Saya seorang ' : "I'm a "}
                <span className="inline-block bg-secondary-fixed text-on-secondary-fixed px-3 sm:px-4 py-0.5 rounded-2xl shadow-sm">
                  Full Stack
                </span>
              </h2>

              <h2 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold text-on-surface tracking-tight leading-[1.12] flex items-center flex-wrap gap-2 sm:gap-3">
                <span className="inline-block bg-primary-container text-secondary-fixed px-3 sm:px-4 py-0.5 rounded-2xl shadow-sm rotate-[1deg]">
                  Web &amp; Mobile
                </span>
                <span>Developer</span>
                <span className="inline-block text-primary-container text-2xl sm:text-3xl transform rotate-45 select-none ml-1">
                  ▲
                </span>
              </h2>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Hero