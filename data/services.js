import {
  Aperture,
  Armchair,
  BadgeCheck,
  Bolt,
  Building2,
  Cctv,
  Fence,
  Paintbrush,
  RadioTower,
} from "lucide-react";

export const services = [
  {
    slug: "electricite-courants-forts",
    number: "01",
    title: "Électricité & courants forts",
    short: "Des installations dimensionnées, documentées et pensées pour durer.",
    description:
      "Étude, mise aux normes et exécution de vos installations électriques tertiaires, résidentielles et industrielles.",
    icon: Bolt,
    image: "/images/brono-hero-office.webp",
    items: [
      "Mise aux normes des installations et réseaux électriques",
      "Tableaux de distribution, TGBT et sous-tableaux",
      "Câblage de puissance et colonnes montantes",
      "Éclairage LED architectural et basse consommation",
      "Groupes électrogènes, inverseurs et onduleurs",
    ],
  },
  {
    slug: "courants-faibles-reseaux-securite",
    number: "02",
    title: "Réseaux, sécurité & courants faibles",
    short: "Une infrastructure connectée, lisible et sécurisée.",
    description:
      "Nous réunissons connectivité, sûreté et audiovisuel dans une infrastructure technique cohérente.",
    icon: Cctv,
    image: "/images/brono-hero-office.webp",
    items: [
      "Câblage réseau structuré et fibre optique",
      "Vidéosurveillance IP et détection incendie",
      "Contrôle d’accès, interphonie et alarmes",
      "Salles de réunion connectées et sonorisation",
      "Domotique et connectivité satellite",
    ],
  },
  {
    slug: "amenagement-bureaux-casablanca",
    number: "03",
    title: "Aménagement de bureaux",
    short: "Des espaces professionnels qui servent votre façon de travailler.",
    description:
      "Conception et réalisation de plateaux, bureaux, commerces et espaces tertiaires livrés clés en main.",
    icon: Building2,
    image: "/images/brono-hero-office.webp",
    items: [
      "Agencement complet de plateaux et bureaux",
      "Cloisonnement vitré, aluminium et amovible",
      "Faux plafonds acoustiques et isolation",
      "Optimisation ergonomique des circulations",
      "Coordination de tous les corps d’état",
    ],
  },
  {
    slug: "renovation-villas-appartements-casablanca",
    number: "04",
    title: "Rénovation résidentielle",
    short: "Une transformation complète, jusqu’au dernier détail.",
    description:
      "Rénovation haut de gamme de villas et appartements, de la restructuration aux finitions.",
    icon: Armchair,
    image: "/images/brono-villa.webp",
    items: [
      "Restructuration complète de villas et appartements",
      "Marbre, parquet, carrelage et revêtements",
      "Agencements sur mesure et optimisation des volumes",
      "Rénovation de cuisines et salles de bains",
      "Pilotage et livraison clés en main",
    ],
  },
  {
    slug: "automatisation-controle-acces",
    number: "05",
    title: "Automatisation & accès",
    short: "Des accès fluides, intelligents et maîtrisés.",
    description:
      "Motorisation, contrôle d’accès et automatismes pour les sites professionnels et résidentiels.",
    icon: RadioTower,
    image: "/images/brono-facade.webp",
    items: [
      "Motorisation de portails battants et coulissants",
      "Barrières automatiques d’accès",
      "Contrôle d’accès intelligent et télécommandes",
      "Interphonie et visiophonie",
      "Automatismes industriels",
    ],
  },
  {
    slug: "facades-enseignes",
    number: "06",
    title: "Façades & enseignes",
    short: "Une enveloppe extérieure à la hauteur de votre identité.",
    description:
      "Habillages contemporains, murs rideaux et signalétique fabriqués avec précision.",
    icon: Aperture,
    image: "/images/brono-facade.webp",
    items: [
      "Revêtements extérieurs en panneaux composites",
      "Panneaux stratifiés haute pression",
      "Murs rideaux vitrés isolants",
      "Découpe laser, plexiglas et adhésifs sablés",
      "Enseignes lumineuses et signalétique",
    ],
  },
  {
    slug: "menuiserie-metallique-serrurerie",
    number: "07",
    title: "Métallerie & serrurerie",
    short: "Le sur-mesure au service de la structure et du détail.",
    description:
      "Fabrication et pose d’ouvrages en aluminium, inox et fer pour le bâtiment.",
    icon: Fence,
    image: "/images/brono-facade.webp",
    items: [
      "Structures et ouvrages métalliques sur mesure",
      "Garde-corps, verrières, portails et grilles",
      "Portes blindées et portes techniques",
      "Renforts de structures",
      "Serrurerie du bâtiment et châssis",
    ],
  },
  {
    slug: "peinture-second-oeuvre",
    number: "08",
    title: "Peinture & second œuvre",
    short: "Des finitions propres, durables et coordonnées.",
    description:
      "Une exécution soignée des lots de finition, de la préparation des supports à la réception.",
    icon: Paintbrush,
    image: "/images/brono-villa.webp",
    items: [
      "Peintures décoratives, enduits et stuc",
      "Menuiserie bois et habillages muraux",
      "Plomberie sanitaire et évacuations",
      "Étanchéité et traitement anti-humidité",
      "Contrôle des finitions avant livraison",
    ],
  },
  {
    slug: "communication-visuelle",
    number: "09",
    title: "Communication visuelle",
    short: "Donner une présence physique forte à votre marque.",
    description:
      "Conception, fabrication et pose de supports de communication pour vos espaces.",
    icon: BadgeCheck,
    image: "/images/brono-facade.webp",
    items: [
      "Panneaux et totems publicitaires",
      "Impression numérique multi-supports",
      "Personnalisation, gravure et découpe laser",
      "Affichage lumineux",
      "Signalétique intérieure et extérieure",
    ],
  },
];

export const serviceGroups = [
  {
    eyebrow: "Ingénierie technique",
    title: "Connecter. Sécuriser. Automatiser.",
    text: "Des installations techniques conçues comme un ensemble cohérent, avec une exécution documentée et contrôlée.",
    slugs: [
      "electricite-courants-forts",
      "courants-faibles-reseaux-securite",
      "automatisation-controle-acces",
    ],
  },
  {
    eyebrow: "Aménagement & rénovation",
    title: "Transformer les usages.",
    text: "Nous pilotons les différents corps d’état pour transformer vos espaces sans multiplier les interlocuteurs.",
    slugs: [
      "amenagement-bureaux-casablanca",
      "renovation-villas-appartements-casablanca",
      "peinture-second-oeuvre",
    ],
  },
  {
    eyebrow: "Fabrication & identité",
    title: "Construire ce qui vous distingue.",
    text: "Façades, ouvrages métalliques et signalétique : une fabrication précise pour une présence durable.",
    slugs: [
      "facades-enseignes",
      "menuiserie-metallique-serrurerie",
      "communication-visuelle",
    ],
  },
];

export const getService = (slug) => services.find((service) => service.slug === slug);
