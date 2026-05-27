/**
 * PROGRAMMES PROVISOIRES — À NE PAS PUBLIER
 *
 * Ces données sont conservées ici pour mémoire du format envisagé.
 * À réintégrer dans les pages d'étape une fois les intervenants confirmés
 * (~60 jours avant chaque étape, soit fin août 2026).
 *
 * Pour réutiliser : importer le type TimelineItem depuis ../components/Timeline.astro
 * et copier le tableau voulu dans la page correspondante.
 */

import type { TimelineItem } from '../components/Timeline.astro';

// ─── NORD — Mardi 20 Octobre ─────────────────────────────────────────────────

export const programmeNord: TimelineItem[] = [
  { time: '08:00 - 08:30', title: 'Accueil des participants et cafe' },
  { time: '08:30 - 08:45', title: 'Ouverture officielle du CyberTour Reunion 2026', speaker: 'CLUSIR Réunion Océan Indien' },
  { isSection: true, title: 'Interventions institutionnelles' },
  { time: '08:45 - 09:00', title: 'Mot de la Presidente de Region', org: 'REGION REUNION' },
  { time: '09:00 - 09:15', title: 'Mot du President du Departement', org: 'DEPARTEMENT' },
  { time: '09:15 - 09:30', title: 'Mot du President de l\'Universite', org: 'UNIVERSITE DE LA REUNION' },
  { isSection: true, title: 'Services etatiques & cybersécurité' },
  { time: '09:30 - 10:00', title: 'Présentation du CLUSIR ROI et de l\'écosystème Cyber Reunion', org: 'CLUSIR ROI / CYBER REUNION' },
  { time: '10:00 - 10:30', title: 'La strategie nationale de cybersécurité dans les Outre-mer', org: 'ANSSI' },
  { time: '10:30 - 10:45', title: 'Pause cafe', isPause: true },
  { time: '10:45 - 11:15', title: 'Lutte contre les manipulations de l\'information et transformation numérique', org: 'VIGINUM / DINUM' },
  { time: '11:15 - 11:30', title: 'Securisation des reseaux de l\'enseignement et de la recherche', org: 'RENATER' },
  { time: '11:30 - 12:00', title: 'Cybercriminalité et signalement des incidents — rôle et missions de l\'OFAC', org: 'OFAC' },
  { isSection: true, title: 'Présentation du parcours CyberTour' },
  { time: '12:00 - 12:30', title: 'Présentation du parcours CyberTour 2026 — Les 3 étapes', speaker: 'CLUSIR ROI' },
  { time: '12:30 - 13:30', title: 'Cocktail dejeunatoire et networking', isPause: true },
];

// ─── OUEST — Mercredi 21 Octobre ─────────────────────────────────────────────

export const programmeOuest: TimelineItem[] = [
  { time: '08:30 - 09:00', title: 'Accueil des participants' },
  { time: '09:00 - 09:15', title: 'Introduction et mot de bienvenue', speaker: 'CLUSIR ROI' },
  { isSection: true, title: 'Gestion de crise' },
  { time: '09:15 - 10:15', title: 'Présentation : gestion de crise cyber — methodologie et retour d\'experience', speaker: 'Anime par le CLUSIR Réunion Océan Indien', org: 'CLUSIR ROI' },
  { time: '10:15 - 10:45', title: 'Pause cafe et networking', isPause: true },
  { isSection: true, title: 'Présentations thématiques — Écosystème cyber réunionnais' },
  { time: '10:45 - 11:15', title: 'Présentation thématique 1', org: 'A CONFIRMER' },
  { time: '11:15 - 11:45', title: 'Présentation thématique 2', org: 'A CONFIRMER' },
  { time: '11:45 - 12:15', title: 'Présentation thématique 3', org: 'A CONFIRMER' },
  { time: '12:15 - 13:30', title: 'Dejeuner et networking', isPause: true },
  { isSection: true, title: 'Atelier pratique' },
  { time: '13:30 - 15:30', title: 'Exercice de gestion de crise — atelier pratique en groupes', speaker: 'Anime par le CLUSIR ROI, avec le soutien du partenaire principal' },
  { time: '15:30 - 16:00', title: 'Retour d\'experience et clôture' },
];

