export interface Stage {
  id: string;
  name: string;
  direction: string;
  date: string;
  dateShort: string;
  day: string;
  lieu: string;
  lieuFull: string;
  capacity: number;
  theme: string;
  description: string;
  accent: string;
  accentHex: string;
  trackNumber: string;
  href: string;
  highlights: string[];
}

export const stages: Stage[] = [
  {
    id: "nord",
    name: "Étape Nord",
    direction: "NORD",
    date: "Mardi 20 Octobre 2026",
    dateShort: "Mardi 20 Oct",
    day: "Jour 1",
    lieu: "Campus Moufia - Université de La Réunion",
    lieuFull:
      "Campus du Moufia, Allée des Aigues-Marines, 97490 Sainte-Clotilde",
    capacity: 150,
    theme: "Institutionnel & Tables Rondes",
    description:
      "Matinée d'ouverture officielle du CyberTour Réunion (8h-12h). Rencontres institutionnelles, interventions des personnalités publiques et tables rondes stratégiques autour de la souveraineté numérique. Présentation du parcours CyberTour 2026.",
    accent: "gold",
    accentHex: "#ce463a",
    trackNumber: "01",
    href: "/nord",
    highlights: [
      "Acteurs institutionnels",
      "Tables rondes",
      "Personnalités publiques",
    ],
  },
  {
    id: "ouest",
    name: "Étape Ouest",
    direction: "OUEST",
    date: "Mercredi 21 Octobre 2026",
    dateShort: "Mercredi 21 Oct",
    day: "Jour 2",
    lieu: "Office de l'Eau - Saint-Paul",
    lieuFull: "Office de l'Eau, Saint-Paul",
    capacity: 50,
    theme: "Offreurs Cyber à La Réunion",
    description:
      "Journée dédiée à l'écosystème cyber réunionnais. Gestion de crise le matin, présentations thématiques par les offreurs locaux l'après-midi. Chaque intervenant aborde une problématique concrète, pas un catalogue de services.",
    accent: "cyan",
    accentHex: "#5b8cc9",
    trackNumber: "02",
    href: "/ouest",
    highlights: ["Gestion de crise", "Thématiques cyber", "Écosystème local"],
  },
  {
    id: "sud",
    name: "Étape Sud",
    direction: "SUD",
    date: "Jeudi 22 - Vendredi 23 Octobre 2026",
    dateShort: "Jeu 22 - Ven 23 Oct",
    day: "Jours 3-4",
    lieu: "Campus IUT / ESIROI - Université de La Réunion",
    lieuFull:
      "IUT de La Réunion / ESIROI, 40 avenue de Soweto, 97410 Saint-Pierre",
    capacity: 150,
    theme: "Conférences & Ateliers Techniques",
    description:
      "Deux jours de conférences techniques et d'ateliers pratiques. Jour 1 : conférences en amphi. Jour 2 : CTF Tahir, Escape Game, gestion de crise, OSINT, scène ouverte (Rumps) et rencontres professionnelles. Le point d'orgue du CyberTour.",
    accent: "red",
    accentHex: "#e6a23c",
    trackNumber: "03",
    href: "/sud",
    highlights: [
      "Conférences techniques",
      "CTF & Ateliers",
      "Rumps & Scène ouverte",
    ],
  },
];
