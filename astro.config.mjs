import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://la-horde.fr',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
