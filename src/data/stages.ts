/**
 * Accent unique du tour. Les étapes n'ont plus de couleur propre : la couleur
 * ne dit plus « quelle étape » mais « ce tour est un ». Décision D8 de
 * docs/plans/2026-08-06-refonte-etapes-design.md.
 *
 * Deux valeurs et non une : #ce463a ne passe pas WCAG AA en texte sur fond
 * sombre (4,44:1 sur #0f1a30). PAINT peint les surfaces, TEXT écrit les mots.
 */
import { localizePath, type Lang } from "../i18n";

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
  /** Chemin déjà localisé (`/nord` en FR, `/en/nord` en EN). */
  href: string;
  highlights: string[];
  /** Structure organisatrice réelle — art. 7.3 de la charte d'accueil. */
  host: string;
  /** Nom court du lieu, affiché sur la frise (le PTU, pas « CLUSIR »). */
  venue: string;
  /**
   * Jours de l'étape au format ISO. Le Sud en a deux, et chaque jour compte
   * pour une étape du tour : 6 lieux, 7 étapes.
   */
  days: string[];
  /**
   * Faux tant que la fiche annexe F n'est pas reçue (art. 8.8 : « sans fiche,
   * pas de page »). Une étape non publiée s'affiche mais n'est pas cliquable.
   */
  published: boolean;
}

/** Champs qui changent avec la langue. Tout le reste est commun. */
type StageText = Pick<
  Stage,
  "name" | "direction" | "date" | "dateShort" | "day" | "lieu" | "theme" | "description" | "highlights"
>;

interface StageBase {
  id: string;
  lieuFull: string;
  commune: string;
  capacity: number | null;
  trackNumber: string;
  /** Slug commun aux deux langues (décision ISA : pas de slugs traduits). */
  path: string;
  host: string;
  venue: string;
  days: string[];
  published: boolean;
  text: Record<Lang, StageText>;
}

export const CLUSIR = "CLUSIR Réunion Océan Indien";

/* Traduction des seuls champs de texte. Les adresses postales (lieuFull) et
   les communes restent en français : ce sont des noms de lieux, pas du
   discours, et c'est la forme que le visiteur tapera dans son GPS. */
const HOST_FREE_PROGRAMME: Record<Lang, string> = {
  fr: "Programmation libre de l'hôte",
  en: "Programme set by the host",
};

