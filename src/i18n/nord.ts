/** Chaînes de l'étape Nord. Le FR reprend mot pour mot la page d'origine. */
import type { Lang } from './index';

export interface NordCard {
  title: string;
  desc: string;
}

export interface NordDict {
  programmeLabel: string;
  programmeTitle: string;
  programmeSubtitle: string;
  cards: NordCard[];
  afternoonLabel: string;
  afternoonTitle: string;
  afternoonText: string;
  fullProgrammeTitle: string;
  fullProgrammeText: string;
  coOrganisersTitle: string;
  logoUnivAlt: string;
  logoClusirAlt: string;
  stakeholdersTitle: string;
  stakeholders: string[];
}

const STAKEHOLDERS = [
  'Région Réunion',
  'Département',
  'Préfecture',
  'Rectorat',
  'ANSSI',
  'Viginum',
  'DINUM',
  'SGDSN',
  'Renater',
  'OFAC',
  'Cyber Reunion',
];

export const nord: Record<Lang, NordDict> = {
  fr: {
    programmeLabel: 'Programme',
    programmeTitle: 'Matinée institutionnelle',
    programmeSubtitle: 'Mardi 20 Octobre — 8h-12h — Campus Moufia, Saint-Denis',
    cards: [
      { title: 'Ouverture officielle', desc: 'Discours de bienvenue des représentants institutionnels de La Réunion.' },
      { title: 'Interventions institutionnelles', desc: "Services de l'État, agences nationales et acteurs de la cybersécurité dans les Outre-mer." },
      { title: 'Présentation du CyberTour', desc: 'Présentation du parcours CyberTour 2026 et de ses six étapes, par le CLUSIR ROI.' },
    ],
    afternoonLabel: 'Après-midi',
    afternoonTitle: 'Ciné-débat',
    afternoonText: "Projection du film « Don't Go to the Police » (Orange Cyberdefense), suivie d'un échange avec la salle sur la réponse à une cyberattaque.",
    fullProgrammeTitle: 'Programme complet',
    fullProgrammeText: "Le programme détaillé et la liste des intervenants seront publiés à l'approche de l'événement.",
    coOrganisersTitle: 'Co-organisateurs',
    logoUnivAlt: 'Université de La Réunion',
    logoClusirAlt: 'CLUSIR Réunion Océan Indien',
    stakeholdersTitle: 'Acteurs institutionnels attendus',
    stakeholders: STAKEHOLDERS,
  },
  en: {
    programmeLabel: 'Programme',
    programmeTitle: 'Institutional morning',
    programmeSubtitle: 'Tuesday 20 October — 8am–12pm — Moufia Campus, Saint-Denis',
    cards: [
      { title: 'Official opening', desc: 'Welcome addresses by the institutional representatives of Reunion Island.' },
      { title: 'Institutional addresses', desc: 'French state services, national agencies and cybersecurity stakeholders across the French overseas territories.' },
      { title: 'Introducing the CyberTour', desc: 'An introduction to the CyberTour 2026 route and its six stages, by CLUSIR ROI.' },
    ],
    afternoonLabel: 'Afternoon',
    afternoonTitle: 'Film screening & debate',
    afternoonText: 'A screening of “Don’t Go to the Police” (Orange Cyberdefense), followed by an open discussion with the audience on responding to a cyberattack.',
    fullProgrammeTitle: 'Full programme',
    fullProgrammeText: 'The detailed programme and the list of speakers will be published closer to the event.',
    coOrganisersTitle: 'Co-organisers',
    logoUnivAlt: 'Université de La Réunion',
    logoClusirAlt: 'CLUSIR Réunion Océan Indien',
    stakeholdersTitle: 'Expected institutional stakeholders',
    stakeholders: STAKEHOLDERS,
  },
};
