/**
 * Données de la page « Bilan 2025-2026 » (src/views/Bilan.astro) : tout ce
 * qui ne se traduit pas. Les textes sont dans `src/i18n/bilan.ts`.
 *
 * Sources : deck et one-pager « Bilan CYBER TOUR - La Réunion 2026 »
 * (25 octobre 2026) pour la semaine 1 ; dossier partenaire pour 2025.
 * Les étapes de la semaine 2 n'ont pas encore de chiffres : elles s'affichent
 * « bilan à venir » tant que leur jour manque dans `presencesByDay`.
 */
import { getPartners, type Partner } from './partners';

export const REPLAY_2025_URL = 'https://www.youtube.com/watch?v=uk-gSyaxyWA';
export const REPLAY_2026_URL = 'https://www.youtube.com/watch?v=fnjLhNorXSk';

/** Bilan A4 de la semaine 1, export du one-pager (en français seulement). */
export const BILAN_PDF = '/assets/bilan/bilan-cybertour-2026-semaine-1.pdf';

/**
 * Présences comptées par journée (bilan de la semaine 1). Une personne venue
 * deux jours compte deux fois : ne pas les présenter comme des personnes
 * uniques, ni les comparer telles quelles aux 220 participants de 2025.
 */
export const presencesByDay: Record<string, number> = {
  '2026-10-20': 93,
  '2026-10-21': 40,
  '2026-10-22': 150,
  '2026-10-23': 38,
};

export type MediaId = 'antenne' | 'la1ere' | 'quotidien' | 'imaz' | 'clicanoo' | 'podcast';

export interface MediaItem {
  id: MediaId;
  name: string;
  logo: string;
  /** Lien vers le reportage ou l'article, à renseigner quand on l'a. */
  url?: string;
}

export const media: MediaItem[] = [
  { id: 'antenne', name: 'Antenne Réunion', logo: '/assets/bilan/media-antenne-reunion.png' },
  { id: 'la1ere', name: 'Réunion La 1ère', logo: '/assets/bilan/media-reunion-la-1ere.png' },
  { id: 'quotidien', name: 'Le Quotidien de La Réunion', logo: '/assets/bilan/media-le-quotidien.png' },
  { id: 'imaz', name: 'Imaz Press', logo: '/assets/bilan/media-imaz-press.png' },
  { id: 'clicanoo', name: 'Clicanoo', logo: '/assets/bilan/media-clicanoo.png' },
  { id: 'podcast', name: 'Le monde de la cyber', logo: '/assets/bilan/media-le-monde-de-la-cyber.png' },
];

/** Logo du mur « Ils ont fait le Cyber Tour ». Sans `url`, il n'est pas cliquable. */
export interface WallMember {
  name: string;
  logo: string;
  url?: string;
  sponsored?: boolean;
  /** Logo à parties blanches, illisible sur la pastille blanche : fond sombre. */
  dark?: boolean;
}

export type WallGroupKey = 'organisers' | 'partners' | 'hosts' | 'speakers';

const fromPartners = (ids: string[]): WallMember[] =>
  getPartners(ids).map((p: Partner) => ({ name: p.name, logo: p.logo, url: p.url, sponsored: p.sponsored }));

/**
 * Tous les logos ont la même taille, quel que soit le rôle ou le palier
 * (décision du 28 octobre 2026) : le mur reconnaît, il ne hiérarchise pas.
 */
export const wall: { key: WallGroupKey; members: WallMember[] }[] = [
  {
    key: 'organisers',
    members: fromPartners(['clusir', 'univ', 'prefecture', 'cyber-reunion']),
  },
  {
    key: 'partners',
    members: [
      ...fromPartners(['orange-cyberdefense', 'sfr-business', 'youtell', 'edih']),
      { name: 'BSides La Réunion', logo: '/assets/logo-bsides-reunion.webp', dark: true },
      ...fromPartners(['cf-cyber']),
    ],
  },
  {
    key: 'hosts',
    members: [
      ...fromPartners(['office-eau', 'iut', 'esiroi']),
      { name: 'Expernet', logo: '/assets/logo-expernet.png' },
      { name: 'EDN, École Du Numérique', logo: '/assets/logo-edn.png' },
    ],
  },
  {
    key: 'speakers',
    members: [
      { name: 'ANSSI', logo: '/assets/bilan/logo-anssi.png' },
      { name: 'VIGINUM', logo: '/assets/bilan/logo-viginum.png' },
      { name: 'FAZSOI', logo: '/assets/bilan/logo-fazsoi.png' },
      { name: 'DRSD', logo: '/assets/bilan/logo-drsd.png' },
    ],
  },
];
