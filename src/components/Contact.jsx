import { useScrollReveal } from '../hooks/useScrollReveal'

function Contact() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="contact" ref={ref} className={`contact reveal reveal-up ${visible ? 'reveal-visible' : ''}`}>
      <h2>Kontak</h2>
      <p>Tertarik berkolaborasi atau ingin diskusi project? Hubungi saya:</p>
      <div className="contact-links">
        <a href="mailto:tengkumuhammad23ti@mahasiswa.pcr.ac.id">Email</a>
        <a href="https://github.com/HadinNazmi" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/tengku-muhammad-hadin" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}

export default Contact