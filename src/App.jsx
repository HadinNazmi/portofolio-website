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
import './index.css'

function App() {
  return (
    <div className="w-full min-h-screen bg-white text-[#666666] selection:bg-[#222222] selection:text-white">
      {/* Navigation Bar (Fixed & Adaptive, hidden at top, slides down on scroll) */}
      <Navbar />

      <main className="w-full">
        {/* 1. Hero Section (Auto-Slide Background + V-Cut Bottom) */}
        <Hero />

        {/* 2. About Me Section (#FFFFFF) */}
        <About />

        {/* 3. Work Experience & Internship Section (#F9F9F9) */}
        <Experience />

        {/* 4. Services Section (#FFFFFF) */}
        <Services />

        {/* 5. Stats Counter Banner (Fixed Parallax) */}
        <Stats />

        {/* 6. Portfolio / Works Section (#FFFFFF) */}
        <Works />

        {/* 7. Organizational Experience Section (#F9F9F9) */}
        <Organization />

        {/* 8. Contact Section (#FFFFFF) */}
        <Contact />
      </main>

      {/* Footer (#1D1D1D) */}
      <Footer />
    </div>
  )
}

export default App