# Refonte des étapes CyberTour 2026 — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Faire passer le site de 3 étapes pilotées par le CLUSIR à 6 étapes de même rang réparties sur deux semaines, avec l'organisateur nommé sur chacune.

**Architecture:** La chronologie devient la colonne vertébrale : un nouveau composant `TimelineParcours.astro` porte la frise du 20 au 29 octobre, `MapReunion.astro` est rétrogradé en encart à ses côtés, et `StageCard.astro` gagne un bloc « Accueillie par » uniforme. Les accents par étape disparaissent au profit d'une couleur unique.

**Tech Stack:** Astro 7.1.6 (SSG), Tailwind CSS 4, bun 1.3.14. Pas de framework de test.

**Spec de référence :** `docs/plans/2026-08-06-refonte-etapes-design.md`

---

## Note sur la vérification

Ce dépôt n'a **aucun framework de test** — c'est un site statique assumé comme tel dans `CLAUDE.md`. Le TDD classique ne s'applique pas.

### ⚠️ `bun run build` n'est pas un typecheck

Corrigé après exécution de la Task 1. `astro build` passe par esbuild/vite et **ne vérifie aucun type** — seul `astro check` le ferait, et ni `@astrojs/check` ni `typescript` ne sont installés (le projet est volontairement minimal ; les ajouter serait une extension de périmètre non demandée).

Conséquence : retirer un champ du type `Stage` ne casse pas le build. Les composants qui le consommaient interpolent silencieusement `undefined` dans les attributs `style`, et le site se construit « avec succès » en produisant des couleurs mortes.

**Le garde-fou réel est donc l'assertion suivante, à lancer après chaque build — sur _toutes_ les pages, jamais sur la seule `index.html` :**

```bash
for f in $(find dist -name "*.html" | sort); do
  printf "%-34s %s\n" "${f#dist/}" "$(grep -o undefined "$f" | wc -l | tr -d ' ')"
done
```

Attendu : **0 partout**.

Mesurer la seule `index.html` donne un faux négatif — c'est arrivé à la Task 4, où le compte est tombé à 0 sur la home alors que `/nord`, `/ouest` et `/sud` en portaient encore 46 à 49 chacune, et `/est` 12. Les composants de la home et ceux des pages d'étape sont disjoints : une page propre ne dit rien des autres.

Elle attrape exactement la classe de bug que le build laisse passer, sans ajouter la moindre dépendance. Elle vaut mieux qu'un typecheck ici : elle vérifie le rendu, pas l'intention.

### Les quatre niveaux de vérification

1. **Assertion `grep` sur le source** — joue le rôle du test unitaire.
2. **`bun run build`** — vérifie seulement que ça compile. Rien de plus.
3. **`grep undefined dist/`** — le vrai filet, celui qui attrape les trous de template.
4. **Sonde Interceptor** sur le build de preview — le test de bout en bout.

`bun`, jamais `npm` (règle PAI). Commit après chaque tâche.

---

## Contradiction résolue en cours de rédaction

La spec (D9) prévoit que `/est` redirige vers `/epitech`. Mais l'art. 8.8 de la charte interdit de publier une page d'étape avant réception de la fiche annexe F — donc `/epitech` **n'existe pas encore**, et la redirection pointerait vers un 404.

**Résolution retenue (Task 8) :** la cible de la redirection est *dérivée de la donnée*. Tant que l'étape Epitech est `published: false`, `/est` redirige vers `/#etapes`. Dès que la fiche arrive et que `published` passe à `true`, la redirection bascule seule vers `/epitech`. Aucune intervention manuelle, aucun 404, aucune violation de la charte.

---

## Structure des fichiers

| Fichier | Responsabilité après refonte |
|---|---|
| `src/data/stages.ts` | Source de vérité des 6 étapes + les deux constantes d'accent. Ne contient plus de couleur par étape. |
| `src/components/TimelineParcours.astro` | **Créé.** La frise chronologique et le titre de section. Possède le *quand*. |
| `src/components/MapReunion.astro` | Encart cartographique seul. Possède le *où*. Ne porte plus de titre. |
| `src/components/StageCard.astro` | La carte d'une étape. Possède le *quoi*. Gère l'état non publié. |
| `src/pages/index.astro` | Assemble frise + encart + grille, et porte le récit (hero, chapeau). |
| `src/layouts/Layout.astro` | Meta et JSON-LD. |
| `src/pages/est.astro` | Redirection dérivée. |

---

### Task 1 : Modèle de données — les 6 étapes

**Files:**
- Modify: `src/data/stages.ts` (réécriture complète)

- [ ] **Step 1 : Écrire l'assertion qui échoue**

```bash
grep -c "^  {" src/data/stages.ts
```
Attendu **maintenant** : `3`. Attendu **après** : `6`.

- [ ] **Step 2 : Réécrire le fichier**

Remplacer intégralement `src/data/stages.ts` par :

