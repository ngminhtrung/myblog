// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { remarkKroki } from 'remark-kroki';

const krokiServer = process.env.KROKI_SERVER_URL ?? 'https://kroki.io';

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
					server: krokiServer,
					output: 'inline-svg',
					alias: ['plantuml'],
				},
			],
		],
	},
});
