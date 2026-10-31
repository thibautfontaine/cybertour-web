/**
 * Chaînes de la page « Bilan 2025-2026 » (src/views/Bilan.astro). Les
 * chiffres bruts, logos et liens sont dans `src/data/bilan.ts`.
 *
 * Règle de rédaction : 2026 se compte en « présences » (somme des journées),
 * jamais en personnes, et ne se compare pas en pourcentage aux 220
 * participants de 2025.
 */
import type { Lang } from './index';
import type { MediaId, WallGroupKey } from '../data/bilan';

interface Stat {
  value: string;
  label: string;
}

export interface BilanHighlight {
  key: string;
  when: string;
  title: string;
  text: string;
  img: string;
  imgAlt: string;
}

export interface BilanDoor {
  key: string;
  title: string;
  text: string;
  cta: string;
  /** Objet du mail prérempli ; sinon `href`. */
  subject?: string;
  href?: string;
}

export interface BilanDict {
  metaTitle: string;
  metaDescription: string;

  heroLabel: string;
  heroTitleHtml: string;
  heroIntro: string;
  /** Chiffres cumulés de toutes les éditions, en unités comparables. */
  heroStats: Stat[];
  heroStatsNote: string;
  heroImgAlt: string;
  heroCtaReplay: string;
  heroCtaJoin: string;
  /** Lien vers le bilan A4 (PDF en français, dans les deux langues). */
  heroPdf: string;

  progressLabel: string;
  progressTitleHtml: string;
  y2025Title: string;
  y2025Text: string;
  y2025Stats: Stat[];
  y2025Replay: string;
  y2026Title: string;
  y2026Text: string;
  y2026Stats: Stat[];
  y2026Replay: string;
  timelineHeading: string;
  presencesUnit: string;
  pending: string;
  presencesNote: string;

  highlightsLabel: string;
  highlightsTitleHtml: string;
  /** Encart en tête des temps forts : la preuve d'effet pour un financeur. */
  conventionLabel: string;
  conventionText: string;
  highlights: BilanHighlight[];

  mediaLabel: string;
  mediaTitleHtml: string;
  media: Record<MediaId, string>;

  wallLabel: string;
  wallTitleHtml: string;
  /** Un titre et le rôle du groupe en une ligne : qui fait quoi. */
  wallGroups: Record<WallGroupKey, { title: string; role: string }>;

  joinLabel: string;
  joinTitleHtml: string;
  joinIntro: string;
  doors: BilanDoor[];
}

