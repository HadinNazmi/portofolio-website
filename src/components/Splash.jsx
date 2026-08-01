import { useState, useEffect } from 'react'

const greetings = [
  "Hello",
  "Halo",
  "Bonjour",
  "Hola",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Ciao",
  "Namaste",
  "Selamat Datang",
]

function Splash({ onFinish }) {
  const [index, setIndex] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => setIndex((i) => i + 1), 280)
      return () => clearTimeout(timer)
    } else {
      const holdTimer = setTimeout(() => setFadeOut(true), 500)
      const finishTimer = setTimeout(() => onFinish(), 1100)
      return () => {
        clearTimeout(holdTimer)
        clearTimeout(finishTimer)
      }
    }
  }, [index])

  return (
    <div className={`splash ${fadeOut ? 'splash-fade-out' : ''}`}>
      <span key={index} className="splash-greeting">
        {greetings[index]}
      </span>
    </div>
  )
}

export default Splash