/**
 * Partenaires du Cyber Tour Réunion 2026 : source unique pour la pyramide
 * de l'accueil, la barre flottante du hero, le bandeau du pied de page et
 * les blocs « Partenaires de l'étape ».
 *
 * Les logos n'ont pas tous les mêmes proportions : chaque contexte porte sa
 * propre hauteur, réglée à l'œil pour un poids visuel comparable.
 *
 * `sponsored` marque les partenaires dont le lien est une contrepartie du
 * partenariat : le lien reçoit `rel="sponsored"`, comme Google le demande.
 *
 * Adresses vérifiées le 7 octobre 2026.
 */

/**
 * `host` : structure qui co-organise une seule étape. Elle apparaît sur la
 * page de cette étape, pas dans la pyramide ni le bandeau du pied de page.
 */
export type PartnerTier = 'organiser' | 'gold' | 'partner' | 'host';

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url: string;
  tier: PartnerTier;
  sponsored?: boolean;
  /** Classes de hauteur du logo : pyramide, barre flottante, bandeau, bloc d'étape. */
  size: { pyramid: string; float?: string; band: string; stage: string };
  /** Classes ajoutées à l'image (coins arrondis d'un logo à fond plein). */
  imgClass?: string;
}

export const partners: Partner[] = [
  {
    id: 'clusir',
    name: 'CLUSIR Réunion Océan Indien',
    logo: '/assets/logo-clusir.png',
    url: 'https://www.clusir-roi.org/',
    tier: 'organiser',
    size: { pyramid: 'h-20 sm:h-24', band: 'h-10', stage: 'h-16 sm:h-20' },
  },
  {
    id: 'univ',
    name: 'Université de La Réunion',
    logo: '/assets/logo-univ-reunion.png',
    url: 'https://www.univ-reunion.fr/',
    tier: 'organiser',
    size: { pyramid: 'h-20 sm:h-24', band: 'h-10', stage: 'h-16 sm:h-20' },
  },
  {
    id: 'office-eau',
    name: "Office de l'Eau Réunion",
    logo: '/assets/logo-office-eau.png',
    url: 'https://www.eaureunion.fr/',
    tier: 'host',
    size: { pyramid: 'h-20 sm:h-24', band: 'h-10', stage: 'h-16 sm:h-20' },
  },
  {
    id: 'prefecture',
    name: 'Préfet de La Réunion',
    logo: '/assets/logo-prefecture-reunion.png',
    url: 'https://www.reunion.gouv.fr/',
    tier: 'host',
    size: { pyramid: 'h-20 sm:h-24', band: 'h-10', stage: 'h-16 sm:h-20' },
  },
  {
    id: 'orange-cyberdefense',
    name: 'Orange Cyberdefense',
    logo: '/assets/logo-orange-cyberdefense.png',
    url: 'https://www.orangecyberdefense.com/fr/',
    tier: 'gold',
    sponsored: true,
    size: { pyramid: 'h-6 sm:h-8', float: 'h-[14px] sm:h-[17px]', band: 'h-[22px] sm:h-[26px]', stage: 'h-[22px] sm:h-[26px]' },
  },
  {
    id: 'sfr-business',
    name: 'SFR Business',
    logo: '/assets/logo-sfr-business.png',
    url: 'https://www.sfrbusiness.re/',
    tier: 'gold',
    sponsored: true,
    size: { pyramid: 'h-9 sm:h-11', float: 'h-[18px] sm:h-6', band: 'h-8 sm:h-9', stage: 'h-8 sm:h-9' },
  },
  {
    id: 'youtell',
    name: 'YOUTELL',
    logo: '/assets/logo-youtell.png',
    url: 'https://youtell.re/',
    tier: 'gold',
    sponsored: true,
    size: { pyramid: 'h-10 sm:h-11', float: 'h-[22px] sm:h-[26px]', band: 'h-[34px] sm:h-10', stage: 'h-[34px] sm:h-10' },
    imgClass: 'rounded-lg',
  },
  {
    id: 'iut',
    name: 'IUT de La Réunion',
    logo: '/assets/logo-iut.png',
    url: 'https://iut.univ-reunion.fr/',
    tier: 'partner',
    size: { pyramid: 'h-8 sm:h-9', band: 'h-9', stage: 'h-12' },
  },
  {
    id: 'esiroi',
    name: "ESIROI, école d'ingénieurs de l'Université de La Réunion",
    logo: '/assets/logo-esiroi.png',
    url: 'https://esiroi.univ-reunion.fr/',
    tier: 'partner',
    size: { pyramid: 'h-8 sm:h-9', band: 'h-9', stage: 'h-12' },
  },
  {
    id: 'cyber-reunion',
    name: 'Cyber Réunion',
    logo: '/assets/logo-cyber-reunion.png',
    url: 'https://www.cyber-reunion.fr/',
    tier: 'partner',
    size: { pyramid: 'h-8 sm:h-9', band: 'h-9', stage: 'h-12' },
  },
  {
    id: 'edih',
    name: 'EDIH La Réunion',
    logo: '/assets/logo-edih-reunion.png',
    url: 'https://www.cyber-reunion.fr/edih/',
    tier: 'partner',
    size: { pyramid: 'h-6 sm:h-7', band: 'h-7', stage: 'h-9' },
  },
  {
    id: 'cf-cyber',
    name: 'CF Cyber',
    logo: '/assets/logo-cf-cyber.png',
    url: 'https://cfcyber.fr/',
    tier: 'partner',
    size: { pyramid: 'h-5 sm:h-6', band: 'h-6', stage: 'h-8' },
  },
];

export const partnersByTier = (tier: PartnerTier) => partners.filter((p) => p.tier === tier);

export function getPartners(ids: string[]): Partner[] {
  return ids.map((id) => {
    const partner = partners.find((p) => p.id === id);
    if (!partner) throw new Error(`Partenaire inconnu : ${id}`);
    return partner;
  });
}

/** Attribut `rel` d'un lien vers un partenaire. */
export const partnerRel = (p: Partner) => (p.sponsored ? 'sponsored noopener' : 'noopener');
