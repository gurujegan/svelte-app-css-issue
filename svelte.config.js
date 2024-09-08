import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from "svelte-preprocess";
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
    // sourceMap: true,
  }),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
      fallback: true
    }),
		alias: {
			'@components': path.resolve('./src/lib/components'),
			'@data': path.resolve('./src/demo-data'),
			'@store': path.resolve('./src/lib/store'),
			'@apps': path.resolve('./src/lib/view/apps'),
			'@view': path.resolve('./src/lib/view')
		},
	}
};

export default config;
