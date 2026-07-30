---
target: la page d'accueil
total_score: 20
max_score: 40
na_heuristics: 
p0_count: 2
p1_count: 3
timestamp: 2026-07-30T08-27-47Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + measured evidence), assessments isolated until synthesis. Browser visualization SKIPPED — the interceptor Chrome extension does not respond (`extract_text` timeout after 15s); the preview server itself is up (HTTP 200). No overlay exists. Every visual claim below comes from source and built markup, not from a rendered page.

## Design Health Score — 20/40 (Acceptable, bas de bande)

| # | Heuristique | Score | Constat |
|---|---|---|---|
| 1 | Visibilité de l'état système | 2 | La seule information attendue — *quand ouvrent les inscriptions ?* — est « Ouverture imminente » sans date (`index.astro:841`) ; l'entrée de nav est un `<span>` barré (`Navbar.astro:32`) |
| 2 | Correspondance avec le monde réel | 2 | `$ decrypt --force speakers.list` / `ERROR: Access denied` comme voix d'interface, alors que l'audience déclarée inclut des gérants de TPE sans bagage sécurité |
| 3 | Contrôle et liberté | 2 | Le menu mobile ne s'ouvre jamais (double handler, confirmé dans les bundles livrés) — sur mobile il n'y a aucune navigation. Footer « ↑ Haut de page » pointe sur `/#hero`, id inexistant |
| 4 | Cohérence et standards | 2 | 1 des 9 labels de section utilise le composant `.section-label` ; `.bento-track--gold` peint du rouge, `.bento-track--red` de l'orange ; 13 mots français sans accents à côté des mêmes mots accentués |
| 5 | Prévention des erreurs | 2 | Les 4 CTA sponsors aboutissent au même `#contact` et au même mailto sans contexte — le palier choisi est perdu au moment de la conversion |
| 6 | Reconnaissance plutôt que rappel | 2 | Paliers définis par référence (« Tout Bronze + », « Tout Silver + », « Tout le pack Gold + ») sur deux géométries différentes, sans tableau comparatif |
| 7 | Flexibilité et efficacité | 2 | Scoré, pas n/a : aucun raccourci pour le visiteur qui revient vérifier l'ouverture des inscriptions ; aucun `.ics` alors que le `schema.org/Event` complet est déjà dans `Layout.astro:49-76` |
| 8 | Esthétique et minimalisme | 2 | Le hero empile 7 blocs sur 6 couches de fond ; les 9 sections partagent `py-32` et le même dégradé navy — la page n'a aucun rythme |
| 9 | Récupération d'erreur | 2 | Les seules « erreurs » de la page sont des blagues en rouge (`ERROR: Access denied`, `ERROR: Registration locked`, `ERROR: Aucun sponsor confirmé`) — elles entraînent le visiteur à ignorer le texte d'erreur rouge |
| 10 | Aide et documentation | 2 | Scoré, pas n/a : une adresse email, pas de FAQ, pas de « c'est pour qui ? », rien sur le lieu / parking / accessibilité, aucun dossier sponsor téléchargeable pour une demande à 10 000 € |
| **Total** | | **20/40** | **Acceptable — bas de bande** |

## Design Specificity Verdict

**Verdict partagé : la géographie est authentique, le « cyber » est loué.**

**Évaluation design (non ancrée).** Trois éléments ne pourraient pas être repris tels quels par un autre événement : `MapReunion.astro` place chaque étape à ses vraies coordonnées sur la silhouette de l'île (`nord {top:8,left:42}`, `ouest {top:28,left:18}`, `sud {top:95,left:42}`), chaque pin portant date et lieu, doublé d'une timeline horizontale ; `stages.ts` est ancré dans des lieux réels avec capacités et thèmes ; la section Madagascar avec son registre teal et « Cybersecurity from Lands to Seas ». Entre ces trois moments, c'est le kit conférence infosec standard depuis 2016 : glitch, `cyber-grid`, `animate-scan`, `noise-overlay`, orbes `pulse-glow`.

Le device terminal est déployé **trois fois à l'identique** (`index.astro:544-558`, `index.astro:829-843`, `PartnerPyramid.astro:185-199`) — mêmes pastilles macOS, même `$ cat`, même `ERROR:`, même « // Stay tuned. » Utilisé une fois c'est une voix ; trois fois avec la même structure, c'est un gabarit.

