import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  {
    icon: "devices",
    title: "Frontend",
    dotClass: "dot-primary",
    hoverClass: "pill-hover-primary",
    skills: ["HTML5", "CSS3 / Tailwind", "JavaScript ES6+", "React.js", "Next.js"],
  },
  {
    icon: "smartphone",
    title: "Mobile & Backend",
    dotClass: "dot-secondary",
    hoverClass: "pill-hover-secondary",
    skills: ["Kotlin", "Jetpack Compose", "Flutter", "Python", "FastAPI", "Node.js", "Laravel"],
  },
  {
    icon: "cloud_sync",
    title: "Database & Cloud / Tools",
    dotClass: "dot-tertiary",
    hoverClass: "pill-hover-tertiary",
    skills: ["Supabase", "PostgreSQL", "Docker", "Git & GitHub", "Firebase", "Postman", "Figma"],
  },
]

function Skills() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="skills" ref={ref} className={`stitch-skills ${visible ? 'reveal-visible' : ''}`}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-pill-secondary">
            <span className="material-symbols-outlined text-xs">neurology</span>
            CAPABILITIES
          </span>
          <h2 className="section-title">MY SKILLS &amp; EXPERTISE</h2>
          <p className="section-subtitle">
            Crafting robust architectures with modern tech stacks, automated pipelines, and declarative user interfaces.
          </p>
        </div>

        {/* Highlight Tile */}
        <div className="skills-highlight-tile">
          <div className="highlight-content">
            <div className="highlight-header">
              <span className="material-symbols-outlined text-tertiary">military_tech</span>
              <span className="highlight-title">Technical Execution &amp; Leadership</span>
            </div>
            <p className="highlight-desc">
              Penerapan clean code architecture, modular design, pengelolaan state reaktif, serta orkestrasi pipeline backend untuk menghasilkan aplikasi berkinerja tinggi dan teruji di lingkungan produksi.
            </p>
          </div>
          <div className="highlight-tags">
            <div className="highlight-tag text-primary">Microservices • Full Stack</div>
            <div className="highlight-tag text-tertiary">Native Android • CI/CD</div>
          </div>
        </div>

        {/* 3-Column Categorized Pill Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-cat-card">
              <div className="skill-cat-header">
                <span className={`material-symbols-outlined ${cat.dotClass.replace('dot-', 'text-')}`}>
                  {cat.icon}
                </span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-pills-wrap">
                {cat.skills.map((skill) => (
                  <span key={skill} className={`skill-pill ${cat.hoverClass}`}>
                    <span className={`pill-dot ${cat.dotClass}`}></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
