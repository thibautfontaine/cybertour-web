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
  dataText: string;
  privacyLinkText: string;
  cookiesLinkText: string;

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

    dataTitle: 'Données personnelles et cookies',
    dataText: 'Le site ne dépose aucun cookie et ne comporte aucun formulaire. Les traitements de données liés au site et aux inscriptions sont décrits dans deux pages dédiées :',
    privacyLinkText: 'Politique de confidentialité',
    cookiesLinkText: 'Politique de cookies',

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
    dataText: 'The website sets no cookies and has no forms. Data processing related to the website and registrations is described on two dedicated pages:',
    privacyLinkText: 'Privacy policy',
    cookiesLinkText: 'Cookie policy',

    externalLinksTitle: 'External links',
    externalLinksText: 'This site may contain links to third-party sites. CLUSIR Réunion Océan Indien cannot be held responsible for the content of those external sites, nor for their personal data protection policies.',

    contactTitle: 'Contact',
    contactText: 'This English translation is provided for convenience only; the French version of this notice is the legally binding one. For any question about the site or the event:',

    email: EMAIL,
    sourceUrl: SOURCE_URL,
    linkedinUrl: LINKEDIN_URL,
  },
};
