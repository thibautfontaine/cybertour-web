/** Chaînes de l'étape Sud. Le FR reprend mot pour mot la page d'origine. */
import type { Lang } from './index';
import type { ProgrammeSession } from './programme';

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
  liveBadge: string;
  liveTitle: string;
  liveText: string;
  liveCta: string;
  programmeTitle: string;
  programmePdfCta: string;
  programmePdfMeta: string;
  remoteLabel: string;
  programme: ProgrammeSession[];
  separatorLabel: string;
  day2Label: string;
  day2Title: string;
  day2Intro: string;
  programme2Title: string;
  programme2: ProgrammeSession[];
  ateliersTitle: string;
  ctfCta: string;
  ateliers: SudAtelier[];
  coOrganisersTitle: string;
  stagePartnersTitle: string;
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
    liveBadge: 'Replay · jeudi 22 octobre',
    liveTitle: 'Revoyez les conférences',
    liveText: 'Les conférences du jeudi 22 octobre sont en ligne sur YouTube, en vidéo chapitrée.',
    liveCta: 'Voir le replay sur YouTube',
    programmeTitle: 'Programme du jeudi 22 octobre',
    programmePdfCta: 'Télécharger le programme',
    programmePdfMeta: 'PDF, 2,2 Mo',
    remoteLabel: 'à distance',
    programme: [
      {
        slots: [
          { start: '08:00', end: '08:45', title: 'Accueil des participants et petit-déjeuner', kind: 'break' },
          { start: '09:00', end: '09:30', title: 'Discours de bienvenue' },
        ],
      },
      {
        title: 'Les enjeux de la confiance numérique',
        slots: [
          { start: '09:30', end: '10:00', title: "Hygiène numérique à l'ère de l'IA : faut-il adopter de nouveaux réflexes ?", speaker: 'Rodolphe Hoarau, GHT' },
          { start: '10:00', end: '10:30', title: "Pilotage et gouvernance de la sécurité des systèmes d'information dans une organisation", speaker: 'Grégory Chevaillier, Eyako' },
          { start: '10:30', end: '11:00', title: 'Hacking : riposter avec le droit de la cybercriminalité', speaker: 'Maître Sulliman Omarjee, Cyberlaw Avocats' },
          { start: '11:00', end: '11:30', title: "Focus sur la menace en période électorale, notamment à l'approche de la présidentielle 2027", speaker: 'Victoria Blin, Viginum', remote: true },
          { start: '11:30', end: '12:00', title: 'Table ronde et questions de la salle', speaker: 'Cyber Réunion, CLUSIR, Université de La Réunion', kind: 'panel' },
        ],
      },
      {
        slots: [
          { start: '12:00', end: '13:45', title: 'Cocktail déjeunatoire, réseautage et rencontres professionnels-étudiants', kind: 'break' },
        ],
      },
      {
        title: 'Cybersécurité : anticiper, détecter, sensibiliser',
        slots: [
          { start: '14:00', end: '15:00', title: "Retour d'expérience sur les podcasts « Le monde de la cyber »", speaker: "Leslie Fornero, invitée d'honneur", kind: 'highlight' },
          { start: '15:00', end: '15:30', title: "Immersion au cœur d'une opération Red Team", speaker: 'Julien Bedel, Orange Cyberdefense', remote: true },
          { start: '15:30', end: '16:00', title: "Système de détection des menaces pour l'IA générative", speaker: 'Vincent Poudroux, Kodetis' },
          { start: '16:00', end: '16:30', title: 'Analyser le périmètre cyber externe de son organisation', speaker: 'Siddique Vally-Adam, Reverse-OI' },
          { start: '16:30', end: '17:00', title: "OSINT : comment les hackers se renseignent sur une cible avant de l'attaquer", speaker: 'Willy Repusseau' },
          { start: '17:00', end: '17:30', title: 'Table ronde et questions de la salle', speaker: 'Cyber Réunion, CLUSIR, Université de La Réunion, Leslie Fornero', kind: 'panel' },
        ],
      },
      {
        slots: [{ start: '17:30', title: "Clôture de l'événement" }],
      },
    ],
    separatorLabel: 'Vendredi 23 octobre',
    day2Label: 'Jour 2 — Vendredi 23 octobre',
    day2Title: 'Ateliers pratiques',
    day2Intro: 'Une journée les mains dans le clavier. Trois ateliers en parallèle pour expérimenter la cybersécurité de manière concrète et ludique.',
    programme2Title: 'Programme du vendredi 23 octobre',
    programme2: [
      {
        slots: [
          { start: '08:00', end: '08:45', title: 'Accueil des participants et petit-déjeuner', kind: 'break' },
          { start: '09:00', title: 'Ouverture et présentation de BSides Réunion' },
          { start: '09:30', title: 'Début du CTF', kind: 'highlight' },
          { start: '09:40', title: 'Présentation', speaker: 'Tahiry Razafindralambo' },
          { start: '10:15', title: 'Présentation', speaker: "Ny Hasina Vagno, étudiant de 5e année à l'ESIROI" },
          { start: '11:00', title: 'Présentation de Cyber Réunion', speaker: 'Matthieu Druilhe' },
          { start: '12:00', title: 'Repas', kind: 'break' },
          { start: '14:00', title: 'Présentation', speaker: "Loïc Fontaine, ancien étudiant de l'ESIROI" },
          { start: '15:00', title: 'Présentation', speaker: "Lova Rafanomezantsoa, étudiant de 5e année à l'ESIROI" },
          { start: '16:00', title: 'Fin du CTF', kind: 'highlight' },
          { start: '16:15', title: 'Clôture et annonce des résultats' },
        ],
      },
    ],
    ateliersTitle: 'Les ateliers',
    ctfCta: 'Voir le site du CTF',
    ateliers: [
      {
        icon: '\u{1F3F4}',
        title: 'CTF par BSides La Réunion',
        desc: "CTF au format Jeopardy, par équipes de 4. Des lots sont offerts par nos partenaires, dont SFR Business.",
      },
      {
        icon: '\u{1F510}',
        title: 'Escape Game Cyber Reunion',
        desc: 'Escape game immersif sur le thème de la cybersécurité, conçu par Cyber Reunion.',
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
    coOrganisersTitle: 'Co-organisateurs',
    stagePartnersTitle: "Partenaires de l'étape",
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
    liveBadge: 'Replay · Thursday 22 October',
    liveTitle: 'Watch the talks again',
    liveText: 'The talks from Thursday 22 October are online on YouTube, in a chaptered video.',
    liveCta: 'Watch the replay on YouTube',
    programmeTitle: 'Programme for Thursday 22 October',
    programmePdfCta: 'Download the programme',
    programmePdfMeta: 'PDF in French, 2.2 MB',
    remoteLabel: 'remote',
    programme: [
      {
        slots: [
          { start: '08:00', end: '08:45', title: 'Welcome and breakfast', kind: 'break' },
          { start: '09:00', end: '09:30', title: 'Welcome speeches' },
        ],
      },
      {
        title: 'The stakes of digital trust',
        slots: [
          { start: '09:30', end: '10:00', title: 'Digital hygiene in the age of AI: do we need new habits?', speaker: 'Rodolphe Hoarau, GHT' },
          { start: '10:00', end: '10:30', title: 'Steering and governing information systems security in an organisation', speaker: 'Grégory Chevaillier, Eyako' },
          { start: '10:30', end: '11:00', title: 'Hacking: fighting back with cybercrime law', speaker: 'Sulliman Omarjee, attorney, Cyberlaw Avocats' },
          { start: '11:00', end: '11:30', title: 'Focus on threats during election periods, ahead of the 2027 French presidential election', speaker: 'Victoria Blin, Viginum', remote: true },
          { start: '11:30', end: '12:00', title: 'Panel and audience Q&A', speaker: 'Cyber Réunion, CLUSIR, University of La Réunion', kind: 'panel' },
        ],
      },
      {
        slots: [
          { start: '12:00', end: '13:45', title: 'Buffet lunch, networking and professional-student meetings', kind: 'break' },
        ],
      },
      {
        title: 'Cybersecurity: anticipate, detect, raise awareness',
        slots: [
          { start: '14:00', end: '15:00', title: 'Lessons from the “Le monde de la cyber” podcasts', speaker: 'Leslie Fornero, guest of honour', kind: 'highlight' },
          { start: '15:00', end: '15:30', title: 'Inside a Red Team operation', speaker: 'Julien Bedel, Orange Cyberdefense', remote: true },
          { start: '15:30', end: '16:00', title: 'Threat detection for generative AI', speaker: 'Vincent Poudroux, Kodetis' },
          { start: '16:00', end: '16:30', title: "Analysing your organisation's external cyber perimeter", speaker: 'Siddique Vally-Adam, Reverse-OI' },
          { start: '16:30', end: '17:00', title: 'OSINT: how hackers research a target before attacking', speaker: 'Willy Repusseau' },
          { start: '17:00', end: '17:30', title: 'Panel and audience Q&A', speaker: 'Cyber Réunion, CLUSIR, University of La Réunion, Leslie Fornero', kind: 'panel' },
        ],
      },
      {
        slots: [{ start: '17:30', title: 'Closing' }],
      },
    ],
    separatorLabel: 'Friday 23 October',
    day2Label: 'Day 2 — Friday 23 October',
    day2Title: 'Hands-on workshops',
    day2Intro: 'A day with your hands on the keyboard. Three parallel workshops to experience cybersecurity in a concrete and playful way.',
    programme2Title: 'Friday 23 October programme',
    programme2: [
      {
        slots: [
          { start: '08:00', end: '08:45', title: 'Welcome and breakfast', kind: 'break' },
          { start: '09:00', title: 'Opening and introduction to BSides Réunion' },
          { start: '09:30', title: 'CTF starts', kind: 'highlight' },
          { start: '09:40', title: 'Talk', speaker: 'Tahiry Razafindralambo' },
          { start: '10:15', title: 'Talk', speaker: 'Ny Hasina Vagno, 5th-year student at ESIROI' },
          { start: '11:00', title: 'Introducing Cyber Réunion', speaker: 'Matthieu Druilhe' },
          { start: '12:00', title: 'Lunch', kind: 'break' },
          { start: '14:00', title: 'Talk', speaker: 'Loïc Fontaine, ESIROI alumnus' },
          { start: '15:00', title: 'Talk', speaker: 'Lova Rafanomezantsoa, 5th-year student at ESIROI' },
          { start: '16:00', title: 'CTF ends', kind: 'highlight' },
          { start: '16:15', title: 'Closing and results announcement' },
        ],
      },
    ],
    ateliersTitle: 'The workshops',
    ctfCta: 'Visit the CTF site',
    ateliers: [
      {
        icon: '\u{1F3F4}',
        title: 'CTF by BSides La Réunion',
        desc: 'A Jeopardy-style CTF in teams of 4. Prizes are offered by our partners, including SFR Business.',
      },
      {
        icon: '\u{1F510}',
        title: 'Escape Game Cyber Reunion',
        desc: 'An immersive escape game on the theme of cybersecurity, designed by Cyber Reunion.',
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
    coOrganisersTitle: 'Co-organisers',
    stagePartnersTitle: 'Stage partners',
  },
};
