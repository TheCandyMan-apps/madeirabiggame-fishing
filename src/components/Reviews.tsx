import { useScrollReveal } from '../hooks'

const reviews = [
  {
    name: 'James H.',
    location: 'London, UK',
    rating: 5,
    trip: 'Full Day Charter',
    text: 'Absolutely incredible day on the water. We hooked a Blue Marlin within the first two hours — pure chaos, pure adrenaline. The skipper and crew were professional, knowledgeable and clearly passionate. One of the best experiences of my life.',
    date: 'August 2026',
  },
  {
    name: 'Marco & Sofia D.',
    location: 'Lisbon, Portugal',
    rating: 5,
    trip: 'Full Day Charter',
    text: 'We\'ve fished in the Azores, the Algarve and Costa Rica — Madeira topped them all. Three marlin sightings, two landed Yellowfin and a Mahi-Mahi that fought for 40 minutes. The crew made it a day to never forget.',
    date: 'July 2026',
  },
  {
    name: 'Thomas K.',
    location: 'Munich, Germany',
    rating: 5,
    trip: 'Overnight Charter',
    text: 'The overnight trip is a bucket list experience. Swordfish at 2am under a sky full of stars, then woke up to a Blue Marlin on the line at sunrise. I\'ve done overnight charters in Florida and the Bahamas — this was better.',
    date: 'September 2026',
  },
  {
    name: 'David & Claire M.',
    location: 'Dublin, Ireland',
    rating: 5,
    trip: 'Half Day Charter',
    text: 'Took the half day option as a first big game experience — neither of us had fished before. The crew\'s patience and enthusiasm made it magical. We caught Wahoo and Mahi-Mahi and were both well and truly hooked. Booking again next year.',
    date: 'June 2026',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="text-[#d4af37] text-lg">★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal py-24 lg:py-32 w-full bg-gradient-to-b from-[#021528]/40 to-[#010b1a]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-3">Client Stories</p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            What Our Anglers Say
          </h2>
          <p className="text-blue-300 max-w-xl mx-auto leading-relaxed">
            Real experiences from real anglers — every trip is a story worth telling.
          </p>
          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-6 glass-card border border-[#d4af37]/30 rounded-full px-6 py-3">
            <Stars count={5} />
            <span className="text-white font-bold">5.0</span>
            <span className="text-blue-400 text-sm">· {reviews.length} verified reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 border border-blue-800/30 hover:border-[#d4af37]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
            >
              <Stars count={r.rating} />
              <p className="text-blue-200 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <div className="border-t border-blue-800/30 pt-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-white font-bold text-sm">{r.name}</div>
                    <div className="text-blue-500 text-xs">{r.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#d4af37] text-xs font-medium">{r.trip}</div>
                    <div className="text-blue-600 text-xs">{r.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
