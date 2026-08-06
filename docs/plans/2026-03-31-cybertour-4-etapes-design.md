# Design — CyberTour Reunion 2026 : 4 Etapes

**Date:** 2026-03-31
**Branche:** `feature/cybertour-4-etapes`
**Stack:** Astro 6 + Tailwind CSS v4

## Contexte

Le CyberTour Reunion 2026 passe d'un evenement unique (IUT/ESIROI, 1 jour) a un tour de l'ile en 4 etapes sur une semaine complete (19-24 octobre 2026).

## Planning du tour

| Jour | Etape | Lieu | Capacite | Theme |
|------|-------|------|----------|-------|
| Lun 19 | NORD | Universite Moufia | 500 (amphi) | Institutionnel + table ronde |
| Mar 20 | OUEST | Office de l'eau | 50 | Rencontre offreurs/entreprises cyber |
| Mer 21 | EST | Epitech | 50 | Formations cyber + speed dating stages |
| Jeu 22 | SUD J1 | IUT/ESIROI | 150 | Conferences techniques |
| Ven 23 | SUD J2 | IUT/ESIROI | - | Ateliers : CTF, escape game, OSINT, gestion de crise |

## Architecture des pages

### 7 pages au total

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Landing page principale avec carte du tour |
| Etape Nord | `/nord` | Detail journee institutionnelle |
| Etape Ouest | `/ouest` | Detail rencontre offreurs/entreprises |
| Etape Est | `/est` | Detail formations + lien /jobs |
| Etape Sud | `/sud` | Detail conferences J1 + ateliers J2 |
| Jobs | `/jobs` | Speed dating stages/alternances (contenu marketing dedie) |
| Mentions legales | `/mentions-legales` | ML + politique pas de cookies |

### Page d'accueil — Sections

1. **Navbar** — Liens : A propos, Les Etapes, Speakers, Sponsors, S'inscrire
2. **Hero** — CYBER TOUR // REUNION, "19-24 Octobre 2026", "4 etapes - Toute l'ile", countdown vers le 19 oct
3. **A propos** — Texte adapte au format tour, stats : 4 Etapes, 5 Jours + stats 2025 (220+ participants, 600+ vues YT)
4. **Carte du Tour** — Silhouette reunion-silhouette.png + 4 points pulsants gold + trace pointille du circuit N→O→E→S + timeline horizontale Lun-Ven
5. **Etapes (bento grid)** — 4 cartes resume avec couleur d'accent, date, lieu, theme, CTA "Decouvrir"
6. **Speakers** — Style encrypted/teaser (inchange)
7. **Pyramide Partenaires** — Organisateur (CLUSIR) → Partenaires (Univ, IUT, ESIROI, Cyber Reunion) → Sponsors Gold/Silver/Bronze
8. **Devenir Sponsor** — Cartes pricing Bronze/Silver/Gold (existantes)
9. **Replay 2025** — Inchange
10. **Inscription** — Placeholder "Inscription bientot disponible"
11. **Contact** — Adapte multi-lieux
12. **Footer** — Dates et lieux mis a jour

### Pages Etapes — Squelette commun

- Hero leger avec couleur d'accent (Nord=gold, Ouest=cyan, Est=emerald, Sud=red)
- Breadcrumb : Accueil > Etapes > [Nom]
- Titre etape + date + lieu + capacite
- Section Programme (timeline verticale, placeholder pour l'instant, onglets J1/J2 pour le Sud)
- Section Intervenants/Partenaires specifique a l'etape
- Section Infos pratiques (adresse, acces)
- Section Inscription (placeholder)

### Page /jobs

- Page dediee speed dating stages/alternances
- Liee a l'etape EST (Epitech, mercredi 21)
- Contenu marketing a travailler avec skill cyber-marketing-creative
- Sections : explication format, entreprises participantes, etudiants (preparation), inscription

## Couleurs d'accent par etape

- **NORD** : gold (#FFDE59) — institutionnel, prestige
- **OUEST** : cyan (#22d3ee) — tech, solutions
- **EST** : emerald (#34d399) — formation, croissance
- **SUD** : red (#DF3C37) — technique, intense

## Pyramide partenaires

```
         ┌─────────────┐
         │ ORGANISATEUR │  CLUSIR
         └─────────────┘
      ┌────────────────────┐
      │    PARTENAIRES     │  Univ, IUT, ESIROI, Cyber Reunion
      └────────────────────┘
   ┌──────────────────────────┐
   │     SPONSORS GOLD        │  (exemples fictifs)
   └──────────────────────────┘
  ┌────────────────────────────────┐
  │       SPONSORS SILVER          │  (exemples fictifs)
  └────────────────────────────────┘
┌──────────────────────────────────────┐
│         SPONSORS BRONZE              │  (exemples fictifs)
└──────────────────────────────────────┘
```

## Carte interactive

- Base : `reunion-silhouette.png` en fond semi-transparent avec glow
- 4 points lumineux positionnes en CSS (absolute) aux coordonnees approximatives
- Trace en pointilles SVG reliant N→O→E→S
- Chaque point est un lien cliquable vers la page etape
- Labels avec date + nom du lieu
- Timeline horizontale en dessous

## Inscription

- Placeholder partout pour l'instant
- Futur : Weezevent unique avec billets par etape
- Widget integre sur la home + lien sur chaque page etape

## TODO hors scope site

- Deploiement Clever Cloud (a etudier)
- Analytics Matomo ou outil open-source RGPD-friendly (a etudier)
