# CyberTour 4 Etapes — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the single-event CyberTour site into a 4-stage island tour with interactive map, dedicated stage pages, /jobs page, and partner pyramid.

**Architecture:** Astro file-based routing — each page is a `.astro` file in `src/pages/`. Shared layout and reusable components (StageCard, MapReunion, PartnerPyramid, StageLayout) in `src/components/` and `src/layouts/`. Data-driven: stage info lives in a single `src/data/stages.ts` file consumed by all pages.

**Tech Stack:** Astro 6, Tailwind CSS v4, vanilla JS (no framework needed)

**Design doc:** `docs/plans/2026-03-31-cybertour-4-etapes-design.md`

---

### Task 1: Create stage data file

**Files:**
- Create: `src/data/stages.ts`

**Step 1: Create the data file with all 4 stages**

```typescript
export interface Stage {
  id: string;
  name: string;
  direction: string;
  date: string;
  dateShort: string;
  day: string;
  lieu: string;
  lieuFull: string;
  capacity: number;
  theme: string;
  description: string;
  accent: string;       // tailwind color name
  accentHex: string;    // hex for inline styles
  trackNumber: string;
  icon: string;         // SVG path d attribute
  href: string;
  highlights: string[];
}

export const stages: Stage[] = [
  {
    id: 'nord',
    name: 'Etape Nord',
    direction: 'NORD',
    date: 'Lundi 19 Octobre 2026',
    dateShort: 'Lun 19',
    day: 'Jour 1',
    lieu: 'Universite de La Reunion — Moufia',
    lieuFull: 'Campus du Moufia, Allee des Aigues-Marines, 97490 Sainte-Clotilde',
    capacity: 500,
    theme: 'Institutionnel & Table Ronde',
    description: 'Ouverture officielle du CyberTour avec les acteurs institutionnels et politiques de La Reunion. Table ronde, networking VIP et presentation du parcours.',
    accent: 'gold',
    accentHex: '#FFDE59',
    trackNumber: '01',
    icon: 'M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z',
    href: '/nord',
    highlights: ['Region Reunion', 'ANSSI', 'Viginum', 'DINUM', 'SGDSN', 'CCI'],
  },
  {
    id: 'ouest',
    name: 'Etape Ouest',
    direction: 'OUEST',
    date: 'Mardi 20 Octobre 2026',
    dateShort: 'Mar 20',
    day: 'Jour 2',
    lieu: 'Office de l\'Eau',
    lieuFull: 'Office de l\'Eau Reunion, Saint-Paul',
    capacity: 50,
    theme: 'Rencontre Offreurs & Entreprises',
    description: 'Les acteurs de la cybersecurite a La Reunion presentent leurs solutions et offres. Tables rondes thematiques et echanges B2B.',
    accent: 'cyan',
    accentHex: '#22d3ee',
    trackNumber: '02',
    icon: 'M18 18.72a9.094 9.094 0 003.741-7.978 9.1 9.1 0 00-3.741-7.978A8.964 8.964 0 0012 1.05a8.964 8.964 0 00-6 1.714A9.094 9.094 0 002.259 10.742 9.1 9.1 0 006 18.72V21h12v-2.28z',
    href: '/ouest',
    highlights: ['Solutions cyber', 'Tables rondes B2B', 'Networking'],
  },
  {
    id: 'est',
    name: 'Etape Est',
    direction: 'EST',
    date: 'Mercredi 21 Octobre 2026',
    dateShort: 'Mer 21',
    day: 'Jour 3',
    lieu: 'Epitech Reunion',
    lieuFull: 'Epitech Reunion, Saint-Denis / Saint-Benoit',
    capacity: 50,
    theme: 'Formations Cyber a La Reunion',
    description: 'Les ecoles d\'informatique presentent leurs offres de formation en cybersecurite. Speed dating stages et alternances.',
    accent: 'emerald',
    accentHex: '#34d399',
    trackNumber: '03',
    icon: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342',
    href: '/est',
    highlights: ['Ecoles IT', 'Speed dating stages', 'Alternances'],
  },
  {
    id: 'sud',
    name: 'Etape Sud',
    direction: 'SUD',
    date: 'Jeudi 22 — Vendredi 23 Octobre 2026',
    dateShort: 'Jeu 22-Ven 23',
    day: 'Jours 4-5',
    lieu: 'IUT / ESIROI',
    lieuFull: 'IUT de La Reunion / ESIROI, 40 avenue de Soweto, 97410 Saint-Pierre',
    capacity: 150,
    theme: 'Conferences & Ateliers Techniques',
    description: 'Deux jours dedies a la technique : conferences le jeudi, ateliers pratiques le vendredi (CTF, escape game, OSINT, gestion de crise).',
    accent: 'red',
    accentHex: '#DF3C37',
    trackNumber: '04',
    icon: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z',
    href: '/sud',
    highlights: ['Conferences', 'CTF', 'Escape Game', 'OSINT', 'Gestion de crise'],
  },
];
```

