import adapter from "sveltekit-adapter-firebase";

import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// default options are shown
			out: 'build',
		})
	}
};

export default config;
