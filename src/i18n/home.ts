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
  heroCtaRegister: string;
  heroCtaRoute: string;
  heroPillFree: string;
  heroPillSeats: string;
  heroPillHybrid: string;
  cdDays: string;
  cdHours: string;
  cdMins: string;
  cdSecs: string;
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

  // ── Replay 2025 ─────────────────────────────────────────────────────
  replayLabel: string;
  replayTitleHtml: string;
  replayIntro: string;
  replayStats: Stat[];
  replayIframeTitle: string;
  /** Texte du bouton de la vignette : l'iframe YouTube ne se charge qu'au clic. */
  replayPlayLabel: string;
  /** Mention sous la vignette : ce que le clic déclenche côté YouTube. */
  replayPrivacyNote: string;

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
  regLabel: string;
  regTitleHtml: string;
  regIntro: string;
  regTermFile: string;
  regTermCmd: string;
  regEventLabel: string;
  regEventValue: string;
  regEventSuffix: string;
  regTicketLabel: string;
  regTicketDate: string;
  regHint: string;
  /** Texte alternatif du visuel cliquable de la billetterie. */
  regImageAlt: string;
  /** Nom accessible du lien porté par le visuel (nouvel onglet). */
  regImageLinkLabel: string;
  regOpenCta: string;
  regCalendarCta: string;
  regCalendarStatus: string;
  /** Chaînes lues par le script `.ics` via les attributs data du bouton. */
  icsSummary: string;
  icsDescription: string;
  icsLocation: string;
  icsDone: string;

  // ── Contact ─────────────────────────────────────────────────────────
  contactLabel: string;
  contactTitleHtml: string;
  contactIntro: string;
  contactEmailLabel: string;
  contactPlacesLabel: string;
  contactPlacesValue: string;
  contactPlacesLink: string;
  contactStreaming: string;
}

