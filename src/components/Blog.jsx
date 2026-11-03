import SectionHeader from './common/SectionHeader'

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'BUILDING RESILIENT OFFLINE-FIRST MOBILE ARCHITECTURES',
      excerpt:
        'Examining SQLite caching strategies, transactional data synchronization, and Kotlin Coroutines in modern Android production applications.',
      date: 'OCT 24, 2025',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'OPTIMIZING FRAME BUDGETS IN REACT AND NEXT.JS',
      excerpt:
        'Techniques for eliminating unnecessary re-renders, leveraging React Server Components, and maintaining strict 60fps render loops.',
      date: 'NOV 12, 2025',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'LESSONS FROM WINNING KMIPN VII: TELEMETRY AT SCALE',
      excerpt:
        'How our engineering team architected low-latency IoT message brokers, fault-tolerant sensor clustering, and real-time command dashboards.',
      date: 'DEC 05, 2025',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section id="blog" className="py-24 sm:py-32 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <SectionHeader subtitle="PUBLICATIONS & ARTICLES" title="LATEST NEWS" />

        {/* 3-Column Card Layout with Sharp Corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-none shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Top 16:9 Image */}
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wide text-[#222222] font-heading mb-3 line-clamp-2 group-hover:text-black transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3 font-body mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Bottom Meta Row separated by thin top border */}
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-xs font-heading">
                  <a
                    href="#blog"
                    className="font-bold text-[#222222] uppercase tracking-wider hover:underline"
                  >
                    Read More
                  </a>
                  <span className="text-[#888888] tracking-widest">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Centered Solid Black VIEW MORE Button */}
        <div className="text-center mt-14">
          <button
            type="button"
            className="inline-block bg-[#222222] hover:bg-black text-white text-xs font-bold tracking-widest uppercase px-10 py-3.5 transition-all duration-200 font-heading"
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog
