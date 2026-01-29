// @ts-check
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

import tailwindcss from "@tailwindcss/vite";
import { remarkAlert } from "remark-github-blockquote-alert";

import react from "@astrojs/react";

import icon from "astro-icon";
import svgr from "vite-plugin-svgr";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://lucapattocchio.dev",
  base: "/",

  vite: {
    plugins: [tailwindcss(), svgr()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          sourcemap: false,
        },
      },
    },
  },

  markdown: {
    remarkPlugins: [remarkAlert],
    rehypePlugins: [],
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },

  integrations: [
    icon({
      iconDir: "./src/assets/icons",
    }),
    react(),
  ],
});