**La numérotation de section est cassée comme système.** La section 01 utilise `.section-label` avec sa barre de gauche ; les sections 02 à 09 utilisent un `<span>` brut. Et Madagascar rompt le compte : la séquence va 03 → *(rien)* → 04. Le seul travail du device est de promettre « vous êtes ici, N sur 9 » — et il ment.

**Quatre systèmes d'accent, aucun n'est celui du CLUSIR.** La marque est rouge `#ce463a` + bleu `#21314e` ; la page est massivement or `#FFDE59` sur navy — une couleur absente de la charte. S'y ajoutent les hex par étape et le teal `#2dd4bf` de Madagascar, codé en dur dans 11 attributs `style` sans token. Et le vocabulaire se contredit lui-même : `.bento-track--gold` peint du rouge CLUSIR, `.bento-track--red` peint de l'ambre, `stages.ts:36` donne à l'étape `accent: "gold"` un `accentHex: "#ce463a"`.

**Le trio typographique annoncé n'existe pas.** `global.css:59-60` assigne `--font-display` et `--font-body` à la *même* fonte (ITC Avant Garde). Ambroise est chargée en `@font-face`, dotée d'une classe — et utilisée **zéro fois** dans `index.astro` (vérifié : `grep -c 'font-serif'` → 0). Les deux endroits qui l'appellent — « Cybersecurity from Lands to Seas » et « Réunir les talents d'aujourd'hui » — reçoivent `font-display italic` sur une famille dont seules 4 romaines sont chargées : le navigateur synthétise un faux oblique sur une grotesque géométrique.

**Scan déterministe.** 2 findings, tous deux `ai-color-palette` (warning, catégorie slop), `index.astro:632` et `641`. **Les deux sont des faux positifs, vérifiés.** Le violet est confiné aux lignes 631-680 (13 occurrences, 100 % dans la carte Platinium) et fait partie d'un encodage métal cohérent sur 4 paliers — Platinium violet, Gold or, Silver gris, Bronze ambre. Zéro cyan-sur-sombre, zéro indigo/fuchsia ailleurs dans `src/`. Le détecteur a reconnu un motif de token, pas une intention.

*Correction à l'audit précédent : mon finding #13 qualifiait ce violet de « second système de couleurs » posé ad hoc. C'est faux — le codage par métal est systématique. Le vrai problème est plus large : quatre systèmes d'accent coexistent à l'échelle du site, et les noms de classe contredisent les valeurs qu'ils portent.*

**Overlays visuels.** Aucun. L'injection n'a pas été tentée puisque l'automatisation navigateur est indisponible.

## Overall Impression

La page est compétente et par endroits vraiment bien pensée — puis elle refuse de répondre aux trois questions pour lesquelles le visiteur est venu. Speakers, Partenaires et Inscriptions sont trois terminaux verrouillés consécutifs qui affichent `ERROR`. C'est le dernier tiers de la page, c'est le moment de plus forte intention, et c'est un mur de refus.

La plus grande opportunité n'est pas esthétique : **transformer « pas encore annoncé » en promesse à capturer plutôt qu'en verrou à afficher.** Trois champs email à la place des trois terminaux convertiraient le tiers le plus faible de la page en son actif le plus élevé.

## What's Working

**1. `MapReunion.astro` — l'île comme architecture d'information.** Des pins aux vrais décalages géographiques sur la vraie silhouette, chacun portant date et lieu, doublés d'une timeline qui redit les mêmes trois arrêts comme séquence. Ça fonctionne parce que le public *habite la forme* : la reconnaissance est immédiate, aucune légende n'est nécessaire. Double encodage espace + temps sur les mêmes trois faits — la bonne redondance.

**2. `stages.ts` + `StageCard.astro` — la donnée qui décide, avant le clic.** Chaque étape porte une capacité, une adresse réelle, un thème, trois tags. `StageCard.astro:58-63` place « 150 places » juste à côté de la date. Ce seul appariement transforme le « Places limitées » rhétorique du hero en affirmation vérifiable — c'est exactement ainsi qu'un message de rareté gagne de la confiance au lieu d'en détruire.

**3. Les pastilles de qualification du hero (`index.astro:87-100`).** « Entrée gratuite / Places limitées / Présentiel + streaming » — trois questions bloquantes réglées au-dessus de la ligne de flottaison, en micro-typo monospace qui ne concurrence pas le titre. Bon contenu, bon poids, bonne position. C'est la pensée la plus disciplinée de la page.

## Priority Issues

