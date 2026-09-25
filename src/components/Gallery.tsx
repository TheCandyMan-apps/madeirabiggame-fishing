import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Translation } from '../translations'
import { useScrollReveal } from '../hooks'

interface GalleryProps {
  t: Translation
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1625183656263-171183307b15?w=800&q=80&auto=format&fit=crop',
    alt: 'Sport fishing boat heading offshore at speed',
    caption: 'Heading offshore — the hunt begins',
  },
  {
    src: 'https://images.unsplash.com/photo-1674606844137-40e5b1239df1?w=800&q=80&auto=format&fit=crop',
    alt: 'Blue Marlin in the deep Atlantic',
    caption: 'Blue Marlin — the ultimate prize',
  },
  {
    src: 'https://images.unsplash.com/photo-1697030891256-36a3770cddde?w=800&q=80&auto=format&fit=crop',
    alt: 'Tuna leaping from the Atlantic',
    caption: 'Yellowfin Tuna exploding from the surface',
  },
  {
    src: 'https://images.unsplash.com/photo-1515631604561-23e0be68ee06?w=800&q=80&auto=format&fit=crop',
    alt: 'Angler holding trophy catch',
    caption: 'Trophy catch — a day to remember',
  },
  {
    src: 'https://images.unsplash.com/photo-1562791681-bd6aecadf861?w=800&q=80&auto=format&fit=crop',
    alt: 'Offshore trolling with multiple rods',
    caption: 'Multiple lines in — pushing deep offshore',
  },
  {
    src: 'https://images.unsplash.com/photo-1551131618-3f0a5cf594b4?w=800&q=80&auto=format&fit=crop',
    alt: 'Sunset on the water with fishing rods',
    caption: 'Golden hour on the Atlantic',
  },
  {
    src: 'https://images.unsplash.com/photo-1674419365397-3ff4f5ef1897?w=800&q=80&auto=format&fit=crop',
    alt: 'Mahi-Mahi caught underwater',
    caption: 'Mahi-Mahi — blazing colours in the deep',
  },
  {
    src: 'https://images.unsplash.com/photo-1766998112439-f5419c737982?w=800&q=80&auto=format&fit=crop',
    alt: 'Fishermen landing large marlin at dock',
    caption: 'Bringing home a giant — mission accomplished',
  },
  {
    src: 'https://images.unsplash.com/photo-1600044956215-8374ac2e2509?w=800&q=80&auto=format&fit=crop',
    alt: 'Fresh catch on the boat',
    caption: 'The spoils of a great day at sea',
  },
]

export default function Gallery({ t }: GalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const sectionRef = useScrollReveal()

  const prev = () => setLightbox(l => l !== null ? (l - 1 + galleryImages.length) % galleryImages.length : null)
  const next = () => setLightbox(l => l !== null ? (l + 1) % galleryImages.length : null)

  return (
    <section
      id="gallery"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal py-24 lg:py-32 bg-gradient-to-b from-[#010b1a] to-[#021528]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-3">In Action</p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.gallery.title}
          </h2>
          <p className="text-blue-300 max-w-xl mx-auto leading-relaxed">{t.gallery.subtitle}</p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              } ${i === 4 ? 'col-span-2' : ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                {img.caption}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-blue-500 text-sm mt-8">
          📸 Your photos will appear here — we document every memorable catch.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#d4af37] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#d4af37] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={e => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#d4af37] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={e => { e.stopPropagation(); next() }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={galleryImages[lightbox].src.replace('w=800', 'w=1200')}
              alt={galleryImages[lightbox].alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-center text-blue-300 mt-4 text-sm">{galleryImages[lightbox].caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}
