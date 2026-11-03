function About() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/HadinNazmi',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/hadinnazmi',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm7.815 5.565c1.47 1.755 2.37 4.02 2.445 6.495-2.22-.45-4.56-.375-6.84-.045-.21-.495-.45-1.005-.69-1.5 2.925-1.485 4.395-3.39 5.085-4.95zm-6.66-2.91c2.415.75 4.395 2.385 5.58 4.545-.63 1.44-2.01 3.24-4.8 4.65-1.02-2.19-2.205-4.2-3.57-6.045 1.05-.75 2.19-1.155 3.39-1.155.48 0 .945.06 1.4.165zm-4.32.96c1.335 1.8 2.49 3.75 3.495 5.865-2.985.9-6.39 1.35-10.155 1.35-.06-.555-.09-1.11-.09-1.68 0-2.34.825-4.5 2.22-6.195 1.35.21 2.895.45 4.53.66zm-7.14 8.745c3.675 0 7.02-.42 9.945-1.29.24.51.465 1.02.675 1.545-3.57 2.1-6.195 5.76-7.395 10.125-2.025-1.92-3.225-4.59-3.225-7.53 0-.96.15-1.89.435-2.775zm3.87 11.535c1.08-4.08 3.51-7.545 6.84-9.525.99 2.565 1.635 5.31 1.89 8.16-1.575 1.05-3.48 1.665-5.52 1.665-1.14 0-2.235-.21-3.21-.6zm10.395-.915c-.255-2.67-.855-5.265-1.785-7.68 2.085-.345 4.2-.42 6.225-.015-.435 3.195-2.07 5.985-4.44 7.695z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (40% / 5 cols): Portrait with Offset Light-Gray Shadow Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Offset frame background */}
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#F0F0F0] border border-[#E5E5E5] -z-10" />

              {/* Main image */}
              <div className="relative z-10 overflow-hidden bg-white shadow-sm border border-gray-100 aspect-[4/5]">
                <img
                  src="/images/hero_cropped.png"
                  onError={(e) => {
                    // Fallback to high-quality portrait if local crop is unavailable
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
                  }}
                  alt="Hadin Nazmi - Full Stack Web & Mobile Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-102"
                />
              </div>
            </div>
          </div>

          {/* Right Column (60% / 7 cols): Bio Details */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-[#222222] font-heading mb-2">
              ABOUT ME
            </h2>
            <h3 className="text-sm uppercase tracking-widest text-[#222222] font-bold font-heading mb-6 border-b border-[#222222] pb-2 inline-block">
              FULL STACK WEB &amp; MOBILE DEVELOPER
            </h3>

            <p className="text-[#666666] leading-relaxed text-sm sm:text-base mb-4 font-body">
              Hello, I am <strong className="text-[#222222] font-bold">Hadin Nazmi</strong>,
              a Full Stack Web &amp; Mobile Developer focused on building modern, responsive web applications
              and high-performance mobile apps. I develop complete digital solutions from frontend interfaces
              and backend REST APIs to database management and cloud deployment.
            </p>

            <p className="text-[#666666] leading-relaxed text-sm sm:text-base mb-6 font-body">
              Currently pursuing a Bachelor of Applied Science in Informatics Engineering at Politeknik Caltex Riau (PCR),
              I actively build production software, lead technical workshops, and compete in prestigious national technology competitions.
            </p>

            {/* Achievement & Education Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-[#F0F0F0] text-[#222222] px-3 py-1.5 font-heading border border-[#E5E5E5]">
                Politeknik Caltex Riau
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-[#F0F0F0] text-[#222222] px-3 py-1.5 font-heading border border-[#E5E5E5]">
                Juara 1 • KMIPN VII 2025
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-[#F0F0F0] text-[#222222] px-3 py-1.5 font-heading border border-[#E5E5E5]">
                Inovasi Terbaik • SIC 2024
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-[#F0F0F0] text-[#222222] px-3 py-1.5 font-heading border border-[#E5E5E5]">
                Juara 1 Data Analyst • Permikomnas
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 mb-8">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-9 h-9 rounded-full bg-[#222222] text-white flex items-center justify-center hover:bg-black hover:scale-105 transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Download CV Button */}
            <a
              href="/documents/CV_Tengku_Muhammad_Hadin_Nazmi_FIX.pdf"
              download="CV_Tengku_Muhammad_Hadin_Nazmi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#222222] hover:bg-black text-white text-xs font-bold tracking-widest uppercase px-8 py-3.5 transition-all duration-200 font-heading"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About