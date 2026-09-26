import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks'

const faqs = [
  {
    q: 'What big game fish can I catch off Madeira?',
    a: "Madeira's Atlantic waters hold Blue Marlin (Makaira nigricans, up to 600kg+), Black Marlin, Yellowfin Tuna, Wahoo, Mahi-Mahi/Dorado, Swordfish, Spearfish, and Bigeye Tuna. It's one of the world's premier big game fisheries — Madeira holds multiple IGFA world records.",
  },
  {
    q: 'When is the best time to fish for Blue Marlin in Madeira?',
    a: 'Peak Blue Marlin season runs May to October, with July and August the most productive months. Yellowfin Tuna, Wahoo, Mahi-Mahi and Bigeye Tuna are available year-round, making Madeira a 12-month fishing destination.',
  },
  {
    q: 'Do I need experience to join a big game fishing charter?',
    a: 'None at all. Our skipper and crew guide you through every step — setting up, baiting, the fight and the release. We welcome complete beginners as enthusiastically as tournament veterans on every private charter.',
  },
  {
    q: 'How many people can fish on one charter?',
    a: 'We run private charters with a maximum of 4–6 anglers. No crowded party boats — every angler gets maximum rod time, personal attention from our crew, and a genuinely exclusive experience on the water.',
  },
  {
    q: 'What\'s included in the charter price?',
    a: 'Everything you need: all fishing tackle and equipment, bait and lures, fishing licence, experienced skipper and dedicated crew. Half day trips include refreshments, full day trips include a full lunch, overnight trips include all meals and accommodation onboard.',
  },
  {
    q: 'Do you practise catch and release?',
    a: 'Yes — it\'s at the heart of what we do. All billfish (marlin, swordfish, spearfish) are tagged and released following IGFA conservation guidelines. We fish responsibly so these magnificent species thrive for future generations.',
  },
  {
    q: 'How far offshore do you go?',
    a: 'Half day trips work the inshore ledges and banks within 15 miles of Funchal. Full day and overnight charters push 30–50 miles offshore to the deep Atlantic canyons, the Desertas Islands ridge, and the blue water grounds where the giants roam.',
  },
  {
    q: 'How do I book a fishing charter in Madeira?',
    a: 'Contact us directly via WhatsApp or email — we respond within hours. Tell us your preferred dates, group size and trip type and we\'ll confirm everything personally. All prices are on request as every trip is tailored to your group.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const sectionRef = useScrollReveal()

  return (
    <section
      id="faq"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal py-24 lg:py-32 w-full bg-gradient-to-b from-[#010b1a] to-[#021528]/40"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-3">Your Questions</p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-blue-300 leading-relaxed">
            Everything you need to know about big game fishing in Madeira.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl border transition-all duration-300 ${
                open === i ? 'border-[#d4af37]/40' : 'border-blue-800/30 hover:border-blue-600/40'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className={`font-semibold text-base transition-colors ${
                  open === i ? 'text-[#d4af37]' : 'text-white'
                }`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-blue-400 transition-transform duration-300 ${
                    open === i ? 'rotate-180 text-[#d4af37]' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-blue-300 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