```ts
/**
 * Accent unique du tour. Les étapes n'ont plus de couleur propre : la couleur
 * ne dit plus « quelle étape » mais « ce tour est un ». Décision D8 de
 * docs/plans/2026-08-06-refonte-etapes-design.md.
 *
 * Deux valeurs et non une : #ce463a ne passe pas WCAG AA en texte sur fond
 * sombre (4,44:1 sur #0f1a30). PAINT peint les surfaces, TEXT écrit les mots.
 */
export const ACCENT_PAINT = "#ce463a";
export const ACCENT_TEXT = "#e56b5f";

export interface Stage {
  id: string;
  name: string;
  direction: string;
  date: string;
  dateShort: string;
  day: string;
  lieu: string;
  lieuFull: string;
  commune: string;
  capacity: number | null;
  theme: string;
  description: string;
  trackNumber: string;
  href: string;
  highlights: string[];
  /** Structure organisatrice réelle — art. 7.3 de la charte d'accueil. */
  host: string;
  /**
   * Faux tant que la fiche annexe F n'est pas reçue (art. 8.8 : « sans fiche,
   * pas de page »). Une étape non publiée s'affiche mais n'est pas cliquable.
   */
  published: boolean;
}

const CLUSIR = "CLUSIR Réunion Océan Indien";

export const stages: Stage[] = [
  {
    id: "nord",
    name: "Étape Nord",
    direction: "NORD",
    date: "Mardi 20 Octobre 2026",
    dateShort: "Mardi 20 Oct",
    day: "Jour 1",
    lieu: "Campus Moufia - Université de La Réunion",
    lieuFull:
      "Campus du Moufia, Allée des Aigues-Marines, 97490 Sainte-Clotilde",
    commune: "Sainte-Clotilde",
    capacity: 150,
    theme: "Institutionnel & Tables Rondes",
    description:
      "Matinée d'ouverture officielle du CyberTour Réunion (8h-12h). Rencontres institutionnelles, interventions des personnalités publiques et tables rondes stratégiques autour de la souveraineté numérique. Présentation du parcours CyberTour 2026.",
    trackNumber: "01",
    href: "/nord",
    highlights: [
      "Acteurs institutionnels",
      "Tables rondes",
      "Personnalités publiques",
    ],
    host: CLUSIR,
    published: true,
  },
  {
    id: "ouest",
    name: "Étape Ouest",
    direction: "OUEST",
    date: "Mercredi 21 Octobre 2026",
    dateShort: "Mercredi 21 Oct",
    day: "Jour 2",
    lieu: "Office de l'Eau Réunion - Saint-Paul",
    lieuFull: "Office de l'Eau Réunion, Saint-Paul",
    commune: "Saint-Paul",
    capacity: 50,
    theme: "Offreurs Cyber à La Réunion",
    description:
      "Journée dédiée à l'écosystème cyber réunionnais. Gestion de crise le matin, présentations thématiques par les offreurs locaux l'après-midi. Chaque intervenant aborde une problématique concrète, pas un catalogue de services.",
    trackNumber: "02",
    href: "/ouest",
    highlights: ["Gestion de crise", "Thématiques cyber", "Écosystème local"],
    host: CLUSIR,
    published: true,
  },
  {
    id: "sud",
    name: "Étape Sud",
    direction: "SUD",
    date: "Jeudi 22 - Vendredi 23 Octobre 2026",
    dateShort: "Jeu 22 - Ven 23 Oct",
    day: "Jours 3-4",
    lieu: "Campus IUT / ESIROI - Université de La Réunion",
    lieuFull:
      "IUT de La Réunion / ESIROI, 40 avenue de Soweto, 97410 Saint-Pierre",
    commune: "Saint-Pierre",
    capacity: 150,
    theme: "Conférences & Ateliers Techniques",
    description:
      "Deux jours de conférences techniques et d'ateliers pratiques. Jour 1 : conférences en amphi. Jour 2 : CTF, Escape Game, gestion de crise, OSINT, scène ouverte (Rumps) et rencontres professionnelles. Le point d'orgue du CyberTour.",
    trackNumber: "03",
    href: "/sud",
    highlights: [
      "Conférences techniques",
      "CTF & Ateliers",
      "Rumps & Scène ouverte",
    ],
    host: CLUSIR,
    published: true,
  },
  {
    id: "expernet",
    name: "Étape Expernet",
    direction: "OUEST",
    date: "Mardi 27 Octobre 2026",
    dateShort: "Mardi 27 Oct",
    day: "Jour 5",
    lieu: "Locaux Expernet - Le Port",
    lieuFull: "Expernet, Parc 2000, 3 avenue Théodore Drouhet, 97420 Le Port",
    commune: "Le Port",
    capacity: null,
    theme: "Programmation libre de l'hôte",
    description:
      "Étape accueillie par Expernet dans ses locaux du Port. Le programme est défini par l'hôte et sera publié dès réception de sa fiche d'étape.",
    trackNumber: "04",
    href: "/expernet",
    highlights: ["Programme à venir"],
    host: "Expernet",
    published: false,
  },
  {
    id: "edn",
    name: "Étape EDN",
    direction: "NORD",
    date: "Mercredi 28 Octobre 2026",
    dateShort: "Mercredi 28 Oct",
    day: "Jour 6",
    lieu: "Locaux EDN - Sainte-Clotilde",
    lieuFull:
      "École Du Numérique, 12 rue Gabriel de Kerveguen, 97490 Sainte-Clotilde",
    commune: "Sainte-Clotilde",
    capacity: null,
    theme: "Programmation libre de l'hôte",
    description:
      "Étape accueillie par l'École Du Numérique dans ses locaux de Sainte-Clotilde. Le programme est défini par l'hôte et sera publié dès réception de sa fiche d'étape.",
    trackNumber: "05",
    href: "/edn",
    highlights: ["Programme à venir"],
    host: "EDN",
    published: false,
  },
  {
    id: "epitech",
    name: "Étape Epitech",
    direction: "EST",
    date: "Jeudi 29 Octobre 2026",
    dateShort: "Jeudi 29 Oct",
    day: "Jour 7",
    lieu: "Locaux Epitech - Saint-André",
    lieuFull: "Epitech, 234 chemin de la Pente Sassy, 97440 Saint-André",
    commune: "Saint-André",
    capacity: null,
    theme: "Programmation libre de l'hôte",
    description:
      "Étape accueillie par Epitech dans ses locaux de Saint-André. Le programme est défini par l'hôte et sera publié dès réception de sa fiche d'étape.",
    trackNumber: "06",
    href: "/epitech",
    highlights: ["Programme à venir"],
    host: "Epitech",
    published: false,
  },
];
```

