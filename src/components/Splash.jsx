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
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-pulse"></span>
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
          System Initializing
        </span>
      </div>
      <span key={index} className="splash-text">
        {greetings[index]}
      </span>
    </div>
  )
}

export default Splash