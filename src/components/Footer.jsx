function Footer() {
  return (
    <footer className="bg-[#1D1D1D] text-white pt-20 pb-12 font-heading">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* 4-Column Info Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Col 1: Brand / Name */}
          <div>
            <h4 className="text-xl font-black tracking-widest uppercase mb-4 text-white">
              HADIN NAZMI
            </h4>
            <p className="text-xs text-[#999999] leading-relaxed font-body">
              Full-Stack Web &amp; Mobile Developer blending architectural precision with
              high-throughput native software performance.
            </p>
          </div>

          {/* Col 2: Phone No. */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-white">
              PHONE NO.
            </h4>
            <p className="text-xs text-[#999999] font-body leading-loose">
              +62 812-7654-3210
              <br />
              +62 851-9876-5432
            </p>
          </div>

          {/* Col 3: Email */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-white">
              EMAIL
            </h4>
            <p className="text-xs text-[#999999] font-body leading-loose">
              <a
                href="mailto:hadinnazmi21@gmail.com"
                className="hover:text-white transition-colors"
              >
                hadinnazmi21@gmail.com
              </a>
            </p>
          </div>

          {/* Col 4: Address */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-white">
              ADDRESS
            </h4>
            <p className="text-xs text-[#999999] font-body leading-relaxed">
              Pekanbaru, Riau 28282
              <br />
              Indonesia
            </p>
          </div>
        </div>

        {/* Thin Horizontal Divider Line */}
        <div className="border-t border-[#2A2A2A] mb-8" />

        {/* Centered Copyright Text */}
        <div className="text-center text-[11px] uppercase tracking-widest text-[#777777]">
          &copy; {new Date().getFullYear()} HADIN NAZMI. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}

export default Footer
