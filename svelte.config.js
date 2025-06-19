import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import netlify from '@sveltejs/adapter-netlify';

const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: netlify() }
};

export default config;
