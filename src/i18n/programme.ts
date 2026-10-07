/**
 * Format commun des programmes d'étape (Sud, Ouest…), rendus par
 * `src/components/ProgrammeTimeline.astro`.
 */

/** Créneau du programme. `kind` règle le rendu : pause, temps fort, table ronde. */
export interface ProgrammeSlot {
  start: string;
  end?: string;
  title: string;
  /** Précision sous le titre (déroulé, format). */
  desc?: string;
  speaker?: string;
  remote?: boolean;
  kind?: 'break' | 'highlight' | 'panel';
}

/** Bloc thématique du programme ; sans titre pour l'accueil, la pause, la clôture. */
export interface ProgrammeSession {
  title?: string;
  slots: ProgrammeSlot[];
}
