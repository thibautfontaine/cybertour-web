/** Chaînes de l'étape Expernet : matinée de conférences, mardi 27 octobre. */
import type { Lang } from './index';
import type { ProgrammeSession } from './programme';

export interface ExpernetDict {
  programmeLabel: string;
  programmeTitle: string;
  scheduleTitle: string;
  programme: ProgrammeSession[];
}

export const expernet: Record<Lang, ExpernetDict> = {
  fr: {
    programmeLabel: 'Programme',
    programmeTitle: 'Une matinée de conférences au Port',
    scheduleTitle: 'Programme du mardi 27 octobre',
    programme: [
      {
        slots: [{ start: '08:30', end: '09:00', title: 'Accueil des participants', kind: 'break' }],
      },
      {
        title: 'Conférences',
        slots: [
          { start: '09:00', end: '10:00', title: 'Conférence', speaker: 'Erwan Perrin, MDSI' },
          { start: '10:00', end: '10:10', title: "Pause, temps d'échange", kind: 'break' },
          { start: '10:10', end: '11:10', title: 'Conférence', speaker: 'Mickaël Mahabot' },
          { start: '11:10', end: '11:20', title: "Pause, temps d'échange", kind: 'break' },
          { start: '11:20', end: '12:00', title: 'Conférences', speaker: 'CLUSIR et Cyber Réunion' },
        ],
      },
    ],
  },
  en: {
    programmeLabel: 'Programme',
    programmeTitle: 'A morning of talks in Le Port',
    scheduleTitle: 'Programme for Tuesday 27 October',
    programme: [
      {
        slots: [{ start: '08:30', end: '09:00', title: 'Welcome', kind: 'break' }],
      },
      {
        title: 'Talks',
        slots: [
          { start: '09:00', end: '10:00', title: 'Talk', speaker: 'Erwan Perrin, MDSI' },
          { start: '10:00', end: '10:10', title: 'Break and networking', kind: 'break' },
          { start: '10:10', end: '11:10', title: 'Talk', speaker: 'Mickaël Mahabot' },
          { start: '11:10', end: '11:20', title: 'Break and networking', kind: 'break' },
          { start: '11:20', end: '12:00', title: 'Talks', speaker: 'CLUSIR and Cyber Réunion' },
        ],
      },
    ],
  },
};
