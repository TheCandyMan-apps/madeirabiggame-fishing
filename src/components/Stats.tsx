import { useRef, useEffect, useState } from 'react'
import type { Translation } from '../translations'

interface StatsProps {
  t: Translation
}

function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [visible, setVisible] = useState(false)
  const [displayVal, setDisplayVal] = useState('0')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  useEffect(() => {
    if (!visible) return
    const numeric = parseInt(value.replace(/\D/g, ''))
    const suffix = value.replace(/[\d]/g, '')
    if (isNaN(numeric)) {
      setDisplayVal(value)
      return
    }
    let start = 0
    const duration = 1500
    const step = Math.ceil(numeric / (duration / 16))
    const timer = setInterval(() => {
      start = Math.min(start + step, numeric)
      setDisplayVal(`${start}${suffix}`)
      if (start >= numeric) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [visible, value])

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div
        className="text-4xl sm:text-5xl lg:text-6xl font-black gold-shimmer mb-2"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {displayVal}
      </div>
      <div className="text-blue-300 text-sm font-medium tracking-wider uppercase">{label}</div>
    </div>
  )
}

export default function Stats({ t }: StatsProps) {
  const { years, yearsLabel, species, speciesLabel, trips, tripsLabel, satisfaction, satisfactionLabel } = t.stats

  return (
    <section className="py-16 border-y border-blue-900/30 bg-[#021528]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          <StatItem value={years} label={yearsLabel} delay={0} />
          <StatItem value={species} label={speciesLabel} delay={150} />
          <StatItem value={trips} label={tripsLabel} delay={300} />
          <StatItem value={satisfaction} label={satisfactionLabel} delay={450} />
        </div>
      </div>
    </section>
  )
}
