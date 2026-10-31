/**
 * Chaînes des layouts et composants transverses (Layout, Navbar, Footer,
 * StageLayout, StageCard, frise, carte, pyramide). Les pages ont chacune leur
 * dictionnaire (`home.ts`, `nord.ts`, …).
 */
import type { Lang } from './index';

export interface UiDict {
  layout: {
    defaultDescription: string;
    jsonLdDescription: string;
    ogImageAlt: string;
    keywords: string;
    skipToContent: string;
  };
  nav: {
    links: { label: string; href: string; soon?: boolean }[];
    aboutMenu: { label: string; items: { label: string; href: string }[] };
    stagesMenu: { label: string; all: string; allHref: string; soon: string };
    cta: { label: string; href: string };
    soon: string;
    openMenu: string;
    closeMenu: string;
    logoAlt: string;
    logoCyberTourAlt: string;
    logoPrefectureAlt: string;
    logoCyberReunionAlt: string;
    langSwitcher: string;
    /** Bouton de thème : « Thème : automatique (sombre) ». `label` porte sa ponctuation. */
    theme: { label: string; names: { auto: string; light: string; dark: string } };
    langNames: Record<Lang, string>;
  };
  footer: {
    logoAlt: string;
    dates: string;
    partnersBand: string;
    partnerDeck: string;
    partnerDeckSubject: string;
    legal: string;
    privacy: string;
    cookies: string;
    backToTop: string;
  };
  stage: {
    seats: string;
    hostedBy: string;
    hostedByLower: string;
    discover: string;
    programmeSoon: string;
    unpublishedLabel: (direction: string, host: string) => string;
    stageLabel: (n: string, direction: string) => string;
    stageBadge: string;
    navBetweenStages: string;
    progress: string;
    prevStage: string;
    nextStage: string;
    prevStageAria: (direction: string) => string;
    nextStageAria: (direction: string) => string;
    breadcrumb: string;
    home: string;
    stages: string;
    practicalInfo: string;
    address: string;
    registrationTitle: string;
    registrationText: string;
    registrationCta: string;
    registrationContactHint: string;
    pageTitle: (name: string) => string;
  };
  map: { caption: string };
  timeline: {
    label: string;
    clusirGroup: (n: number) => string;
    localGroup: (n: number) => string;
  };
  pyramid: { organiser: string; gold: string; partners: string };
}

const HOME_ANCHORS = {
  etapes: '/#etapes',
  ctf: '/#ctf',
};

/** Liens du menu « À propos » : sections de src/views/About.astro, puis le bilan. */
const ABOUT_ANCHORS = {
  about: '/a-propos#about',
  contact: '/a-propos#contact',
  bilan: '/bilan',
};

