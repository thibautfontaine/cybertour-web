// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cybertour.re',
  // /est est une page de redirection en noindex depuis que l'étape Est est
  // revenue au programme via Epitech. La laisser dans le sitemap enverrait aux
  // crawlers un signal contradictoire avec sa propre balise robots.
  integrations: [sitemap({ filter: (page) => !page.endsWith('/est/') })],
  vite: {
    plugins: [tailwindcss()]
  }
});