**Step 2: Commit**

```bash
git add src/data/stages.ts
git commit -m "feat: add stage data file with 4 CyberTour stages"
```

---

### Task 2: Create shared StageLayout component

**Files:**
- Create: `src/layouts/StageLayout.astro`

**Step 1: Create the stage page layout**

A layout used by all 4 stage pages. Receives a `Stage` object as prop. Renders:
- Hero banner with stage accent color
- Breadcrumb
- Slot for page-specific content
- Infos pratiques section
- Inscription placeholder
- Reuses the main Layout.astro

Structure:
```
<Layout title={stage.name}>
  <Navbar />
  <hero with accent color, stage name, date, lieu, capacity>
  <breadcrumb: Accueil > Etapes > {stage.direction}>
  <slot /> <!-- page-specific content -->
  <section "Infos Pratiques" with address>
  <section "Inscription" placeholder>
  <Footer />
</Layout>
```

The accent color should be applied via CSS custom property `--stage-accent` set to `stage.accentHex` so child elements can use it.

**Step 2: Commit**

```bash
git add src/layouts/StageLayout.astro
git commit -m "feat: add StageLayout shared layout for stage pages"
```

---

### Task 3: Create MapReunion component

**Files:**
- Create: `src/components/MapReunion.astro`

**Step 1: Create the interactive map component**

Uses `reunion-silhouette.png` as background. 4 positioned dots with pulse animation. SVG dashed path connecting the dots. Each dot is a link to the stage page.

Key implementation details:
- Container is `relative` with fixed aspect ratio
- The silhouette image is `absolute`, full size, `opacity-20`, with a gold/navy glow filter
- Each point is `absolute`, positioned with percentage-based top/left coordinates:
  - Nord (Saint-Denis): ~18% top, ~42% left
  - Ouest (Saint-Paul): ~40% top, ~12% left
  - Est (Saint-Benoit): ~35% top, ~82% left
  - Sud (Saint-Pierre): ~75% top, ~30% left
- Each point: `<a>` tag, 16px gold circle with pulse animation + label (date + lieu)
- SVG overlay with dashed polyline connecting the 4 points
- Timeline bar below the map: Lun 19 | Mar 20 | Mer 21 | Jeu 22-Ven 23

Import stages from `src/data/stages.ts` and iterate.

**Step 2: Commit**

```bash
git add src/components/MapReunion.astro
git commit -m "feat: add interactive Reunion map component with 4 tour stages"
```

---

### Task 4: Create StageCard component

**Files:**
- Create: `src/components/StageCard.astro`

**Step 1: Create bento-style stage card**

Reusable card for the homepage etapes grid. Receives a `Stage` object. Shows:
- Accent color left border (reuse existing bento-track pattern from global.css)
- Track number, stage name, theme
- Date + lieu + capacity badge
- Highlight tags
- CTA link "Decouvrir →"

Follow the existing bento-track styling pattern (bento-track--gold, --cyan, --emerald, --red classes already exist in global.css).

**Step 2: Commit**

```bash
git add src/components/StageCard.astro
git commit -m "feat: add StageCard bento component for homepage"
```

---

### Task 5: Create PartnerPyramid component