export const bilan: Record<Lang, BilanDict> = {
  fr: {
    metaTitle: 'Bilan 2025-2026 | Cyber Tour Réunion',
    metaDescription:
      "Deux éditions du Cyber Tour Réunion en chiffres : participants, étapes, temps forts, retombées médias et partenaires. Et comment rejoindre l'édition 2027.",

    heroLabel: '01 // Bilan 2025-2026',
    heroTitleHtml: 'Deux éditions,<br/><span class="text-accent">tout un territoire</span> mobilisé',
    heroIntro:
      "Le Cyber Tour est la tournée gratuite de la cybersécurité à La Réunion, organisée par le CLUSIR Réunion Océan Indien : des conférences, une journée de formation à la crise et un CTF, étape après étape, au plus près des entreprises, des collectivités et des étudiants. En 2025, il a trouvé son public ; en 2026, il a fait le tour de l'île. Voici ce que ces deux éditions ont produit, et comment construire 2027 ensemble.",
    // Cumul 2025 + 2026 : 150 + 388 présences en salle (2025 tenait en une
    // journée) ; 600 vues du replay 2025 + 1 500 vues de la vidéo 2026 (direct
    // compris, compteur YouTube « 1,5 k » au 28/10/2026) ;
    // 2 + 6 retombées. Pas de « participants » : les unités diffèrent.
    heroStats: [
      { value: '2', label: 'éditions, 2025 et 2026' },
      { value: '530+', label: 'présences en salle' },
      { value: '2 100+', label: 'visionnages en direct et en replay' },
      { value: '8', label: 'retombées médias' },
    ],
    heroStatsNote: 'Cumul des éditions 2025 et 2026.',
    heroImgAlt: "L'amphithéâtre de l'IUT de Saint-Pierre rempli pendant les conférences du 22 octobre 2026",
    heroCtaReplay: 'Revoir les conférences 2026',
    heroCtaJoin: "Rejoindre l'édition 2027",
    heroPdf: 'Télécharger le bilan de la semaine 1 (PDF, 1 page)',

    progressLabel: '03 // De 2025 à 2026',
    progressTitleHtml: 'Une première édition,<br/><span class="text-accent">puis toute l\'île</span>',
    y2025Title: 'Édition 2025',
    y2025Text:
      "Organisée par le CLUSIR Réunion Océan Indien avec l'Université de La Réunion, la première édition a montré que le besoin était là.",
    y2025Stats: [
      { value: '220', label: 'participants' },
      { value: '150', label: 'en présentiel' },
      { value: '600+', label: 'vues du replay' },
      { value: '2', label: 'articles dans Le Quotidien' },
    ],
    y2025Replay: 'Revoir 2025',
    y2026Title: 'Édition 2026',
    y2026Text:
      "Six étapes du 20 au 30 octobre, de l'ouverture au PTU de Sainte-Clotilde à la clôture à l'EDN : quatre portées par le CLUSIR, deux par des hôtes locaux.",
    y2026Stats: [
      { value: '6', label: 'étapes' },
      { value: '388', label: 'présences sur les six étapes' },
      { value: '1 500+', label: 'vues de la vidéo, direct compris' },
      { value: '6', label: 'retombées médias' },
    ],
    y2026Replay: 'Revoir 2026',
    timelineHeading: 'Les étapes 2026',
    presencesUnit: 'présences',
    pending: 'bilan à venir',
    presencesNote:
      'Présences comptées par journée : une personne venue deux jours compte deux fois.',

    highlightsLabel: '02 // Temps forts 2026',
    highlightsTitleHtml: 'La première semaine, <span class="text-accent">quatre formats</span>',
    conventionLabel: '20 octobre 2026 · Une convention signée au Cyber Tour',
    conventionText:
      "La Région Réunion, La Réunion Connectée et la Préfecture de La Réunion ont signé une convention pour accroître la sécurité numérique du territoire : actions concertées, partage d'expériences et d'informations, montée en compétences mutuelle.",
    highlights: [
      {
        key: 'ouverture',
        when: 'Mardi 20 octobre · PTU, Sainte-Clotilde',
        title: 'Ouverture institutionnelle',
        text:
          "Lancement avec la Préfecture, la Région, l'ANSSI, la DRSD, Cyber Réunion et la FAZSOI, puis une table ronde sur la gestion de crise, conclue par la signature de la convention.",
        img: '/assets/bilan/2026-ouverture-table-ronde.webp',
        imgAlt: "Table ronde de l'ouverture institutionnelle devant les kakémonos de la Préfecture et de Cyber Réunion",
      },
      {
        key: 'crise',
        when: "Mercredi 21 octobre · Office de l'Eau Réunion",
        title: 'Se préparer à une crise cyber',
        text:
          "Une journée de formation : la théorie le matin, un exercice sur table l'après-midi. Chacun repart avec un scénario de crise joué heure par heure, une checklist « lundi matin » de cinq actions et le numéro du CSIRT à appeler. Avec le CSIRT Cyber Réunion et l'EDIH La Réunion.",
        img: '/assets/bilan/2026-crise-office-eau.webp',
        imgAlt: "Les participants à l'Office de l'Eau Réunion face à la présentation de la matinée",
      },
      {
        key: 'conferences',
        when: 'Jeudi 22 octobre · IUT et ESIROI, Saint-Pierre',
        title: 'Conférences',
        text:
          'Neuf intervenants, dont Leslie Fornero, voix du podcast « Le monde de la cyber », invitée d\'honneur. 150 personnes dans l\'amphithéâtre, 1 200 en direct sur YouTube.',
        img: '/assets/bilan/2026-conferences-amphi.webp',
        imgAlt: "L'amphithéâtre de l'IUT rempli pendant l'intervention de Leslie Fornero",
      },
      {
        key: 'ctf',
        when: 'Vendredi 23 octobre · Campus de Terre-Sainte, Saint-Pierre',
        title: 'CTF avec BSides Réunion',
        text:
          'Un challenge de hacking organisé et animé par BSides Réunion, ouvert aux étudiants et aux professionnels : 38 participants répartis en 16 équipes, et cinq conférences techniques. Lots offerts par SFR Business.',
        img: '/assets/bilan/2026-ctf-bsides.webp',
        imgAlt: "Les participants du CTF réunis dans l'amphithéâtre de l'IUT, avec les lots offerts par SFR Business",
      },
    ],

    mediaLabel: '04 // Dans les médias',
    mediaTitleHtml: 'Six médias ont <span class="text-accent">relayé l\'événement</span>',
    media: {
      antenne: 'Reportage TV · 21 octobre',
      la1ere: 'Plateau du JT de 19 h · 21 octobre',
      quotidien: 'La Une · 23 octobre',
      imaz: 'Article · 19 octobre',
      clicanoo: 'Article · 12 octobre',
      podcast: 'Podcast · enregistré sur place',
    },

    wallLabel: '05 // Partenaires',
    wallTitleHtml: 'Ils ont fait <span class="text-accent">le Cyber Tour</span>',
    wallGroups: {
      organisers: { title: 'Organisateurs', role: "portent l'événement et son programme" },
      partners: { title: 'Partenaires', role: "soutiennent l'édition et animent ses temps forts" },
      hosts: { title: "Lieux et hôtes d'étape", role: 'accueillent les étapes, ou en portent une' },
      speakers: { title: 'Intervenants institutionnels', role: "partagent l'expertise de l'État" },
    },

    joinLabel: '06 // Édition 2027',
    joinTitleHtml: 'Construisons <span class="text-accent">2027</span> ensemble',
    joinIntro:
      'Participer, accueillir une étape ou soutenir l\'événement : il y a une place pour chacun dans la prochaine édition.',
    doors: [
      {
        key: 'participer',
        title: 'Participer',
        text: "Soyez prévenu dès l'ouverture des inscriptions 2027.",
        cta: 'Me prévenir',
        subject: "Cyber Tour Réunion 2027 — me prévenir de l'ouverture des inscriptions",
      },
      {
        key: 'accueillir',
        title: 'Accueillir une étape',
        text:
          'Collectivité, école ou entreprise : portez une étape sous le label Cyber Tour, comme Expernet et EDN en 2026.',
        cta: 'Proposer une étape',
        subject: 'Cyber Tour Réunion 2027 — proposer une étape',
      },
      {
        key: 'soutenir',
        title: "Soutenir l'édition",
        text: "Associez votre structure à l'événement cyber de référence du territoire.",
        cta: "Voir l'offre partenaire",
        href: '/partenaires',
      },
    ],
  },

  en: {
    metaTitle: '2025-2026 review | Cyber Tour Réunion',
    metaDescription:
      'Two editions of Cyber Tour Réunion in figures: attendance, stages, highlights, media coverage and partners. And how to join the 2027 edition.',

    heroLabel: '01 // 2025-2026 review',
    heroTitleHtml: 'Two editions,<br/><span class="text-accent">a whole island</span> on board',
    heroIntro:
      'Cyber Tour is the free cybersecurity tour of Reunion Island, organised by CLUSIR Réunion Océan Indien: talks, a day of crisis training and a CTF, stage after stage, close to businesses, local authorities and students. In 2025 it found its audience; in 2026 it toured the island. Here is what the two editions achieved, and how we can build 2027 together.',
    heroStats: [
      { value: '2', label: 'editions, 2025 and 2026' },
      { value: '530+', label: 'on-site attendances' },
      { value: '2,100+', label: 'live and replay views' },
      { value: '8', label: 'media features' },
    ],
    heroStatsNote: 'Combined 2025 and 2026 editions.',
    heroImgAlt: 'The IUT lecture hall in Saint-Pierre full during the 22 October 2026 talks',
    heroCtaReplay: 'Watch the 2026 talks',
    heroCtaJoin: 'Join the 2027 edition',
    heroPdf: 'Download the week 1 review (PDF, 1 page, in French)',

    progressLabel: '03 // From 2025 to 2026',
    progressTitleHtml: 'A first edition,<br/><span class="text-accent">then the whole island</span>',
    y2025Title: '2025 edition',
    y2025Text:
      'Organised by CLUSIR Réunion Océan Indien with the University of La Réunion, the first edition showed the need was there.',
    y2025Stats: [
      { value: '220', label: 'attendees' },
      { value: '150', label: 'on site' },
      { value: '600+', label: 'replay views' },
      { value: '2', label: 'articles in Le Quotidien' },
    ],
    y2025Replay: 'Watch 2025',
    y2026Title: '2026 edition',
    y2026Text:
      'Six stages from 20 to 30 October, from the opening at the PTU in Sainte-Clotilde to the closing at EDN: four run by CLUSIR, two by local hosts.',
    y2026Stats: [
      { value: '6', label: 'stages' },
      { value: '388', label: 'attendances across the six stages' },
      { value: '1,500+', label: 'video views, live included' },
      { value: '6', label: 'media features' },
    ],
    y2026Replay: 'Watch 2026',
    timelineHeading: 'The 2026 stages',
    presencesUnit: 'attendances',
    pending: 'review to come',
    presencesNote: 'Attendance is counted per day: someone who came on two days counts twice.',

    highlightsLabel: '02 // 2026 highlights',
    highlightsTitleHtml: 'The first week, <span class="text-accent">four formats</span>',
    conventionLabel: '20 October 2026 · An agreement signed at Cyber Tour',
    conventionText:
      "The Réunion Region, La Réunion Connectée and the Prefecture of La Réunion signed an agreement to strengthen the island's digital security: joint action, shared experience and information, and mutual upskilling.",
    highlights: [
      {
        key: 'ouverture',
        when: 'Tuesday 20 October · PTU, Sainte-Clotilde',
        title: 'Institutional opening',
        text:
          'Launch with the Prefecture, the Region, ANSSI, DRSD, Cyber Réunion and FAZSOI, followed by a round table on crisis management that ended with the signing of the agreement.',
        img: '/assets/bilan/2026-ouverture-table-ronde.webp',
        imgAlt: 'Opening round table in front of the Prefecture and Cyber Réunion banners',
      },
      {
        key: 'crise',
        when: "Wednesday 21 October · Office de l'Eau Réunion",
        title: 'Preparing for a cyber crisis',
        text:
          'A day of training: theory in the morning, a tabletop exercise in the afternoon. Everyone left with a crisis scenario played out hour by hour, a five-action "Monday morning" checklist and the CSIRT number to call. With CSIRT Cyber Réunion and EDIH La Réunion.',
        img: '/assets/bilan/2026-crise-office-eau.webp',
        imgAlt: "Attendees at Office de l'Eau Réunion during the morning presentation",
      },
      {
        key: 'conferences',
        when: 'Thursday 22 October · IUT and ESIROI, Saint-Pierre',
        title: 'Talks',
        text:
          'Nine speakers, including guest of honour Leslie Fornero, host of the podcast "Le monde de la cyber". 150 people in the lecture hall, 1,200 watching live on YouTube.',
        img: '/assets/bilan/2026-conferences-amphi.webp',
        imgAlt: 'The IUT lecture hall full during Leslie Fornero\'s talk',
      },
      {
        key: 'ctf',
        when: 'Friday 23 October · Terre-Sainte campus, Saint-Pierre',
        title: 'CTF with BSides Réunion',
        text:
          'A hacking challenge run by BSides Réunion, open to students and professionals: 38 participants in 16 teams, plus five technical talks. Prizes from SFR Business.',
        img: '/assets/bilan/2026-ctf-bsides.webp',
        imgAlt: 'CTF participants gathered in the IUT lecture hall, with prizes from SFR Business',
      },
    ],

    mediaLabel: '04 // In the media',
    mediaTitleHtml: 'Six media outlets <span class="text-accent">covered the event</span>',
    media: {
      antenne: 'TV report · 21 October',
      la1ere: '7pm news studio guest · 21 October',
      quotidien: 'Front page · 23 October',
      imaz: 'Article · 19 October',
      clicanoo: 'Article · 12 October',
      podcast: 'Podcast · recorded on site',
    },

    wallLabel: '05 // Partners',
    wallTitleHtml: 'They made <span class="text-accent">Cyber Tour</span> happen',
    wallGroups: {
      organisers: { title: 'Organisers', role: 'run the event and its programme' },
      partners: { title: 'Partners', role: 'support the edition and run its highlights' },
      hosts: { title: 'Venues and stage hosts', role: 'welcome the stages, or run one' },
      speakers: { title: 'Institutional speakers', role: 'share government expertise' },
    },

    joinLabel: '06 // 2027 edition',
    joinTitleHtml: "Let's build <span class=\"text-accent\">2027</span> together",
    joinIntro:
      'Attend, host a stage or support the event: there is a place for everyone in the next edition.',
    doors: [
      {
        key: 'participer',
        title: 'Attend',
        text: 'Be the first to know when 2027 registration opens.',
        cta: 'Keep me posted',
        subject: 'Cyber Tour Réunion 2027 — notify me when registration opens',
      },
      {
        key: 'accueillir',
        title: 'Host a stage',
        text:
          'Local authority, school or company: run a stage under the Cyber Tour label, as Expernet and EDN did in 2026.',
        cta: 'Offer a stage',
        subject: 'Cyber Tour Réunion 2027 — offering to host a stage',
      },
      {
        key: 'soutenir',
        title: 'Support the edition',
        text: "Associate your organisation with the island's leading cyber event.",
        cta: 'See the partner offer',
        href: '/partenaires',
      },
    ],
  },
};
