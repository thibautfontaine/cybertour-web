/**
 * Socle i18n du site.
 *
 * Deux langues : le français (défaut, sans préfixe d'URL) et l'anglais sous
 * `/en/`. Les slugs sont identiques dans les deux langues (`/nord` ↔
 * `/en/nord`) : l'URL alternative est donc un simple préfixe, sans table de
 * correspondance à maintenir.
 *
 * Chaque composant lit sa langue via `getLang(Astro.currentLocale)` ; il n'y
 * a pas de prop `lang` à faire descendre. Les chaînes vivent dans des
 * dictionnaires typés par page (`src/i18n/*.ts`) indexés par `Lang`.
 */

export type Lang = 'fr' | 'en';

export const LANGS: readonly Lang[] = ['fr', 'en'] as const;
export const DEFAULT_LANG: Lang = 'fr';

/** Clé localStorage du choix manuel de langue (écrite par le sélecteur seul). */
export const LANG_STORAGE_KEY = 'ct-lang';

export function isLang(value: unknown): value is Lang {
  return value === 'fr' || value === 'en';
}

/** Depuis `Astro.currentLocale` (undefined hors routage i18n → défaut). */
export function getLang(locale: string | undefined): Lang {
  return isLang(locale) ? locale : DEFAULT_LANG;
}

/** Retire le préfixe de langue : `/en/nord` → `/nord`, `/en` → `/`. */
export function stripLang(pathname: string): string {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/**
 * Préfixe un chemin du site (toujours écrit en « FR », sans préfixe) pour la
 * langue voulue. Les chemins relatifs (`#etapes`, `mailto:`, `https://`) sont
 * rendus tels quels.
 *
 *   localizePath('/nord', 'en')      → '/en/nord'
 *   localizePath('/#etapes', 'en')   → '/en/#etapes'
 *   localizePath('/', 'en')          → '/en/'
 *   localizePath('/nord', 'fr')      → '/nord'
 */
export function localizePath(path: string, lang: Lang): string {
  if (!path.startsWith('/')) return path;
  const base = stripLang(path);
  if (lang === DEFAULT_LANG) return base;
  return `/en${base}`;
}

/** Même page dans l'autre langue. */
export function alternatePath(pathname: string, lang: Lang): string {
  return localizePath(pathname, lang);
}

export function otherLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}

/** Locale Open Graph / hreflang. */
export const OG_LOCALE: Record<Lang, string> = { fr: 'fr_FR', en: 'en_GB' };
