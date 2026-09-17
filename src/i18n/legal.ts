/**
 * Chaînes des mentions légales. Le FR reprend mot pour mot la page d'origine,
 * y compris les accents manquants du texte historique (« Editeur », « Siege »,
 * « Hebergement », « Propriete »…), pour un rendu FR strictement identique.
 */
import type { Lang } from './index';

export interface LegalDict {
  metaTitle: string;
  metaDescription: string;
  pageTitle: string;

  publisherTitle: string;
  publisherName: string;
  publisherDescription: string;
  publisherLegalForm: string;
  publisherIds: string;
  publisherRna: string;
  publisherAddress: string;
  publisherContactLabel: string;

  directorTitle: string;
  directorText: string;

  hostingTitle: string;
  hostingProvider: string;
  hostingAddress: string;
  hostingSourceLabel: string;
  hostingSourceLinkText: string;

  designTitle: string;
  designName: string;
  designRole: string;

  ipTitle: string;
  ipText: string;

  dataTitle: string;
  dataIntro: string;
  dataSiteLabel: string;
  dataNoCookiesStrong: string;
  dataNoCookiesRest: string;
  dataNoFormStrong: string;
  dataNoFormRest: string;
  dataAnalyticsBefore: string;
  dataAnalyticsStrong: string;
  dataAnalyticsAfter: string;
  dataTicketingBefore: string;
  dataTicketingStrong: string;
  dataTicketingAfter: string;

  externalLinksTitle: string;
  externalLinksText: string;

  contactTitle: string;
  contactText: string;

  email: string;
  sourceUrl: string;
  linkedinUrl: string;
}

const EMAIL = 'evenement@clusir-roi.org';
const SOURCE_URL = 'https://github.com/thibautfontaine/cybertour-web';
const LINKEDIN_URL = 'https://www.linkedin.com/in/thibaut-fontaine';