const fr: HomeDict = {
  metaTitle: 'Cyber Tour Réunion 2026 | 20-30 Octobre - 7 Étapes',
  metaDescription:
    'Cyber Tour Réunion 2026 - 7 étapes, 20-30 Octobre 2026. Organisé par le CLUSIR Réunion Océan Indien et par des organisateurs locaux.',

  heroBadge: 'Cybermois 2026 — La Réunion',
  heroDates: '20 — 30 OCTOBRE 2026',
  heroPlaces: "7 ÉTAPES · TOUTE L'ÎLE",
  heroTagline:
    "Sept étapes gratuites autour de l'île pour faire le point sur la cybersécurité : conférences, ateliers pratiques et CTF, pour les décideurs, les professionnels de l'IT et les étudiants. Organisé par le CLUSIR Réunion Océan Indien.",
  heroCtaRegister: "S'inscrire",
  heroCtaRoute: 'Voir les 7 étapes',
  heroPillFree: 'Entrée gratuite',
  heroPillSeats: 'Places limitées',
  heroPillHybrid: 'Présentiel + streaming',
  cdDays: 'Jours',
  cdHours: 'Heures',
  cdMins: 'Min',
  cdSecs: 'Sec',
  scroll: 'Scroll',

  aboutLabel: '01 // À propos',
  aboutPageMetaTitle: 'À propos | Cyber Tour Réunion 2026',
  aboutPageMetaDescription:
    "Le Cyber Tour Réunion, son organisation par le CLUSIR Réunion Océan Indien, le bilan et le replay de l'édition 2025, et comment nous contacter.",
  aboutTitleHtml:
    'L\'événement cyber<br/><span class="text-gold">de référence</span> à La Réunion',
  aboutP1Html:
    '<strong class="text-white font-semibold">Sept étapes. Six lieux. Toute l\'île.</strong> Le <strong class="text-white font-semibold">Cyber Tour Réunion</strong> est le rendez-vous annuel de la cybersécurité à La Réunion. Organisé dans le cadre du <strong class="text-gold font-semibold">Cybermois</strong> par le <strong class="text-white font-semibold">CLUSIR Réunion Océan Indien</strong>, il réunit décideurs, professionnels et étudiants autour d\'un objectif commun : renforcer la résilience numérique du territoire.',
  aboutP2Html:
    'En 2025 : <strong class="text-white font-semibold">220 participants</strong>, <strong class="text-white font-semibold">600 vues</strong> en replay, <strong class="text-white font-semibold">2 articles</strong> dans Le Quotidien. En 2026, le format s\'élargit : 7 étapes sur les façades de l\'île, dont 4 portées par le CLUSIR et 3 par des organisateurs locaux.',
  aboutStats: [
    { value: '7', label: 'Étapes' },
    { value: '6', label: 'Lieux' },
    { value: '600+', label: 'Vues YouTube' },
  ],
  aboutImgAlt: 'Cyber Tour Réunion',

  replayLabel: '02 // Édition 2025',
  replayTitleHtml: 'Édition <span class="text-gold">2025</span>',
  replayIntro: "Revivez les conférences de l'édition précédente en intégralité.",
  replayStats: [
    { value: '220', label: 'Participants' },
    { value: '150', label: 'En présentiel' },
    { value: '600+', label: 'Vues replay' },
  ],
  replayIframeTitle: 'Cyber Tour Réunion 2025 - Replay',
  replayPlayLabel: 'Lire le replay',
  replayPrivacyNote:
    'La vidéo est hébergée sur YouTube. Elle ne se charge qu’au clic : Google reçoit alors votre adresse IP et peut enregistrer des données sur votre appareil.',

  routeLabel: '01 // Le Parcours',
  routeTitleHtml:
    '7 étapes, <span class="text-gold">un seul tour</span>',
  routeIntro:
    "Du 20 au 30 octobre, la cybersécurité fait le tour de l'île — portée par le CLUSIR sur quatre étapes, par des organisateurs locaux sur trois autres. Même label, même exigence, même agenda. Le Cyber Tour est organisé par le CLUSIR Réunion Océan Indien, en partenariat avec l'Université de La Réunion ; l'édition 2025 a réuni 220 participants.",
  routeDates: '20 — 30 OCTOBRE 2026',
  ctfLabel: '04 // CTF',
  ctfTitleHtml:
    'Championnat Réunionnais<br/>de <span class="text-gold">Cybersécurité</span>',
  ctfIntroHtml:
    'Un CTF tout au long du mois d\'octobre pour le <strong class="text-gold font-semibold">Cybermois 2026</strong>, en partenariat avec <a href="https://sec-dojo.com/fr" target="_blank" rel="noopener noreferrer" class="text-gold font-semibold hover:text-gold/80 transition-colors">Sec-Dojo</a> et <strong class="text-white font-semibold">Cyber Reunion</strong>.',
  ctfBadgeMonth: 'Octobre 2026',
  ctfBadgeAllMonth: 'Tout le mois',
  ctfBodyHtml:
    'Testez vos compétences en cybersécurité à travers des challenges techniques sur la plateforme <a href="https://sec-dojo.com/fr" target="_blank" rel="noopener noreferrer" class="text-gold hover:text-gold/80 transition-colors font-semibold">SecDojo</a> : Linux, Windows, Network, Web et plus encore. Ouvert à tous les niveaux, du débutant au confirmé.',
  ctfPartnersLabel: 'En partenariat avec',


  partnersLabel: '03 // Partenaires',
  partnersTitleHtml: 'L\'écosystème <span class="text-gold">CyberTour</span>',
  partnersIntro:
    "Qui porte l'événement, et à quelle place.",
  partnersCta: 'Devenir partenaire',
  partnersPageMetaTitle: 'Devenir partenaire | Cyber Tour Réunion 2026',
  partnersPageMetaDescription:
    'Formules de partenariat Bronze, Silver et Gold du Cyber Tour Réunion 2026 : visibilité, réseau, expertise et talents.',

  sponsorsLabel: 'Devenir partenaire',
  sponsorsTitleHtml:
    'Devenez acteur du <span class="text-gold">CyberTour Réunion</span>',
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

  regLabel: '02 // Inscription',
  regTitleHtml: 'Réservez votre <span class="text-gold">place</span>',
  regIntro:
    "L'événement est gratuit mais les places sont limitées sur chaque étape.",
  regTermFile: 'inscription.status',
  regTermCmd: './inscription --status',
  regEventLabel: 'Événement :',
  regEventValue: '20 — 30 octobre 2026',
  regEventSuffix: '· 7 étapes · La Réunion',
  regTicketLabel: 'Billetterie :',
  regTicketDate: 'ouverte — gratuite, inscription obligatoire',
  regHint:
    'Cliquez sur le visuel ci-dessus pour ouvrir la billetterie et choisir votre étape, un billet par étape. La confirmation arrive par email. Pensez aussi à bloquer les dates dans votre agenda.',
  regImageAlt: 'Cyber Tour Réunion 2026, du 20 au 30 octobre : 7 étapes, 6 lieux, toute l\'île',
  regImageLinkLabel: 'S\'inscrire sur la billetterie Weezevent du Cyber Tour (nouvel onglet)',
  regOpenCta: 'Ouvrir la billetterie',
  regCalendarCta: 'Ajouter à mon agenda',
  regCalendarStatus:
    '// Fichier .ics — compatible Apple Calendar, Google Agenda, Outlook.',
  icsSummary: 'Cyber Tour Réunion 2026',
  icsDescription:
    "L'événement cybersécurité de référence à La Réunion, organisé par le CLUSIR Réunion Océan Indien. Programme et inscriptions : https://cybertour.re/",
  icsLocation: 'IUT / ESIROI, Saint-Pierre, La Réunion',
  icsDone:
    "// Fichier cyber-tour-reunion-2026.ics téléchargé — ouvrez-le pour l'ajouter.",

  contactLabel: '03 // Contact',
  contactTitleHtml: 'Rejoignez <span class="text-gold">l\'aventure</span>',
  contactIntro:
    'Que vous soyez participant, speaker ou sponsor, contactez-nous pour faire partie du Cyber Tour Réunion 2026.',
  contactEmailLabel: 'Email',
  contactPlacesLabel: 'Lieux',
  contactPlacesValue: '7 étapes · La Réunion',
  contactPlacesLink: 'Voir le parcours →',
  contactStreaming: 'Également accessible en streaming YouTube',
};