- [ ] **Step 3 : Vérifier l'assertion**

L'indentation discrimine les champs d'objet (4 espaces) de la déclaration d'interface (2 espaces) — sans elle, le compte inclut la déclaration et renvoie 7 :

```bash
grep -c '^  {'            src/data/stages.ts   # attendu : 6
grep -c '^    host:'      src/data/stages.ts   # attendu : 6
grep -c '^    published:' src/data/stages.ts   # attendu : 6
```

- [ ] **Step 4 : Constater la casse — silencieuse, pas bruyante**

```bash
bun run build 2>&1 | tail -5
grep -o "undefined" dist/index.html | wc -l
```

Attendu : le build **RÉUSSIT** (`Complete!`), et le second compte est de l'ordre de **138**. C'est la casse attendue : `StageCard.astro`, `MapReunion.astro` et `est.astro` lisent encore `stage.accentHex`, désormais absent, et interpolent `undefined` dans leurs attributs `style`.

Ne rien réparer ici — les tâches 2 à 4 s'en chargent. Ce compte doit retomber à **0** à la Task 10.

- [ ] **Step 5 : Commit**

```bash
git add src/data/stages.ts
git commit -m "Passe le parcours a six etapes et nomme chaque organisateur"
```

---

### Task 2 : `StageCard` — accent unique, bloc « Accueillie par », état non publié

**Files:**
- Modify: `src/components/StageCard.astro`

- [ ] **Step 1 : Remplacer le frontmatter (lignes 1-20)**

```astro
---
import { ACCENT_PAINT, ACCENT_TEXT, type Stage } from "../data/stages";

interface Props {
  stage: Stage;
}

const { stage } = Astro.props;

/* Une étape non publiée (art. 8.8 — fiche annexe F non reçue) rend une carte
   inerte plutôt qu'un lien mort. Le composant racine change de balise. */
const Root = stage.published ? "a" : "div";
const rootProps = stage.published
  ? { href: stage.href, style: "touch-action: manipulation;" }
  : {};
---
```

- [ ] **Step 2 : Remplacer les références d'accent, ligne par ligne**

`stage.accentHex` apparaît **15 fois sur 9 lignes**. La règle est simple — **une surface peinte prend `ACCENT_PAINT`, un texte lu prend `ACCENT_TEXT`** — mais elle se décide occurrence par occurrence, pas par un chercher-remplacer global.

Ce Step traite 7 des 9 lignes. Les lignes 62 et 99 sont réécrites entièrement aux Steps 4 et 5 — **ne pas y toucher ici**.

| Ligne | Contexte | Occurrences → remplacement |
|---|---|---|
| 34 | barre haute, `linear-gradient(90deg, …, …60)` | 2 → `ACCENT_PAINT`, `ACCENT_PAINT` |
| 40 | halo de survol, `background:` | 1 → `ACCENT_PAINT` |
| 49 | pastille du numéro, `background: …15` · `color:` · `border: …30` | 3 → `ACCENT_PAINT`, **`ACCENT_TEXT`**, `ACCENT_PAINT` |
| 55 | `dateShort`, `color:` | 1 → **`ACCENT_TEXT`** |
| 73 | icône de lieu, `color: …80` | 1 → `ACCENT_PAINT` *(tracé SVG via `currentColor`, pas du texte lu)* |
| 81 | filet séparateur, `linear-gradient(90deg, …30, transparent)` | 1 → `ACCENT_PAINT` |
| 88 | étiquettes `highlights`, `background: …10` · `color: …CC` | 2 → `ACCENT_PAINT`, **`ACCENT_TEXT`** |

Supprimer par ailleurs `trackClass` du `class:list` et remplacer `"group topic-card bento-track"` par `"group topic-card"`.

Contrôle intermédiaire — compter les **occurrences**, pas les lignes. Attention : `grep -o` compte aussi les deux identifiants présents dans la ligne d'`import` du frontmatter, d'où le `+1` sur chaque total.

```bash
grep -o "ACCENT_PAINT" src/components/StageCard.astro | wc -l   # attendu : 9  (8 dans le corps + 1 import)
grep -o "ACCENT_TEXT"  src/components/StageCard.astro | wc -l   # attendu : 4  (3 dans le corps + 1 import)
grep -o "accentHex"    src/components/StageCard.astro | wc -l   # attendu : 4  (jauge et CTA, traités plus loin)
```

- [ ] **Step 3 : Remplacer la balise racine et l'ouverture**

```astro
<Root
  {...rootProps}
  class:list={[
    "group topic-card",
    "relative block overflow-hidden rounded-2xl border border-white/[0.08] transition-all duration-400",
    stage.published ? "hover:border-white/[0.15]" : "opacity-90",
  ]}
>
```

