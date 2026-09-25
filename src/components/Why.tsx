import type { Translation } from '../translations'
import { useScrollReveal } from '../hooks'

interface WhyProps {
  t: Translation
}

const iconEmojis = ['🧭', '🎣', '🚢', '🐠', '👥', '🌊']

export default function Why({ t }: WhyProps) {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010b1a] via-[#021e3d]/30 to-[#010b1a] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Advantage</p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.why.title}
          </h2>
          <p className="text-blue-300 max-w-xl mx-auto leading-relaxed">{t.why.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.why.items.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-4">{iconEmojis[i]}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#d4af37] transition-colors">
                {item.title}
              </h3>
              <p className="text-blue-300/80 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
