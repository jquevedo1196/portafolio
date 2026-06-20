// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jquevedo1196.github.io',
  base: '/portafolio/',
  integrations: [sitemap()],
});