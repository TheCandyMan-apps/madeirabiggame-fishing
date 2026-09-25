import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import type { Translation } from '../translations'

interface HeroProps {
  t: Translation
}

// Particle/bubble component
function Bubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 12}px`,
            height: `${4 + Math.random() * 12}px`,
            animationDuration: `${8 + Math.random() * 15}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero({ t }: HeroProps) {
  const [loaded, setLoaded] = useState(false)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMouseX(((e.clientX - rect.left) / rect.width - 0.5) * 20)
      setMouseY(((e.clientY - rect.top) / rect.height - 0.5) * 10)
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Deep ocean base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010b1a] via-[#021e45] to-[#010b1a]" />

        {/* Underwater light rays */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at ${50 + mouseX * 0.5}% ${30 + mouseY * 0.5}%, rgba(59,130,246,0.4) 0%, transparent 60%)`,
            transition: 'background 0.3s ease',
          }}
        />

        {/* Hero image */}
        <img
          src="https://images.unsplash.com/photo-1562791681-bd6aecadf861?w=1920&q=80&auto=format&fit=crop"
          alt="Big game fishing Madeira"
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
          style={{
            transform: `translate(${mouseX * 0.3}px, ${mouseY * 0.3}px) scale(1.05)`,
            transition: 'transform 0.5s ease',
          }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#010b1a] to-transparent" />

        {/* Animated ocean surface shimmer */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      </div>

      <Bubbles />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Pre-title badge */}
        <div
          className={`inline-flex items-center gap-2 border border-[#d4af37]/40 rounded-full px-4 py-1.5 text-[#d4af37] text-xs font-bold tracking-[0.2em] uppercase mb-6 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          Funchal, Madeira · Atlantic Ocean
        </div>

        {/* Main title */}
        <h1
          className={`text-5xl sm:text-7xl lg:text-9xl font-black tracking-tight leading-none mb-6 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="block text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            MADEIRA
          </span>
          <span className="block gold-shimmer drop-shadow-[0_0_40px_rgba(212,175,55,0.6)]">
            BIG GAME
          </span>
          <span className="block text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            FISHING
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base sm:text-xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#contact"
            className="group flex items-center gap-3 bg-[#d4af37] hover:bg-[#e8c55a] text-[#010b1a] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)]"
          >
            <Phone className="w-4 h-4" />
            {t.hero.cta}
          </a>
          <a
            href="#trips"
            className="flex items-center gap-2 border border-blue-400/40 hover:border-blue-300 text-blue-300 hover:text-white font-medium text-base px-8 py-4 rounded-full transition-all duration-200 hover:bg-blue-900/20"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-400/60 transition-all duration-1000 delay-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-xs tracking-[0.2em] uppercase">{t.hero.scroll}</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>

      {/* Decorative wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 96L60 80C120 64 240 32 360 26.7C480 21 600 43 720 48C840 53 960 43 1080 37.3C1200 32 1320 32 1380 32L1440 32V96H1380C1320 96 1200 96 1080 96C960 96 840 96 720 96C600 96 480 96 360 96C240 96 120 96 60 96H0Z"
            fill="#010b1a"
          />
        </svg>
      </div>
    </section>
  )
}
