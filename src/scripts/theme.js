/*
 * Thème clair / sombre — inliné tel quel dans <head> par Layout.astro (import
 * `?raw`), après la balise theme-color : il doit poser `data-theme` avant le
 * premier rendu, sinon la page clignote du sombre au clair.
 *
 * Préférence : localStorage[ct-theme] = "light" | "dark" ; absente = automatique,
 * c'est-à-dire le réglage de l'ordinateur (prefers-color-scheme), suivi en
 * direct. Le bouton de la barre (Navbar.astro) est le seul à écrire la clé.
 *
 * Sans JavaScript, global.css applique le même choix automatique par media
 * query : ce script n'est qu'une amélioration.
 */
(function () {
  var KEY = 'ct-theme';
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
  var meta = document.querySelector('meta[name="theme-color"]');

  function stored() {
    try {
      var v = window.localStorage.getItem(KEY);
      return v === 'light' || v === 'dark' ? v : null;
    } catch (_) {
      return null;
    }
  }

  function apply() {
    var pref = stored();
    var theme = pref || (mq && mq.matches ? 'light' : 'dark');
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-theme-pref', pref || 'auto');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f4f6fa' : '#0f1a30');
  }

  apply();

  if (mq) {
    var onChange = function () {
      if (!stored()) apply();
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  window.ctTheme = { KEY: KEY, apply: apply };
})();
