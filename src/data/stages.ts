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
    name: "Etape Nord",
    direction: "NORD",
    date: "Lundi 19 Octobre 2026",
    dateShort: "Lundi 19 Oct",
    day: "Jour 1",
    lieu: "Campus Moufia - Universite de La Reunion",
    lieuFull:
      "Campus du Moufia, Allee des Aigues-Marines, 97490 Sainte-Clotilde",
    capacity: 150,
    theme: "Institutionnel & Tables Rondes",
    description:
      "Matinee d'ouverture officielle du CyberTour Reunion (8h-12h). Rencontres institutionnelles, interventions des personnalites publiques et tables rondes strategiques autour de la souverainete numerique. Presentation du parcours CyberTour 2026.",
    accent: "gold",
    accentHex: "#ce463a",
    trackNumber: "01",
    href: "/nord",
    highlights: [
      "Acteurs institutionnels",
      "Tables rondes",
      "Personnalites publiques",
    ],
  },
  {
    id: "ouest",
    name: "Etape Ouest",
    direction: "OUEST",
    date: "Mardi 20 Octobre 2026",
    dateShort: "Mardi 20 Oct",
    day: "Jour 2",
    lieu: "Office de l'Eau",
    lieuFull: "Office de l'Eau Reunion, Le Port",
    capacity: 50,
    theme: "Offreurs Cyber a La Reunion",
    description:
      "Journee dediee a l'ecosysteme cyber reunionnais. Gestion de crise le matin, presentations thematiques par les offreurs locaux l'apres-midi. Chaque intervenant aborde une problematique concrete, pas un catalogue de services.",
    accent: "cyan",
    accentHex: "#5b8cc9",
    trackNumber: "02",
    href: "/ouest",
    highlights: ["Gestion de crise", "Thematiques cyber", "Ecosysteme local"],
  },
  {
    id: "est",
    name: "Etape Est",
    direction: "EST",
    date: "Mercredi 21 Octobre 2026",
    dateShort: "Mercredi 21 Oct",
    day: "Jour 3",
    lieu: "Epitech Reunion",
    lieuFull: "Epitech Reunion, Saint-Andre",
    capacity: 50,
    theme: "Formations Cyber a La Reunion",
    description:
      "Focus sur l'ecosysteme de formation en cybersecurite a La Reunion. Presentations des cursus par les ecoles le matin, puis escape game et conference d'un intervenant externe l'apres-midi.",
    accent: "emerald",
    accentHex: "#4db6ac",
    trackNumber: "03",
    href: "/est",
    highlights: ["Formations cyber", "Escape Game", "Conference"],
  },
  {
    id: "sud",
    name: "Etape Sud",
    direction: "SUD",
    date: "Jeudi 22 - Vendredi 23 Octobre 2026",
    dateShort: "Jeu 22 - Ven 23 Oct",
    day: "Jours 4-5",
    lieu: "Campus IUT / ESIROI - Universite de La Reunion",
    lieuFull:
      "IUT de La Reunion / ESIROI, 40 avenue de Soweto, 97410 Saint-Pierre",
    capacity: 150,
    theme: "Conferences & Ateliers Techniques",
    description:
      "Deux jours de conferences techniques et d'ateliers pratiques. Jour 1 : conferences en amphi. Jour 2 : CTF Tahir, Escape Game, gestion de crise, OSINT, scene ouverte (Rumps) et rencontres professionnelles. Le point d'orgue du CyberTour.",
    accent: "red",
    accentHex: "#e6a23c",
    trackNumber: "04",
    href: "/sud",
    highlights: [
      "Conferences techniques",
      "CTF & Ateliers",
      "Rumps & Scene ouverte",
    ],
  },
];
