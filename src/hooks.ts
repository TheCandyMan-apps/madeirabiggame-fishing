import { useState, useEffect, useRef, useCallback } from 'react'

export function useLanguage() {
  const [lang, setLang] = useState<'en' | 'pt'>(() => {
    const stored = localStorage.getItem('mbgf-lang')
    if (stored === 'en' || stored === 'pt') return stored
    return navigator.language.startsWith('pt') ? 'pt' : 'en'
  })

  const toggle = useCallback(() => {
    setLang(l => {
      const next = l === 'en' ? 'pt' : 'en'
      localStorage.setItem('mbgf-lang', next)
      return next
    })
  }, [])

  return { lang, toggle }
}

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return { count, ref }
}