Et la fermeture, ligne finale : `</Root>`.

- [ ] **Step 4 : Rendre la jauge conditionnelle**

Remplacer le bloc `{stage.capacity} places` par :

```astro
{stage.capacity !== null && (
  <span
    class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-mono font-bold"
    style={`background: ${ACCENT_PAINT}18; color: ${ACCENT_TEXT}; border: 1px solid ${ACCENT_PAINT}25;`}
  >
    {stage.capacity} places
  </span>
)}
```

- [ ] **Step 5 : Ajouter le bloc « Accueillie par » et adapter le CTA**

Remplacer le bloc CTA final (`<!-- CTA -->` jusqu'à son `</div>`) par :

```astro
    <!-- Accueillie par — art. 7.3 de la charte : « une étape du CyberTour
         organisée par [structure hôte] ». Champ uniforme sur les six étapes,
         CLUSIR compris : la distinction est factuelle, jamais hiérarchique. -->
    <div class="pt-5 border-t border-white/[0.08]">
      <p class="font-mono text-[10px] tracking-[0.19em] uppercase text-white/40">
        Accueillie par
      </p>
      <p class="font-display font-semibold text-white/90 mt-1">{stage.host}</p>
    </div>

    {stage.published ? (
      <div class="flex items-center justify-between mt-5">
        <span
          class="inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase group-hover:gap-3 transition-all duration-300"
          style={`color: ${ACCENT_TEXT}`}
        >
          Découvrir l'étape
          <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>
    ) : (
      <p class="mt-5 font-mono text-xs uppercase tracking-wider text-white/40">
        Programme à venir
      </p>
    )}
```

- [ ] **Step 6 : Vérifier l'état final du composant**

```bash
grep -o "accentHex"     src/components/StageCard.astro | wc -l   # attendu : 0
grep -o "ACCENT_PAINT"  src/components/StageCard.astro | wc -l   # attendu : 11  (10 dans le corps + 1 import)
grep -o "ACCENT_TEXT"   src/components/StageCard.astro | wc -l   # attendu : 6   (5 dans le corps + 1 import)
grep -c  "Accueillie par" src/components/StageCard.astro         # attendu : 2   (le commentaire + le libellé)
grep -c  "bento-track"    src/components/StageCard.astro         # attendu : 0
```

Le compte du corps se décompose ainsi : 8 `PAINT` + 3 `TEXT` posés au Step 2, plus 2 `PAINT` + 1 `TEXT` dans la jauge du Step 4, plus 1 `TEXT` dans le CTA du Step 5. Le commentaire du Step 5 commence lui-même par « Accueillie par », d'où le compte de 2 et non de 1.

- [ ] **Step 6bis : Ne pas dire deux fois la même chose**

`highlights` et le CTA de repli portaient tous deux la phrase « Programme à venir », qui s'affichait donc **deux fois sur la même carte**, à trois lignes d'intervalle. Deux corrections, dans deux fichiers :

Dans `src/data/stages.ts`, les trois étapes non publiées prennent `highlights: []` — une étape dont le programme est inconnu n'a pas de thématique à annoncer.

Dans `src/components/StageCard.astro`, envelopper le bloc des tags pour que le conteneur disparaisse avec son contenu — sinon sa marge `mb-6` creuse un trou au milieu de la carte :

```astro
{stage.highlights.length > 0 && (
  <div class="flex flex-wrap gap-2 mb-6">
    …
  </div>
)}
```

Contrôle :
```bash
bun run build && grep -o "Programme à venir" dist/index.html | wc -l   # attendu : 3, une par étape non publiée
```

- [ ] **Step 7 : Commit**

```bash
git add src/components/StageCard.astro
git commit -m "Carte d'etape : accent unique, hote nomme, etat non publie"
```

---

### Task 3 : `TimelineParcours` — la frise chronologique

**Files:**
- Create: `src/components/TimelineParcours.astro`

- [ ] **Step 1 : Créer le fichier**

```astro
---
import { stages, ACCENT_PAINT, ACCENT_TEXT } from "../data/stages";

/* La frise possède le « quand ». Elle ne dit ni le lieu précis (c'est la
   carte) ni le contenu (c'est la carte d'étape) — cette frontière est ce qui
   empêche les trois objets de se marcher dessus.

   Ruban continu sans chapitrage : le trou du 24 au 26 est une respiration,
   pas une frontière. Décision D5. */
---

<div class="max-w-6xl mx-auto">
  <!-- Frise : horizontale à partir de md, verticale en dessous -->
  <ol class="hidden md:flex relative list-none m-0 p-0 pt-10">
    <!-- Ligne de liaison -->
    <div
      class="absolute top-[calc(2.5rem+7px)] left-[6%] right-[6%] h-px"
      aria-hidden="true"
      style="background: linear-gradient(90deg, transparent, rgba(255,255,255,.22) 8%, rgba(255,255,255,.22) 92%, transparent);"
    ></div>

    {stages.map((stage) => (
      <li class="flex-1 text-center relative">
        <span
          class="absolute -top-8 left-0 right-0 font-mono text-[11px] tracking-[0.1em] text-white/50"
        >{stage.dateShort}</span>
        <span
          class="block w-[15px] h-[15px] rounded-full mx-auto mb-4 relative z-10"
          style={`background: ${ACCENT_PAINT}; box-shadow: 0 0 0 3px #0f1a30, 0 0 14px ${ACCENT_PAINT}80;`}
          aria-hidden="true"
        ></span>
        <span class="font-mono text-[11px] tracking-[0.16em] font-bold" style={`color: ${ACCENT_TEXT};`}>
          {stage.trackNumber} · {stage.direction}
        </span>
        <span class="block font-display font-semibold text-sm text-white mt-1 mb-2">
          {stage.name.replace("Étape ", "")}
        </span>
        <span class="block font-mono text-[10px] text-white/40 leading-relaxed">
          accueillie par
          <span class="block text-white/75 mt-0.5">{stage.host}</span>
        </span>
      </li>
    ))}
  </ol>

  <!-- Repli vertical sous md -->
  <ol class="md:hidden relative list-none m-0 p-0 pl-9">
    <div class="absolute left-[7px] top-2 bottom-2 w-px bg-white/15" aria-hidden="true"></div>
    {stages.map((stage) => (
      <li class="relative pb-7 last:pb-0">
        <span
          class="absolute -left-9 top-1 w-[15px] h-[15px] rounded-full"
          style={`background: ${ACCENT_PAINT}; box-shadow: 0 0 0 3px #0f1a30;`}
          aria-hidden="true"
        ></span>
        <span class="font-mono text-[11px] tracking-[0.1em] text-white/50">{stage.dateShort}</span>
        <span class="block font-display font-semibold text-white mt-0.5">
          <span class="font-mono text-[11px] tracking-[0.16em] mr-2" style={`color: ${ACCENT_TEXT};`}>
            {stage.trackNumber} · {stage.direction}
          </span>
          {stage.name}
        </span>
        <span class="block font-mono text-[11px] text-white/40 mt-1">
          accueillie par <span class="text-white/75">{stage.host}</span>
        </span>
      </li>
    ))}
  </ol>