const en: HomeDict = {
  metaTitle: 'Cyber Tour Réunion 2026 | 20-30 October - 7 Stages',
  metaDescription:
    'Cyber Tour Réunion 2026 - 7 stages, 20-30 October 2026. Organised by CLUSIR Réunion Océan Indien and local hosts.',

  heroBadge: 'Cybermois (European Cybersecurity Month) 2026 — Reunion Island',
  heroDates: '20 — 30 OCTOBER 2026',
  heroPlaces: '7 STAGES · ACROSS THE ISLAND',
  heroTagline:
    'Seven free stages around the island to take stock of cybersecurity: talks, hands-on workshops and a CTF, for decision-makers, IT professionals and students. Organised by CLUSIR Réunion Océan Indien.',
  heroCtaRegister: 'Register',
  heroCtaRoute: 'See the 7 stages',
  heroPillFree: 'Free entry',
  heroPillSeats: 'Limited seats',
  heroPillHybrid: 'On site + streaming',
  cdDays: 'Days',
  cdHours: 'Hours',
  cdMins: 'Min',
  cdSecs: 'Sec',
  scroll: 'Scroll',

  aboutLabel: '01 // About',
  aboutPageMetaTitle: 'About | Cyber Tour Réunion 2026',
  aboutPageMetaDescription:
    'Cyber Tour Réunion, its organisation by CLUSIR Réunion Océan Indien, the 2025 edition in figures and on replay, and how to reach us.',
  aboutTitleHtml:
    'The <span class="text-gold">leading</span> cybersecurity<br/>event in Reunion Island',
  aboutP1Html:
    '<strong class="text-white font-semibold">Seven stages. Six venues. Across the island.</strong> The <strong class="text-white font-semibold">Cyber Tour Réunion</strong> is the annual cybersecurity gathering of Reunion Island. Held as part of <strong class="text-gold font-semibold">Cybermois</strong> (European Cybersecurity Month) by <strong class="text-white font-semibold">CLUSIR Réunion Océan Indien</strong>, it brings together decision-makers, professionals and students around a shared goal: strengthening the digital resilience of the territory.',
  aboutP2Html:
    'In 2025: <strong class="text-white font-semibold">220 attendees</strong>, <strong class="text-white font-semibold">600 replay views</strong>, <strong class="text-white font-semibold">2 articles</strong> in Le Quotidien. In 2026 the format grows: 7 stages across the island, 4 run by CLUSIR and 3 by local hosts.',
  aboutStats: [
    { value: '7', label: 'Stages' },
    { value: '6', label: 'Venues' },
    { value: '600+', label: 'YouTube views' },
  ],
  aboutImgAlt: 'Cyber Tour Réunion',

  replayLabel: '02 // 2025 edition',
  replayTitleHtml: 'The <span class="text-gold">2025</span> edition',
  replayIntro: 'Watch every talk from last year’s edition in full.',
  replayStats: [
    { value: '220', label: 'Attendees' },
    { value: '150', label: 'On site' },
    { value: '600+', label: 'Replay views' },
  ],
  replayIframeTitle: 'Cyber Tour Réunion 2025 - Replay',
  replayPlayLabel: 'Play the replay',
  replayPrivacyNote:
    'The video is hosted on YouTube. It only loads when you click: Google then receives your IP address and may store data on your device.',

  routeLabel: '01 // The Route',
  routeTitleHtml:
    '7 stages, <span class="text-gold">one single tour</span>',
  routeIntro:
    'From 20 to 30 October, cybersecurity tours the island — four stages run by CLUSIR, three more by local hosts. Same label, same standards, same schedule. Cyber Tour is organised by CLUSIR Réunion Océan Indien, in partnership with the University of La Réunion; the 2025 edition brought together 220 participants.',
  routeDates: '20 — 30 OCTOBER 2026',
  ctfLabel: '04 // CTF',
  ctfTitleHtml:
    'Reunion Island<br/><span class="text-gold">Cybersecurity</span> Championship',
  ctfIntroHtml:
    'A month-long CTF running through October for <strong class="text-gold font-semibold">Cybermois 2026</strong>, in partnership with <a href="https://sec-dojo.com/fr" target="_blank" rel="noopener noreferrer" class="text-gold font-semibold hover:text-gold/80 transition-colors">Sec-Dojo</a> and <strong class="text-white font-semibold">Cyber Reunion</strong>.',
  ctfBadgeMonth: 'October 2026',
  ctfBadgeAllMonth: 'All month long',
  ctfBodyHtml:
    'Put your cybersecurity skills to the test with technical challenges on the <a href="https://sec-dojo.com/fr" target="_blank" rel="noopener noreferrer" class="text-gold hover:text-gold/80 transition-colors font-semibold">SecDojo</a> platform: Linux, Windows, Network, Web and more. Open to every level, from beginner to advanced.',
  ctfPartnersLabel: 'In partnership with',


  partnersLabel: '03 // Partners',
  partnersTitleHtml: 'The <span class="text-gold">CyberTour</span> ecosystem',
  partnersIntro:
    'Who runs the event, and in what role.',
  partnersCta: 'Become a partner',
  partnersPageMetaTitle: 'Become a partner | Cyber Tour Réunion 2026',
  partnersPageMetaDescription:
    'Bronze, Silver and Gold partnership packages for Cyber Tour Réunion 2026: visibility, network, expertise and talent.',

  sponsorsLabel: 'Become a partner',
  sponsorsTitleHtml:
    'Take part in the <span class="text-gold">CyberTour Réunion</span>',
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

  regLabel: '02 // Registration',
  regTitleHtml: 'Book your <span class="text-gold">seat</span>',
  regIntro: 'The event is free, but seats are limited at every stage. Talks are mainly given in French; international attendees are welcome.',
  regTermFile: 'registration.status',
  regTermCmd: './registration --status',
  regEventLabel: 'Event:',
  regEventValue: '20 — 30 October 2026',
  regEventSuffix: '· 7 stages · Reunion Island',
  regTicketLabel: 'Ticketing:',
  regTicketDate: 'open — free, registration required',
  regHint:
    'Click the image above to open the ticketing page and pick your stage, one ticket per stage. Confirmation arrives by email. Remember to block the dates in your calendar too.',
  regImageAlt: 'Cyber Tour Réunion 2026, 20 to 30 October: 7 stages, 6 venues, all over the island',
  regImageLinkLabel: 'Register on the Cyber Tour Weezevent ticketing page (new tab)',
  regOpenCta: 'Open ticketing',
  regCalendarCta: 'Add to my calendar',
  regCalendarStatus:
    '// .ics file — works with Apple Calendar, Google Calendar, Outlook.',
  icsSummary: 'Cyber Tour Réunion 2026',
  icsDescription:
    'The leading cybersecurity event in Reunion Island, organised by CLUSIR Réunion Océan Indien. Programme and registration: https://cybertour.re/en/',
  icsLocation: 'IUT / ESIROI, Saint-Pierre, Reunion Island',
  icsDone:
    '// File cyber-tour-reunion-2026.ics downloaded — open it to add the event.',

  contactLabel: '03 // Contact',
  contactTitleHtml: 'Join <span class="text-gold">the adventure</span>',
  contactIntro:
    'Whether you come as an attendee, a speaker or a sponsor, get in touch to be part of the Cyber Tour Réunion 2026.',
  contactEmailLabel: 'Email',
  contactPlacesLabel: 'Venues',
  contactPlacesValue: '7 stages · Reunion Island',
  contactPlacesLink: 'See the route →',
  contactStreaming: 'Also available as a YouTube stream',
};

export const home: Record<Lang, HomeDict> = { fr, en };
