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
    cta: { label: string; href: string };
    soon: string;
    openMenu: string;
    closeMenu: string;
    logoAlt: string;
    langSwitcher: string;
    langNames: Record<Lang, string>;
  };
  footer: {
    logoAlt: string;
    dates: string;
    legal: string;
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
  pyramid: { organiser: string; partners: string };
}

const HOME_ANCHORS = {
  about: '/#about',
  replay: '/#replay',
  etapes: '/#etapes',
  ctf: '/#ctf',
  speakers: '/#speakers',
  sponsors: '/#sponsors',
  inscription: '/#inscription',
  contact: '/#contact',
};

export const ui: Record<Lang, UiDict> = {
  fr: {
    layout: {
      defaultDescription:
        "Cyber Tour Réunion 2026 - 6 étapes, 20-29 Octobre 2026. Organisé par le CLUSIR Réunion Océan Indien et par des organisateurs locaux.",
      jsonLdDescription:
        "L'événement cybersécurité de référence à La Réunion, organisé par le CLUSIR Réunion Océan Indien.",
      ogImageAlt: 'Cyber Tour Réunion 2026 - 20-29 Octobre - 6 étapes',
      keywords:
        'cybersécurité, La Réunion, conférence, cybermois, CLUSIR, sécurité informatique, SOC, IA, souveraineté numérique',
      skipToContent: 'Aller au contenu principal',
      countdown: {
        ended: {
          title: 'Édition 2026 terminée',
          subtitle: 'Merci à toutes et tous. Les conférences sont disponibles en rediffusion.',
          cta: 'Voir les replays',
          href: HOME_ANCHORS.replay,
        },
        live: {
          title: "L'événement est en cours",
          subtitle: 'Du 20 au 29 octobre 2026 — rejoignez-nous sur place ou en streaming.',
          cta: 'Voir les étapes',
          href: HOME_ANCHORS.etapes,
        },
      },
    },
    nav: {
      links: [
        { label: 'À propos', href: HOME_ANCHORS.about },
        { label: 'Replay 2025', href: HOME_ANCHORS.replay },
        { label: 'Les Étapes', href: HOME_ANCHORS.etapes },
        { label: 'CTF', href: HOME_ANCHORS.ctf },
        { label: 'Speakers', href: HOME_ANCHORS.speakers },
        { label: 'Sponsors', href: HOME_ANCHORS.sponsors },
        { label: 'Inscriptions', href: HOME_ANCHORS.inscription },
      ],
      cta: { label: 'Contact', href: HOME_ANCHORS.contact },
      soon: 'bientôt',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      logoAlt: 'CLUSIR Réunion Océan Indien',
      langSwitcher: 'Langue du site',
      langNames: { fr: 'Français', en: 'English' },
    },
    footer: {
      logoAlt: 'Cyber Tour Réunion 2026',
      dates: '20 — 29 Octobre 2026 · 6 étapes à La Réunion',
      legal: 'Mentions légales',
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
        "L'inscription est gratuite mais obligatoire, et les places sont limitées. La billetterie regroupe les trois étapes portées par le CLUSIR : choisissez la vôtre, un billet par étape.",
      registrationCta: 'Réserver ma place',
      registrationContactHint: 'Une question sur cette étape ?',
      pageTitle: (name) => `${name} | Cyber Tour Réunion 2026`,
    },
    map: { caption: 'Les six lieux · quatre façades' },
    pyramid: { organiser: 'Organisateur', partners: 'Partenaires' },
  },
  en: {
    layout: {
      defaultDescription:
        'Cyber Tour Réunion 2026 - 6 stages, 20-29 October 2026. Organised by CLUSIR Réunion Océan Indien and local hosts.',
      jsonLdDescription:
        "Reunion Island's leading cybersecurity event, organised by CLUSIR Réunion Océan Indien.",
      ogImageAlt: 'Cyber Tour Réunion 2026 - 20-29 October - 6 stages',
      keywords:
        'cybersecurity, Reunion Island, conference, Cybermois, CLUSIR, information security, SOC, AI, digital sovereignty, Indian Ocean',
      skipToContent: 'Skip to main content',
      countdown: {
        ended: {
          title: '2026 edition is over',
          subtitle: 'Thank you all. The talks are available on replay.',
          cta: 'Watch the replays',
          href: HOME_ANCHORS.replay,
        },
        live: {
          title: 'The event is under way',
          subtitle: '20 to 29 October 2026 — join us on site or via live stream.',
          cta: 'See the stages',
          href: HOME_ANCHORS.etapes,
        },
      },
    },
    nav: {
      links: [
        { label: 'About', href: HOME_ANCHORS.about },
        { label: 'Replay 2025', href: HOME_ANCHORS.replay },
        { label: 'The Stages', href: HOME_ANCHORS.etapes },
        { label: 'CTF', href: HOME_ANCHORS.ctf },
        { label: 'Speakers', href: HOME_ANCHORS.speakers },
        { label: 'Sponsors', href: HOME_ANCHORS.sponsors },
        { label: 'Registration', href: HOME_ANCHORS.inscription },
      ],
      cta: { label: 'Contact', href: HOME_ANCHORS.contact },
      soon: 'soon',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      logoAlt: 'CLUSIR Réunion Océan Indien',
      langSwitcher: 'Site language',
      langNames: { fr: 'Français', en: 'English' },
    },
    footer: {
      logoAlt: 'Cyber Tour Réunion 2026',
      dates: '20 — 29 October 2026 · 6 stages across Reunion Island',
      legal: 'Legal notice',
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
        'Registration is free but required, and seats are limited. The ticketing page covers the three stages run by CLUSIR: pick yours, one ticket per stage.',
      registrationCta: 'Book my seat',
      registrationContactHint: 'A question about this stage?',
      pageTitle: (name) => `${name} | Cyber Tour Réunion 2026`,
    },
    map: { caption: 'Six venues · four coasts' },
    pyramid: { organiser: 'Organiser', partners: 'Partners' },
  },
};