// ─── SUD — Jeudi 22 + Vendredi 23 Octobre ────────────────────────────────────

export const programmeSudJ1: TimelineItem[] = [
  { time: '08:00 - 08:45', title: 'Accueil des participants et petit-dejeuner' },
  { time: '09:00 - 09:30', title: 'Discours de bienvenue' },
  { isSection: true, title: 'Souverainete numérique' },
  { time: '09:30 - 10:00', title: 'Enjeux locaux et nationaux de la souveraineté numérique', org: 'A CONFIRMER' },
  { time: '10:00 - 10:30', title: 'Cloud de confiance et cadre reglementaire europeen', org: 'A CONFIRMER' },
  { time: '10:30 - 11:00', title: 'Table ronde, questions/reponses avec la salle' },
  { isSection: true, title: 'Sécurité des systemes IA' },
  { time: '11:00 - 11:30', title: 'OWASP Top 10 GenAI : les risques de l\'IA generative', org: 'A CONFIRMER' },
  { time: '11:30 - 12:00', title: 'Protection des modeles et exfiltration de donnees', org: 'A CONFIRMER' },
  { time: '12:00 - 13:45', title: 'Cocktail dejeunatoire, réseautage et rencontres professionnels - etudiants', isPause: true },
  { isSection: true, title: 'SOC, defense proactive & Zero Trust' },
  { time: '14:00 - 14:30', title: 'Architectures Zero Trust : retour d\'experience', org: 'A CONFIRMER' },
  { time: '14:30 - 15:00', title: 'SOC et defense proactive : detecter avant l\'impact', org: 'A CONFIRMER' },
  { time: '15:00 - 15:30', title: 'Chiffrement et securisation du code source', org: 'A CONFIRMER' },
  { isSection: true, title: 'RETEX Cyber' },
  { time: '15:30 - 16:00', title: 'Retour d\'experience : gestion d\'une crise cyber', org: 'A CONFIRMER' },
  { time: '16:00 - 17:00', title: 'Table ronde et clôture de la journée' },
];

export const programmeSudJ2: TimelineItem[] = [
  { time: '08:30 - 09:00', title: 'Accueil des participants' },
  { time: '09:00 - 09:15', title: 'Briefing de la journée ateliers' },
  { isSection: true, title: 'Ateliers du matin (sessions paralleles)' },
  { time: '09:15 - 12:00', title: 'CTF — Attack/Defense : deux equipes s\'affrontent, l\'une attaque, l\'autre defend (toute la journée)' },
  { time: '09:15 - 12:00', title: 'Gestion de crise — Simulation d\'incident cyber (4-6 groupes, session matin)', org: 'CLUSIR ROI' },
  { time: '12:00 - 13:30', title: 'Dejeuner et rencontres professionnelles', isPause: true },
  { isSection: true, title: 'Ateliers de l\'après-midi (sessions paralleles)' },
  { time: '13:30 - 16:30', title: 'CTF — Suite du match attack/defense' },
  { time: '13:30 - 16:30', title: 'Escape Game Cyber Reunion — Escape game immersif cybersécurité', org: 'CYBER REUNION' },
  { time: '13:30 - 16:30', title: 'Atelier technique approfondi (ex : OSINT)', org: 'A CONFIRMER' },
  { time: '13:30 - 16:30', title: 'Gestion de crise — Session après-midi (4-6 groupes)', org: 'CLUSIR ROI' },
  { isSection: true, title: 'Scene ouverte & Clôture' },
  { time: '16:30 - 17:30', title: 'Rumps — Scene ouverte : présentations libres de 5 a 10 minutes' },
  { time: '17:30 - 18:00', title: 'Remise des prix CTF et clôture officielle du CyberTour 2026' },
];