export const legal: Record<Lang, LegalDict> = {
  fr: {
    metaTitle: 'Mentions Legales | Cyber Tour Réunion 2026',
    metaDescription: 'Mentions légales du site Cyber Tour Réunion 2026.',
    pageTitle: 'Mentions légales',

    publisherTitle: 'Editeur du site',
    publisherName: 'CLUSIR ROI',
    publisherDescription: "— Club de la Sécurité de l'Information en Reseau — Reunion et Océan Indien",
    publisherLegalForm: 'Association loi 1901',
    publisherIds: 'SIREN : 539 437 426 | SIRET : 539 437 426 00023',
    publisherRna: 'RNA : W9R1003737',
    publisherAddress: 'Siege social : Immeuble Altea, 41 rue de la Pepiniere, 97438 Sainte-Marie, La Réunion',
    publisherContactLabel: "Comite d'organisation :",

    directorTitle: 'Directeur de la publication',
    directorText: 'Le directeur de la publication est le President du CLUSIR Réunion Océan Indien.',

    hostingTitle: 'Hebergement',
    hostingProvider: 'GitHub Pages',
    hostingAddress: '88 Colin P. Kelly Jr St, San Francisco, CA 94107, United States',
    hostingSourceLabel: 'Code source :',
    hostingSourceLinkText: 'github.com/thibautfontaine/cybertour-web',

    designTitle: 'Conception et developpement',
    designName: 'Thibaut Fontaine',
    designRole: 'Membre du bureau du CLUSIR Réunion Océan Indien.',

    ipTitle: 'Propriete intellectuelle',
    ipText: "L'ensemble des contenus de ce site (textes, images, logos, elements graphiques, videos) est protege par le Code de la propriete intellectuelle. Toute reproduction ou représentation, totale ou partielle, est interdite sans autorisation ecrite du CLUSIR Réunion Océan Indien.",

    dataTitle: 'Donnees personnelles et cookies',
    dataSiteLabel: 'Ce site',
    dataIntro: 'Conformement au Reglement General sur la Protection des Donnees (RGPD) et a la loi Informatique et Libertes :',
    dataNoCookiesStrong: "n'utilise aucun cookie",
    dataNoCookiesRest: ' ni traceur propre ; seul le module de billetterie Weezevent, chargé dans la page Inscription, peut en déposer.',
    dataNoFormStrong: 'ne comporte aucun formulaire',
    dataNoFormRest: ' : les liens de contact ouvrent votre logiciel de messagerie.',
    dataAnalyticsBefore: "La mesure d'audience est assurée par ",
    dataAnalyticsStrong: 'Plausible Analytics',
    dataAnalyticsAfter: ', hébergé sur une instance on premise.',
    dataTicketingBefore: "L'inscription à l'événement est assurée par ",
    dataTicketingStrong: 'Weezevent',
    dataTicketingAfter:
      ' (module intégré dans la page Inscription et site my.weezevent.com) : les données saisies lors de l\'inscription sont traitées par Weezevent selon ses propres conditions et sa politique de confidentialité, pour le compte du CLUSIR Réunion Océan Indien.',

    externalLinksTitle: 'Liens externes',
    externalLinksText: 'Ce site peut contenir des liens vers des sites tiers. Le CLUSIR Réunion Océan Indien ne saurait etre tenu responsable du contenu de ces sites externes ni de leur politique de protection des donnees personnelles.',

    contactTitle: 'Contact',
    contactText: "Pour toute question relative au site ou a l'événement :",

    email: EMAIL,
    sourceUrl: SOURCE_URL,
    linkedinUrl: LINKEDIN_URL,
  },
  en: {
    metaTitle: 'Legal notice | Cyber Tour Réunion 2026',
    metaDescription: 'Legal notice for the Cyber Tour Réunion 2026 website.',
    pageTitle: 'Legal notice',

    publisherTitle: 'Site publisher',
    publisherName: 'CLUSIR ROI',
    publisherDescription: '— Club de la Sécurité de l\'Information en Reseau — Reunion et Océan Indien (Information Security Club — Reunion Island and Indian Ocean)',
    publisherLegalForm: 'Non-profit association (French « loi 1901 »)',
    publisherIds: 'SIREN: 539 437 426 | SIRET: 539 437 426 00023',
    publisherRna: 'RNA: W9R1003737',
    publisherAddress: 'Registered office: Immeuble Altea, 41 rue de la Pepiniere, 97438 Sainte-Marie, Reunion Island',
    publisherContactLabel: 'Organising committee:',

    directorTitle: 'Publishing director',
    directorText: 'The publishing director is the President of CLUSIR Réunion Océan Indien.',

    hostingTitle: 'Hosting',
    hostingProvider: 'GitHub Pages',
    hostingAddress: '88 Colin P. Kelly Jr St, San Francisco, CA 94107, United States',
    hostingSourceLabel: 'Source code:',
    hostingSourceLinkText: 'github.com/thibautfontaine/cybertour-web',

    designTitle: 'Design and development',
    designName: 'Thibaut Fontaine',
    designRole: 'Board member of CLUSIR Réunion Océan Indien.',

    ipTitle: 'Intellectual property',
    ipText: 'All content on this site (text, images, logos, graphic elements, videos) is protected by French intellectual property law. Any reproduction or representation, in whole or in part, is prohibited without the written authorisation of CLUSIR Réunion Océan Indien.',

    dataTitle: 'Personal data & cookies',
    dataSiteLabel: 'This site',
    dataIntro: 'In accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act:',
    dataNoCookiesStrong: 'uses no cookies',
    dataNoCookiesRest: ' or trackers of its own; only the Weezevent ticketing module, loaded in the Registration section, may set some.',
    dataNoFormStrong: 'has no forms',
    dataNoFormRest: ': contact links open your email client.',
    dataAnalyticsBefore: 'Audience measurement is provided by ',
    dataAnalyticsStrong: 'Plausible Analytics',
    dataAnalyticsAfter: ', hosted on an on-premise instance.',
    dataTicketingBefore: 'Event registration is handled by ',
    dataTicketingStrong: 'Weezevent',
    dataTicketingAfter:
      ' (module embedded in the Registration section and my.weezevent.com website): the data you enter when registering is processed by Weezevent under its own terms and privacy policy, on behalf of CLUSIR Réunion Océan Indien.',

    externalLinksTitle: 'External links',
    externalLinksText: 'This site may contain links to third-party sites. CLUSIR Réunion Océan Indien cannot be held responsible for the content of those external sites, nor for their personal data protection policies.',

    contactTitle: 'Contact',
    contactText: 'This English translation is provided for convenience only; the French version of this notice is the legally binding one. For any question about the site or the event:',

    email: EMAIL,
    sourceUrl: SOURCE_URL,
    linkedinUrl: LINKEDIN_URL,
  },
};
