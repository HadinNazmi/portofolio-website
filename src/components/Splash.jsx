import { useState, useEffect } from 'react'

const greetings = [
  "Hello",
  "Halo",
  "Bonjour",
  "Hola",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Selamat Datang",
]

function Splash({ onFinish }) {
  const [index, setIndex] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => setIndex((i) => i + 1), 220)
      return () => clearTimeout(timer)
    } else {
      const holdTimer = setTimeout(() => setFadeOut(true), 400)
      const finishTimer = setTimeout(() => onFinish(), 900)
      return () => {
        clearTimeout(holdTimer)
        clearTimeout(finishTimer)
      }
    }
  }, [index, onFinish])

  return (
    <div className={`splash-container ${fadeOut ? 'splash-fade-out' : ''}`}>
      <span key={index} className="splash-text">
        {greetings[index]}
      </span>
    </div>
  )
}

export default Splash