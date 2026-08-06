/**
 * Accent unique du tour. Les étapes n'ont plus de couleur propre : la couleur
 * ne dit plus « quelle étape » mais « ce tour est un ». Décision D8 de
 * docs/plans/2026-08-06-refonte-etapes-design.md.
 *
 * Deux valeurs et non une : #ce463a ne passe pas WCAG AA en texte sur fond
 * sombre (4,44:1 sur #0f1a30). PAINT peint les surfaces, TEXT écrit les mots.
 */
export const ACCENT_PAINT = "#ce463a";
export const ACCENT_TEXT = "#e56b5f";

export interface Stage {
  id: string;
  name: string;
  direction: string;
  date: string;
  dateShort: string;
  day: string;
  lieu: string;
  lieuFull: string;
  commune: string;
  capacity: number | null;
  theme: string;
  description: string;
  trackNumber: string;
  href: string;
  highlights: string[];
  /** Structure organisatrice réelle — art. 7.3 de la charte d'accueil. */
  host: string;
  /**
   * Faux tant que la fiche annexe F n'est pas reçue (art. 8.8 : « sans fiche,
   * pas de page »). Une étape non publiée s'affiche mais n'est pas cliquable.
   */
  published: boolean;
}

const CLUSIR = "CLUSIR Réunion Océan Indien";

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
    commune: "Sainte-Clotilde",
    capacity: 150,
    theme: "Institutionnel & Tables Rondes",
    description:
      "Matinée d'ouverture officielle du CyberTour Réunion (8h-12h). Rencontres institutionnelles, interventions des personnalités publiques et tables rondes stratégiques autour de la souveraineté numérique. Présentation du parcours CyberTour 2026.",
    trackNumber: "01",
    href: "/nord",
    highlights: [
      "Acteurs institutionnels",
      "Tables rondes",
      "Personnalités publiques",
    ],
    host: CLUSIR,
    published: true,
  },
  {
    id: "ouest",
    name: "Étape Ouest",
    direction: "OUEST",
    date: "Mercredi 21 Octobre 2026",
    dateShort: "Mercredi 21 Oct",
    day: "Jour 2",
    lieu: "Office de l'Eau Réunion - Saint-Paul",
    lieuFull: "Office de l'Eau Réunion, Saint-Paul",
    commune: "Saint-Paul",
    capacity: 50,
    theme: "Offreurs Cyber à La Réunion",
    description:
      "Journée dédiée à l'écosystème cyber réunionnais. Gestion de crise le matin, présentations thématiques par les offreurs locaux l'après-midi. Chaque intervenant aborde une problématique concrète, pas un catalogue de services.",
    trackNumber: "02",
    href: "/ouest",
    highlights: ["Gestion de crise", "Thématiques cyber", "Écosystème local"],
    host: CLUSIR,
    published: true,
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
    commune: "Saint-Pierre",
    capacity: 150,
    theme: "Conférences & Ateliers Techniques",
    description:
      "Deux jours de conférences techniques et d'ateliers pratiques. Jour 1 : conférences en amphi. Jour 2 : CTF, Escape Game, gestion de crise, OSINT, scène ouverte (Rumps) et rencontres professionnelles. Le point d'orgue du CyberTour.",
    trackNumber: "03",
    href: "/sud",
    highlights: [
      "Conférences techniques",
      "CTF & Ateliers",
      "Rumps & Scène ouverte",
    ],
    host: CLUSIR,
    published: true,
  },
  {
    id: "expernet",
    name: "Étape Expernet",
    direction: "OUEST",
    date: "Mardi 27 Octobre 2026",
    dateShort: "Mardi 27 Oct",
    day: "Jour 5",
    lieu: "Locaux Expernet - Le Port",
    lieuFull: "Expernet, Parc 2000, 3 avenue Théodore Drouhet, 97420 Le Port",
    commune: "Le Port",
    capacity: null,
    theme: "Programmation libre de l'hôte",
    description:
      "Étape accueillie par Expernet dans ses locaux du Port. Le programme est défini par l'hôte et sera publié dès réception de sa fiche d'étape.",
    trackNumber: "04",
    href: "/expernet",
    highlights: ["Programme à venir"],
    host: "Expernet",
    published: false,
  },
  {
    id: "edn",
    name: "Étape EDN",
    direction: "NORD",
    date: "Mercredi 28 Octobre 2026",
    dateShort: "Mercredi 28 Oct",
    day: "Jour 6",
    lieu: "Locaux EDN - Sainte-Clotilde",
    lieuFull:
      "École Du Numérique, 12 rue Gabriel de Kerveguen, 97490 Sainte-Clotilde",
    commune: "Sainte-Clotilde",
    capacity: null,
    theme: "Programmation libre de l'hôte",
    description:
      "Étape accueillie par l'École Du Numérique dans ses locaux de Sainte-Clotilde. Le programme est défini par l'hôte et sera publié dès réception de sa fiche d'étape.",
    trackNumber: "05",
    href: "/edn",
    highlights: ["Programme à venir"],
    host: "EDN",
    published: false,
  },
  {
    id: "epitech",
    name: "Étape Epitech",
    direction: "EST",
    date: "Jeudi 29 Octobre 2026",
    dateShort: "Jeudi 29 Oct",
    day: "Jour 7",
    lieu: "Locaux Epitech - Saint-André",
    lieuFull: "Epitech, 234 chemin de la Pente Sassy, 97440 Saint-André",
    commune: "Saint-André",
    capacity: null,
    theme: "Programmation libre de l'hôte",
    description:
      "Étape accueillie par Epitech dans ses locaux de Saint-André. Le programme est défini par l'hôte et sera publié dès réception de sa fiche d'étape.",
    trackNumber: "06",
    href: "/epitech",
    highlights: ["Programme à venir"],
    host: "Epitech",
    published: false,
  },
];