export const ui: Record<Lang, UiDict> = {
  fr: {
    layout: {
      defaultDescription:
        "Cyber Tour Réunion 2026 - 6 étapes, 20-30 Octobre 2026. Organisé par le CLUSIR Réunion Océan Indien et par des organisateurs locaux.",
      jsonLdDescription:
        "L'événement cybersécurité de référence à La Réunion, organisé par le CLUSIR Réunion Océan Indien.",
      ogImageAlt: 'Cyber Tour Réunion 2026 - 20-30 Octobre - 6 étapes',
      keywords:
        'cybersécurité, La Réunion, conférence, cybermois, CLUSIR, sécurité informatique, SOC, IA, souveraineté numérique',
      skipToContent: 'Aller au contenu principal',
    },
    nav: {
      links: [
        { label: 'CTF', href: HOME_ANCHORS.ctf },
      ],
      aboutMenu: {
        label: 'À propos',
        items: [
          { label: 'Le Cyber Tour', href: ABOUT_ANCHORS.about },
          { label: 'Bilan des éditions', href: ABOUT_ANCHORS.bilan },
          { label: 'Contact', href: ABOUT_ANCHORS.contact },
        ],
      },
      cta: { label: 'Voir le bilan', href: ABOUT_ANCHORS.bilan },
      stagesMenu: { label: 'Les étapes', all: 'Voir les 6 étapes', allHref: HOME_ANCHORS.etapes, soon: 'programme à venir' },
      soon: 'bientôt',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      logoAlt: 'CLUSIR Réunion Océan Indien',
      logoCyberTourAlt: 'Cyber Tour Réunion 2026',
      logoPrefectureAlt: 'Préfet de La Réunion',
      logoCyberReunionAlt: 'Cyber Réunion',
      langSwitcher: 'Langue du site',
      theme: { label: 'Thème :', names: { auto: 'automatique', light: 'clair', dark: 'sombre' } },
      langNames: { fr: 'Français', en: 'English' },
    },
    footer: {
      logoAlt: 'Cyber Tour Réunion 2026',
      dates: '20 — 30 Octobre 2026 · 6 étapes à La Réunion',
      partnersBand: 'Organisateurs et partenaires',
      partnerDeck: 'Demander le dossier partenaire',
      partnerDeckSubject: 'Cyber Tour Réunion 2026 : demande du dossier partenaire',
      legal: 'Mentions légales',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
      backToTop: '↑ Haut de page',
    },
    stage: {
      seats: 'places',
      hostedBy: 'Accueillie par',
      hostedByLower: 'accueillie par',
      discover: "Découvrir l'étape",
      programmeSoon: 'Programme à venir',
      unpublishedLabel: (direction, host) => `Étape ${direction} — ${host} — programme à venir`,
      stageLabel: (n, direction) => `Étape ${n} — ${direction}`,
      stageBadge: 'Étape',
      navBetweenStages: 'Navigation entre étapes',
      progress: 'Progression',
      prevStage: 'Étape précédente',
      nextStage: 'Étape suivante',
      prevStageAria: (direction) => `Étape précédente : ${direction}`,
      nextStageAria: (direction) => `Étape suivante : ${direction}`,
      breadcrumb: "Fil d'Ariane",
      home: 'Accueil',
      stages: 'Les Étapes',
      practicalInfo: 'Infos Pratiques',
      address: 'Adresse',
      registrationTitle: 'Cette étape a eu lieu',
      registrationText:
        "Merci à toutes et tous. Les chiffres de l'édition 2026, les temps forts et les replays sont dans le bilan.",
      registrationCta: 'Voir le bilan',
      registrationContactHint: 'Une question sur cette étape ?',
      pageTitle: (name) => `${name} | Cyber Tour Réunion 2026`,
    },
    map: { caption: 'Les cinq lieux du tour' },
    timeline: {
      label: 'Calendrier des étapes, du 20 au 30 octobre',
      clusirGroup: (n) => `CLUSIR · ${n} étapes`,
      localGroup: (n) => `Organisateurs locaux · ${n} étapes`,
    },
    pyramid: { organiser: 'Organisateur', gold: 'Partenaires Gold', partners: 'Partenaires' },
  },
  en: {
    layout: {
      defaultDescription:
        'Cyber Tour Réunion 2026 - 6 stages, 20-30 October 2026. Organised by CLUSIR Réunion Océan Indien and local hosts.',
      jsonLdDescription:
        "Reunion Island's leading cybersecurity event, organised by CLUSIR Réunion Océan Indien.",
      ogImageAlt: 'Cyber Tour Réunion 2026 - 20-30 October - 6 stages',
      keywords:
        'cybersecurity, Reunion Island, conference, Cybermois, CLUSIR, information security, SOC, AI, digital sovereignty, Indian Ocean',
      skipToContent: 'Skip to main content',
    },
    nav: {
      links: [
        { label: 'CTF', href: HOME_ANCHORS.ctf },
      ],
      aboutMenu: {
        label: 'About',
        items: [
          { label: 'Cyber Tour', href: ABOUT_ANCHORS.about },
          { label: 'Editions review', href: ABOUT_ANCHORS.bilan },
          { label: 'Contact', href: ABOUT_ANCHORS.contact },
        ],
      },
      cta: { label: 'See the review', href: ABOUT_ANCHORS.bilan },
      stagesMenu: { label: 'Stages', all: 'See all 6 stages', allHref: HOME_ANCHORS.etapes, soon: 'programme coming soon' },
      soon: 'soon',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      logoAlt: 'CLUSIR Réunion Océan Indien',
      logoCyberTourAlt: 'Cyber Tour Réunion 2026',
      logoPrefectureAlt: 'Préfet de La Réunion',
      logoCyberReunionAlt: 'Cyber Réunion',
      langSwitcher: 'Site language',
      theme: { label: 'Theme:', names: { auto: 'automatic', light: 'light', dark: 'dark' } },
      langNames: { fr: 'Français', en: 'English' },
    },
    footer: {
      logoAlt: 'Cyber Tour Réunion 2026',
      dates: '20 — 30 October 2026 · 6 stages across Reunion Island',
      partnersBand: 'Organisers and partners',
      partnerDeck: 'Request the partnership deck',
      partnerDeckSubject: 'Cyber Tour Réunion 2026: partnership deck request',
      legal: 'Legal notice',
      privacy: 'Privacy',
      cookies: 'Cookies',
      backToTop: '↑ Back to top',
    },
    stage: {
      seats: 'seats',
      hostedBy: 'Hosted by',
      hostedByLower: 'hosted by',
      discover: 'Discover the stage',
      programmeSoon: 'Programme coming soon',
      unpublishedLabel: (direction, host) => `${direction} stage — ${host} — programme coming soon`,
      stageLabel: (n, direction) => `Stage ${n} — ${direction}`,
      stageBadge: 'Stage',
      navBetweenStages: 'Stage navigation',
      progress: 'Progress',
      prevStage: 'Previous stage',
      nextStage: 'Next stage',
      prevStageAria: (direction) => `Previous stage: ${direction}`,
      nextStageAria: (direction) => `Next stage: ${direction}`,
      breadcrumb: 'Breadcrumb',
      home: 'Home',
      stages: 'The Stages',
      practicalInfo: 'Practical information',
      address: 'Address',
      registrationTitle: 'This stage has taken place',
      registrationText:
        'Thank you all. The 2026 figures, highlights and replays are in the review.',
      registrationCta: 'See the review',
      registrationContactHint: 'A question about this stage?',
      pageTitle: (name) => `${name} | Cyber Tour Réunion 2026`,
    },
    map: { caption: 'The five venues of the tour' },
    timeline: {
      label: 'Stage calendar, 20 to 30 October',
      clusirGroup: (n) => `CLUSIR · ${n} stages`,
      localGroup: (n) => `Local hosts · ${n} stages`,
    },
    pyramid: { organiser: 'Organiser', gold: 'Gold Partners', partners: 'Partners' },
  },
};
