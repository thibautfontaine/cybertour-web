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
  venueTitle: string;
  logoOfficeEauAlt: string;
  afternoonTitle: string;
  afternoonText: string;
}

export const ouest: Record<Lang, OuestDict> = {
  fr: {
    programmeLabel: 'Programme',
    programmeTitle: 'Gestion de crise : théorie et pratique',
    programmeIntro: "Journée entière consacrée à la gestion de crise cyber. Méthode et retours d'expérience le matin, exercice pratique en groupes l'après-midi.",
    cards: [
      { title: 'Méthode', desc: "Comment s'organise une cellule de crise, qui décide quoi, et dans quel ordre." },
      { title: "Retours d'expérience", desc: "Ce qu'ont appris ceux qui ont géré un incident cyber réel." },
      { title: 'Exercice pratique', desc: 'Simulation de crise en groupes, animée par le CLUSIR ROI.' },
    ],
    fullProgrammeTitle: 'Programme complet',
    fullProgrammeText: "Le programme détaillé et la liste des intervenants seront publiés à l'approche de l'événement.",
    venueTitle: "Lieu d'accueil",
    logoOfficeEauAlt: "Office de l'Eau",
    afternoonTitle: 'Après-midi',
    afternoonText: 'Exercice pratique de gestion de crise en groupes, animé par le CLUSIR ROI avec le soutien du partenaire principal.',
  },
  en: {
    programmeLabel: 'Programme',
    programmeTitle: 'Crisis management: theory and practice',
    programmeIntro: 'A full day devoted to cyber crisis management. Method and lessons learned in the morning, a hands-on group exercise in the afternoon.',
    cards: [
      { title: 'Method', desc: 'How a crisis unit is organised, who decides what, and in which order.' },
      { title: 'Lessons learned', desc: 'What those who handled a real cyber incident took away from it.' },
      { title: 'Hands-on exercise', desc: 'A crisis simulation in groups, run by CLUSIR ROI.' },
    ],
    fullProgrammeTitle: 'Full programme',
    fullProgrammeText: 'The detailed programme and the list of speakers will be published closer to the event.',
    venueTitle: 'Venue',
    logoOfficeEauAlt: "Office de l'Eau",
    afternoonTitle: 'Afternoon',
    afternoonText: 'A hands-on crisis management exercise in groups, run by CLUSIR ROI with the support of the lead partner.',
  },
};