</div>
```

- [ ] **Step 2 : Vérifier**

```bash
test -f src/components/TimelineParcours.astro && echo OK
grep -c "accueillie par" src/components/TimelineParcours.astro   # attendu : 2
```

- [ ] **Step 3 : Commit**

```bash
git add src/components/TimelineParcours.astro
git commit -m "Ajoute la frise chronologique du parcours"
```

---

### Task 4 : `MapReunion` — rétrogradation en encart

**Files:**
- Modify: `src/components/MapReunion.astro`

- [ ] **Step 1 : Remplacer le frontmatter**

```astro
---
import { stages, ACCENT_PAINT } from "../data/stages";

/* La carte possède le « où » et rien d'autre. Elle a perdu son titre et son
   statut de pièce maîtresse au profit de la frise (décision D6) : elle est
   désormais un encart. Le jour où le tour sort de La Réunion (art. 15 de la
   charte), on retire ce composant sans toucher à la structure de la page.

   Positions en pourcentage sur la silhouette, relevées sur les communes
   réelles. Deux étapes au Nord et deux à l'Ouest : les doublons sont assumés
   (décision D7), les pastilles sont donc volontairement décalées. */
const positions: Record<string, { top: number; left: number }> = {
  nord:     { top: 8,  left: 42 },  // Campus Moufia, Sainte-Clotilde
  ouest:    { top: 33, left: 13 },  // Office de l'Eau Réunion, Saint-Paul
  sud:      { top: 95, left: 42 },  // IUT / ESIROI, Saint-Pierre
  expernet: { top: 23, left: 17 },  // Le Port
  edn:      { top: 12, left: 52 },  // Sainte-Clotilde
  epitech:  { top: 26, left: 73 },  // Saint-André
};
---
```

- [ ] **Step 2 : Remplacer tout le corps du composant**

Remplacer l'intégralité du markup (de `<section` jusqu'au `</section>` final, en conservant le bloc `<style>`) par :

```astro
<div class="relative w-full max-w-[280px] mx-auto">
  <div class="relative aspect-[4/3]">
    <img
      src="/assets/reunion-silhouette.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-contain opacity-30"
      style="filter: drop-shadow(0 0 40px rgba(255, 222, 89, 0.2));"
    />
    {stages.map((stage) => {
      const pos = positions[stage.id];
      if (!pos) return null;
      return (
        <span
          class="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          style={`top: ${pos.top}%; left: ${pos.left}%;`}
          data-stage={stage.id}
        >
          <span
            class="block w-[11px] h-[11px] rounded-full"
            style={`background: ${ACCENT_PAINT}; box-shadow: 0 0 0 3px rgba(15,26,48,.92), 0 0 14px ${ACCENT_PAINT};`}
          />
          <span class="sr-only">{stage.name} — {stage.commune}</span>
        </span>
      );
    })}
  </div>
  <p class="text-center font-mono text-[10px] tracking-[0.13em] uppercase text-white/45 mt-3">
    Les six lieux · quatre façades
  </p>
