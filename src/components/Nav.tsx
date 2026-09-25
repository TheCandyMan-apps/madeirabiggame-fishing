import { useState, useEffect } from 'react'
import { Menu, X, Fish } from 'lucide-react'
import type { Translation, Language } from '../translations'

interface NavProps {
  t: Translation
  lang: Language
  onToggleLang: () => void
}

export default function Nav({ t, lang, onToggleLang }: NavProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#species', label: t.nav.species },
    { href: '#trips', label: t.nav.trips },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#010b1a]/95 backdrop-blur-md shadow-lg shadow-black/50 border-b border-blue-900/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Fish className="w-4 h-4 text-white rotate-12" />
            </div>
            <span className="text-white font-bold text-sm sm:text-base tracking-wider uppercase hidden sm:block">
              Madeira <span className="text-[#d4af37]">Big Game</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-blue-200 hover:text-white text-sm font-medium tracking-wide hover-underline transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 text-xs font-bold tracking-wider border border-blue-700/50 rounded-full px-3 py-1.5 text-blue-300 hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-200"
            >
              <span className={lang === 'en' ? 'text-white' : 'text-blue-500'}>EN</span>
              <span className="text-blue-600">|</span>
              <span className={lang === 'pt' ? 'text-white' : 'text-blue-500'}>PT</span>
            </button>

            {/* Book CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#e8c55a] text-[#010b1a] font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 animate-pulse-glow"
            >
              {t.nav.book}
            </a>

            {/* Burger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white p-2 rounded-md hover:bg-blue-900/50 transition-colors"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#010b1a]/98 backdrop-blur-md border-b border-blue-900/30`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-blue-200 hover:text-white hover:bg-blue-900/30 px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center bg-[#d4af37] text-[#010b1a] font-bold px-4 py-3 rounded-lg text-sm"
          >
            {t.nav.book}
          </a>
        </div>
      </div>
    </nav>
  )
}
