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
    countdown: {
      ended: { title: string; subtitle: string; cta: string; href: string };
      live: { title: string; subtitle: string; cta: string; href: string };
    };
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
    langSwitcher: string;
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
  inscription: '/#inscription',
};

/** Sections de la page « À propos » (src/views/About.astro). */
const ABOUT_ANCHORS = {
  about: '/a-propos#about',
  edition2025: '/a-propos#edition-2025',
  contact: '/a-propos#contact',
};

export const ui: Record<Lang, UiDict> = {
  fr: {
    layout: {
      defaultDescription:
        "Cyber Tour Réunion 2026 - 7 étapes, 20-30 Octobre 2026. Organisé par le CLUSIR Réunion Océan Indien et par des organisateurs locaux.",
      jsonLdDescription:
        "L'événement cybersécurité de référence à La Réunion, organisé par le CLUSIR Réunion Océan Indien.",
      ogImageAlt: 'Cyber Tour Réunion 2026 - 20-30 Octobre - 7 étapes',
      keywords:
        'cybersécurité, La Réunion, conférence, cybermois, CLUSIR, sécurité informatique, SOC, IA, souveraineté numérique',
      skipToContent: 'Aller au contenu principal',
      countdown: {
        ended: {
          title: 'Édition 2026 terminée',
          subtitle: 'Merci à toutes et tous. Les conférences sont disponibles en rediffusion.',
          cta: 'Voir les replays',
          href: ABOUT_ANCHORS.edition2025,
        },
        live: {
          title: "L'événement est en cours",
          subtitle: 'Du 20 au 30 octobre 2026 — rejoignez-nous sur place ou en streaming.',
          cta: 'Voir les étapes',
          href: HOME_ANCHORS.etapes,
        },
      },
    },
    nav: {
      links: [
        { label: 'CTF', href: HOME_ANCHORS.ctf },
      ],
      aboutMenu: {
        label: 'À propos',
        items: [
          { label: 'Le Cyber Tour', href: ABOUT_ANCHORS.about },
          { label: 'Édition 2025', href: ABOUT_ANCHORS.edition2025 },
          { label: 'Contact', href: ABOUT_ANCHORS.contact },
        ],
      },
      cta: { label: "S'inscrire", href: HOME_ANCHORS.inscription },
      stagesMenu: { label: 'Les étapes', all: 'Voir les 7 étapes', allHref: HOME_ANCHORS.etapes, soon: 'programme à venir' },
      soon: 'bientôt',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      logoAlt: 'CLUSIR Réunion Océan Indien',
      logoCyberTourAlt: 'Cyber Tour Réunion 2026',
      langSwitcher: 'Langue du site',
      langNames: { fr: 'Français', en: 'English' },
    },
    footer: {
      logoAlt: 'Cyber Tour Réunion 2026',
      dates: '20 — 30 Octobre 2026 · 7 étapes à La Réunion',
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
      registrationTitle: 'Réservez votre place',
      registrationText:
        "L'inscription est gratuite mais obligatoire, et les places sont limitées. La billetterie regroupe les étapes portées par le CLUSIR : choisissez la vôtre, un billet par étape.",
      registrationCta: 'Réserver ma place',
      registrationContactHint: 'Une question sur cette étape ?',
      pageTitle: (name) => `${name} | Cyber Tour Réunion 2026`,
    },
    map: { caption: 'Les six lieux du tour' },
    timeline: {
      label: 'Calendrier des étapes, du 20 au 30 octobre',
      clusirGroup: (n) => `CLUSIR · ${n} étapes`,
      localGroup: (n) => `Organisateurs locaux · ${n} étapes`,
    },
    pyramid: { organiser: 'Organisateurs', gold: 'Partenaires Gold', partners: 'Partenaires' },
  },
  en: {
    layout: {
      defaultDescription:
        'Cyber Tour Réunion 2026 - 7 stages, 20-30 October 2026. Organised by CLUSIR Réunion Océan Indien and local hosts.',
      jsonLdDescription:
        "Reunion Island's leading cybersecurity event, organised by CLUSIR Réunion Océan Indien.",
      ogImageAlt: 'Cyber Tour Réunion 2026 - 20-30 October - 7 stages',
      keywords:
        'cybersecurity, Reunion Island, conference, Cybermois, CLUSIR, information security, SOC, AI, digital sovereignty, Indian Ocean',
      skipToContent: 'Skip to main content',
      countdown: {
        ended: {
          title: '2026 edition is over',
          subtitle: 'Thank you all. The talks are available on replay.',
          cta: 'Watch the replays',
          href: ABOUT_ANCHORS.edition2025,
        },
        live: {
          title: 'The event is under way',
          subtitle: '20 to 30 October 2026 — join us on site or via live stream.',
          cta: 'See the stages',
          href: HOME_ANCHORS.etapes,
        },
      },
    },
    nav: {
      links: [
        { label: 'CTF', href: HOME_ANCHORS.ctf },
      ],
      aboutMenu: {
        label: 'About',
        items: [
          { label: 'Cyber Tour', href: ABOUT_ANCHORS.about },
          { label: '2025 edition', href: ABOUT_ANCHORS.edition2025 },
          { label: 'Contact', href: ABOUT_ANCHORS.contact },
        ],
      },
      cta: { label: 'Register', href: HOME_ANCHORS.inscription },
      stagesMenu: { label: 'Stages', all: 'See all 7 stages', allHref: HOME_ANCHORS.etapes, soon: 'programme coming soon' },
      soon: 'soon',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      logoAlt: 'CLUSIR Réunion Océan Indien',
      logoCyberTourAlt: 'Cyber Tour Réunion 2026',
      langSwitcher: 'Site language',
      langNames: { fr: 'Français', en: 'English' },
    },
    footer: {
      logoAlt: 'Cyber Tour Réunion 2026',
      dates: '20 — 30 October 2026 · 7 stages across Reunion Island',
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
      registrationTitle: 'Book your seat',
      registrationText:
        'Registration is free but required, and seats are limited. The ticketing page covers the stages run by CLUSIR: pick yours, one ticket per stage.',
      registrationCta: 'Book my seat',
      registrationContactHint: 'A question about this stage?',
      pageTitle: (name) => `${name} | Cyber Tour Réunion 2026`,
    },
    map: { caption: 'The six venues of the tour' },
    timeline: {
      label: 'Stage calendar, 20 to 30 October',
      clusirGroup: (n) => `CLUSIR · ${n} stages`,
      localGroup: (n) => `Local hosts · ${n} stages`,
    },
    pyramid: { organiser: 'Organisers', gold: 'Gold Partners', partners: 'Partners' },
  },
};
