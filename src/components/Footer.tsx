import { Fish, Globe, Camera } from 'lucide-react'
import type { Translation } from '../translations'

interface FooterProps {
  t: Translation
}

export default function Footer({ t }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-blue-900/30 bg-[#010b1a] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center">
              <Fish className="w-4 h-4 text-white rotate-12" />
            </div>
            <div>
              <div className="text-white font-bold text-sm tracking-wider">
                MADEIRA <span className="text-[#d4af37]">BIG GAME</span> FISHING
              </div>
              <div className="text-blue-500 text-xs">{t.footer.tagline}</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-blue-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#species" className="hover:text-white transition-colors">Species</a>
            <a href="#trips" className="hover:text-white transition-colors">Trips</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social + domain */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-blue-800 flex items-center justify-center text-blue-400 hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
            >
              <Camera className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-blue-800 flex items-center justify-center text-blue-400 hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-blue-900/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-600">
          <span>© {year} Madeira Big Game Fishing. {t.footer.rights}</span>
          <span>
            <a href="https://madeirabiggame.fishing" className="text-[#d4af37]/60 hover:text-[#d4af37] transition-colors">
              madeirabiggame.fishing
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