const base: StageBase[] = [
  {
    id: "nord",
    lieuFull: "Parc Technologique Universitaire (PTU), 2 rue Joseph Wetzell, 97490 Sainte-Clotilde",
    commune: "Sainte-Clotilde",
    capacity: 150,
    trackNumber: "01",
    path: "/nord",
    host: CLUSIR,
    venue: "PTU",
    days: ["2026-10-20"],
    published: true,
    text: {
      fr: {
        name: "Étape Nord",
        direction: "NORD",
        date: "Mardi 20 Octobre 2026",
        dateShort: "Mardi 20 Oct",
        day: "Jour 1",
        lieu: "PTU - Parc Technologique Universitaire",
        theme: "Institutionnel, Tables Rondes & Ciné-débat",
        description:
          "Matinée d'ouverture officielle du CyberTour Réunion (8h-12h). Rencontres institutionnelles, interventions des personnalités publiques et tables rondes stratégiques autour de la souveraineté numérique. Présentation du parcours CyberTour 2026. L'après-midi, ciné-débat autour du film « Don't Go to the Police » (Orange Cyberdefense) : projection puis échange avec la salle.",
        highlights: ["Acteurs institutionnels", "Tables rondes", "Personnalités publiques", "Ciné-débat"],
      },
      en: {
        name: "North Stage",
        direction: "NORTH",
        date: "Tuesday 20 October 2026",
        dateShort: "Tuesday 20 Oct",
        day: "Day 1",
        lieu: "PTU - University Technology Park",
        theme: "Institutions, Panel Discussions & Film Debate",
        description:
          "Official opening morning of CyberTour Réunion (8am-12pm). Institutional meetings, addresses by public figures and strategic panel discussions on digital sovereignty. Presentation of the CyberTour 2026 route. In the afternoon, a screening of “Don't Go to the Police” (Orange Cyberdefense) followed by an open discussion with the audience.",
        highlights: ["Institutional stakeholders", "Panel discussions", "Public figures", "Film debate"],
      },
    },
  },
  {
    id: "ouest",
    lieuFull: "Office de l'Eau Réunion, Saint-Paul",
    commune: "Saint-Paul",
    capacity: 50,
    trackNumber: "02",
    path: "/ouest",
    host: CLUSIR,
    venue: "Office de l'Eau",
    days: ["2026-10-21"],
    published: true,
    text: {
      fr: {
        name: "Étape Ouest",
        direction: "OUEST",
        date: "Mercredi 21 Octobre 2026",
        dateShort: "Mercredi 21 Oct",
        day: "Jour 2",
        lieu: "Office de l'Eau Réunion - Saint-Paul",
        theme: "Offreurs Cyber à La Réunion",
        description:
          "Journée dédiée à l'écosystème cyber réunionnais. Gestion de crise le matin, présentations thématiques par les offreurs locaux l'après-midi. Chaque intervenant aborde une problématique concrète, pas un catalogue de services.",
        highlights: ["Gestion de crise", "Thématiques cyber", "Écosystème local"],
      },
      en: {
        name: "West Stage",
        direction: "WEST",
        date: "Wednesday 21 October 2026",
        dateShort: "Wednesday 21 Oct",
        day: "Day 2",
        lieu: "Office de l'Eau Réunion - Saint-Paul",
        theme: "Cybersecurity Providers in Reunion Island",
        description:
          "A day dedicated to Reunion Island's cybersecurity ecosystem. Crisis management in the morning, themed talks by local providers in the afternoon. Every speaker tackles a concrete problem, not a product catalogue.",
        highlights: ["Crisis management", "Cyber topics", "Local ecosystem"],
      },
    },
  },
  {
    id: "sud",
    lieuFull: "IUT de La Réunion / ESIROI, 40 avenue de Soweto, 97410 Saint-Pierre",
    commune: "Saint-Pierre",
    capacity: 150,
    trackNumber: "03-04",
    path: "/sud",
    host: CLUSIR,
    venue: "IUT / ESIROI",
    days: ["2026-10-22", "2026-10-23"],
    published: true,
    text: {
      fr: {
        name: "Étape Sud",
        direction: "SUD",
        date: "Jeudi 22 - Vendredi 23 Octobre 2026",
        dateShort: "Jeu 22 - Ven 23 Oct",
        day: "Jours 3-4",
        lieu: "Campus IUT / ESIROI - Université de La Réunion",
        theme: "Conférences & Ateliers Techniques",
        description:
          "Deux jours de conférences techniques et d'ateliers pratiques. Jour 1 : conférences en amphi. Jour 2 : CTF, Escape Game, gestion de crise, OSINT, scène ouverte (Rumps) et rencontres professionnelles. Le point d'orgue du CyberTour.",
        highlights: ["Conférences techniques", "CTF & Ateliers", "Rumps & Scène ouverte"],
      },
      en: {
        name: "South Stage",
        direction: "SOUTH",
        date: "Thursday 22 - Friday 23 October 2026",
        dateShort: "Thu 22 - Fri 23 Oct",
        day: "Days 3-4",
        lieu: "IUT / ESIROI Campus - University of Reunion Island",
        theme: "Technical Talks & Hands-on Workshops",
        description:
          "Two days of technical talks and hands-on workshops. Day 1: lecture-hall conferences. Day 2: CTF, escape game, crisis management, OSINT, open stage (Rumps) and professional networking. The highlight of the CyberTour.",
        highlights: ["Technical talks", "CTF & Workshops", "Rumps & Open stage"],
      },
    },
  },
  {
    id: "expernet",
    lieuFull: "Expernet, Parc 2000, 3 avenue Théodore Drouhet, 97420 Le Port",
    commune: "Le Port",
    capacity: null,
    trackNumber: "05",
    path: "/expernet",
    host: "Expernet",
    venue: "Expernet",
    days: ["2026-10-27"],
    published: false,
    text: {
      fr: {
        name: "Étape Expernet",
        direction: "OUEST",
        date: "Mardi 27 Octobre 2026",
        dateShort: "Mardi 27 Oct",
        day: "Jour 5",
        lieu: "Locaux Expernet - Le Port",
        theme: HOST_FREE_PROGRAMME.fr,
        description:
          "Étape accueillie par Expernet dans ses locaux du Port. Le programme est défini par l'hôte et sera publié dès réception de sa fiche d'étape.",
        highlights: [],
      },
      en: {
        name: "Expernet Stage",
        direction: "WEST",
        date: "Tuesday 27 October 2026",
        dateShort: "Tuesday 27 Oct",
        day: "Day 5",
        lieu: "Expernet offices - Le Port",
        theme: HOST_FREE_PROGRAMME.en,
        description:
          "Stage hosted by Expernet at its offices in Le Port. The programme is set by the host and will be published once its stage sheet is received.",
        highlights: [],
      },
    },
  },
  {
    id: "epitech",
    lieuFull: "Epitech, 234 chemin de la Pente Sassy, 97440 Saint-André",
    commune: "Saint-André",
    capacity: null,
    trackNumber: "06",
    path: "/epitech",
    host: "Epitech",
    venue: "Epitech",
    days: ["2026-10-29"],
    published: false,
    text: {
      fr: {
        name: "Étape Epitech",
        direction: "EST",
        date: "Jeudi 29 Octobre 2026",
        dateShort: "Jeudi 29 Oct",
        day: "Jour 6",
        lieu: "Locaux Epitech - Saint-André",
        theme: HOST_FREE_PROGRAMME.fr,
        description:
          "Étape accueillie par Epitech dans ses locaux de Saint-André. Le programme est défini par l'hôte et sera publié dès réception de sa fiche d'étape.",
        highlights: [],
      },
      en: {
        name: "Epitech Stage",
        direction: "EAST",
        date: "Thursday 29 October 2026",
        dateShort: "Thursday 29 Oct",
        day: "Day 6",
        lieu: "Epitech campus - Saint-André",
        theme: HOST_FREE_PROGRAMME.en,
        description:
          "Stage hosted by Epitech at its campus in Saint-André. The programme is set by the host and will be published once its stage sheet is received.",
        highlights: [],
      },
    },
  },
  {
    id: "edn",
    lieuFull: "École Du Numérique, 12 rue Gabriel de Kerveguen, 97490 Sainte-Clotilde",
    commune: "Sainte-Clotilde",
    capacity: null,
    trackNumber: "07",
    path: "/edn",
    host: "EDN",
    venue: "EDN",
    days: ["2026-10-30"],
    published: false,
    text: {
      fr: {
        name: "Étape EDN",
        direction: "NORD",
        date: "Vendredi 30 Octobre 2026",
        dateShort: "Vendredi 30 Oct",
        day: "Jour 7",
        lieu: "Locaux EDN - Sainte-Clotilde",
        theme: HOST_FREE_PROGRAMME.fr,
        description:
          "Étape de clôture du CyberTour, accueillie par l'École Du Numérique dans ses locaux de Sainte-Clotilde. Le programme est défini par l'hôte et sera publié dès réception de sa fiche d'étape.",
        highlights: [],
      },
      en: {
        name: "EDN Stage",
        direction: "NORTH",
        date: "Friday 30 October 2026",
        dateShort: "Friday 30 Oct",
        day: "Day 7",
        lieu: "EDN premises - Sainte-Clotilde",
        theme: HOST_FREE_PROGRAMME.en,
        description:
          "Closing stage of the CyberTour, hosted by École Du Numérique at its premises in Sainte-Clotilde. The programme is set by the host and will be published once its stage sheet is received.",
        highlights: [],
      },
    },
  },
];

/** Les six lieux d'étape (sept étapes : le Sud compte deux jours) dans la langue demandée, `href` déjà localisé. */
export function getStages(lang: Lang): Stage[] {
  return base.map(({ text, path, ...common }) => ({
    ...common,
    ...text[lang],
    href: localizePath(path, lang),
  }));
}

export function getStage(lang: Lang, id: string): Stage {
  const stage = getStages(lang).find((s) => s.id === id);
  if (!stage) throw new Error(`Étape inconnue : ${id}`);
  return stage;
}

/** Compatibilité : la liste française, comme avant l'i18n. */
export const stages: Stage[] = getStages("fr");
