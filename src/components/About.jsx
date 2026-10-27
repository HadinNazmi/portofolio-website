import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

function About() {
  const [ref, visible] = useScrollReveal()
  const { t } = useLanguage()

  const achievementPhotos = [
    {
      src: "/images/achievements/kmipn-1.png",
      fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxdvo7ujDCoNVj4tvVzga9-DCsa5GeOlxJuIzUXmlKzEMcAJCnSQpoXRkKTxihflf6NVJeFFvioahcnv6qSumb_AgMhCSy5mUnemWJDrQh5n6L4pSfjW4Npti7h1XiNL8pe-4uOfIUrvbsBtJTtOcq4abgf5F32_1VOr-ujkmR0i0yuHTkMt_t-Uiociyd4iM25U36va-02-TJEqbhlOrONoZkS4dLPf0l2nsWfUfoH8hyG-xSPyvpFQ",
      caption: "Juara 1 • KMIPN 7 2025",
      rotation: "-rotate-3 hover:rotate-0",
    },
    {
      src: "/images/achievements/permikomnas-1.jpg",
      fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuALb4YYgOmNctA8Iwsaqy8xXDN-ePDNtRUnJoIdK1_6Lo50cmpORjef-DcDG4qjlDTZS857-fo2zjLEtWEak09hfbTzI61r90G0-bEGdDxH5guaOx60UX47Riv51e9OUNRN5J-Hum4lhOOf5h7BeldpJA3Wq_iM6i0Oq9N3z-Sd0mGLXItyFnrTpEyDDnPE4Ck3syqHa7PVbRatKnlKp4tuxaN8BFJ1TdTsv1Is8kAchbTwzPSKJpgSQw",
      caption: "Juara 1 • Permikomnas",
      rotation: "rotate-3 hover:rotate-0",
    },
    {
      src: "/images/achievements/sic-1.jpg",
      fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhq2RVwFT9KJRzZkHOyGEpxtEVYKTHmZFY3lF4ZAh7aPevrLEcHWc1sWykVuMtyU3rZ6C98rTFEovQHehlr35qYKkFojzpN2LnnQJMcb0KV8FLnEQwzqv5kkuluDhvTDfogoqUY-BKLxjxbp1ySMo-7obpqM3JqPf_IutUC7iAhU7tS0u1qG-ZD5bYFLRWslFdqWN1POh-mOToWvK1_E6sLUp3ZtS_4pj6y9d7QPrbNPjD3eQzlzLr_Q",
      caption: "Inovasi Terbaik • SIC 2024",
      rotation: "-rotate-2 hover:rotate-0",
    },
  ]

  return (
    <section
      id="about-me"
      ref={ref}
      className={`max-w-[1440px] mx-auto px-margin-mobile lg:px-margin -mt-8 sm:-mt-10 lg:-mt-12 pb-20 w-full relative z-20 scroll-mt-24 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Outer Card with Sideways Layout matching reference */}
      <div className="rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22)] flex flex-col md:flex-row bg-[#161a23]">
        
        {/* 1. Left Strip: Staggered Tilted Achievement Photos on Neon Lime Background */}
        <div className="w-full md:w-56 lg:w-64 bg-secondary-fixed p-4 sm:p-5 flex flex-row md:flex-col items-center justify-around gap-4 shrink-0 overflow-x-auto select-none">
          {achievementPhotos.map((photo, idx) => (
            <div
              key={idx}
              className={`bg-white p-2 pb-2.5 rounded-2xl shadow-lg transition-all duration-300 transform ${photo.rotation} hover:scale-105 hover:z-20 cursor-pointer w-44 md:w-full shrink-0`}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container shadow-inner">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = photo.fallback
                  }}
                />
              </div>
              <p className="font-label-sm text-[11px] font-bold text-on-surface text-center pt-2 tracking-tight truncate">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Right Main Content Area (Upper Charcoal & Lower Midnight Purple) */}
        <div className="flex-1 flex flex-col">
          {/* Upper Charcoal Section: About Me + Education */}
          <div className="bg-[#181c24] text-white p-6 sm:p-8 lg:p-10 space-y-6 border-b border-white/5">
            {/* Row 1: About Me */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start">
              <div className="md:col-span-3">
                <h3 className="font-headline-sm text-xl font-bold text-white tracking-tight">
                  {t.about.aboutMeLabel}
                </h3>
              </div>
              <div className="md:col-span-9 space-y-3">
                <p className="font-body-md text-body-md text-surface-container-highest leading-relaxed font-normal">
                  {t.about.aboutMeBio}
                </p>

                {/* Achievements Pills with Solid High-Contrast Neon Lime Background */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {t.about.achievements.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-secondary-fixed text-on-secondary-fixed px-3.5 py-1.5 rounded-full font-label-sm text-label-sm font-bold shadow-md hover:bg-secondary-fixed-dim transition-colors"
                    >
                      <span className="material-symbols-outlined text-[17px] text-on-secondary-fixed font-bold">
                        emoji_events
                      </span>
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="border-t border-white/10 my-4"></div>

            {/* Row 2: Education */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start">
              <div className="md:col-span-3">
                <h3 className="font-headline-sm text-xl font-bold text-white tracking-tight">
                  {t.about.educationLabel}
                </h3>
              </div>
              <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* School 1 */}
                <div className="space-y-1">
                  <h4 className="font-headline-sm text-headline-sm font-bold text-white">
                    {t.about.edu1School}
                  </h4>
                  <p className="font-body-sm text-body-sm text-surface-container-highest">
                    {t.about.edu1Degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-0.5 rounded-full font-label-sm text-label-sm font-bold">
                      {t.about.edu1Period}
                    </span>
                    <span className="bg-white/10 text-secondary-fixed px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-bold border border-secondary-fixed/20">
                      {t.about.edu1Gpa}
                    </span>
                  </div>
                </div>

                {/* School 2 */}
                <div className="space-y-1">
                  <h4 className="font-headline-sm text-headline-sm font-bold text-white">
                    {t.about.edu2School}
                  </h4>
                  <p className="font-body-sm text-body-sm text-surface-container-highest">
                    {t.about.edu2Degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-0.5 rounded-full font-label-sm text-label-sm font-bold">
                      {t.about.edu2Period}
                    </span>
                    <span className="bg-white/10 text-white px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-semibold">
                      {t.about.edu2Grade}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Midnight Purple Section: Work Experience + Software / Technologies */}
          <div className="bg-primary-container text-on-primary p-6 sm:p-8 lg:p-10 space-y-6 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-fixed/10 blur-3xl pointer-events-none"></div>

            {/* Row 3: Work Experience */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start relative z-10">
              <div className="md:col-span-3">
                <h3 className="font-headline-sm text-xl font-bold text-white tracking-tight">
                  {t.about.workExperienceLabel}
                </h3>
              </div>
              <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.about.experiences.map((exp, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <h4 className="font-headline-sm text-headline-sm font-bold text-white">
                      {exp.org}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-primary-container">
                      {exp.role}{' '}
                      <span className="text-secondary-fixed font-semibold">
                        ({exp.period})
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="border-t border-white/10 my-4 relative z-10"></div>

            {/* Row 4: Software / Technologies */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start relative z-10">
              <div className="md:col-span-3">
                <h3 className="font-headline-sm text-xl font-bold text-white tracking-tight">
                  {t.about.softwareLabel}
                </h3>
              </div>
              <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {t.about.techSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-surface-container-lowest/10 hover:bg-surface-container-lowest/15 p-2.5 rounded-2xl border border-white/10 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">
                        {skill.icon}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h5 className="font-label-md text-label-md font-bold text-white truncate">
                        {skill.name}
                      </h5>
                      <span className="text-[11px] text-secondary-fixed block font-medium truncate">
                        {skill.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About