</div>
```

- [ ] **Step 3 : Vérifier**

```bash
grep -c "accentHex" src/components/MapReunion.astro       # attendu : 0
grep -c "3 étapes a travers" src/components/MapReunion.astro  # attendu : 0
grep -c "top:" src/components/MapReunion.astro            # attendu : 7 (6 positions + 1 style inline)
```

- [ ] **Step 4 : Commit**

```bash
git add src/components/MapReunion.astro
git commit -m "Retrograde la carte en encart et place les six lieux reels"
```

---

### Task 4bis : Les consommateurs d'accent oubliés

**Ajoutée après la Task 1**, quand la revue de qualité a signalé que le plan initial ne recensait que 3 des **6** fichiers consommant `accentHex`. Sans cette tâche, les pages `/nord`, `/ouest` et `/sud` partaient en production avec `undefined` dans 25 lignes de styles.

**Files:**
- Modify: `src/layouts/StageLayout.astro` (~35 occurrences sur 25 lignes)
- Modify: `src/pages/nord.astro` (1 occurrence, ligne 15)

- [ ] **Step 1 : Mesurer l'ampleur**

```bash
grep -o "accentHex" src/layouts/StageLayout.astro | wc -l
grep -o "accentHex" src/pages/nord.astro | wc -l
```

- [ ] **Step 2 : Importer les constantes dans `StageLayout.astro`**

Ajouter `ACCENT_PAINT` et `ACCENT_TEXT` à l'import existant depuis `../data/stages`.

- [ ] **Step 3 : Appliquer la règle unique**

La règle est mécanique et sans exception dans ce fichier :

- `color:` → **`ACCENT_TEXT`**
- tout le reste — `background`, `border`, `border-color`, `box-shadow`, `linear-gradient`, `--stage-accent` → **`ACCENT_PAINT`**

Les quatre porteurs `stage.`, `s.`, `prev.` et `next.` deviennent **la même constante** : l'accent ne distingue plus les étapes entre elles.

**Vérifier que la hiérarchie visuelle survit.** La navigation de progression distinguait l'étape courante des autres par la couleur *et* par la taille et l'opacité. Contrôler que ces deux-là suffisent encore :
- lignes 44-45 : pastille courante `10px` pleine, autres `6px` en suffixe `40`
- lignes 281-282 : barre courante `4px` pleine, autres `3px` en suffixe `40`
- ligne 288 : étape courante en `font-weight:700`

Si après substitution l'étape courante n'est plus discernable, **s'arrêter et le signaler** plutôt que d'inventer un traitement.

- [ ] **Step 4 : Corriger `nord.astro` ligne 15**

```astro
<span class="font-mono text-sm tracking-widest uppercase" style={`color: ${ACCENT_TEXT}CC;`}>Programme</span>
```
Ajouter l'import de `ACCENT_TEXT` depuis `../data/stages`.

- [ ] **Step 5 : Vérifier**

```bash
grep -o "accentHex" src/layouts/StageLayout.astro src/pages/nord.astro | wc -l   # attendu : 0
bun run build
for f in dist/nord/index.html dist/ouest/index.html dist/sud/index.html; do
  printf "%-28s %s\n" "$f" "$(grep -o undefined "$f" | wc -l | tr -d ' ')"
done
```
Attendu : **0 partout**.

- [ ] **Step 6 : Commit**

```bash
git add src/layouts/StageLayout.astro src/pages/nord.astro
git commit -m "Applique l'accent unique aux pages d'etape"
```

---

### Task 5 : Section « Le Parcours » de la page d'accueil

**Files:**
- Modify: `src/pages/index.astro` — import (l. 8) et section `#etapes` (l. ~338-365)

- [ ] **Step 1 : Ajouter l'import**

Après la ligne `import MapReunion from '../components/MapReunion.astro';`, ajouter :

```astro
import TimelineParcours from '../components/TimelineParcours.astro';
```

- [ ] **Step 2 : Remplacer le bloc d'en-tête et le corps de la section**

Remplacer depuis `<span class="section-label">03 // Le Parcours</span>` jusqu'à `<MapReunion />` inclus par :

```astro
        <span class="section-label">03 // Le Parcours</span>
        <h2 class="section-title mt-4">
          6 étapes, 6 organisateurs, <span class="text-gold">un seul tour</span>
        </h2>
        <p class="text-white/50 mt-4 max-w-2xl mx-auto text-lg">
          Du 20 au 29 octobre, la cybersécurité fait le tour de l'île — portée
          par le CLUSIR sur trois étapes, par des organisateurs locaux sur trois
          autres. Même label, même exigence, même agenda.
        </p>
        <div class="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full border border-gold/20 bg-gold/[0.06]">
          <svg class="w-4 h-4 text-gold/70 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
          </svg>
          <span class="font-mono text-sm text-gold/80 font-bold tracking-wider">20 — 29 OCTOBRE 2026</span>
        </div>
      </div>

      <!-- Les trois principes de fonctionnement de la charte d'accueil.
           Le message d'unité n'est pas un slogan inventé pour le site : il est
           déjà rédigé dans le document que signent les hôtes. -->
      <ul class="reveal grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16 list-none m-0 p-0">
        <li class="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
          <p class="font-display font-semibold text-white">Communication commune</p>
          <p class="text-white/50 text-sm mt-1">Une seule identité, un seul agenda.</p>
        </li>
        <li class="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
          <p class="font-display font-semibold text-white">Organisation décentralisée</p>
          <p class="text-white/50 text-sm mt-1">Chaque hôte organise son étape comme il l'entend.</p>
        </li>
        <li class="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
          <p class="font-display font-semibold text-white">Financement propre</p>
          <p class="text-white/50 text-sm mt-1">Chacun assume ses recettes comme ses pertes.</p>
        </li>
      </ul>

      <!-- Frise + encart cartographique : la frise possède le quand, la carte le où -->
      <div class="reveal grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-14 items-center">
        <TimelineParcours />
        <MapReunion />
      </div>
```

