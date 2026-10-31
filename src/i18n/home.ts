/**
 * Dictionnaire de la page d'accueil (`src/views/Home.astro`).
 *
 * Le français est la référence : les chaînes reprennent mot pour mot le
 * contenu historique de `src/pages/index.astro`, entités HTML comprises
 * (`&mdash;` → « — », `&middot;` → « · », `&rarr;` → « → »).
 *
 * Les clés suffixées `Html` contiennent du balisage inline (`<strong>`,
 * `<span>`, `<br/>`, `<a>`) et sont rendues via `set:html` : c'est plus
 * lisible que d'éclater chaque phrase en cinq fragments.
 */

import type { Lang } from './index';

export interface Pillar {
  /** Clé stable — porte l'icône SVG côté vue. */
  key: string;
  title: string;
  text: string;
}

export interface TierText {
  /** Clé stable — porte la palette Tailwind côté vue. */
  key: string;
  name: string;
  axis: string;
  note: string;
  price: string;
  tagline: string;
  includes: string | null;
  benefits: string[];
  /** Sujet du mailto de demande de partenariat. */
  subject: string;
  cta: string;
  aria: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface HomeDict {
  // ── Méta ────────────────────────────────────────────────────────────
  metaTitle: string;
  metaDescription: string;

  // ── Hero ────────────────────────────────────────────────────────────
  heroBadge: string;
  heroDates: string;
  heroPlaces: string;
  /** Phrase de présentation sous le titre : ce qu'est l'événement, pour le visiteur et le référencement. */
  heroTagline: string;
  heroCtaBilan: string;
  heroCtaReplay: string;
  /** Chiffres de l'édition : `count` est la valeur finale, rendue au build puis animée au chargement. */
  heroStats: { count: number; suffix: string; label: string }[];
  scroll: string;

  // ── À propos ────────────────────────────────────────────────────────
  aboutLabel: string;
  aboutPageMetaTitle: string;
  aboutPageMetaDescription: string;
  aboutTitleHtml: string;
  aboutP1Html: string;
  aboutP2Html: string;
  aboutStats: Stat[];
  aboutImgAlt: string;
  aboutImgCaption: string;

  // ── Nos éditions (synthèse ; le détail est sur /bilan) ──────────────
  /** Une ligne par format : le lien mène à l'étape qui l'illustre. */
  formatsLabel: string;
  formatsTitleHtml: string;
  formats: { title: string; text: string; href: string }[];
  orgLabel: string;
  orgTitleHtml: string;
  orgIntro: string;
  editionsLabel: string;
  editionsTitleHtml: string;
  editionsCta: string;

  // ── Parcours ────────────────────────────────────────────────────────
  routeLabel: string;
  routeTitleHtml: string;
  routeIntro: string;
  routeDates: string;

  // ── CTF ─────────────────────────────────────────────────────────────
  ctfLabel: string;
  ctfTitleHtml: string;
  ctfIntroHtml: string;
  ctfBadgeMonth: string;
  ctfBadgeAllMonth: string;
  ctfBodyHtml: string;
  ctfCta: string;
  ctfPartnersLabel: string;


  // ── Partenaires (pyramide) ──────────────────────────────────────────
  partnersLabel: string;
  partnersTitleHtml: string;
  partnersIntro: string;
  partnersCta: string;
  partnersPageMetaTitle: string;
  partnersPageMetaDescription: string;

  // ── Sponsoring ──────────────────────────────────────────────────────
  sponsorsLabel: string;
  sponsorsTitleHtml: string;
  sponsorsIntro: string;
  whyInvestHeading: string;
  whyInvest: Pillar[];
  tiersHeading: string;
  tiersIntro: string;
  tiers: TierText[];
  tiersFootnote: string;
  deckCta: string;
  deckSubject: string;
  deckNote: string;
  audienceHeading: string;
  audience2025: Stat[];

  // ── Inscription ─────────────────────────────────────────────────────
  replayLabel: string;
  replayTitleHtml: string;
  replayIntro: string;
  replayPosterAlt: string;
  replayPlay: string;
  replayTermFile: string;
  replayTermCmd: string;
  replayTermLines: { label: string; value: string }[];
  replayBilanCta: string;
  replayJoinCta: string;

  // ── Contact ─────────────────────────────────────────────────────────
  contactLabel: string;
  contactTitleHtml: string;
  contactIntro: string;
  contactEmailLabel: string;
  contactJoinLabel: string;
  contactJoinValue: string;
  contactJoinLink: string;
  contactReplay: string;
}

const fr: HomeDict = {
  metaTitle: 'Cyber Tour Réunion 2026 | 20-30 Octobre - 6 Étapes',
  metaDescription:
    "Bilan et replays du Cyber Tour Réunion 2026 : 6 étapes du 20 au 30 octobre, 388 présences, organisé par le CLUSIR Réunion Océan Indien et des organisateurs locaux.",

  heroBadge: 'Édition 2026 terminée',
  heroDates: '20 — 30 OCTOBRE 2026',
  heroPlaces: "6 ÉTAPES · TOUTE L'ÎLE",
  heroTagline:
    "Six étapes gratuites ont fait le tour de l'île pour parler cybersécurité : conférences, ateliers pratiques et CTF, avec les décideurs, les professionnels de l'IT et les étudiants. Organisé par le CLUSIR Réunion Océan Indien.",
  heroCtaBilan: 'Voir le bilan',
  heroCtaReplay: 'Revoir les conférences',
  heroStats: [
    { count: 388, suffix: '', label: 'présences en salle' },
    { count: 1500, suffix: '+', label: 'vues de la vidéo' },
    { count: 6, suffix: '', label: 'retombées médias' },
  ],
  scroll: 'Scroll',

  aboutLabel: '01 // À propos',
  aboutPageMetaTitle: 'À propos | Cyber Tour Réunion',
  aboutPageMetaDescription:
    "Le Cyber Tour Réunion, tournée gratuite de la cybersécurité à La Réunion : qui l'organise, ses formats, ses éditions 2025 et 2026, et comment rejoindre 2027.",
  aboutTitleHtml:
    'Le tour de la cybersécurité <span class="text-accent">à La Réunion</span>',
  aboutP1Html:
    '<strong class="text-ink font-semibold">Le Cyber Tour Réunion</strong> est la tournée gratuite de la cybersécurité à La Réunion, organisée dans le cadre du <strong class="text-accent font-semibold">Cybermois</strong> par le <strong class="text-ink font-semibold">CLUSIR Réunion Océan Indien</strong>. Il va au plus près des entreprises, des collectivités et des étudiants, avec un objectif commun : renforcer la résilience numérique du territoire.',
  aboutP2Html:
    'Lancé en 2025 avec l\'Université de La Réunion, il a réuni <strong class="text-ink font-semibold">220 participants</strong> pour sa première édition. En 2026, il a fait le tour de l\'île : <strong class="text-ink font-semibold">6 étapes dans 5 lieux</strong>, <strong class="text-ink font-semibold">388 présences</strong> en salle et <strong class="text-ink font-semibold">1 200 personnes</strong> en direct sur YouTube.',
  aboutStats: [
    { value: '2', label: 'éditions' },
    { value: '6', label: 'étapes en 2026' },
    { value: '388', label: 'présences en 2026' },
  ],
  aboutImgAlt: "L'amphithéâtre de l'IUT de Saint-Pierre pendant l'intervention de Leslie Fornero, devant la banderole du Cyber Tour",
  aboutImgCaption: "22 octobre 2026, amphithéâtre de l'IUT, Saint-Pierre",

  formatsLabel: '02 // Les formats',
  formatsTitleHtml: 'Quatre façons de <span class="text-accent">parler cyber</span>',
  formats: [
    { title: 'Conférences', text: "Des experts et des retours d'expérience, en salle et en direct sur YouTube.", href: '/sud' },
    { title: 'Gestion de crise', text: "Une journée de formation : la théorie le matin, un exercice sur table l'après-midi.", href: '/ouest' },
    { title: 'CTF', text: 'Un challenge de hacking avec BSides Réunion, ouvert aux étudiants et aux professionnels.', href: '/sud' },
    { title: 'Étapes locales', text: "Une entreprise ou une école accueille une étape sous le label Cyber Tour, comme Expernet et l'École Du Numérique en 2026.", href: '/expernet' },
  ],

  orgLabel: '03 // Organisation',
  orgTitleHtml: 'Qui porte <span class="text-accent">le Cyber Tour</span>',
  orgIntro:
    "Le Cyber Tour est organisé par le CLUSIR Réunion Océan Indien, avec l'Université de La Réunion, la Préfecture de La Réunion et Cyber Réunion.",

  editionsLabel: '04 // Nos éditions',
  editionsTitleHtml: 'Deux éditions, <span class="text-accent">tout un territoire</span>',
  editionsCta: 'Voir le bilan complet',

  routeLabel: '01 // Le Parcours',
  routeTitleHtml:
    '6 étapes, <span class="text-accent">un seul tour</span>',
  routeIntro:
    "Du 20 au 30 octobre, la cybersécurité a fait le tour de l'île, portée par le CLUSIR sur quatre étapes et par des organisateurs locaux sur deux autres. Même label, même exigence, même agenda. Le Cyber Tour est organisé par le CLUSIR Réunion Océan Indien, en partenariat avec l'Université de La Réunion.",
  routeDates: '20 — 30 OCTOBRE 2026',
  ctfLabel: '04 // CTF',
  ctfTitleHtml:
    'Championnat Réunionnais<br/>de <span class="text-accent">Cybersécurité</span>',
  ctfIntroHtml:
    'Un CTF a réuni 38 participants en 16 équipes le vendredi 23 octobre pour le <strong class="text-accent font-semibold">Cybermois 2026</strong>, pendant l\'étape Sud sur le campus IUT / ESIROI de Saint-Pierre, en partenariat avec l\'association <a href="https://bsides-reunion.re" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80 transition-colors">BSides Réunion</a>.',
  ctfBadgeMonth: 'Vendredi 23 octobre',
  ctfBadgeAllMonth: 'Jeopardy · équipes de 4',
  ctfBodyHtml:
    'Format Jeopardy, par équipes de 4. Des lots ont été offerts par nos partenaires, dont <strong class="text-ink font-semibold">SFR Business</strong>. Contact : <a href="mailto:contact@bsides-reunion.re" class="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">contact@bsides-reunion.re</a>.',
  ctfCta: 'Voir les temps forts',
  ctfPartnersLabel: 'En partenariat avec',


  partnersLabel: '03 // Partenaires',
  partnersTitleHtml: 'L\'écosystème <span class="text-accent">CyberTour</span>',
  partnersIntro:
    "Qui porte l'événement, et à quelle place.",
  partnersCta: 'Devenir partenaire',
  partnersPageMetaTitle: 'Devenir partenaire | Cyber Tour Réunion 2026',
  partnersPageMetaDescription:
    'Formules de partenariat Bronze, Silver et Gold du Cyber Tour Réunion 2026 : visibilité, réseau, expertise et talents.',

  sponsorsLabel: 'Devenir partenaire',
  sponsorsTitleHtml:
    'Devenez acteur du <span class="text-accent">CyberTour Réunion</span>',
  sponsorsIntro:
    'Un partenariat pour valoriser votre expertise, développer votre réseau et contribuer à la résilience numérique du territoire.',
  whyInvestHeading: 'Pourquoi investir dans le CyberTour ?',
  whyInvest: [
    {
      key: 'visibilite',
      title: 'Visibilité',
      text: "Associez votre entreprise à un événement fédérateur de l'écosystème cyber réunionnais et bénéficiez d'une visibilité auprès de décideurs, professionnels, experts et futurs talents.",
    },
    {
      key: 'reseau',
      title: 'Réseau',
      text: "Rencontrez les acteurs de l'écosystème cyber : entreprises, institutions, experts, professionnels et intervenants nationaux.",
    },
    {
      key: 'expertise',
      title: 'Expertise',
      text: "Valorisez vos compétences et vos collaborateurs en contribuant aux conférences, ateliers, retours d'expérience ou temps d'échange du CyberTour.",
    },
    {
      key: 'talents',
      title: 'Talents',
      text: 'Rencontrez les étudiants et futurs professionnels issus des formations locales et développez votre attractivité auprès des talents du numérique et de la cybersécurité.',
    },
  ],
  tiersHeading: 'Formules de partenariat',
  tiersIntro:
    "Des niveaux d'engagement conçus pour vous permettre de soutenir, être présent et contribuer au CyberTour Réunion. Chaque formule reprend la précédente et y ajoute ses propres contreparties.",
  tiers: [
    {
      key: 'bronze',
      name: 'Bronze',
      axis: 'Soutenir',
      note: 'À partir de',
      price: '1 000 €',
      tagline:
        "Pour les entreprises qui souhaitent associer leur image à l'événement et soutenir son développement.",
      includes: null,
      benefits: [
        'Mention comme partenaire du CyberTour',
        "Logo affiché sur le site internet de l'événement",
        'Logo intégré aux supports de communication',
        'Mention du partenariat dans les publications relatives au CyberTour',
        'Kit de communication partenaire (selon les supports et éléments disponibles)',
      ],
      subject: 'Sponsoring Bronze — 1 000 €',
      cta: 'Devenir partenaire Bronze',
      aria: 'Écrire au CLUSIR au sujet du partenariat Bronze à 1 000 €',
    },
    {
      key: 'silver',
      name: 'Silver',
      axis: 'Être présent',
      note: 'À partir de',
      price: '3 000 €',
      tagline:
        'Pour les entreprises qui souhaitent aller au-delà du soutien et rencontrer directement les participants.',
      includes: 'Tous les avantages de la formule Bronze',
      benefits: [
        "Présence identifiée comme partenaire sur le lieu de l'événement",
        "Jusqu'à 2 supports de visibilité (type kakémono) sur une étape",
        "Goodies aux couleurs de l'entreprise intégrés aux dotations de l'événement",
        'Espace partenaire pour échanger avec les étudiants et futurs talents',
      ],
      subject: 'Sponsoring Silver — 3 000 €',
      cta: 'Devenir partenaire Silver',
      aria: 'Écrire au CLUSIR au sujet du partenariat Silver à 3 000 €',
    },
    {
      key: 'gold',
      name: 'Gold',
      axis: 'Contribuer',
      note: 'À partir de',
      price: '5 000 €',
      tagline:
        "Pour les entreprises qui souhaitent valoriser leur expertise et contribuer activement au contenu de l'événement.",
      includes: 'Tous les avantages de la formule Silver',
      benefits: [
        "Temps d'introduction (2 min max)*",
        "Co-branding d'un atelier ou d'une séquence* : « Atelier présenté par [Entreprise] » ou « Atelier organisé en partenariat avec [Entreprise] »",
        "Contribution au contenu d'un atelier ou d'une séquence thématique*",
        "Mobilisation de vos collaborateurs pour intervenir lors d'une étape ou partager un retour d'expérience*",
      ],
      subject: 'Sponsoring Gold — 5 000 €',
      cta: 'Devenir partenaire Gold',
      aria: 'Écrire au CLUSIR au sujet du partenariat Gold à 5 000 €',
    },
  ],
  tiersFootnote:
    "* Sous réserve de validation par le comité d'organisation et selon le format et le programme.",
  deckCta: 'Demander le dossier partenaire',
  deckSubject: 'Cyber Tour Réunion 2026 — demande du dossier partenaire',
  deckNote: '// Le dossier partenaire complet (PDF) vous est envoyé par mail.',
  audienceHeading: 'Ce que le partenariat a touché en 2025',
  audience2025: [
    { value: '220', label: 'Participants' },
    { value: '150', label: 'En présentiel' },
    { value: '600+', label: 'Vues replay' },
    { value: '2', label: 'Retombées presse' },
  ],

  replayLabel: '02 // Replay',
  replayTitleHtml: 'Revoyez <span class="text-accent">les conférences</span>',
  replayIntro:
    "La journée du 22 octobre à l'IUT de Saint-Pierre est en ligne, en vidéo chapitrée : neuf intervenants, dont Leslie Fornero, invitée d'honneur.",
  replayPosterAlt: "L'amphithéâtre de l'IUT rempli pendant l'intervention de Leslie Fornero",
  replayPlay: 'Lancer le replay sur YouTube',
  replayTermFile: 'edition.status',
  replayTermCmd: './cybertour --status',
  replayTermLines: [
    { label: 'Édition 2026 :', value: 'terminée, 6 étapes, 5 lieux' },
    { label: 'Bilan :', value: 'chiffres, temps forts, médias, partenaires' },
    { label: 'Édition 2027 :', value: 'en préparation, rejoignez-nous' },
  ],
  replayBilanCta: 'Lire le bilan',
  replayJoinCta: "Rejoindre l'édition 2027",

  contactLabel: '05 // Contact',
  contactTitleHtml: 'Préparons <span class="text-accent">2027</span>',
  contactIntro:
    "Participer, intervenir, accueillir une étape ou devenir partenaire : écrivez-nous.",
  contactEmailLabel: 'Email',
  contactJoinLabel: 'Édition 2027',
  contactJoinValue: 'Les trois façons de nous rejoindre',
  contactJoinLink: 'Voir les options →',
  contactReplay: 'Revoir les conférences 2026',
};

const en: HomeDict = {
  metaTitle: 'Cyber Tour Réunion 2026 | 20-30 October - 6 Stages',
  metaDescription:
    'Review and replays of Cyber Tour Réunion 2026: 6 stages from 20 to 30 October, 388 attendances, organised by CLUSIR Réunion Océan Indien and local hosts.',

  heroBadge: '2026 edition complete',
  heroDates: '20 — 30 OCTOBER 2026',
  heroPlaces: '6 STAGES · ACROSS THE ISLAND',
  heroTagline:
    'Six free stages toured the island to talk cybersecurity: talks, hands-on workshops and a CTF, with decision-makers, IT professionals and students. Organised by CLUSIR Réunion Océan Indien.',
  heroCtaBilan: 'See the review',
  heroCtaReplay: 'Watch the talks',
  heroStats: [
    { count: 388, suffix: '', label: 'on-site attendances' },
    { count: 1500, suffix: '+', label: 'video views' },
    { count: 6, suffix: '', label: 'media features' },
  ],
  scroll: 'Scroll',

  aboutLabel: '01 // About',
  aboutPageMetaTitle: 'About | Cyber Tour Réunion',
  aboutPageMetaDescription:
    'Cyber Tour Réunion, the free cybersecurity tour of Reunion Island: who runs it, its formats, the 2025 and 2026 editions, and how to join 2027.',
  aboutTitleHtml:
    'The cybersecurity tour <span class="text-accent">of Reunion Island</span>',
  aboutP1Html:
    '<strong class="text-ink font-semibold">Cyber Tour Réunion</strong> is the free cybersecurity tour of Reunion Island, held as part of <strong class="text-accent font-semibold">Cybermois</strong> (European Cybersecurity Month) by <strong class="text-ink font-semibold">CLUSIR Réunion Océan Indien</strong>. It goes out to businesses, local authorities and students, with one shared goal: strengthening the island\'s digital resilience.',
  aboutP2Html:
    'Launched in 2025 with the University of La Réunion, its first edition brought together <strong class="text-ink font-semibold">220 attendees</strong>. In 2026 it toured the island: <strong class="text-ink font-semibold">6 stages in 5 venues</strong>, <strong class="text-ink font-semibold">388 attendances</strong> on site and <strong class="text-ink font-semibold">1,200 people</strong> watching live on YouTube.',
  aboutStats: [
    { value: '2', label: 'editions' },
    { value: '6', label: 'stages in 2026' },
    { value: '388', label: 'attendances in 2026' },
  ],
  aboutImgAlt: 'The IUT lecture hall in Saint-Pierre during Leslie Fornero’s talk, in front of the Cyber Tour banner',
  aboutImgCaption: '22 October 2026, IUT lecture hall, Saint-Pierre',

  formatsLabel: '02 // Formats',
  formatsTitleHtml: 'Four ways to <span class="text-accent">talk cyber</span>',
  formats: [
    { title: 'Talks', text: 'Experts and lessons from the field, on site and live on YouTube.', href: '/sud' },
    { title: 'Crisis management', text: 'A day of training: theory in the morning, a tabletop exercise in the afternoon.', href: '/ouest' },
    { title: 'CTF', text: 'A hacking challenge with BSides Réunion, open to students and professionals.', href: '/sud' },
    { title: 'Local stages', text: 'A company or a school hosts a stage under the Cyber Tour label, as Expernet and École Du Numérique did in 2026.', href: '/expernet' },
  ],

  orgLabel: '03 // Organisation',
  orgTitleHtml: 'Who runs <span class="text-accent">Cyber Tour</span>',
  orgIntro:
    'Cyber Tour is organised by CLUSIR Réunion Océan Indien, with the University of La Réunion, the Prefecture of La Réunion and Cyber Réunion.',

  editionsLabel: '04 // Our editions',
  editionsTitleHtml: 'Two editions, <span class="text-accent">a whole island</span>',
  editionsCta: 'See the full review',

  routeLabel: '01 // The Route',
  routeTitleHtml:
    '6 stages, <span class="text-accent">one single tour</span>',
  routeIntro:
    'From 20 to 30 October, cybersecurity toured the island: four stages run by CLUSIR, two more by local hosts. Same label, same standards, same schedule. Cyber Tour is organised by CLUSIR Réunion Océan Indien, in partnership with the University of La Réunion.',
  routeDates: '20 — 30 OCTOBER 2026',
  ctfLabel: '04 // CTF',
  ctfTitleHtml:
    'Reunion Island<br/><span class="text-accent">Cybersecurity</span> Championship',
  ctfIntroHtml:
    'A CTF brought together 38 participants in 16 teams on Friday 23 October for <strong class="text-accent font-semibold">Cybermois 2026</strong>, during the South stage at the IUT / ESIROI campus in Saint-Pierre, in partnership with the <a href="https://bsides-reunion.re" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80 transition-colors">BSides Réunion</a> association.',
  ctfBadgeMonth: 'Friday 23 October',
  ctfBadgeAllMonth: 'Jeopardy · teams of 4',
  ctfBodyHtml:
    'Jeopardy format, in teams of 4. Prizes were offered by our partners, including <strong class="text-ink font-semibold">SFR Business</strong>. Contact: <a href="mailto:contact@bsides-reunion.re" class="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">contact@bsides-reunion.re</a>.',
  ctfCta: 'See the highlights',
  ctfPartnersLabel: 'In partnership with',


  partnersLabel: '03 // Partners',
  partnersTitleHtml: 'The <span class="text-accent">CyberTour</span> ecosystem',
  partnersIntro:
    'Who runs the event, and in what role.',
  partnersCta: 'Become a partner',
  partnersPageMetaTitle: 'Become a partner | Cyber Tour Réunion 2026',
  partnersPageMetaDescription:
    'Bronze, Silver and Gold partnership packages for Cyber Tour Réunion 2026: visibility, network, expertise and talent.',

  sponsorsLabel: 'Become a partner',
  sponsorsTitleHtml:
    'Take part in the <span class="text-accent">CyberTour Réunion</span>',
  sponsorsIntro:
    'A partnership to showcase your expertise, grow your network and contribute to the digital resilience of the territory.',
  whyInvestHeading: 'Why invest in the CyberTour?',
  whyInvest: [
    {
      key: 'visibilite',
      title: 'Visibility',
      text: "Associate your company with an event that unites Reunion Island's cybersecurity ecosystem, and gain visibility among decision-makers, professionals, experts and future talent.",
    },
    {
      key: 'reseau',
      title: 'Network',
      text: 'Meet the players of the cybersecurity ecosystem: companies, institutions, experts, professionals and national speakers.',
    },
    {
      key: 'expertise',
      title: 'Expertise',
      text: "Showcase your skills and your teams by contributing to the CyberTour's talks, workshops, case studies or networking sessions.",
    },
    {
      key: 'talents',
      title: 'Talent',
      text: 'Meet the students and future professionals coming out of local training programmes, and build your appeal among digital and cybersecurity talent.',
    },
  ],
  tiersHeading: 'Partnership packages',
  tiersIntro:
    'Levels of commitment designed to let you support, be present at and contribute to the CyberTour Réunion. Each package includes the previous one and adds its own benefits.',
  tiers: [
    {
      key: 'bronze',
      name: 'Bronze',
      axis: 'Support',
      note: 'From',
      price: '€1,000',
      tagline:
        'For companies that want to associate their brand with the event and support its growth.',
      includes: null,
      benefits: [
        'Listed as a CyberTour partner',
        'Logo displayed on the event website',
        'Logo included in the communication materials',
        'Partnership mentioned in CyberTour publications',
        'Partner communication kit (subject to the materials and assets available)',
      ],
      subject: 'Sponsoring Bronze — €1,000',
      cta: 'Become a Bronze partner',
      aria: 'Email CLUSIR about the Bronze partnership at €1,000',
    },
    {
      key: 'silver',
      name: 'Silver',
      axis: 'Be present',
      note: 'From',
      price: '€3,000',
      tagline:
        'For companies that want to go beyond support and meet the attendees directly.',
      includes: 'All the benefits of the Bronze package',
      benefits: [
        'Identified partner presence at the event venue',
        'Up to 2 visibility supports (roll-up banner type) at one stage',
        'Branded goodies included in the event giveaways',
        'Partner space to meet students and future talent',
      ],
      subject: 'Sponsoring Silver — €3,000',
      cta: 'Become a Silver partner',
      aria: 'Email CLUSIR about the Silver partnership at €3,000',
    },
    {
      key: 'gold',
      name: 'Gold',
      axis: 'Contribute',
      note: 'From',
      price: '€5,000',
      tagline:
        "For companies that want to showcase their expertise and actively contribute to the event's content.",
      includes: 'All the benefits of the Silver package',
      benefits: [
        'Opening slot (2 min max)*',
        'Co-branding of a workshop or a session*: “Workshop presented by [Company]” or “Workshop organised in partnership with [Company]”',
        'Contribution to the content of a workshop or a themed session*',
        'Your teams taking the floor at a stage or sharing a case study*',
      ],
      subject: 'Sponsoring Gold — €5,000',
      cta: 'Become a Gold partner',
      aria: 'Email CLUSIR about the Gold partnership at €5,000',
    },
  ],
  tiersFootnote:
    '* Subject to approval by the organising committee, and depending on the format and the programme.',
  deckCta: 'Request the partnership deck',
  deckSubject: 'Cyber Tour Réunion 2026 — partnership deck request',
  deckNote: '// The complete partnership deck (PDF) is sent to you by email.',
  audienceHeading: 'What the partnership reached in 2025',
  audience2025: [
    { value: '220', label: 'Attendees' },
    { value: '150', label: 'On site' },
    { value: '600+', label: 'Replay views' },
    { value: '2', label: 'Press coverage' },
  ],

  replayLabel: '02 // Replay',
  replayTitleHtml: 'Watch <span class="text-accent">the talks</span>',
  replayIntro:
    'The 22 October day at the IUT in Saint-Pierre is online, in a chaptered video: nine speakers, including guest of honour Leslie Fornero. Talks are in French.',
  replayPosterAlt: 'The IUT lecture hall full during Leslie Fornero’s talk',
  replayPlay: 'Play the replay on YouTube',
  replayTermFile: 'edition.status',
  replayTermCmd: './cybertour --status',
  replayTermLines: [
    { label: '2026 edition:', value: 'over, 6 stages, 5 venues' },
    { label: 'Review:', value: 'figures, highlights, media, partners' },
    { label: '2027 edition:', value: 'in preparation, join us' },
  ],
  replayBilanCta: 'Read the review',
  replayJoinCta: 'Join the 2027 edition',

  contactLabel: '05 // Contact',
  contactTitleHtml: 'Let’s prepare <span class="text-accent">2027</span>',
  contactIntro:
    'Attend, speak, host a stage or become a partner: write to us.',
  contactEmailLabel: 'Email',
  contactJoinLabel: '2027 edition',
  contactJoinValue: 'Three ways to join us',
  contactJoinLink: 'See the options →',
  contactReplay: 'Watch the 2026 talks',
};

export const home: Record<Lang, HomeDict> = { fr, en };
