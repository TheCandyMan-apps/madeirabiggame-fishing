import { Check, Moon, Sun, Sunrise } from 'lucide-react'
import type { Translation } from '../translations'
import { useScrollReveal } from '../hooks'

interface TripsProps {
  t: Translation
}

const icons = [Sunrise, Sun, Moon]
const gradients = [
  'from-blue-900/40 to-blue-800/20',
  'from-[#d4af37]/20 to-blue-900/40',
  'from-blue-950/60 to-[#021528]/80',
]
const borderColors = [
  'border-blue-700/30 hover:border-blue-500/60',
  'border-[#d4af37]/50 hover:border-[#d4af37]',
  'border-blue-800/30 hover:border-blue-600/50',
]

export default function Trips({ t }: TripsProps) {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="trips"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal py-24 lg:py-32 bg-gradient-to-b from-[#021528]/30 to-[#010b1a]"
    >
      {/* Divider wave top */}
      <div className="overflow-hidden mb-0 -mt-1">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 0L60 8C120 16 240 32 360 37.3C480 43 600 37 720 32C840 27 960 21 1080 21.3C1200 21 1320 27 1380 29.3L1440 32V48H0V0Z" fill="rgba(2,21,40,0.3)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-3">Charter Options</p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.trips.title}
          </h2>
          <p className="text-blue-300 max-w-xl mx-auto leading-relaxed">{t.trips.subtitle}</p>
        </div>

        {/* Trip cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.trips.items.map((trip, i) => {
            const Icon = icons[i]
            return (
              <div
                key={i}
                className={`relative glass-card rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/40 bg-gradient-to-b ${gradients[i]} ${borderColors[i]}`}
              >
                {/* Badge */}
                {trip.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4af37] text-[#010b1a] text-xs font-black px-4 py-1 rounded-full tracking-wider uppercase whitespace-nowrap">
                    {trip.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  i === 1 ? 'bg-[#d4af37]/20 border border-[#d4af37]/40' : 'bg-blue-800/40 border border-blue-700/40'
                }`}>
                  <Icon className={`w-6 h-6 ${i === 1 ? 'text-[#d4af37]' : 'text-blue-300'}`} />
                </div>

                <div className="mb-2 flex items-end gap-3">
                  <h3
                    className="text-3xl font-black text-white"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {trip.name}
                  </h3>
                  <span className="text-blue-400 text-sm font-medium pb-0.5">{trip.duration}</span>
                </div>

                <p className="text-blue-300 text-sm leading-relaxed mb-6">{trip.desc}</p>

                <div className="space-y-2 mb-8">
                  {trip.includes.map((item, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm">
                      <Check className={`w-4 h-4 flex-shrink-0 ${i === 1 ? 'text-[#d4af37]' : 'text-blue-400'}`} />
                      <span className="text-blue-200">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`block text-center font-bold text-sm py-3 px-6 rounded-full transition-all duration-200 hover:scale-105 ${
                    i === 1
                      ? 'bg-[#d4af37] text-[#010b1a] hover:bg-[#e8c55a] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                      : 'border border-blue-600/50 text-blue-300 hover:border-blue-400 hover:text-white hover:bg-blue-900/30'
                  }`}
                >
                  {t.trips.bookCta}
                </a>
              </div>
            )
          })}
        </div>

        {/* Pricing note */}
        <p className="text-center text-blue-500 text-sm mt-10">
          💬 All prices on request — group size, season and availability considered.
        </p>
      </div>
    </section>
  )
}
