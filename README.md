# 🎣 Madeira Big Game Fishing

> **Website for [madeirabiggame.fishing](https://madeirabiggame.fishing)**

A lively, interactive sport fishing charter website built with Vite + React + TypeScript + Tailwind CSS v4.

## Features

- 🌊 **Full-screen hero** with parallax mouse tracking, animated entry & floating bubbles
- 📊 **Animated stats bar** — count-up on scroll
- 🐟 **Interactive species gallery** — 8 trophy species with thumbnail selector (Blue Marlin, Black Marlin, Yellowfin Tuna, Wahoo, Mahi-Mahi, Swordfish, Spearfish, Bigeye Tuna)
- ⛵ **Trip packages** — Half Day / Full Day / Overnight with includes checklist
- 💪 **Why Fish With Us** — 6 feature cards with scroll-reveal animations
- 📷 **Masonry gallery** with hover captions and full lightbox
- 📞 **WhatsApp + email contact** CTAs
- 🇬🇧🇵🇹 **Bilingual** — English / Portuguese toggle, persisted in `localStorage`
- 🎨 **Bold deep ocean theme** — dark blues, gold shimmer, Bebas Neue typography

## Stack

| Tool | Version |
|------|---------|
| Vite | v8 |
| React | 19 |
| TypeScript | 6 |
| Tailwind CSS | v4 |
| lucide-react | v1 |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build & Deploy

```bash
npm run build   # builds to ./dist
```

Deploy the `dist/` folder via Cloudflare Pages (or any static host).

## Customising

### Update your contact details
In [`src/components/Contact.tsx`](src/components/Contact.tsx):
```ts
const WHATSAPP_NUMBER = '351XXXXXXXXX'   // ← your number
const EMAIL = 'info@madeirabiggame.fishing'
```

### Replace stock photos
Drop your own images into `public/` and update the `src` values in:
- [`src/components/Species.tsx`](src/components/Species.tsx) — 8 species images
- [`src/components/Gallery.tsx`](src/components/Gallery.tsx) — 9 gallery images
- [`src/components/Hero.tsx`](src/components/Hero.tsx) — background image

### Translations
All English/Portuguese content lives in [`src/translations.ts`](src/translations.ts).

## License

All rights reserved — Madeira Big Game Fishing.
