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
      scientific: string
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
      subtitle: 'Hunt giants in the deep Atlantic. Madeira is one of the world\'s premier big game fisheries — Blue Marlin over 500kg, Yellowfin Tuna, Wahoo and Swordfish, right off Funchal Marina.',
      cta: 'Book Your Charter',
      ctaSecondary: 'See Our Trips',
      scroll: 'Scroll to explore',
    },
    stats: {
      years: '15+',
      yearsLabel: 'Years on the Water',
      species: '8',
      speciesLabel: 'Trophy Species',
      trips: '500+',
      tripsLabel: 'Successful Charters',
      satisfaction: '5★',
      satisfactionLabel: 'Client Rating',
    },
    species: {
      title: 'Trophy Species',
      subtitle: 'Madeira holds multiple IGFA world records and is regarded as one of the finest big game fishing destinations on the planet. These are the species we target year-round.',
      items: [
        {
          name: 'Blue Marlin',
          pt: 'Marlim Azul',
          scientific: 'Makaira nigricans',
          desc: 'The holy grail of big game fishing. Blue Marlin over 500kg have been landed off Madeira — a place that has produced some of the largest Atlantic billfish on record. May to October is peak season, with fish regularly encountered within 20 miles of Funchal.',
          weight: 'Up to 600kg+',
          season: 'May – October',
        },
        {
          name: 'Black Marlin',
          pt: 'Marlim Negro',
          scientific: 'Istiompax indica',
          desc: 'Pound for pound the most powerful billfish in the ocean. Black Marlin fight with explosive short runs and spectacular aerial jumps. Occasionally encountered off Madeira during summer months alongside their blue cousins.',
          weight: 'Up to 400kg+',
          season: 'June – September',
        },
        {
          name: 'Yellowfin Tuna',
          pt: 'Atum Rabilho',
          scientific: 'Thunnus albacares',
          desc: 'High-speed, torpedo-shaped powerhouses. Yellowfin Tuna schools erupt on the surface in unforgettable feeding frenzies off Madeira. Available year-round with peak action in summer when large fish over 80kg are common.',
          weight: 'Up to 100kg+',
          season: 'Year-round',
        },
        {
          name: 'Wahoo',
          pt: 'Wahoo',
          scientific: 'Acanthocybium solandri',
          desc: 'The fastest fish in the Atlantic, capable of 80km/h first runs that will melt your drag in seconds. Wahoo are a year-round target off Madeira and an electrifying fight on light tackle. Excellent eating too.',
          weight: 'Up to 40kg',
          season: 'Year-round',
        },
        {
          name: 'Mahi-Mahi',
          pt: 'Dourado',
          scientific: 'Coryphaena hippurus',
          desc: 'Few fish match the Dorado\'s blazing iridescent colours and aerobatic fighting spirit. Mahi-Mahi are a year-round fixture in Madeira\'s warm Atlantic waters, drawn to floating weed lines and debris. A crowd favourite and superb on the table.',
          weight: 'Up to 25kg',
          season: 'Year-round',
        },
        {
          name: 'Swordfish',
          pt: 'Espadarte',
          scientific: 'Xiphias gladius',
          desc: 'The broadbill swordfish is the night hunter of the deep Atlantic. We target them in the dark water canyons off Madeira using deep-drop techniques — an elite angling challenge that rewards patience with one of the ocean\'s most prized catches.',
          weight: 'Up to 300kg+',
          season: 'June – October',
        },
        {
          name: 'Spearfish',
          pt: 'Agulhão',
          scientific: 'Tetrapturus belone',
          desc: 'The rarest Atlantic billfish — longbill and shortbill spearfish are a genuine trophy for any serious angler. Madeira is one of the few places where Mediterranean and Atlantic spearfish are regularly encountered, making every hook-up a special occasion.',
          weight: 'Up to 40kg',
          season: 'May – September',
        },
        {
          name: 'Bigeye Tuna',
          pt: 'Atum Patudo',
          scientific: 'Thunnus obesus',
          desc: 'Deep-diving, thick-shouldered and powerful — Bigeye Tuna are a sustained physical fight that tests even experienced anglers. They inhabit deeper, cooler water than Yellowfin and are a year-round quarry off Madeira, reaching weights over 180kg.',
          weight: 'Up to 180kg',
          season: 'Year-round',
        },
      ],
    },
    trips: {
      title: 'Choose Your Adventure',
      subtitle: 'Private charters only — your boat, your crew, your experience. From a half day inshore session to a full overnight blue water expedition.',
      items: [
        {
          name: 'Half Day',
          duration: '4 Hours',
          desc: 'The perfect introduction to big game fishing in Madeira. We work the inshore banks and ledges targeting Wahoo, Mahi-Mahi and Yellowfin Tuna. Great for families, beginners and those short on time — the action can be relentless.',
          includes: [
            'All tackle & equipment',
            'Bait & lures',
            'Refreshments onboard',
            'Fishing licence',
            'Skipper & crew',
          ],
        },
        {
          name: 'Full Day',
          duration: '8 Hours',
          desc: 'The flagship experience. We push offshore into the blue water canyons to target Blue Marlin, Swordfish and giant Yellowfin Tuna. This is the trip that produces the trophy catches Madeira is world-famous for.',
          includes: [
            'All tackle & equipment',
            'Bait & lures',
            'Full lunch & refreshments',
            'Fishing licence',
            'Skipper & crew',
            'Trophy photos',
          ],
          badge: 'Most Popular',
        },
        {
          name: 'Overnight',
          duration: '24 Hours',
          desc: 'For the serious big game angler. We reach the most productive offshore grounds — targeting broadbill Swordfish in the dark Atlantic at night, then rising at dawn to hunt Blue Marlin as the sun climbs. The ultimate Madeira fishing experience.',
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
        {
          title: 'Madeira Specialists',
          desc: 'Born and raised in Madeira, our skippers have fished these Atlantic waters for over 15 years. We know the seasonal migration patterns, the productive canyons and the secret ledges where the giants feed.',
        },
        {
          title: 'IGFA-Grade Tackle',
          desc: 'We fish with only the finest equipment — Shimano Tiagra reels, IGFA-rated rods, hand-crimped leaders and premium lures from around the world. We give you every possible advantage.',
        },
        {
          title: 'Purpose-Built Vessel',
          desc: 'Our custom sport fishing boat is built for the Atlantic — twin engines, fighting chair, outriggers, full electronics suite including sonar, radar and GPS chartplotters. She\'s ready for anything.',
        },
        {
          title: 'Catch & Release',
          desc: 'We champion sustainable big game fishing. All billfish are tagged, measured and released following IGFA guidelines. The ocean is our future — we protect it fiercely.',
        },
        {
          title: 'Private Charters Only',
          desc: 'Your trip, your rules. We never mix groups. Maximum 4–6 anglers per charter means maximum rod time, a relaxed atmosphere and a completely personal experience on the water.',
        },
        {
          title: '12-Month Season',
          desc: 'Madeira\'s warm Atlantic waters deliver year-round action. Yellowfin Tuna, Wahoo and Mahi-Mahi are available every month. Blue Marlin peak from May to October — but there\'s never a bad time to fish here.',
        },
      ],
    },
    gallery: {
      title: 'Epic Catches',
      subtitle: 'A glimpse of what awaits you in Madeira\'s deep Atlantic waters.',
    },
    contact: {
      title: 'Ready to Fish?',
      subtitle: 'Get in touch via WhatsApp or email. We respond within hours and will have you booked and on the water fast.',
      whatsapp: 'Chat on WhatsApp',
      email: 'Send an Email',
      location: 'Based in',
      locationValue: 'Funchal Marina, Madeira, Portugal',
      priceNote: 'All prices on request — every charter is tailored to your group, dates and target species.',
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
      subtitle: 'À caça dos gigantes do Atlântico profundo. A Madeira é uma das melhores zonas de pesca desportiva do mundo — Marlins Azuis acima de 500kg, Atum Rabilho, Wahoo e Espadarte, mesmo ao largo da Marina do Funchal.',
      cta: 'Reservar o Seu Charter',
      ctaSecondary: 'Ver as Nossas Viagens',
      scroll: 'Explorar',
    },
    stats: {
      years: '15+',
      yearsLabel: 'Anos no Mar',
      species: '8',
      speciesLabel: 'Espécies Troféu',
      trips: '500+',
      tripsLabel: 'Charters Realizados',
      satisfaction: '5★',
      satisfactionLabel: 'Avaliação dos Clientes',
    },
    species: {
      title: 'Espécies Troféu',
      subtitle: 'A Madeira detém múltiplos recordes mundiais IGFA e é considerada um dos melhores destinos de pesca desportiva do planeta. Estas são as espécies que visamos ao longo do ano.',
      items: [
        {
          name: 'Blue Marlin',
          pt: 'Marlim Azul',
          scientific: 'Makaira nigricans',
          desc: 'O Santo Graal da pesca desportiva. Marlins Azuis acima de 500kg já foram capturados ao largo da Madeira — um local que produziu alguns dos maiores peixe-agulha atlânticos já registados. Temporada de pico de Maio a Outubro.',
          weight: 'Até 600kg+',
          season: 'Maio – Outubro',
        },
        {
          name: 'Black Marlin',
          pt: 'Marlim Negro',
          scientific: 'Istiompax indica',
          desc: 'Libra por libra o peixe-agulha mais poderoso do oceano. O Marlim Negro combate com corridas curtas e explosivas e saltos aéreos espetaculares.',
          weight: 'Até 400kg+',
          season: 'Junho – Setembro',
        },
        {
          name: 'Yellowfin Tuna',
          pt: 'Atum Rabilho',
          scientific: 'Thunnus albacares',
          desc: 'Máquinas de alta velocidade em forma de torpedo. Os cardumes de Atum Rabilho irrompem à superfície em frenzies de alimentação inesquecíveis ao largo da Madeira. Disponível durante todo o ano.',
          weight: 'Até 100kg+',
          season: 'Todo o ano',
        },
        {
          name: 'Wahoo',
          pt: 'Wahoo',
          scientific: 'Acanthocybium solandri',
          desc: 'O peixe mais rápido do Atlântico, capaz de primeiras corridas a 80km/h. O Wahoo é um alvo durante todo o ano ao largo da Madeira e uma luta electrizante com equipamento ligeiro.',
          weight: 'Até 40kg',
          season: 'Todo o ano',
        },
        {
          name: 'Mahi-Mahi',
          pt: 'Dourado',
          scientific: 'Coryphaena hippurus',
          desc: 'Poucos peixes igualam as cores iridescentes e o espírito combativo do Dourado. Presença constante nas águas atlânticas quentes da Madeira durante todo o ano. Favorito da multidão e excelente à mesa.',
          weight: 'Até 25kg',
          season: 'Todo o ano',
        },
        {
          name: 'Swordfish',
          pt: 'Espadarte',
          scientific: 'Xiphias gladius',
          desc: 'O caçador nocturno das profundezas do Atlântico. Visamos o Espadarte nos canhões de águas profundas ao largo da Madeira usando técnicas de pesca profunda — um desafio de pesca de elite.',
          weight: 'Até 300kg+',
          season: 'Junho – Outubro',
        },
        {
          name: 'Spearfish',
          pt: 'Agulhão',
          scientific: 'Tetrapturus belone',
          desc: 'O peixe-agulha atlântico mais raro — o agulhão de bico comprido e curto é um verdadeiro troféu para qualquer pescador sério. A Madeira é um dos poucos locais onde são regularmente encontrados.',
          weight: 'Até 40kg',
          season: 'Maio – Setembro',
        },
        {
          name: 'Bigeye Tuna',
          pt: 'Atum Patudo',
          scientific: 'Thunnus obesus',
          desc: 'Profundo, espesso e poderoso — o Atum Patudo é uma luta física sustentada que testa até os pescadores mais experientes. Habita águas mais frias e profundas que o Rabilho.',
          weight: 'Até 180kg',
          season: 'Todo o ano',
        },
      ],
    },
    trips: {
      title: 'Escolha a Sua Aventura',
      subtitle: 'Apenas charters privados — o seu barco, a sua tripulação, a sua experiência. De uma sessão de meio dia costeiro a uma expedição nocturna em pleno oceano.',
      items: [
        {
          name: 'Meio Dia',
          duration: '4 Horas',
          desc: 'A introdução perfeita à pesca desportiva na Madeira. Trabalhamos os bancos e patamares costeiros visando Wahoo, Dourado e Atum Rabilho. Ideal para famílias, principiantes e quem tem pouco tempo.',
          includes: ['Todo o equipamento', 'Isco e iscas', 'Bebidas a bordo', 'Licença de pesca', 'Patrão e tripulação'],
        },
        {
          name: 'Dia Completo',
          duration: '8 Horas',
          desc: 'A experiência principal. Avançamos para os canhões de águas azuis para visar Marlin Azul, Espadarte e Atum Rabilho gigante. Esta é a viagem que produz as capturas troféu pelas quais a Madeira é mundialmente famosa.',
          includes: ['Todo o equipamento', 'Isco e iscas', 'Almoço completo e bebidas', 'Licença de pesca', 'Patrão e tripulação', 'Fotos do troféu'],
          badge: 'Mais Popular',
        },
        {
          name: 'Noite',
          duration: '24 Horas',
          desc: 'Para o pescador desportivo sério. Atingimos os terrenos offshore mais produtivos — visando Espadarte de espada larga nas escuras águas atlânticas à noite, depois caçando Marlin Azul ao amanhecer.',
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
        {
          title: 'Especialistas da Madeira',
          desc: 'Nascidos e criados na Madeira, os nossos patrões pescam nestas águas atlânticas há mais de 15 anos. Conhecemos os padrões de migração sazonais, os canhões produtivos e os locais secretos onde os gigantes se alimentam.',
        },
        {
          title: 'Equipamento Grau IGFA',
          desc: 'Pescamos apenas com o melhor equipamento — carretilhas Shimano Tiagra, varas classificadas pela IGFA, líderes crimpeados à mão e iscas premium de todo o mundo.',
        },
        {
          title: 'Embarcação Dedicada',
          desc: 'O nosso barco de pesca desportiva personalizado foi construído para o Atlântico — motores duplos, cadeira de combate, outriggers, suite electrónica completa incluindo sonar, radar e chartplotters GPS.',
        },
        {
          title: 'Captura e Libertação',
          desc: 'Defendemos a pesca desportiva sustentável. Todos os peixe-agulha são marcados, medidos e libertados seguindo as directrizes da IGFA. O oceano é o nosso futuro — protegemo-lo com vigor.',
        },
        {
          title: 'Apenas Charters Privados',
          desc: 'A sua viagem, as suas regras. Nunca misturamos grupos. Máximo de 4-6 pescadores por charter significa tempo máximo de pesca e uma experiência completamente pessoal no mar.',
        },
        {
          title: 'Época de 12 Meses',
          desc: 'As águas atlânticas quentes da Madeira proporcionam acção durante todo o ano. Atum Rabilho, Wahoo e Dourado estão disponíveis todos os meses. O Marlin Azul atinge o pico de Maio a Outubro.',
        },
      ],
    },
    gallery: {
      title: 'Capturas Épicas',
      subtitle: 'Um vislumbre do que o espera nas profundas águas atlânticas da Madeira.',
    },
    contact: {
      title: 'Pronto para Pescar?',
      subtitle: 'Entre em contacto via WhatsApp ou e-mail. Respondemos em horas e teremos tudo marcado rapidamente.',
      whatsapp: 'Falar no WhatsApp',
      email: 'Enviar E-mail',
      location: 'Baseados em',
      locationValue: 'Marina do Funchal, Madeira, Portugal',
      priceNote: 'Preços sob consulta — cada charter é adaptado ao seu grupo, datas e espécies alvo.',
    },
    footer: {
      tagline: 'O Atlântico está a chamar.',
      rights: 'Todos os direitos reservados.',
    },
  },
}
