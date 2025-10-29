// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { remarkKroki } from 'remark-kroki';

// https://astro.build/config
export default defineConfig({
	site: 'https://ngminhtrung.github.io/myblog',
	base: '/myblog',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [
			[
				remarkKroki,
				{
					serverUrl: 'https://kroki.io',
					output: 'inline-svg',
					inline: true,
				},
			],
		],
	},
});
