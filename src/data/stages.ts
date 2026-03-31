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
    lieu: "Campus Moufia",
    lieuFull:
      "Campus du Moufia, Allee des Aigues-Marines, 97490 Sainte-Clotilde",
    capacity: 500,
    theme: "Institutionnel & Table Ronde",
    description:
      "Ouverture officielle du CyberTour Reunion avec les acteurs institutionnels de la cybersecurite. Tables rondes strategiques reunissant les decideurs publics et prives autour des enjeux de souverainete numerique. Une journee pour poser le cadre et les ambitions de la cybersecurite a La Reunion.",
    accent: "gold",
    accentHex: "#ce463a",
    trackNumber: "01",
    href: "/nord",
    highlights: [
      "Region Reunion",
      "ANSSI",
      "Viginum",
      "DINUM",
      "SGDSN",
      "CCI",
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
    theme: "Rencontre Offreurs & Entreprises",
    description:
      "Journee dediee aux rencontres entre offreurs de solutions cyber et entreprises reunionnaises. Un format B2B privilegie pour decouvrir les solutions adaptees au tissu economique local. Networking et echanges concrets pour securiser vos systemes d'information.",
    accent: "cyan",
    accentHex: "#5b8cc9",
    trackNumber: "02",
    href: "/ouest",
    highlights: ["Solutions cyber", "Tables rondes B2B", "Networking"],
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
      "Focus sur l'ecosysteme de formation en cybersecurite a La Reunion. Rencontres entre etudiants, ecoles et entreprises pour favoriser l'insertion professionnelle. Speed dating stages et alternances pour construire les talents cyber de demain.",
    accent: "emerald",
    accentHex: "#4db6ac",
    trackNumber: "03",
    href: "/est",
    highlights: ["Ecoles IT", "Speed dating stages", "Alternances"],
  },
  {
    id: "sud",
    name: "Etape Sud",
    direction: "SUD",
    date: "Jeudi 22 - Vendredi 23 Octobre 2026",
    dateShort: "Jeu 22 - Ven 23 Oct",
    day: "Jours 4-5",
    lieu: "Campus IUT / ESIROI",
    lieuFull:
      "IUT de La Reunion / ESIROI, 40 avenue de Soweto, 97410 Saint-Pierre",
    capacity: 150,
    theme: "Conferences & Ateliers Techniques",
    description:
      "Deux jours de conferences techniques et d'ateliers pratiques pour les passionnes de cybersecurite. CTF, Escape Game, OSINT et exercices de gestion de crise au programme. Le rendez-vous technique incontournable du CyberTour.",
    accent: "red",
    accentHex: "#e6a23c",
    trackNumber: "04",
    href: "/sud",
    highlights: [
      "Conferences",
      "CTF",
      "Escape Game",
      "OSINT",
      "Gestion de crise",
    ],
  },
];
