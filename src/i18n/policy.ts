/**
 * Format commun des pages de politique (confidentialité, cookies).
 *
 * Une page est une suite de sections, chaque section une suite de blocs.
 * Les chaînes marquées `Html` sont injectées avec `set:html` : elles ne
 * contiennent que du balisage écrit ici (`<strong>`, `<a>`), jamais de
 * contenu venu de l'extérieur.
 */

export type PolicyBlock =
  | { kind: 'p'; html: string }
  | { kind: 'ul'; itemsHtml: string[] }
  | { kind: 'table'; head: string[]; rowsHtml: string[][] };

export interface PolicySection {
  title: string;
  blocks: PolicyBlock[];
}

export interface PolicyDict {
  metaTitle: string;
  metaDescription: string;
  pageTitle: string;
  updated: string;
  sections: PolicySection[];
}
