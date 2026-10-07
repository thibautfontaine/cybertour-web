/** Chaînes de l'étape Ouest : journée de gestion de crise, mercredi 21 octobre. */
import type { Lang } from './index';
import type { ProgrammeSession } from './programme';

export interface OuestDict {
  programmeLabel: string;
  programmeTitle: string;
  objectiveLabel: string;
  objective: string;
  format: string;
  scheduleTitle: string;
  programme: ProgrammeSession[];
  venueTitle: string;
  logoOfficeEauAlt: string;
}

const SPEAKER = 'Tahiry Razafindralambo, Université de La Réunion';
const SPEAKER_EN = 'Tahiry Razafindralambo, University of La Réunion';

export const ouest: Record<Lang, OuestDict> = {
  fr: {
    programmeLabel: 'Programme',
    programmeTitle: 'Gestion de crise : théorie et pratique',
    objectiveLabel: 'Objectif de la journée',
    objective:
      "Comprendre les fondamentaux de la gestion de crise, acquérir les bons réflexes et les mettre en pratique lors d'un exercice sur table.",
    format:
      'La journée alterne apports théoriques, bonnes pratiques et mise en situation, pour préparer les participants à réagir de façon structurée et coordonnée face à une crise.',
    scheduleTitle: 'Programme du mercredi 21 octobre',
    programme: [
      {
        slots: [
          { start: '08:30', end: '09:00', title: 'Accueil des participants et café', kind: 'break' },
          { start: '09:00', end: '09:30', title: 'Ouverture de la journée', speaker: "CLUSIR, Cyber Réunion et Office de l'Eau" },
        ],
      },
      {
        title: 'Matin : les fondamentaux',
        slots: [
          { start: '09:30', end: '10:30', title: 'Théorie et fondamentaux de la gestion de crise', speaker: SPEAKER },
          { start: '10:30', end: '10:45', title: 'Pause', kind: 'break' },
          { start: '10:45', end: '12:00', title: 'Réflexes et règles clés en situation de crise', speaker: SPEAKER },
        ],
      },
      {
        slots: [{ start: '12:00', end: '13:30', title: 'Pause déjeuner', kind: 'break' }],
      },
      {
        title: 'Après-midi : la mise en pratique',
        slots: [
          { start: '13:30', end: '15:30', title: 'Exercice de gestion de crise sur table', desc: 'Mise en situation et simulation en groupes', kind: 'highlight' },
          { start: '15:30', end: '16:30', title: 'RETEX à chaud', desc: "Débriefing collectif : enseignements et axes d'amélioration", kind: 'panel' },
        ],
      },
      {
        slots: [{ start: '16:30', title: 'Clôture de la journée' }],
      },
    ],
    venueTitle: "Lieu d'accueil",
    logoOfficeEauAlt: "Office de l'Eau",
  },
  en: {
    programmeLabel: 'Programme',
    programmeTitle: 'Crisis management: theory and practice',
    objectiveLabel: 'Goal of the day',
    objective:
      'Understand the fundamentals of crisis management, learn the right reflexes and put them into practice in a tabletop exercise.',
    format:
      'The day alternates theory, good practice and role play, to prepare participants to respond to a crisis in a structured and coordinated way.',
    scheduleTitle: 'Programme for Wednesday 21 October',
    programme: [
      {
        slots: [
          { start: '08:30', end: '09:00', title: 'Welcome and coffee', kind: 'break' },
          { start: '09:00', end: '09:30', title: 'Opening of the day', speaker: "CLUSIR, Cyber Réunion and Office de l'Eau" },
        ],
      },
      {
        title: 'Morning: the fundamentals',
        slots: [
          { start: '09:30', end: '10:30', title: 'Crisis management theory and fundamentals', speaker: SPEAKER_EN },
          { start: '10:30', end: '10:45', title: 'Break', kind: 'break' },
          { start: '10:45', end: '12:00', title: 'Key reflexes and rules in a crisis', speaker: SPEAKER_EN },
        ],
      },
      {
        slots: [{ start: '12:00', end: '13:30', title: 'Lunch break', kind: 'break' }],
      },
      {
        title: 'Afternoon: putting it into practice',
        slots: [
          { start: '13:30', end: '15:30', title: 'Tabletop crisis management exercise', desc: 'Role play and simulation in groups', kind: 'highlight' },
          { start: '15:30', end: '16:30', title: 'Hot debrief (RETEX)', desc: 'Group debriefing: lessons learned and areas for improvement', kind: 'panel' },
        ],
      },
      {
        slots: [{ start: '16:30', title: 'Closing of the day' }],
      },
    ],
    venueTitle: 'Venue',
    logoOfficeEauAlt: "Office de l'Eau",
  },
};
