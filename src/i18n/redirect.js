/**
 * Détection de la langue du navigateur — script inliné dans <head> par
 * Layout.astro (import `?raw`, commentaires retirés), exécuté avant le premier
 * rendu pour éviter un flash de page française chez un anglophone.
 *
 * Règles (décisions ISA 2026-09-17, révisées après avis) :
 *   1. La redirection ne va que dans un sens : d'une URL française (sans
 *      préfixe) vers son équivalent /en/. Une URL /en/… partagée ou tapée est
 *      un choix explicite : on ne renvoie jamais un visiteur hors de /en/.
 *   2. Un choix manuel stocké (localStorage `ct-lang`, écrit uniquement par
 *      le sélecteur FR | EN de la navbar) prime : `fr` stocké → jamais de
 *      redirection ; `en` stocké → redirection depuis les URL françaises.
 *   3. Sans choix stocké, on redirige seulement si la première entrée de
 *      navigator.languages qui est `fr` ou `en` est `en`. Un navigateur ni
 *      français ni anglais reste sur le français (langue par défaut du site,
 *      cohérent avec hreflang x-default).
 *   4. Jamais pour un robot ou un navigateur piloté (Googlebot rend les pages
 *      en Chrome headless anglophone : suivre la redirection fusionnerait les
 *      pages FR dans les pages EN), ni pour une navigation interne au site
 *      (referrer même origine) : seule la première arrivée est concernée.
 *   5. `search` et `hash` sont conservés ; `location.replace` évite une boucle
 *      avec le bouton Précédent.
 *
 * `decide` est une fonction pure testable ; l'IIFE en bas ne tourne que dans
 * un navigateur. Fichier en JS volontairement : il est servi tel quel.
 */

/**
 * @param {string} pathname      ex. '/', '/nord', '/en/', '/en/sud'
 * @param {readonly string[]} languages  navigator.languages
 * @param {string|null} stored   valeur de localStorage['ct-lang'] ou null
 * @param {string} [search]      location.search
 * @param {string} [hash]        location.hash
 * @returns {string|null}        URL cible, ou null si rien à faire
 */
function decide(pathname, languages, stored, search, hash) {
  search = search || '';
  hash = hash || '';
  var onEn = pathname === '/en' || pathname.indexOf('/en/') === 0;
  if (onEn) return null;
  if (stored === 'fr') return null;

  var wanted = null;
  if (stored === 'en') {
    wanted = 'en';
  } else {
    var list = languages && languages.length ? languages : [];
    for (var i = 0; i < list.length && !wanted; i++) {
      var code = String(list[i] || '').toLowerCase();
      if (code === 'fr' || code.indexOf('fr-') === 0) wanted = 'fr';
      else if (code === 'en' || code.indexOf('en-') === 0) wanted = 'en';
    }
  }
  if (wanted !== 'en') return null;

  var base = pathname === '' ? '/' : pathname;
  return '/en' + base + search + hash;
}

/**
 * Vrai quand il ne faut pas rediriger automatiquement : robot d'indexation,
 * navigateur piloté, ou navigation interne (le visiteur est déjà sur le site).
 * @param {string} userAgent
 * @param {boolean} webdriver
 * @param {string} referrer   document.referrer
 * @param {string} origin     location.origin
 */
function shouldSkip(userAgent, webdriver, referrer, origin) {
  if (webdriver) return true;
  if (/bot|crawl|spider|slurp|headless|lighthouse|prerender|facebookexternalhit|linkedinbot/i.test(userAgent || '')) return true;
  if (referrer && origin && referrer.indexOf(origin + '/') === 0) return true;
  return false;
}

if (typeof window !== 'undefined' && typeof location !== 'undefined') {
  (function () {
    try {
      if (shouldSkip(navigator.userAgent, navigator.webdriver === true, document.referrer, location.origin)) return;
      var stored = null;
      try { stored = window.localStorage.getItem('ct-lang'); } catch (_) {}
      var langs = navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language];
      var target = decide(location.pathname, langs, stored, location.search, location.hash);
      if (target) location.replace(target);
    } catch (_) {
      /* jamais bloquant : au pire, la page reste dans la langue de l'URL */
    }
  })();
}
