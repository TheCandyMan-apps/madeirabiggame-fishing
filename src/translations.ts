export type Language = 'en' | 'pt'

export interface Translation {
  nav: {
    home: string
    species: string
    trips: string
    gallery: string
    contact: string
    book: string
  }
  hero: {
    tagline: string
    subtitle: string
    cta: string
    ctaSecondary: string
    scroll: string
  }
  stats: {
    years: string
    yearsLabel: string
    species: string
    speciesLabel: string
    trips: string
    tripsLabel: string
    satisfaction: string
    satisfactionLabel: string
  }
  species: {
    title: string
    subtitle: string
    items: {
      name: string
      pt: string
      desc: string
      weight: string
      season: string
    }[]
  }
  trips: {
    title: string
    subtitle: string
    items: {
      name: string
      duration: string
      desc: string
      includes: string[]
      badge?: string
    }[]
    bookCta: string
  }
  why: {
    title: string
    subtitle: string
    items: { title: string; desc: string }[]
  }
  gallery: {
    title: string
    subtitle: string
  }
  contact: {
    title: string
    subtitle: string
    whatsapp: string
    email: string
    location: string
    locationValue: string
    priceNote: string
  }
  footer: {
    tagline: string
    rights: string
  }
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      species: 'Species',
      trips: 'Trips',
      gallery: 'Gallery',
      contact: 'Contact',
      book: 'Book Now',
    },
    hero: {
      tagline: 'Madeira Big Game Fishing',
      subtitle: 'Hunt the giants of the deep Atlantic. World-class big game fishing in the waters of Madeira — where monsters roam.',
      cta: 'Book Your Trip',
      ctaSecondary: 'See Our Trips',
      scroll: 'Scroll to explore',
    },
    stats: {
      years: '15+',
      yearsLabel: 'Years Experience',
      species: '8',
      speciesLabel: 'Trophy Species',
      trips: '500+',
      tripsLabel: 'Successful Trips',
      satisfaction: '100%',
      satisfactionLabel: 'Satisfied Clients',
    },
    species: {
      title: 'Our Trophy Species',
      subtitle: 'The Atlantic waters around Madeira are a big game paradise — home to some of the most prized sport fish on the planet.',
      items: [
        {
          name: 'Blue Marlin',
          pt: 'Marlim Azul',
          desc: 'The ultimate prize. Blue marlin over 500kg have been landed off Madeira — an experience that defines a lifetime.',
          weight: 'Up to 600kg+',
          season: 'May – October',
        },
        {
          name: 'Black Marlin',
          pt: 'Marlim Negro',
          desc: 'Pound for pound the most powerful billfish in the ocean. Explosive runs and acrobatic jumps await.',
          weight: 'Up to 400kg+',
          season: 'June – September',
        },
        {
          name: 'Yellowfin Tuna',
          pt: 'Atum Rabilho',
          desc: 'High-speed, torpedo-shaped powerhouses. Schools of yellowfin erupt on the surface in unforgettable feeding frenzies.',
          weight: 'Up to 100kg+',
          season: 'Year-round',
        },
        {
          name: 'Wahoo',
          pt: 'Peixe Agulha',
          desc: 'The speed king. Wahoo are the fastest fish in the Atlantic, screaming drag with blistering first runs over 80km/h.',
          weight: 'Up to 40kg',
          season: 'Year-round',
        },
        {
          name: 'Mahi-Mahi',
          pt: 'Dourado',
          desc: 'Blazing colours, acrobatic jumps, and delicious on the table. Dorado are a crowd favourite for good reason.',
          weight: 'Up to 25kg',
          season: 'Year-round',
        },
        {
          name: 'Swordfish',
          pt: 'Espadarte',
          desc: 'Deep-water gladiators. We target broadbill swordfish in the dark Atlantic depths — an elite angling challenge.',
          weight: 'Up to 300kg+',
          season: 'June – October',
        },
        {
          name: 'Spearfish',
          pt: 'Picador',
          desc: 'The rarer billfish cousin — longbill and shortbill spearfish are a true trophy for any serious angler.',
          weight: 'Up to 40kg',
          season: 'May – September',
        },
        {
          name: 'Bigeye Tuna',
          pt: 'Atum Patudo',
          desc: 'Deep, powerful and heavy. Bigeye tuna are a taxing fight and one of the finest eating fish in the Atlantic.',
          weight: 'Up to 180kg',
          season: 'Year-round',
        },
      ],
    },
    trips: {
      title: 'Choose Your Adventure',
      subtitle: 'Whether you have a few hours or a full day at sea, we have the perfect charter for you.',
      items: [
        {
          name: 'Half Day',
          duration: '4 Hours',
          desc: 'A thrilling introduction to big game fishing. Target wahoo, mahi-mahi and yellowfin tuna within striking distance of the coast.',
          includes: [
            'All tackle & equipment',
            'Bait & lures',
            'Refreshments onboard',
            'Fishing licence',
            'Experienced skipper & crew',
          ],
        },
        {
          name: 'Full Day',
          duration: '8 Hours',
          desc: 'The ultimate day at sea. Push further offshore to target marlin, swordfish and giant tuna in the deep Atlantic canyons.',
          includes: [
            'All tackle & equipment',
            'Bait & lures',
            'Full lunch & refreshments',
            'Fishing licence',
            'Experienced skipper & crew',
            'Trophy photos',
          ],
          badge: 'Most Popular',
        },
        {
          name: 'Overnight',
          duration: '24 Hours',
          desc: 'For the serious angler. Day & night on the water targeting the deepest species — swordfish at night, marlin by day.',
          includes: [
            'All tackle & equipment',
            'Bait & lures',
            'All meals & refreshments',
            'Accommodation onboard',
            'Fishing licence',
            'Skipper & dedicated crew',
            'Trophy photos & video',
          ],
          badge: 'Elite Experience',
        },
      ],
      bookCta: 'Request a Quote',
    },
    why: {
      title: 'Why Fish With Us',
      subtitle: 'We know these waters. We know the fish. And we know how to put you on them.',
      items: [
        { title: 'Local Expertise', desc: 'Born and raised in Madeira, our skippers have fished these waters for decades and know where the giants roam.' },
        { title: 'Top-End Tackle', desc: 'We use only the finest rods, reels, and lures — Shimano, Penn, IGFA-rated — to give you the best chance at a trophy fish.' },
        { title: 'Modern Vessel', desc: 'Our purpose-built sport fishing vessel is fully equipped with the latest navigation, sonar, and fishing technology.' },
        { title: 'Catch & Release', desc: 'We champion sustainable fishing. All billfish are tagged and released — the ocean is our future.' },
        { title: 'Small Groups', desc: 'Private charters only. Maximum 4 anglers per trip — no crowded boats, every angler gets maximum rod time.' },
        { title: 'Year-Round Season', desc: 'Madeira\'s warm Atlantic waters offer year-round fishing with a peak season that runs May to October for billfish.' },
      ],
    },
    gallery: {
      title: 'Epic Catches',
      subtitle: 'A taste of what awaits you on the water.',
    },
    contact: {
      title: 'Ready to Fish?',
      subtitle: 'Drop us a message on WhatsApp or by email. We\'ll get back to you within hours and get you booked in.',
      whatsapp: 'Chat on WhatsApp',
      email: 'Send an Email',
      location: 'Based in',
      locationValue: 'Funchal Marina, Madeira, Portugal',
      priceNote: 'Prices on request — every trip is tailored to your group.',
    },
    footer: {
      tagline: 'The Atlantic is calling.',
      rights: 'All rights reserved.',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      species: 'Espécies',
      trips: 'Viagens',
      gallery: 'Galeria',
      contact: 'Contacto',
      book: 'Reservar',
    },
    hero: {
      tagline: 'Madeira Big Game Fishing',
      subtitle: 'À caça dos gigantes do Atlântico profundo. Pesca desportiva de alto nível nas águas da Madeira — onde os monstros vagueiam.',
      cta: 'Reservar a Sua Viagem',
      ctaSecondary: 'Ver as Nossas Viagens',
      scroll: 'Explorar',
    },
    stats: {
      years: '15+',
      yearsLabel: 'Anos de Experiência',
      species: '8',
      speciesLabel: 'Espécies Troféu',
      trips: '500+',
      tripsLabel: 'Viagens com Sucesso',
      satisfaction: '100%',
      satisfactionLabel: 'Clientes Satisfeitos',
    },
    species: {
      title: 'As Nossas Espécies Troféu',
      subtitle: 'As águas atlânticas ao redor da Madeira são um paraíso para a pesca desportiva — lar de alguns dos peixes desportivos mais cobiçados do planeta.',
      items: [
        { name: 'Blue Marlin', pt: 'Marlim Azul', desc: 'O prémio máximo. Marlins azuis acima de 500kg já foram capturados ao largo da Madeira — uma experiência que define uma vida.', weight: 'Até 600kg+', season: 'Maio – Outubro' },
        { name: 'Black Marlin', pt: 'Marlim Negro', desc: 'Libra por libra o peixe-agulha mais poderoso do oceano. Corridas explosivas e saltos acrobáticos aguardam.', weight: 'Até 400kg+', season: 'Junho – Setembro' },
        { name: 'Yellowfin Tuna', pt: 'Atum Rabilho', desc: 'Centrais motoras em forma de torpedo e alta velocidade. Cardumes de atum rabilho irompem à superfície.', weight: 'Até 100kg+', season: 'Todo o ano' },
        { name: 'Wahoo', pt: 'Peixe Agulha', desc: 'O rei da velocidade. O wahoo é o peixe mais rápido do Atlântico, com primeiras corridas acima de 80km/h.', weight: 'Até 40kg', season: 'Todo o ano' },
        { name: 'Mahi-Mahi', pt: 'Dourado', desc: 'Cores vibrantes, saltos acrobáticos e delicioso à mesa. O dourado é um favorito por boas razões.', weight: 'Até 25kg', season: 'Todo o ano' },
        { name: 'Swordfish', pt: 'Espadarte', desc: 'Gladiadores das profundezas. Pescamos espadarte nas profundezas escuras do Atlântico — um desafio de elite.', weight: 'Até 300kg+', season: 'Junho – Outubro' },
        { name: 'Spearfish', pt: 'Picador', desc: 'O primo mais raro do peixe-agulha — um verdadeiro troféu para qualquer pescador sério.', weight: 'Até 40kg', season: 'Maio – Setembro' },
        { name: 'Bigeye Tuna', pt: 'Atum Patudo', desc: 'Profundo, poderoso e pesado. O atum patudo é uma luta extenuante e um dos melhores peixes para comer no Atlântico.', weight: 'Até 180kg', season: 'Todo o ano' },
      ],
    },
    trips: {
      title: 'Escolha a Sua Aventura',
      subtitle: 'Quer tenha algumas horas ou um dia inteiro no mar, temos o charter perfeito para si.',
      items: [
        {
          name: 'Meio Dia',
          duration: '4 Horas',
          desc: 'Uma introdução emocionante à pesca desportiva. Alveje wahoo, dourado e atum rabilho perto da costa.',
          includes: ['Todo o equipamento', 'Isco e iscas', 'Bebidas a bordo', 'Licença de pesca', 'Patrão e tripulação experientes'],
        },
        {
          name: 'Dia Completo',
          duration: '8 Horas',
          desc: 'O dia máximo no mar. Avance para o largo para alvejar marlin, espadarte e atum gigante nos canhões profundos do Atlântico.',
          includes: ['Todo o equipamento', 'Isco e iscas', 'Almoço e bebidas', 'Licença de pesca', 'Patrão e tripulação experientes', 'Fotos do troféu'],
          badge: 'Mais Popular',
        },
        {
          name: 'Noite',
          duration: '24 Horas',
          desc: 'Para o pescador sério. Dia e noite na água a alvejar as espécies mais profundas — espadarte à noite, marlin de dia.',
          includes: ['Todo o equipamento', 'Isco e iscas', 'Todas as refeições', 'Alojamento a bordo', 'Licença de pesca', 'Patrão e tripulação dedicada', 'Fotos e vídeo do troféu'],
          badge: 'Experiência Elite',
        },
      ],
      bookCta: 'Pedir Orçamento',
    },
    why: {
      title: 'Porque Pescar Connosco',
      subtitle: 'Conhecemos estas águas. Conhecemos os peixes. E sabemos como colocá-lo em contacto com eles.',
      items: [
        { title: 'Experiência Local', desc: 'Nascidos e criados na Madeira, os nossos patrões pescam nestas águas há décadas.' },
        { title: 'Equipamento de Topo', desc: 'Usamos apenas as melhores varas, carretilhas e iscas — Shimano, Penn, classificados pela IGFA.' },
        { title: 'Embarcação Moderna', desc: 'A nossa embarcação de pesca desportiva está equipada com a mais recente tecnologia de navegação e sonar.' },
        { title: 'Captura e Libertação', desc: 'Defendemos a pesca sustentável. Todos os peixes-agulha são marcados e libertados.' },
        { title: 'Grupos Pequenos', desc: 'Apenas charters privados. Máximo de 4 pescadores por viagem — sem barcos lotados.' },
        { title: 'Época Todo o Ano', desc: 'As águas atlânticas quentes da Madeira oferecem pesca durante todo o ano com época alta de Maio a Outubro.' },
      ],
    },
    gallery: {
      title: 'Capturas Épicas',
      subtitle: 'Um gostinho do que o espera na água.',
    },
    contact: {
      title: 'Pronto para Pescar?',
      subtitle: 'Envie-nos uma mensagem pelo WhatsApp ou por e-mail. Respondemos em horas e marcamos a sua viagem.',
      whatsapp: 'Falar no WhatsApp',
      email: 'Enviar E-mail',
      location: 'Baseados em',
      locationValue: 'Marina do Funchal, Madeira, Portugal',
      priceNote: 'Preços sob consulta — cada viagem é adaptada ao seu grupo.',
    },
    footer: {
      tagline: 'O Atlântico está a chamar.',
      rights: 'Todos os direitos reservados.',
    },
  },
}
