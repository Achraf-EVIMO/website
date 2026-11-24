// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://evimo.fr',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Anciennes adresses du site : on les redirige pour ne casser aucun lien existant.
  redirects: {
    '/fr': '/',
    '/careers': '/nous-rejoindre/',
    '/carrieres': '/nous-rejoindre/',
  },
});
