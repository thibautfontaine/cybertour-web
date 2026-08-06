# Refonte de la présentation des étapes — CyberTour 2026

**Date** : 6 août 2026
**Branche** : `refonte-etapes-communaute`
**Statut** : spec validée section par section, en attente de relecture finale

---

## 1. Problème

Le site présente l'édition 2026 comme **trois étapes du 20 au 23 octobre**, portées par le CLUSIR, sur une carte de La Réunion qui structure la section « Le Parcours ».

Trois écarts avec la réalité :

1. **Trois étapes supplémentaires** rejoignent l'édition — Expernet, EDN et Epitech, du 27 au 29 octobre — sous acte d'engagement signé. Le site ne les montre pas.
2. Ces étapes sont **organisées de façon autonome** par leurs hôtes. Le lecteur doit pouvoir le comprendre, sans que cela crée une hiérarchie entre étapes.
3. La **Charte d'accueil v0.5** et les **Éléments de langage** décrivent un modèle — un label, des organisateurs autonomes, un pilote — que le site ne traduit nulle part.

Le risque si on ne fait rien correctement : soit le CLUSIR endosse publiquement la responsabilité d'événements qu'il ne contrôle pas (contraire aux art. 3 et 4 de la charte), soit les étapes hôtes apparaissent comme un second rang, ce qui décourage les hôtes suivants.

---

## 2. Vision

Un lecteur qui arrive sur la page doit comprendre en un regard : **un seul tour, six étapes, six organisateurs, aucun rang.**

La réussite se mesure à une réaction : qu'un dirigeant d'entreprise en lisant la frise se dise *« je pourrais accueillir la prochaine »* — parce que rien dans la page ne suggère qu'il faut être le CLUSIR pour en porter une.

---

## 3. Hors périmètre

