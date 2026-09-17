/** Chaînes de l'étape Sud. Le FR reprend mot pour mot la page d'origine. */
import type { Lang } from './index';

export interface SudCard {
  title: string;
  desc: string;
}

export interface SudAtelier {
  icon: string;
  title: string;
  desc: string;
}

export interface SudDict {
  dayNavLabel: string;
  dayNavItems: { href: string; label: string }[];
  day1Label: string;
  day1Title: string;
  day1Intro: string;
  audienceTitle: string;
  audienceMorningStrong: string;
  audienceMorningText: string;
  audienceAfternoonStrong: string;
  audienceAfternoonText: string;
  topics: SudCard[];
  fullProgrammeTitle: string;
  fullProgrammeText: string;
  separatorLabel: string;
  day2Label: string;
  day2Title: string;
  day2Intro: string;
  organisationTitle: string;
  organisationText: string;
  ateliersTitle: string;
  ateliers: SudAtelier[];
  cfpTitle: string;
  cfpText: string;
  cfpCta: string;
  cfpMailto: string;
  coOrganisersTitle: string;
  logoUnivAlt: string;
  logoClusirAlt: string;
}

export const sud: Record<Lang, SudDict> = {
  fr: {
    dayNavLabel: 'Navigation par jour',
    dayNavItems: [
      { href: '#day-1', label: 'Jour 1 — Jeudi 22' },
      { href: '#day-2', label: 'Jour 2 — Vendredi 23' },
    ],
    day1Label: 'Jour 1 — Jeudi 22 octobre',
    day1Title: 'Conférences techniques',
    day1Intro: "Une journée de conférences animées par des experts en cybersécurité. Retours d'expérience, présentations techniques et échanges avec la communauté.",
    audienceTitle: 'Public',
    audienceMorningStrong: 'Matin — dirigeants et décideurs.',
    audienceMorningText: 'Enjeux cyber pour les TPE, PME et collectivités, sans prérequis technique.',
    audienceAfternoonStrong: 'Après-midi — profils techniques.',
    audienceAfternoonText: "Étudiants et professionnels de l'IT.",
    topics: [
      { title: 'Souveraineté numérique', desc: 'Cloud de confiance, enjeux locaux et cadre réglementaire européen.' },
      { title: 'Sécurité des systèmes IA', desc: "OWASP Top 10 GenAI, risques de l'IA générative, protection des modèles." },
      { title: 'SOC, défense proactive & Zero Trust', desc: 'Architectures Zero Trust, détection proactive, chiffrement du code source.' },
      { title: 'RETEX Cyber', desc: "Retour d'expérience sur la gestion d'une crise cyber réelle." },
    ],
    fullProgrammeTitle: 'Programme complet',
    fullProgrammeText: "Le programme détaillé et la liste des intervenants seront publiés à l'approche de l'événement.",
    separatorLabel: 'Vendredi 23 octobre',
    day2Label: 'Jour 2 — Vendredi 23 octobre',
    day2Title: 'Ateliers pratiques',
    day2Intro: 'Une journée les mains dans le clavier. Quatre ateliers en parallèle pour expérimenter la cybersécurité de manière concrète et ludique.',
    organisationTitle: 'Organisation',
    organisationText: 'Sessions en groupes de 4 à 6, matin et après-midi',
    ateliersTitle: 'Les ateliers',
    ateliers: [
      {
        icon: '\u{1F3F4}',
        title: 'CTF',
        desc: "CTF attack/defense sur la journée entière. Deux équipes s'affrontent : l'une attaque, l'autre défend ses services. Format dynamique, pression réelle.",
      },
      {
        icon: '\u{1F510}',
        title: 'Escape Game Cyber Reunion',
        desc: 'Escape game immersif sur le thème de la cybersécurité, conçu par Cyber Reunion.',
      },
      {
        icon: '\u{1F6A8}',
        title: 'Gestion de crise',
        desc: "Simulation de gestion d'incident cyber en conditions réelles. 4 à 6 groupes, sessions matin et après-midi.",
      },
      {
        icon: '\u{1F50D}',
        title: 'Atelier technique',
        desc: 'Atelier technique approfondi — investigation numérique en sources ouvertes et autres thématiques pratiques.',
      },
      {
        icon: '\u{1F3A4}',
        title: 'Rumps — Scène ouverte',
        desc: "Présentations libres de 5 à 10 minutes. Partagez un projet, un outil, un retour d'expérience.",
      },
      {
        icon: '\u{1F4BC}',
        title: 'Rencontres professionnelles',
        desc: 'Rencontres sponsors en one-to-one et atelier de recherche de stage avec les entreprises présentes.',
      },
    ],
    cfpTitle: 'Appel à soumission — Scène ouverte (Rumps)',
    cfpText: "Vous avez un projet, un outil, un retour d'expérience à partager ? Proposez une présentation de 5 à 10 minutes lors de la scène ouverte du CyberTour.",
    cfpCta: 'Soumettre une présentation',
    cfpMailto: 'mailto:evenement@clusir-roi.org?subject=Soumission%20Rumps%20CyberTour%202026',
    coOrganisersTitle: 'Co-organisateurs',
    logoUnivAlt: 'Université de La Réunion',
    logoClusirAlt: 'CLUSIR Réunion Océan Indien',
  },
  en: {
    dayNavLabel: 'Navigate by day',
    dayNavItems: [
      { href: '#day-1', label: 'Day 1 — Thursday 22' },
      { href: '#day-2', label: 'Day 2 — Friday 23' },
    ],
    day1Label: 'Day 1 — Thursday 22 October',
    day1Title: 'Technical talks',
    day1Intro: 'A full day of talks given by cybersecurity experts. Lessons learned (RETEX), technical presentations and exchanges with the community.',
    audienceTitle: 'Audience',
    audienceMorningStrong: 'Morning — executives and decision-makers.',
    audienceMorningText: 'Cyber stakes for small businesses, SMEs and local authorities, with no technical prerequisites.',
    audienceAfternoonStrong: 'Afternoon — technical profiles.',
    audienceAfternoonText: 'Students and IT professionals.',
    topics: [
      { title: 'Digital sovereignty', desc: 'Trusted cloud, local stakes and the European regulatory framework.' },
      { title: 'Securing AI systems', desc: 'OWASP Top 10 for GenAI, generative AI risks, protecting models.' },
      { title: 'SOC, proactive defence & Zero Trust', desc: 'Zero Trust architectures, proactive detection, source code encryption.' },
      { title: 'Cyber RETEX', desc: 'Lessons learned (RETEX) from handling a real cyber crisis.' },
    ],
    fullProgrammeTitle: 'Full programme',
    fullProgrammeText: 'The detailed programme and the list of speakers will be published closer to the event.',
    separatorLabel: 'Friday 23 October',
    day2Label: 'Day 2 — Friday 23 October',
    day2Title: 'Hands-on workshops',
    day2Intro: 'A day with your hands on the keyboard. Four parallel workshops to experience cybersecurity in a concrete and playful way.',
    organisationTitle: 'Format',
    organisationText: 'Sessions in groups of 4 to 6, morning and afternoon',
    ateliersTitle: 'The workshops',
    ateliers: [
      {
        icon: '\u{1F3F4}',
        title: 'CTF',
        desc: 'A full-day attack/defense CTF. Two teams face off: one attacks, the other defends its services. Fast-paced format, real pressure.',
      },
      {
        icon: '\u{1F510}',
        title: 'Escape Game Cyber Reunion',
        desc: 'An immersive escape game on the theme of cybersecurity, designed by Cyber Reunion.',
      },
      {
        icon: '\u{1F6A8}',
        title: 'Crisis management',
        desc: 'A cyber incident response simulation under realistic conditions. 4 to 6 groups, morning and afternoon sessions.',
      },
      {
        icon: '\u{1F50D}',
        title: 'Technical workshop',
        desc: 'An in-depth technical workshop — open-source intelligence investigation and other hands-on topics.',
      },
      {
        icon: '\u{1F3A4}',
        title: 'Rumps — Open stage',
        desc: 'Free-form 5 to 10 minute talks. Share a project, a tool, or lessons learned (RETEX).',
      },
      {
        icon: '\u{1F4BC}',
        title: 'Professional networking',
        desc: 'One-to-one meetings with sponsors and an internship search workshop with the companies present.',
      },
    ],
    cfpTitle: 'Call for submissions — Open stage (Rumps)',
    cfpText: 'Do you have a project, a tool or lessons learned to share? Submit a 5 to 10 minute talk for the CyberTour open stage.',
    cfpCta: 'Submit a talk',
    cfpMailto: 'mailto:evenement@clusir-roi.org?subject=Rumps%20submission%20CyberTour%202026',
    coOrganisersTitle: 'Co-organisers',
    logoUnivAlt: 'Université de La Réunion',
    logoClusirAlt: 'CLUSIR Réunion Océan Indien',
  },
};
