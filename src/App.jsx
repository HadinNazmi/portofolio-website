import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Stats from './components/Stats'
import Works from './components/Works'
import Organization from './components/Organization'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import { projects } from './data/projects'
import './index.css'

function App() {
  const [activeProjectSlug, setActiveProjectSlug] = useState(() => {
    const hash = window.location.hash
    if (hash.startsWith('#project-')) {
      const slug = hash.replace('#project-', '')
      const found = projects.find((p) => p.slug === slug)
      return found ? slug : null
    }
    return null
  })

  // Synchronize state with browser hash (supports browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#project-')) {
        const slug = hash.replace('#project-', '')
        const found = projects.find((p) => p.slug === slug)
        if (found) setActiveProjectSlug(slug)
      } else {
        setActiveProjectSlug(null)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleSelectProject = (slug) => {
    window.location.hash = `#project-${slug}`
    setActiveProjectSlug(slug)
  }

  const handleBackToPortfolio = () => {
    window.location.hash = '#works'
    setActiveProjectSlug(null)
    setTimeout(() => {
      const worksEl = document.getElementById('works')
      if (worksEl) {
        window.scrollTo({
          top: worksEl.offsetTop - 70,
          behavior: 'smooth',
        })
      }
    }, 80)
  }

  const currentProject = projects.find((p) => p.slug === activeProjectSlug)

  if (currentProject) {
    return (
      <ProjectDetail
        project={currentProject}
        allProjects={projects}
        onBack={handleBackToPortfolio}
        onSelectProject={handleSelectProject}
      />
    )
  }

  return (
    <div className="w-full min-h-screen bg-white text-[#666666] selection:bg-[#222222] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      <main className="w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Work Experience & Internship Section */}
        <Experience />

        {/* 4. Services Section */}
        <Services />

        {/* 5. Stats Counter Banner */}
        <Stats />

        {/* 6. Portfolio / Works Section */}
        <Works onSelectProject={handleSelectProject} />

        {/* 7. Organizational Experience Section */}
        <Organization />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
