import { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Splash from './components/Splash'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './index.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  if (showSplash) {
    return <Splash onFinish={() => setShowSplash(false)} />
  }

  return (
    <LanguageProvider>
      <div className="w-full min-h-screen bg-surface">
        <Navbar />
        <main className="w-full pt-20 bg-surface">
          <div className="flex flex-col w-full">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App