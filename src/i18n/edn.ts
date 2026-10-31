/** Chaînes de l'étape EDN : après-midi Cyber Vision de clôture, vendredi 30 octobre. */
import type { Lang } from './index';
import type { ProgrammeSession } from './programme';

export interface EdnDict {
  programmeLabel: string;
  programmeTitle: string;
  programmeIntro: string;
  scheduleTitle: string;
  programme: ProgrammeSession[];
}

export const edn: Record<Lang, EdnDict> = {
  fr: {
    programmeLabel: 'Programme',
    programmeTitle: 'Cyber Vision : votre entreprise est-elle prête pour la suite ?',
    programmeIntro:
      "Intelligence artificielle, ingénierie sociale, nouvelles menaces : un après-midi riche en retours d'expérience, dédié aux entreprises et aux professionnels. Dirigeants, DSI, professionnels de la sécurité ou passionnés du numérique ont échangé avec des experts de référence. Avec la participation du CLUSIR et de Cyber Réunion.",
    scheduleTitle: 'Programme du vendredi 30 octobre',
    programme: [
      {
        slots: [{ start: '13:30', end: '14:00', title: "K'fé Cyber Network", kind: 'break' }],
      },
      {
        title: 'Conférences',
        slots: [
          { start: '14:00', end: '15:00', title: "Les risques liés à l'IA pour votre organisation", speaker: 'Rémi Voluer, SEYES' },
          { start: '15:00', end: '16:00', title: "ClickFix : l'ingénierie sociale en mode « Pwn It Yourself »", speaker: 'Jérémy Scion, SEKOIA' },
          { start: '16:00', end: '16:30', title: "L'EDIH pour sécuriser notre territoire" },
        ],
      },
    ],
  },
  en: {
    programmeLabel: 'Programme',
    programmeTitle: 'Cyber Vision: is your business ready for what comes next?',
    programmeIntro:
      'Artificial intelligence, social engineering, new threats: an afternoon of lessons from the field, for businesses and professionals. Business leaders, IT managers, security professionals or anyone keen on digital technology met and talked with leading experts. With CLUSIR and Cyber Réunion.',
    scheduleTitle: 'Programme for Friday 30 October',
    programme: [
      {
        slots: [{ start: '13:30', end: '14:00', title: "K'fé Cyber Network", kind: 'break' }],
      },
      {
        title: 'Talks',
        slots: [
          { start: '14:00', end: '15:00', title: 'AI risks for your organisation', speaker: 'Rémi Voluer, SEYES' },
          { start: '15:00', end: '16:00', title: 'ClickFix: social engineering, “Pwn It Yourself” style', speaker: 'Jérémy Scion, SEKOIA' },
          { start: '16:00', end: '16:30', title: 'How the EDIH helps secure the island' },
        ],
      },
    ],
  },
};
