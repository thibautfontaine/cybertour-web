/**
 * Chaînes de l'étape Nord : matinée institutionnelle du mardi 20 octobre,
 * amphithéâtre du PTU. Programme définitif validé par la préfecture.
 */
import type { Lang } from './index';
import type { ProgrammeSession } from './programme';

export interface NordDict {
  programmeLabel: string;
  programmeTitle: string;
  programmeSubtitle: string;
  scheduleTitle: string;
  programme: ProgrammeSession[];
  afternoonLabel: string;
  afternoonTitle: string;
  afternoonText: string;
  coOrganisersTitle: string;
}

export const nord: Record<Lang, NordDict> = {
  fr: {
    programmeLabel: 'Programme',
    programmeTitle: 'Matinée institutionnelle',
    programmeSubtitle: 'Mardi 20 octobre, de 8h à 12h30, amphithéâtre du PTU, Sainte-Clotilde',
    scheduleTitle: 'Programme du mardi 20 octobre',
    programme: [
      {
        slots: [
          { start: '08:00', end: '08:30', title: 'Accueil café', kind: 'break' },
          {
            start: '08:30',
            end: '08:45',
            title: 'Ouverture officielle',
            speaker: 'PTU et Université de La Réunion, Région Réunion, Tom Follet, directeur de cabinet du préfet',
          },
        ],
      },
      {
        title: 'État de la menace cyber sur le territoire',
        slots: [
          { start: '08:45', end: '09:00', title: 'La menace cyber en Outre-mer', speaker: 'ANSSI' },
          {
            start: '09:00',
            end: '09:20',
            title: 'Chiffres et évolutions à La Réunion',
            desc: 'Bilan du 1er janvier au 19 octobre 2026',
            speaker: 'Cyber Réunion',
          },
          { start: '09:20', end: '09:40', title: 'La souveraineté numérique, un défi de défense', speaker: 'FAZSOI' },
        ],
      },
      {
        title: 'Table ronde : le secteur privé',
        slots: [
          {
            start: '09:40',
            end: '10:40',
            title: '« Et vous ? Comment le secteur privé appréhende-t-il les risques cyber ? »',
            desc: "Témoignage d'entrepreneur, enjeux financiers et couverture des risques. 50 minutes d'échanges, puis 10 minutes de questions du public.",
            speaker: 'CLUSIR, CPME, MEDEF, commissaires aux comptes, assureur',
            kind: 'panel',
          },
        ],
      },
      {
        title: 'Table ronde : la réponse du territoire',
        slots: [
          {
            start: '10:40',
            end: '11:40',
            title: '« Le territoire est-il en capacité de réagir aux crises cyber ? »',
            desc: "De l'alerte à la judiciarisation : la gestion de crise en préfecture, les outils de préparation, de prévention et de réponse, l'accompagnement des victimes, puis les retours d'expérience de deux collectivités. 50 minutes d'échanges, puis 10 minutes de questions du public.",
            speaker:
              'Tom Follet (directeur de cabinet du préfet), Steeve Willaume (EMZPCOI), Matthieu Druilhe (Cyber Réunion), Philippe Caporossi (OFAC), Rémy Raul (Conseil départemental), Jacques Kha (Ville du Tampon)',
            kind: 'panel',
          },
        ],
      },
      {
        title: "L'humain au cœur de la problématique cyber",
        slots: [
          {
            start: '11:40',
            end: '12:00',
            title: 'Sensibilisation : la faille humaine en cas concrets',
            speaker: 'Lieutenant-colonel Mickaël Popovics, DRSD',
          },
          { start: '12:00', end: '12:15', title: 'Former aux métiers de la cyber', speaker: 'Tahiry Razafindralambo, ESIROI' },
        ],
      },
      {
        slots: [
          { start: '12:15', end: '12:30', title: 'Clôture', speaker: 'CLUSIR, Cyber Réunion, Préfecture' },
        ],
      },
    ],
    afternoonLabel: 'Après-midi',
    afternoonTitle: 'Ciné-débat',
    afternoonText: "Projection du film « Don't Go to the Police » (Orange Cyberdefense), suivie d'un échange avec la salle sur la réponse à une cyberattaque.",
    coOrganisersTitle: 'Organisateurs',
  },
  en: {
    programmeLabel: 'Programme',
    programmeTitle: 'Institutional morning',
    programmeSubtitle: 'Tuesday 20 October, 8am to 12:30pm, PTU lecture hall, Sainte-Clotilde',
    scheduleTitle: 'Programme for Tuesday 20 October',
    programme: [
      {
        slots: [
          { start: '08:00', end: '08:30', title: 'Welcome coffee', kind: 'break' },
          {
            start: '08:30',
            end: '08:45',
            title: 'Official opening',
            speaker: "PTU and University of La Réunion, Région Réunion, Tom Follet, Prefect's Chief of Staff",
          },
        ],
      },
      {
        title: 'The state of the cyber threat on the island',
        slots: [
          { start: '08:45', end: '09:00', title: 'The cyber threat in the French overseas territories', speaker: 'ANSSI' },
          {
            start: '09:00',
            end: '09:20',
            title: 'Figures and trends in Reunion Island',
            desc: '1 January to 19 October 2026',
            speaker: 'Cyber Réunion',
          },
          { start: '09:20', end: '09:40', title: 'Digital sovereignty as a defence challenge', speaker: 'FAZSOI' },
        ],
      },
      {
        title: 'Panel: the private sector',
        slots: [
          {
            start: '09:40',
            end: '10:40',
            title: '“What about you? How does the private sector deal with cyber risk?”',
            desc: 'A business owner’s account, financial stakes and risk cover. 50 minutes of discussion, then 10 minutes of audience questions.',
            speaker: 'CLUSIR, CPME, MEDEF, statutory auditors, insurer',
            kind: 'panel',
          },
        ],
      },
      {
        title: 'Panel: how the island responds',
        slots: [
          {
            start: '10:40',
            end: '11:40',
            title: '“Is the island able to respond to cyber crises?”',
            desc: 'From the first alert to legal action: crisis management at the prefecture, preparation, prevention and response tools, victim support, then feedback from two local authorities. 50 minutes of discussion, then 10 minutes of audience questions.',
            speaker:
              "Tom Follet (Prefect's Chief of Staff), Steeve Willaume (EMZPCOI), Matthieu Druilhe (Cyber Réunion), Philippe Caporossi (OFAC), Rémy Raul (Departmental Council), Jacques Kha (City of Le Tampon)",
            kind: 'panel',
          },
        ],
      },
      {
        title: 'People at the heart of cybersecurity',
        slots: [
          {
            start: '11:40',
            end: '12:00',
            title: 'Awareness: the human factor through real cases',
            speaker: 'Lieutenant Colonel Mickaël Popovics, DRSD',
          },
          { start: '12:00', end: '12:15', title: 'Training for cybersecurity careers', speaker: 'Tahiry Razafindralambo, ESIROI' },
        ],
      },
      {
        slots: [
          { start: '12:15', end: '12:30', title: 'Closing', speaker: 'CLUSIR, Cyber Réunion, Prefecture' },
        ],
      },
    ],
    afternoonLabel: 'Afternoon',
    afternoonTitle: 'Film screening & debate',
    afternoonText: 'A screening of “Don’t Go to the Police” (Orange Cyberdefense), followed by an open discussion with the audience on responding to a cyberattack.',
    coOrganisersTitle: 'Organisers',
  },
};