**[P0] Neuf entreprises sponsors inventées sont publiées en production.**
`PartnerPyramid.astro:23-73` code en dur « OceanCloud Reunion », « CyberTropik », « SecurDom », « ReunionNet Pro », « VolcanData », « IndianOcean IT », « TropiCode », « Lagon Digital », « SudDev 974 » — avec des accroches métier (« Hebergement souverain », « Audit & Conformite DROM »), rendues en `blur-[6px]`. **Vérifié : les 9 noms sont présents et lisibles dans `dist/index.html`.** Le `aria-hidden="true"` les masque aux lecteurs d'écran, mais le flou n'est pas une rédaction : un View Source les expose.
**Pourquoi ça compte** : une association d'intérêt public qui vend des partenariats à 10 000 € publie des noms de partenaires fictifs que n'importe quel prospect, journaliste ou concurrent peut lire en une manipulation. Le risque n'est pas esthétique, il est réputationnel.
**Fix** : supprimer le tableau `tiers`. Remplacer la pyramide floutée par un état vide réel et non flouté — des emplacements en pointillés « Platinium — 1 place disponible », « Gold — 2 places », liés vers `#sponsors`. Un état vide honnête transforme l'absence en rareté ; un faux la transforme en passif.
**Commande** : `/impeccable harden`

**[P0] « ERROR: Aucun sponsor confirmé. » est placé juste au-dessus de la demande à 10 000 €.**
`PartnerPyramid.astro:194`.
**Pourquoi ça compte** : c'est de la preuve sociale négative, en rouge d'erreur, au moment de plus fort enjeu de la page — ça argumente activement contre la conversion que la section existe pour produire.
**Fix** : remplacer par « Partenariats 2026 ouverts — 1 place Platinium, 2 places Gold », et déplacer les preuves 2025 (220 participants, 150 présentiel, 600 vues replay, 2 retombées presse — actuellement orphelines en `index.astro:159-161` et `231-244`) dans `#sponsors` comme bloc audience-et-portée. L'acheteur a besoin des chiffres là où est le prix, pas sept sections plus haut.
**Commande** : `/impeccable clarify`

**[P1] Le menu mobile ne s'ouvre jamais — la navigation mobile est morte.**
`Layout.astro:134-146` et `Navbar.astro:107-111` attachent chacun un listener `click` sur `#menu-toggle`, chacun bascule `hidden` : deux bascules par clic = état inchangé. Confirmé dans les bundles livrés.
**Pourquoi ça compte** : c'est déjà l'issue #3 en P0 côté technique, mais il faut le relire en design — sur mobile, le visiteur n'a **aucun** chemin vers Sponsors, Étapes ou Contact autre que le scroll intégral de 9 sections en `py-32`. Ça change la lecture des heuristiques 1 et 3, et ça rend la longueur de la page beaucoup plus coûteuse qu'elle n'en a l'air.
**Fix** : supprimer les blocs menu et navbar-scroll de `Layout.astro` (l. 119-146), laisser `Navbar.astro` seul propriétaire.
**Commande** : `/impeccable harden`

**[P1] L'inscription — la conversion primaire — ne capture rien et ne promet aucune date.**
`index.astro:796-847` : un terminal-blague (« ERROR: Registration locked », « Ouverture imminente »), sans champ, sans date, sans relance.
**Pourquoi ça compte** : le visiteur arrive au pic d'intention et repart sans rien à faire ni rien à retenir ; l'association perd toute la liste chaude construite par les 8 sections précédentes.
**Fix** : (a) un mois concret — « Ouverture des inscriptions : septembre 2026 » ; (b) une action « Prévenez-moi », au minimum un `mailto:` préparé sur le modèle déjà employé en `jobs.astro:7` ; (c) un `.ics` add-to-calendar dérivé du `schema.org/Event` déjà présent.
**Commande** : `/impeccable onboard`

**[P1] Les paliers sponsors sont incomparables et perdent leur contexte au CTA.**
`index.astro:650, 734, 772` définissent les bénéfices par référence (« Tout Bronze + »…) sur deux géométries — une carte pleine largeur plus une grille 3 colonnes. Les 4 CTA (646, 713, 750, 788) mènent au même `#contact` et au même mailto sans contexte.
**Pourquoi ça compte** : l'acheteur ne peut littéralement pas répondre à « qu'est-ce que j'ai à 5k que je n'ai pas à 3k ? » sans faire de l'arithmétique d'ensembles à la main ; et quand il agit enfin, l'organisateur reçoit un email qui ne dit pas quel palier.
**Fix** : un tableau comparatif — lignes de bénéfices × 4 colonnes de prix avec coches — et des sujets pré-remplis par palier (`?subject=Sponsoring%20Gold%20—%205%20000%20€`).
**Commande** : `/impeccable layout`

