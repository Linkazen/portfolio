import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	build: {
		rolldownOptions: {
			input: {
				main: resolve(import.meta.dirname, "index.html"),
				cv: resolve(import.meta.dirname, "subpages/cv.html"),
			},
		},
	},
	plugins: [react()],
});