- La refonte de l'identité visuelle, des polices ou de la palette.
- Les pages `/nord`, `/ouest`, `/sud` dans leur contenu propre (seuls leurs libellés d'en-tête bougent).
- Les sections CTF, Speakers, Sponsors, Inscription, Contact.
- Le formulaire de candidature « héberger une étape » — utile, mais c'est un autre chantier.
- Toute mention de l'étape Madagascar, supprimée en amont sur `main`.

---

## 4. Principes

1. **La symétrie porte l'unité.** Ce n'est pas un slogan qui dira que les étapes sont égales, c'est le fait qu'elles partagent le même composant, la même série, la même carte.
2. **Le site dit la vérité contractuelle.** L'art. 7.3 de la charte impose « une étape du CyberTour organisée par [structure hôte] ». Le champ « Accueillie par » est la traduction de cette obligation, appliquée à tout le monde, CLUSIR compris.
3. **La structure survit à l'article 15.** Le tour a vocation à sortir de La Réunion. Toute structure qui repose sur la géographie réunionnaise est une dette.
4. **Pas de fiche, pas de page** (art. 8.8). Le site ne rédige jamais à la place d'un hôte.

---

## 5. Contraintes

- Astro 6 SSG, Tailwind 4, pas de TypeScript côté pages, dark mode uniquement.
- Polices ITC Avant Garde / Ambroise / JetBrains Mono déjà chargées, palette CLUSIR figée (`#ce463a`, `#21314e`).
- Déploiement GitHub Pages, domaine `cybertour.re`.
- Le nom officiel du lieu de l'étape Ouest est **Office de l'Eau Réunion** — jamais abrégé.

---

## 6. Décisions validées

| # | Décision | Retenu |
|---|---|---|
| D1 | Distinction CLUSIR / hôtes | **Même rang, hôte nommé.** Champ « Accueillie par » uniforme sur les six étapes. Aucun badge, aucune sous-section, aucun accent distinctif. |
| D2 | Périmètre de l'édition | **6 étapes, 20 → 29 octobre 2026.** |
| D3 | Hôte affiché pour 01–03 | **CLUSIR Réunion Océan Indien.** |
| D4 | Colonne vertébrale | **La chronologie.** Frise du 20 au 29 octobre. |
| D5 | Forme de la frise | **Variante A — ruban continu**, sans chapitrage des deux semaines. |
| D6 | Poste de la carte | **Encart à côté de la frise.** Elle répond à « où », jamais à « quoi ». |
| D7 | Libellés de direction | **Directions conservées, doublons assumés.** |
| D8 | Régime d'accents | **Un accent unique pour les six étapes.** |
| D9 | Sort de `/est` | **Redirection vers `/epitech`.** |

### Le raisonnement derrière D8

Un accent unique dit exactement ce que dit la refonte : même rang, même tour. À six étapes, six couleurs deviennent un nuancier sans grammaire.

L'accent retenu est le **rouge CLUSIR `#ce463a`** — la couleur de charte, celle qui appartient au pilote et qu'aucun hôte ne peut modifier (art. 7.2).

Nuance d'accessibilité, déjà documentée dans `global.css` : `#ce463a` ne passe pas WCAG AA en texte sur fond sombre (4,44:1). Donc **`#ce463a` pour les surfaces peintes** (pastilles de frise, filet de carte) et **`#e56b5f` pour le texte d'accent** (numéros d'étape, libellés), qui monte à 5,45:1 sur `#0f1a30`.

L'or `#FFDE59` reste réservé aux libellés de section et aux CTA. Le basculer en accent d'étape le diluerait.

### Le raisonnement derrière D1

La distinction recherchée n'est pas une différence de rang mais de rôle. En affichant « Accueillie par » comme un champ uniforme, y compris sur les étapes du CLUSIR, la distinction devient factuelle et immédiate sans jamais créer de première et de seconde division. Les Éléments de langage l'établissent déjà : « chaque étape est organisée par une structure locale ». Le CLUSIR, quand il porte une étape, est un hôte parmi les autres.

---

## 7. Les six étapes

| # | Direction | Lieu | Commune | Date | Hôte |
|---|---|---|---|---|---|
| 01 | Nord | Campus du Moufia — Université de La Réunion | Sainte-Clotilde | mar. 20 oct | CLUSIR Réunion Océan Indien |
| 02 | Ouest | Office de l'Eau Réunion | Saint-Paul | mer. 21 oct | CLUSIR Réunion Océan Indien |
| 03 | Sud | IUT / ESIROI — Université de La Réunion | Saint-Pierre | jeu. 22 – ven. 23 oct | CLUSIR Réunion Océan Indien |
| 04 | Ouest | Locaux Expernet — Parc 2000 | Le Port | mar. 27 oct | Expernet |
| 05 | Nord | Locaux EDN — 12 rue Gabriel de Kerveguen | Sainte-Clotilde | mer. 28 oct | EDN |
| 06 | Est | Locaux Epitech — 234 ch. de la Pente Sassy | Saint-André | jeu. 29 oct | Epitech |

Deux étapes au Nord, deux à l'Ouest, une au Sud, une à l'Est — les quatre façades sont couvertes. **L'Est rejoint le parcours** par Saint-André, après avoir été annulé sur le plan initial.

**Adresses à confirmer par les fiches annexe F** avant mise en ligne des pages 04–06.

---

## 8. Architecture

### 8.1 Modèle de données — `src/data/stages.ts`

L'interface `Stage` gagne trois champs et en perd deux :

```
+ host: string          // « CLUSIR Réunion Océan Indien » | « Expernet » | …
+ commune: string       // « Sainte-Clotilde », « Le Port », …
+ published: boolean    // false tant que la fiche annexe F n'est pas reçue (art. 8.8)
- accent / accentHex    // si D8 tranche vers l'accent unique
```

`trackNumber` passe de `01–03` à `01–06`. `direction` conserve les doublons (deux `NORD`, deux `OUEST`).

`href` : `/nord`, `/ouest`, `/sud` inchangés ; `/expernet`, `/edn`, `/epitech` pour les nouvelles. Une étape `published: false` rend une carte **non cliquable**, avec la mention « programme à venir » — jamais un lien mort.

### 8.2 Composants

| Composant | Action |
|---|---|
| `TimelineParcours.astro` | **Nouveau.** Le ruban continu, six nœuds, responsive avec bascule verticale sous `md`. C'est lui qui porte le titre de section. |
| `MapReunion.astro` | **Rétrogradé.** Perd son titre propre (« 3 étapes a travers l'île ») et son statut de pièce maîtresse. Devient un encart de ~230–280 px placé à côté de la frise. Passe de 3 à 6 pins, positions mises à jour sur les communes réelles. |
| `StageCard.astro` | Gagne le bloc de pied « **Accueillie par** / *nom de l'hôte* », séparé par un filet. Gère l'état `published: false`. |

Frontière nette : la frise possède le *quand*, la carte le *où*, la carte d'étape le *quoi*. Aucun des trois ne doit essayer de faire le travail d'un autre.

### 8.3 Contenu éditorial

Le message d'unité n'est pas inventé : il est déjà rédigé dans la charte. Les **trois principes de fonctionnement** deviennent le chapeau de la section :

> **Communication commune** — une seule identité, un seul agenda.
> **Organisation décentralisée** — chaque hôte organise son étape comme il l'entend.
> **Financement propre** — chacun assume ses recettes comme ses pertes.

Titre de section proposé : **« 6 étapes, 6 organisateurs, un seul tour »**.

---

## 9. Ce qui change, fichier par fichier

| Fichier | Changement |
|---|---|
| `src/data/stages.ts` | 3 → 6 étapes, nouveaux champs, renumérotation |
| `src/components/TimelineParcours.astro` | création |
| `src/components/MapReunion.astro` | rétrogradation en encart, 6 pins, titre retiré |
| `src/components/StageCard.astro` | bloc « Accueillie par », état non publié |
| `src/pages/index.astro` | `<title>` (l. 88), bandeau de dates (l. 145), texte « 3 étapes du Nord au Sud » (l. 239), CTA « Voir les 3 étapes » (l. 282), titre de section (l. 346), pastille de dates (l. 356), ligne « Événement » (l. 681) |
| `src/layouts/Layout.astro` | `description` par défaut (l. 9), `og:image:alt` (l. 87), JSON-LD : `endDate` 23 → 29 oct, `location` 3 → 6 `Place` |
| `src/pages/est.astro` | **devient faux** — l'Est est au programme via Epitech. Voir §11. |
| `src/pages/expernet|edn|epitech.astro` | créées seulement à réception des fiches annexe F |
| `src/styles/global.css` | classes `.bento-track--*` selon D8 |

---

## 10. Vérification

| Ce qu'on vérifie | Comment |
|---|---|
| Plus aucune mention « 3 étapes » ni « 20-23 » | `grep -rn "3 étapes\|20-23\|20 — 23" src/` → 0 |
| Les 6 étapes sont rendues | `interceptor eval` comptant les nœuds de frise = 6 |
| Le champ « Accueillie par » est sur les 6 | `grep -c "Accueillie par"` dans le HTML rendu = 6 |
| Aucun lien mort vers une étape non publiée | `curl` sur chaque `href` → 200, ou carte non cliquable |
| JSON-LD valide et à jour | validateur schema.org sur la page rendue |
| Carte : 6 pins, image chargée | `interceptor eval` sur `.pin` = 6, `naturalWidth > 0` |
| Rendu réel | `interceptor` sur le build de preview, pas sur le dev server |

---

## 11. Points ouverts

1. **Fiches annexe F.** Aucune page d'étape hôte ne peut être publiée avant réception. Les trois cartes existent en frise dès maintenant, en `published: false`. Les adresses du §7 restent à confirmer par ces fiches.
2. **Éléments de langage.** Le bloc chiffres annonce « une série de trois étapes » — document hors site, mais diffusé aux hôtes : à corriger en parallèle.
3. ~~**Emplacement de cette spec.**~~ Réglé le 06/08 : `.gitignore` exclut désormais `docs/*` mais ré-inclut `docs/plans/`. Les specs et plans suivent le code, le reste de `docs/` reste hors dépôt. La convention des skills `brainstorming` et `writing-plans` continue de fonctionner sans réglage à chaque exécution.

---

## 12. Journal des décisions

- **06/08** — retenu « même rang, hôte nommé » contre « deux séries assumées » et « label visible » : la distinction de rang aurait découragé les hôtes futurs.
- **06/08** — retenu la chronologie contre la géographie comme colonne vertébrale : l'art. 15 de la charte condamne toute structure adossée à la carte de La Réunion.
- **06/08** — vérification des adresses des trois hôtes : Expernet au Port (Ouest), EDN à Sainte-Clotilde (Nord), Epitech à Saint-André (Est). Infirme l'hypothèse d'un regroupement au Nord qui aurait disqualifié la carte, et fait entrer l'Est au parcours.
- **06/08** — doublons de direction assumés sur décision du pilote, contre le passage à la commune.
- **06/08** — accent unique retenu contre six accents distincts : la couleur cesse d'être un identifiant d'étape pour devenir un marqueur d'appartenance au tour.
- **06/08** — `/est` redirigée vers `/epitech` plutôt que supprimée : les liens entrants sont préservés et la page d'annulation aurait menti.
