import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import static_adapter from '@sveltejs/adapter-static';

const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: static_adapter() }
};

export default config;
