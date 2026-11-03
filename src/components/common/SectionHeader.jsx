function SectionHeader({ subtitle, title, light = false, className = '' }) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {subtitle && (
        <span
          className={`block text-xs uppercase tracking-[0.25em] font-medium mb-2 ${
            light ? 'text-gray-300' : 'text-[#666666]'
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl font-extrabold uppercase tracking-wide font-heading ${
          light ? 'text-white' : 'text-[#222222]'
        }`}
      >
        {title}
      </h2>
      <div className="flex items-center justify-center gap-1.5 mt-3.5">
        <span className={`w-8 h-[1.5px] ${light ? 'bg-white/60' : 'bg-[#222222]'}`}></span>
        <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-white' : 'bg-[#222222]'}`}></span>
        <span className={`w-8 h-[1.5px] ${light ? 'bg-white/60' : 'bg-[#222222]'}`}></span>
      </div>
    </div>
  )
}

export default SectionHeader