**Files:**
- Create: `src/components/PartnerPyramid.astro`

**Step 1: Create the pyramid layout**

Pyramid structure with 5 levels, each wider than the previous:
1. **Organisateur** — CLUSIR logo (centered, large)
2. **Partenaires** — Univ, IUT, ESIROI, Cyber Reunion logos in row
3. **Sponsors Gold** — 2 fake logos (e.g., "CyberShield Corp", "SecureIsland")
4. **Sponsors Silver** — 3 fake logos
5. **Sponsors Bronze** — 4 fake logos

For fake sponsor logos, use styled text placeholders in rounded boxes (no need for actual image files).

Use the existing `partner-bubble` class for logo containers. Each level has a label (font-mono, tracking-widest) and appropriate spacing. The pyramid widens via `max-w-xs`, `max-w-sm`, `max-w-md`, `max-w-lg`, `max-w-xl` per level.

**Step 2: Commit**

```bash
git add src/components/PartnerPyramid.astro
git commit -m "feat: add PartnerPyramid component with sponsor tiers"
```

---

### Task 6: Create Navbar component (extract from index.astro)

**Files:**
- Create: `src/components/Navbar.astro`
- Modify: `src/pages/index.astro` (remove inline navbar)

**Step 1: Extract navbar into component**

Move the existing `<nav>` from index.astro into a standalone component. Update links:
- A propos → `/#about`
- Les Etapes → `/#etapes` (renamed from Programme)
- Speakers → `/#speakers`
- Sponsors → `/#sponsors`
- S'inscrire → `/#inscription`

Accept a `currentPage` prop to highlight the active link on stage pages.

**Step 2: Commit**

```bash
git add src/components/Navbar.astro src/pages/index.astro
git commit -m "refactor: extract Navbar into reusable component"
```

---

### Task 7: Create Footer component (extract from index.astro)

**Files:**
- Create: `src/components/Footer.astro`
- Modify: `src/pages/index.astro` (remove inline footer)

**Step 1: Extract footer**

Move footer from index.astro. Update text: "19-24 Octobre 2026 — 4 etapes a La Reunion". Add links to /mentions-legales.

**Step 2: Commit**

```bash
git add src/components/Footer.astro src/pages/index.astro
git commit -m "refactor: extract Footer into reusable component"
```

---

### Task 8: Rewrite homepage (index.astro)

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Rewrite the page**

Import and use the new components. Structure:
1. `<Navbar />`
2. Hero section — update date to "19 — 24 OCTOBRE 2026", location to "4 etapes · Toute l'ile", countdown target to 2026-10-19
3. About section — adapt text to tour format, update stats (4 Etapes, 5 Jours, keep 2025 stats)
4. **New: Carte du Tour section** — `<MapReunion />`
5. **New: Etapes section** — bento grid of 4 `<StageCard />` using data from stages.ts
6. Speakers section — keep as-is (encrypted teaser)
7. **New: Partenaires section** — `<PartnerPyramid />`
8. Devenir Sponsor section — keep existing pricing cards
9. Replay 2025 — keep as-is
10. Inscription — update to placeholder "Inscription bientot disponible"
11. Contact — update location info for multi-site
12. `<Footer />`

**Step 2: Verify dev server**

Run: `npm run dev`
Check: homepage loads, map displays, cards link correctly, all sections render.

**Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rewrite homepage with tour map, stage cards, and partner pyramid"
```

---

### Task 9: Create stage pages (nord, ouest, est, sud)

**Files:**
- Create: `src/pages/nord.astro`
- Create: `src/pages/ouest.astro`
- Create: `src/pages/est.astro`
- Create: `src/pages/sud.astro`

**Step 1: Create /nord page**

```astro
---
import StageLayout from '../layouts/StageLayout.astro';
import { stages } from '../data/stages';
const stage = stages.find(s => s.id === 'nord')!;
---
<StageLayout stage={stage}>
  <!-- Programme placeholder -->
  <section class="py-20">
    <div class="max-w-5xl mx-auto px-6">
      <h2>Programme</h2>
      <p>Programme en cours de finalisation.</p>
      <!-- Intervenants institutionnels: logos Region, ANSSI, Viginum, etc. -->
    </div>
  </section>
