import './index.css'
import { useLanguage } from './hooks'
import { translations } from './translations'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Species from './components/Species'
import Trips from './components/Trips'
import Why from './components/Why'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { lang, toggle } = useLanguage()
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-[#010b1a] text-white">
      <Nav t={t} lang={lang} onToggleLang={toggle} />
      <Hero t={t} />
      <Stats t={t} />
      <Species t={t} />
      <Trips t={t} />
      <Why t={t} />
      <Gallery t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  )
}