**[P2] Corruption des accents français sur ~13 chaînes d'une page en français.**
`index.astro:155` (« reunit », « decideurs », « etudiants »), `238` (« presentiel »), `573` (« cybersecurite »), `674/697/768` (« visibilite »), `804` (« Reservez »), `873/881` (« evenement »). Le même mot apparaît correct et corrompu dans le même fichier : « cybersécurité » 5 fois, « cybersecurite » 1 fois.
**Pourquoi ça compte** : le produit vendu est de la crédibilité institutionnelle auprès de décideurs et de collectivités ; une copie non relue la sape avant que le moindre argument n'atterrisse.
**Fix** : une passe éditoriale sur `index.astro` et `jobs.astro`, puis un grep de build sur les formes récurrentes.
**Commande** : `/impeccable clarify`

## Persona Red Flags

**Jordan — primo-visiteur.** Passe le hero et le premier contenu substantiel est la vidéo replay de *l'an dernier* (section 02) — l'édition 2025 est positionnée au-dessus de l'offre 2026. Arrivé à Speakers il heurte `ERROR: Access denied. File encrypted.` sans moyen de savoir que c'est une plaisanterie. Dans la nav, « Inscriptions » est rendu `line-through text-white/25` — le barré signifie universellement *annulé*, pas *bientôt* ; le texte clarifiant vit dans un attribut `title` sur un `<span>` non focusable, donc jamais affiché au tactile. État de sortie : « je crois que c'est déjà passé, ou que c'est annulé. »

**Riley — testeur méthodique.** View Source révèle 9 entreprises inventées ; il cherche « VolcanData Réunion » et ne trouve rien. Clique « ↑ Haut de page » — rien ne bouge. Lit le JSON-LD et y trouve **une seule** localisation, « IUT / ESIROI, Saint-Pierre », sur une page qui annonce trois lieux à travers l'île : la donnée structurée contredit le titre. Au clavier, les blocs floutés sont correctement `aria-hidden` (bon point), mais les overlays terminal sont du texte décoratif non focusable — les sections Speakers, Partenaires et Inscription sont vides au Tab. Et zéro `prefers-reduced-motion` contre 7 animations perpétuelles.

**Casey — mobile distrait.** À 375 px le hero empile badge → titre `text-6xl` sur 3 lignes → 2 lignes de méta → 2 boutons → 3 pastilles → 4 blocs de compte à rebours dans un `min-h-screen` ; l'indicateur « Scroll » est en `absolute bottom-8` et entre en collision avec le compte à rebours sur écran court. Dans `MapReunion.astro`, le pin `sud` est à `top: 95%` avec son libellé rendu *en dessous* via `mt-2` — le label Saint-Pierre passe sous le bord du conteneur. Et surtout : **le burger ne répond pas**, donc les 9 liens du menu mobile ne sont jamais atteignables.

**Marie-Claire — gérante d'une TPE de 11 salariés à Saint-Paul, sans bagage IT, arrivée depuis un post LinkedIn (persona projet).** Sa seule question est « c'est pour moi ou c'est pour les informaticiens ? » et la page n'y répond jamais. Pire, sur ses propres preuves la réponse est *non* : son étape la plus proche (Ouest, Saint-Paul) est thématisée « Offreurs Cyber à La Réunion » (`stages.ts:55`) — une journée écosystème fournisseurs à 50 places ; Sud est « Conférences & Ateliers Techniques » avec un public « Étudiants et professionnels de l'IT » ; Nord est institutionnel. Il n'y a **aucun parcours TPE/PME**, alors que le hero promet « 3 ÉTAPES · TOUTE L'ÎLE ». Elle s'inscrit à la date la plus proche de chez elle et entre dans un salon de fournisseurs. S'y ajoutent « CTF », « OSINT », « Rumps », « RETEX », « GRC » employés sans glose, et 180 lignes de paliers sponsors — environ 40 % de la hauteur de page, sans aucun rapport avec elle — entre elle et la section inscription qu'elle cherche.

## Cognitive Load — 6 échecs sur 8 (charge élevée, correctif critique)

