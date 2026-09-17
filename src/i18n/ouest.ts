/** Chaînes de l'étape Ouest. Le FR reprend mot pour mot la page d'origine. */
import type { Lang } from './index';

export interface OuestCard {
  title: string;
  desc: string;
}

export interface OuestDict {
  programmeLabel: string;
  programmeTitle: string;
  programmeIntro: string;
  cards: OuestCard[];
  fullProgrammeTitle: string;
  fullProgrammeText: string;
  ecosystemTitle: string;
  ecosystem: string[];
  ecosystemDisclaimer: string;
  venueTitle: string;
  logoOfficeEauAlt: string;
  afternoonTitle: string;
  afternoonText: string;
}

const ECOSYSTEM = ['Eyako', 'Exodata', 'Idom', 'OCD', 'SFR', 'MDSI', 'NXO'];

export const ouest: Record<Lang, OuestDict> = {
  fr: {
    programmeLabel: 'Programme',
    programmeTitle: 'Offreurs Cyber à La Réunion',
    programmeIntro: "Journée dédiée à l'écosystème cyber réunionnais. Gestion de crise le matin, présentations thématiques par les offreurs locaux, puis atelier pratique l'après-midi.",
    cards: [
      { title: 'Gestion de crise', desc: "Méthodologie et retour d'expérience sur la gestion d'incidents cyber." },
      { title: 'Présentations thématiques', desc: 'Les offreurs locaux abordent des problématiques concrètes de cybersécurité.' },
      { title: 'Atelier pratique', desc: 'Exercice de gestion de crise en groupes, animé par le CLUSIR ROI.' },
    ],
    fullProgrammeTitle: 'Programme complet',
    fullProgrammeText: "Le programme détaillé et la liste des intervenants seront publiés à l'approche de l'événement.",
    ecosystemTitle: 'Écosystème cyber réunionnais représenté',
    ecosystem: ECOSYSTEM,
    ecosystemDisclaimer: "Le CLUSIR ROI ne recommande aucun produit ni prestataire. Cette étape présente l'écosystème cyber réunionnais dans sa diversité.",
    venueTitle: "Lieu d'accueil",
    logoOfficeEauAlt: "Office de l'Eau",
    afternoonTitle: 'Après-midi',
    afternoonText: 'Exercice pratique de gestion de crise en groupes, animé par le CLUSIR ROI avec le soutien du partenaire principal.',
  },
  en: {
    programmeLabel: 'Programme',
    programmeTitle: 'Cybersecurity providers in Reunion Island',
    programmeIntro: "A day dedicated to Reunion Island's cybersecurity ecosystem. Crisis management in the morning, themed talks by local providers, then a hands-on workshop in the afternoon.",
    cards: [
      { title: 'Crisis management', desc: 'Methodology and lessons learned (RETEX) from handling cyber incidents.' },
      { title: 'Themed talks', desc: 'Local providers tackle concrete cybersecurity problems.' },
      { title: 'Hands-on workshop', desc: 'A crisis management exercise in groups, run by CLUSIR ROI.' },
    ],
    fullProgrammeTitle: 'Full programme',
    fullProgrammeText: 'The detailed programme and the list of speakers will be published closer to the event.',
    ecosystemTitle: "Reunion Island's cybersecurity ecosystem represented",
    ecosystem: ECOSYSTEM,
    ecosystemDisclaimer: "CLUSIR ROI endorses no product and no provider. This stage showcases Reunion Island's cybersecurity ecosystem in all its diversity.",
    venueTitle: 'Venue',
    logoOfficeEauAlt: "Office de l'Eau",
    afternoonTitle: 'Afternoon',
    afternoonText: 'A hands-on crisis management exercise in groups, run by CLUSIR ROI with the support of the lead partner.',
  },
};