**Attention :** la `</div>` qui fermait `reveal mb-20 text-center` est déplacée — elle se trouve désormais juste après la pastille de dates, avant la liste des trois principes. Vérifier l'équilibre des balises au build.

- [ ] **Step 3 : Vérifier**

```bash
bun run build 2>&1 | tail -5   # attendu : Complete!
grep -c "6 étapes, 6 organisateurs" src/pages/index.astro   # attendu : 1
```

- [ ] **Step 4 : Commit**

```bash
git add src/pages/index.astro
git commit -m "Reecrit la section Parcours autour de la frise et des trois principes"
```

---

### Task 6 : Le reste de la page d'accueil

**Files:**
- Modify: `src/pages/index.astro` — lignes 88, 145, 239, 282, 681 (numéros d'avant Task 5, à re-repérer par `grep`)

- [ ] **Step 1 : Lister les occurrences restantes**

```bash
grep -n "3 étapes\|3 Étapes\|20-23\|20 — 23\|20 &mdash; 23" src/pages/index.astro
```

- [ ] **Step 2 : Appliquer les cinq substitutions**

| Repère | Ancien | Nouveau |
|---|---|---|
| `<Layout title=` | `Cyber Tour Réunion 2026 \| 20-23 Octobre - 3 Étapes` | `Cyber Tour Réunion 2026 \| 20-29 Octobre - 6 Étapes` |
| bandeau hero | `20 &mdash; 23 Octobre 2026` | `20 &mdash; 29 Octobre 2026` |
| texte « À propos » | `3 étapes du Nord au Sud pour toucher tous les` | `6 étapes sur quatre façades de l'île pour toucher tous les` |
| CTA hero | `Voir les 3 étapes du tour` | `Voir les 6 étapes du tour` |
| ligne « Événement » | `20 — 23 octobre 2026</span> · 3 étapes` | `20 — 29 octobre 2026</span> · 6 étapes` |

- [ ] **Step 3 : Vérifier qu'il ne reste rien**

```bash
grep -n "3 étapes\|3 Étapes\|20-23\|20 — 23\|20 &mdash; 23" src/pages/index.astro
```
Attendu : **aucune sortie**.

- [ ] **Step 4 : Commit**

```bash
git add src/pages/index.astro
git commit -m "Aligne titres, dates et CTA de la home sur six etapes"
```

---

### Task 7 : `Layout` — meta et JSON-LD

**Files:**
- Modify: `src/layouts/Layout.astro` — lignes 9, 87, 105-144

- [ ] **Step 1 : Corriger la description et l'alt**

Ligne 9 : remplacer `3 étapes, 20-23 Octobre` par `6 étapes, 20-29 Octobre`.
Ligne 87 : remplacer `20-23 Octobre` par `20-29 Octobre`.

- [ ] **Step 2 : Corriger `endDate`**

```
"endDate": "2026-10-29T18:00:00+04:00",
```

- [ ] **Step 3 : Ajouter les trois lieux manquants**

Après le `Place` de l'IUT / ESIROI, dans le tableau `location`, ajouter :

```json
        {
          "@type": "Place",
          "name": "Expernet",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Parc 2000, 3 avenue Théodore Drouhet",
            "addressLocality": "Le Port",
            "postalCode": "97420",
            "addressRegion": "La Réunion",
            "addressCountry": "FR"
          }
        },
        {
          "@type": "Place",
          "name": "École Du Numérique",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 rue Gabriel de Kerveguen",
            "addressLocality": "Sainte-Clotilde",
            "postalCode": "97490",
            "addressRegion": "La Réunion",
            "addressCountry": "FR"
          }
        },
        {
          "@type": "Place",
          "name": "Epitech Réunion",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "234 chemin de la Pente Sassy",
            "addressLocality": "Saint-André",
            "postalCode": "97440",
            "addressRegion": "La Réunion",
            "addressCountry": "FR"
          }
        }
```

- [ ] **Step 4 : Vérifier le JSON produit**

```bash
bun run build && bun -e 'const h=await Bun.file("dist/index.html").text(); const m=h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/); const j=JSON.parse(m[1]); console.log("places:", j.location.length, "| end:", j.endDate)'
```
Attendu : `places: 6 | end: 2026-10-29T18:00:00+04:00`

- [ ] **Step 5 : Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "Met a jour meta et donnees structurees pour six etapes"
```

---

### Task 8 : `/est` — redirection dérivée

**Files:**
- Modify: `src/pages/est.astro` (réécriture complète)

Rappel : la cible dépend de `published` pour ne pas rediriger vers un 404 avant réception de la fiche annexe F.

- [ ] **Step 1 : Remplacer tout le fichier**

```astro
---
import { stages } from '../data/stages';

/* L'étape Est n'est plus annulée : Epitech l'accueille à Saint-André le
   29 octobre. Cette page devient une redirection.

   La cible est dérivée de la donnée : tant que la fiche annexe F d'Epitech
   n'est pas reçue (art. 8.8 de la charte), /epitech n'existe pas et on renvoie
   vers la section parcours. Le jour où `published` passe à true, la
   redirection bascule seule. */
const epitech = stages.find((s) => s.id === 'epitech');
const target = epitech?.published ? epitech.href : '/#etapes';
---

<meta http-equiv="refresh" content={`0; url=${target}`} />
<link rel="canonical" href={`https://cybertour.re${target}`} />
<title>L'étape Est du CyberTour 2026</title>
<p>
  L'étape Est 2026 est accueillie par Epitech à Saint-André.
  <a href={target}>Voir le parcours</a>.
</p>
<script is:inline define:vars={{ target }}>
  window.location.replace(target);
</script>
```

- [ ] **Step 2 : Vérifier**

```bash
bun run build && grep -o 'url=[^"]*' dist/est/index.html
```
Attendu : `url=/#etapes` (tant qu'Epitech est `published: false`).

- [ ] **Step 3 : Commit**

```bash
git add src/pages/est.astro
git commit -m "Transforme /est en redirection derivee vers l'etape Epitech"
```

---

### Task 9 : Nettoyer les accents morts de `global.css`

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1 : Repérer les classes devenues inutiles**

```bash
grep -n "bento-track--\|--color-track-" src/styles/global.css
grep -rn "bento-track--\|color-track-" src/ --include="*.astro"
```
Le second grep doit être **vide** après les tâches 2 et 4. Si ce n'est pas le cas, ne rien supprimer et corriger d'abord le composant fautif.

- [ ] **Step 2 : Supprimer**

Retirer les quatre règles `.bento-track--red-accent`, `.bento-track--blue`, `.bento-track--teal`, `.bento-track--amber`, ainsi que les tokens `--color-track-blue`, `--color-track-teal`, `--color-track-amber` du bloc `@theme`. Conserver `--color-clusir-red` et `--color-clusir-red-bright`, qui sont les deux valeurs de l'accent unique.

- [ ] **Step 2bis : Supprimer le composant mort `Timeline.astro`**

Découvert pendant la Task 1 : `src/components/Timeline.astro` (84 lignes, 9 références à `accentHex`) n'est **importé nulle part**. La seule occurrence du mot « Timeline » ailleurs est un commentaire HTML dans `MapReunion.astro`. C'est du code mort qui précède la refonte.

Confirmer avant de supprimer — un faux positif ici casserait une page :

```bash
grep -rn "from.*Timeline\|import Timeline" src/ ; echo "--- doit etre vide ---"
git rm src/components/Timeline.astro
```

Ne pas confondre avec `TimelineParcours.astro`, créé à la Task 3 et bien utilisé.

- [ ] **Step 3 : Vérifier**

```bash
grep -c "bento-track--" src/styles/global.css   # attendu : 0
bun run build 2>&1 | tail -3                     # attendu : Complete!
```

- [ ] **Step 4 : Commit**

```bash
git add src/styles/global.css
git commit -m "Supprime les accents de track devenus morts"
```

---

### Task 10 : Vérification de bout en bout

**Files:** aucun — vérification seule.

- [ ] **Step 1 : Assertions sur le source**

```bash
grep -rn "3 étapes\|20-23\|20 — 23\|accentHex\|bento-track--" src/ ; echo "---"
```
Attendu : **aucune sortie** avant le séparateur.

- [ ] **Step 2 : Build propre — et surtout sans trou de template**

```bash
bun run build 2>&1 | tail -6
```
Attendu : `Complete!`, 7 pages.

```bash
for f in dist/index.html dist/nord/index.html dist/ouest/index.html dist/sud/index.html dist/est/index.html; do
  printf "%-28s %s\n" "$f" "$(grep -o undefined "$f" | wc -l | tr -d ' ')"
done
```
Attendu : **0 partout.** C'est l'assertion qui compte le plus de tout le plan — le build seul ne l'aurait jamais signalée.

- [ ] **Step 3 : Assertions sur le HTML rendu**

```bash
grep -o "Accueillie par" dist/index.html | wc -l   # attendu : 6
grep -o "accueillie par" dist/index.html | wc -l   # attendu : 12 (frise desktop + mobile)
grep -c "Expernet\|EDN\|Epitech" dist/index.html   # attendu : > 0
```

- [ ] **Step 4 : Sonde navigateur réelle**

```bash
bun run preview --port 4322 &
sleep 4
interceptor tab new "http://localhost:4322/"
```

Puis, dans le navigateur :

```bash
interceptor eval --main "document.querySelectorAll('[data-stage]').length"
```
Attendu : `6` (les six pastilles de la carte).

```bash
interceptor find "Accueillie par"
```
Attendu : 6 correspondances.

- [ ] **Step 5 : Vérifier la redirection**

```bash
curl -s http://localhost:4322/est/ | grep -o 'url=[^"]*'   # attendu : url=/#etapes
```

- [ ] **Step 6 : Capture de contrôle**

```bash
interceptor screenshot --save
```
Relire la capture : la frise doit afficher six pastilles de la même couleur, l'encart cartographique doit être à sa droite sur grand écran, et chaque carte d'étape doit porter son bloc « Accueillie par ».

- [ ] **Step 7 : Commit final et push**

```bash
git add -A
git commit -m "Verifie la refonte des etapes de bout en bout"
git push -u origin refonte-etapes-communaute
```

---

## Ce que ce plan ne fait pas

- **Ne crée pas** `/expernet`, `/edn`, `/epitech` — interdit par l'art. 8.8 avant réception des fiches annexe F. Les trois étapes existent en frise et en carte, non cliquables.
- **Ne touche pas** aux sections CTF, Speakers, Sponsors, Inscription, Contact.
- **Ne corrige pas** les Éléments de langage, qui annoncent encore « une série de trois étapes ». Document hors dépôt, à traiter en parallèle.
- **Ne déploie pas** : la branche est poussée, la fusion vers `main` reste une décision du pilote.
