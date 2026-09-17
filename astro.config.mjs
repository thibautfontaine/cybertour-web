// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cybertour.re',
  // Deux langues, le français sans préfixe (URL historiques inchangées),
  // l'anglais sous /en/. La détection de la langue du navigateur se fait
  // côté client (GitHub Pages ne négocie pas Accept-Language) — voir
  // src/i18n/redirect.js, inliné dans Layout.astro.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  // /est (et /en/est) est une page de redirection en noindex depuis que
  // l'étape Est est revenue au programme via Epitech. La laisser dans le
  // sitemap enverrait aux crawlers un signal contradictoire avec sa propre
  // balise robots.
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/est/'),
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
