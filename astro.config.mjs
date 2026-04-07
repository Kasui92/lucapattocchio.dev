// @ts-check
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";
import svgr from "vite-plugin-svgr";

import jaamd from "jaamd";

import cloudflare from "@astrojs/cloudflare";

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

  integrations: [
    jaamd({
      theme: "github-dark",
    }),
    icon({
      iconDir: "./src/assets/icons",
    }),
    react(),
  ],

  adapter: cloudflare({
    prerenderEnvironment: "node",
  }),
});