</StageLayout>
```

Each page follows this pattern with stage-specific content:
- **Nord:** Logos institutionnels (Region, Prefet, ANSSI, Viginum, DINUM, SGDSN, Renater, CCI, Cyber Reunion), table ronde placeholder
- **Ouest:** Format B2B, tables rondes, offreurs cyber
- **Est:** Ecoles (Epitech, Univ, etc.), lien CTA vers /jobs
- **Sud:** Onglets J1 (conferences) / J2 (ateliers: CTF, escape game, OSINT, gestion de crise)

**Step 2: Verify all routes**

Run: `npm run dev`
Navigate to /nord, /ouest, /est, /sud — all should render.

**Step 3: Commit**

```bash
git add src/pages/nord.astro src/pages/ouest.astro src/pages/est.astro src/pages/sud.astro
git commit -m "feat: add 4 stage pages (nord, ouest, est, sud)"
```

---

### Task 10: Create /jobs page

**Files:**
- Create: `src/pages/jobs.astro`

**Step 1: Create the speed dating page**

Structure:
- Hero: "Rencontres Stages & Alternances Cyber" — linked to Etape EST
- Section: Format explication (what is speed dating, how it works)
- Section: Entreprises participantes (placeholder grid)
- Section: Etudiants (comment se preparer, quoi apporter)
- Section: Inscription (placeholder, separate for entreprises and etudiants)

Use basic placeholder content for now. **Content to be refined later with cyber-marketing-creative skill.**

**Step 2: Commit**

```bash
git add src/pages/jobs.astro
git commit -m "feat: add /jobs speed dating page (placeholder content)"
```

---

### Task 11: Create /mentions-legales page

**Files:**
- Create: `src/pages/mentions-legales.astro`

**Step 1: Create legal page**

Standard French mentions legales:
- Editeur du site (CLUSIR Reunion Ocean Indien)
- Hebergeur (placeholder — a definir)
- Politique de confidentialite: aucun cookie, aucun traceur
- Contact: evenements@rt-iut.re

**Step 2: Commit**

```bash
git add src/pages/mentions-legales.astro
git commit -m "feat: add mentions legales page (no cookies policy)"
```

---

### Task 12: Update Layout.astro countdown and metadata

**Files:**
- Modify: `src/layouts/Layout.astro`

**Step 1: Update**

- Change countdown target date from `2026-10-22` to `2026-10-19` (first day of tour)
- Update default description meta to mention "4 etapes, 19-24 Octobre 2026"

**Step 2: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "fix: update countdown to Oct 19 and meta description for tour format"
```

---

### Task 13: Visual QA and final polish

**Step 1: Run dev server and check all pages**

Run: `npm run dev`

Checklist:
- [ ] Homepage: hero, about, map, stage cards, speakers, pyramid, sponsors, replay, inscription, contact, footer
- [ ] /nord: renders with gold accent
- [ ] /ouest: renders with cyan accent
- [ ] /est: renders with emerald accent, link to /jobs works
- [ ] /sud: renders with red accent, J1/J2 structure
- [ ] /jobs: renders with correct content
- [ ] /mentions-legales: renders
- [ ] Navbar links work from all pages (/#about etc.)
- [ ] Mobile responsive: hamburger menu, cards stack

**Step 2: Build**

Run: `npm run build`
Expected: Clean build, no errors.

**Step 3: Final commit**

```bash
git add -A
git commit -m "polish: visual QA fixes and responsive adjustments"
```

---

### Task 14: Marketing content for /jobs page

**Step 1: Invoke cyber-marketing-creative skill**

Use the `cyber-marketing-creative` agent to write compelling content for /jobs:
- Accroche pour les etudiants
- Accroche pour les entreprises
- Description du format speed dating
- Call to action

**Step 2: Update /jobs page with final content**

**Step 3: Commit**

```bash
git add src/pages/jobs.astro
git commit -m "content: add marketing copy for /jobs speed dating page"
```
