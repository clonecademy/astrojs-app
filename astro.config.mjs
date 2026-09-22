// DOCS: https://astro.build/config

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
});