Échouent : **focus unique** (7 blocs de hero sur 6 couches de fond) · **groupement** (« Partenaires » et « Sponsors » = un même sujet scindé en 2 sections séparées par 8rem, plus un 3ᵉ groupe de partenaires dans la carte CTF) · **hiérarchie visuelle** (les 9 `<h2>` sont `text-4xl sm:text-5xl md:text-6xl font-extrabold` avec un mot en or — « Réservez votre place » est typographiquement indiscernable de « À propos ») · **choix minimaux** (3 points de décision au-dessus de 4 options : nav 8 liens + CTA = 9 ; sponsors 4 paliers × 3-6 puces ; `#etapes` offre **9 cibles tactiles pour 3 destinations**) · **mémoire de travail** (paliers cumulatifs « Tout X + » ; dates redites à 4 endroits pendant que les capacités ne vivent que dans les cartes étape et les prix que dans les cartes sponsor) · **divulgation progressive** (3 terminaux verrouillés qui ne divulguent rien — un simple « Annonce en septembre 2026 » porterait plus d'information que les trois réunis).

Passent : **chunking** et **une chose à la fois** (le récit au scroll est linéaire).

## Minor Observations

- **Le glitch signature ne se déclenche jamais au tactile.** `.glitch::before/::after` sont `opacity: 0` et n'animent qu'au `:hover` (`global.css:267-275`) ; idem `.reunion-outline:hover`. Les deux effets identitaires du hero sont invisibles pour la majorité des visiteurs mobiles.
- **`leading-relaxed` sur du display 9xl** (`index.astro:50`) — interlignage 1.625 à 128 px produit un pavé de 3 lignes très lâche ; le display veut ~0.9-1.0.
- **La section « Organisateur » est la seule sans `id`** (position 10 sur 13) — donc la seule non adressable par ancre.
- **4 sections ont un `id` mais aucune entrée de nav** : `#carte`, `#etape-internationale`, `#partenaires`, `#inscription`.
- **`.section-title` n'a jamais été extrait** — `text-4xl sm:text-5xl md:text-6xl font-display font-extrabold … leading-snug` est retapé 9 fois en ligne. Le refactor qui a produit `.section-label` s'est arrêté à mi-chemin.
- **Surface morte dans `global.css`** : `.clip-diagonal`, `.clip-diagonal-reverse`, `.weezevent-frame`, `.agenda-badge-red/-tbd`, `.font-serif` — déclarées, inutilisées par la home.
- **`/jobs.astro` est orphelin** — 238 lignes de surface speed-dating recrutement, liées depuis nulle part (vérifié). Accessible uniquement en tapant l'URL.
- **`/est` redirige en 301 vers `/`** sans explication pour qui détient un lien vers l'étape Est abandonnée.
- **GoatCounter se charge en protocol-relative depuis un tiers** (`Layout.astro:45-46`) sans gate de consentement et sans mention dans `/mentions-legales`.
- **Fausse affordance dans le contact** : la carte « Lieu » (`index.astro:886-897`) est visuellement identique à la carte mailto voisine, moins le hover et le href.
- **Poids** : `dist/` pèse ~18 Mio dont `_astro/` seulement 72 Ko (0,39 %) — tout le poids est dans `public/assets`, pas dans les bundles.

## Questions to Consider

1. **Si vous supprimiez tous les terminaux, glitchs, scan-lines et grilles — que perdrait-on, et pour qui ?** Les motifs parlent couramment aux ~15 % de l'audience déjà professionnels de la sécurité, et font office de porte close pour les gérants de TPE que la mission du CLUSIR nomme en premier.
2. **Trois de vos neuf sections affichent `ERROR`. À quoi ressemblerait cette page si « pas encore annoncé » était traité comme une promesse à capturer plutôt qu'un verrou à afficher ?**
3. **La carte est le seul élément qu'aucune autre conférence ne pourrait livrer — alors pourquoi est-elle à 40 % de la page ?** Que se passe-t-il si l'île avec ses trois pins *est* le hero, et que le wordmark glitché devient une légende ?
4. **Pour qui la section sponsors est-elle écrite — un directeur marketing qui compare 3k et 5k, ou l'organisateur qui justifie sa grille tarifaire ?** Elle lit actuellement comme la seconde.
5. **La palette est or-sur-navy mais la marque est rouge-et-bleu.** Si l'or est la vraie couleur du CyberTour, le rouge CLUSIR devrait-il cesser d'apparaître sur les boutons et les prix — ou l'or devrait-il partir ?
