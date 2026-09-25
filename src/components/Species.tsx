import { useState } from 'react'
import { Calendar, Weight, ChevronRight } from 'lucide-react'
import type { Translation } from '../translations'
import { useScrollReveal } from '../hooks'

interface SpeciesProps {
  t: Translation
}

// Curated Unsplash images for each species — all verified fishing/fish photos
const speciesImages = [
  'https://images.unsplash.com/photo-1674606844137-40e5b1239df1?w=600&q=80&auto=format&fit=crop', // blue marlin swimming (verified)
  'https://images.unsplash.com/photo-1766998112439-f5419c737982?w=600&q=80&auto=format&fit=crop', // fishermen landing large fish (verified)
  'https://images.unsplash.com/photo-1697030891256-36a3770cddde?w=600&q=80&auto=format&fit=crop', // tuna jumping from water (verified)
  'https://images.unsplash.com/photo-1600044956215-8374ac2e2509?w=600&q=80&auto=format&fit=crop', // catch on boat (verified)
  'https://images.unsplash.com/photo-1674419365397-3ff4f5ef1897?w=600&q=80&auto=format&fit=crop', // mahi-mahi underwater (verified)
  'https://images.unsplash.com/photo-1766998112674-42ff3abd609d?w=600&q=80&auto=format&fit=crop', // big fish on boat (verified)
  'https://images.unsplash.com/photo-1562791681-bd6aecadf861?w=600&q=80&auto=format&fit=crop', // angler offshore with rods (verified)
  'https://images.unsplash.com/photo-1777406405131-7e3f15ceecb4?w=600&q=80&auto=format&fit=crop', // fishermen unloading large tuna (verified)
]

export default function Species({ t }: SpeciesProps) {
  const [active, setActive] = useState(0)
  const sectionRef = useScrollReveal()

  const current = t.species.items[active]

  return (
    <section
      id="species"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-3">Trophy Species</p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.species.title}
          </h2>
          <p className="text-blue-300 max-w-2xl mx-auto leading-relaxed">{t.species.subtitle}</p>
        </div>

        {/* Main display */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Left: image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            {t.species.items.map((_, i) => (
              <img
                key={i}
                src={speciesImages[i]}
                alt={t.species.items[i].name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#010b1a] via-transparent to-transparent" />
            {/* Labels on image */}
            <div className="absolute bottom-4 left-4">
              <div className="text-white font-black text-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {current.name}
              </div>
              <div className="text-[#d4af37] text-sm font-medium">{current.pt}</div>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <span className="glass-card text-xs text-blue-300 px-3 py-1 rounded-full flex items-center gap-1">
                <Weight className="w-3 h-3" /> {current.weight}
              </span>
            </div>
          </div>

          {/* Right: info */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {current.name}
            </h3>
            <p className="text-[#d4af37] font-medium mb-4">{current.pt}</p>
            <p className="text-blue-200 leading-relaxed mb-6 text-lg">{current.desc}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="glass-card flex items-center gap-2 text-sm text-blue-300 px-4 py-2 rounded-full">
                <Weight className="w-4 h-4 text-[#d4af37]" />
                {current.weight}
              </span>
              <span className="glass-card flex items-center gap-2 text-sm text-blue-300 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-[#d4af37]" />
                {current.season}
              </span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#d4af37] font-bold hover:gap-4 transition-all duration-200 group"
            >
              Target this species <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Species selector grid */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {t.species.items.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-300 group ${
                i === active
                  ? 'ring-2 ring-[#d4af37] scale-100'
                  : 'opacity-50 hover:opacity-80 hover:scale-105'
              }`}
            >
              <img
                src={speciesImages[i]}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-1 left-0 right-0 text-center text-white text-[10px] font-bold leading-tight px-1">
                {item.name.split(' ')[0]}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
