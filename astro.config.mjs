import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    site: 'https://zeida.github.io',
    base: '/MyPortfolio',
    integrations: [mdx(), sitemap(), svelte()],
});