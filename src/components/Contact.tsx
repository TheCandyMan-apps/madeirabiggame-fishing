import { Mail, MapPin, MessageCircle, Fish } from 'lucide-react'
import type { Translation } from '../translations'
import { useScrollReveal } from '../hooks'

interface ContactProps {
  t: Translation
}

// Replace with actual WhatsApp number
const WHATSAPP_NUMBER = '351291000000'
const EMAIL = 'info@madeirabiggame.fishing'

export default function Contact({ t }: ContactProps) {
  const sectionRef = useScrollReveal()

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to book a big game fishing trip in Madeira.")}`
  const whatsappUrlPt = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de reservar uma viagem de pesca desportiva na Madeira.")}`

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#021528]/30 via-[#010b1a] to-[#010b1a]" />
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1476611338391-6f395a0dd82e?w=1920&q=60&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#010b1a]/60 to-[#010b1a]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <p className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-3">Get In Touch</p>
        <h2
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {t.contact.title}
        </h2>
        <p className="text-blue-200 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          {t.contact.subtitle}
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-8 border border-green-700/30 hover:border-green-500/60 transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center gap-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-600/20 border border-green-600/40 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-green-400" />
            </div>
            <div>
              <div className="text-white font-bold text-lg mb-1">{t.contact.whatsapp}</div>
              <div className="text-green-400 text-sm">+351 291 000 000</div>
              <div className="text-blue-400 text-xs mt-1">Fastest response · Usually within 1 hour</div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="glass-card rounded-2xl p-8 border border-blue-700/30 hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center gap-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-600/40 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <div className="text-white font-bold text-lg mb-1">{t.contact.email}</div>
              <div className="text-blue-400 text-sm">{EMAIL}</div>
              <div className="text-blue-500 text-xs mt-1">Response within 24 hours</div>
            </div>
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-blue-400 mb-6">
          <MapPin className="w-4 h-4 text-[#d4af37]" />
          <span className="text-sm">
            <span className="text-blue-300">{t.contact.location}: </span>
            <span className="text-white font-medium">{t.contact.locationValue}</span>
          </span>
        </div>

        {/* Price note */}
        <p className="text-blue-500 text-sm">{t.contact.priceNote}</p>
      </div>
    </section>
  )
}
