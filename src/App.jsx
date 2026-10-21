import { useState } from 'react'
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
    <div className="app-root">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App