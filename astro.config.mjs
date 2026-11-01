import { fileURLToPath } from 'url'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import jaamd from '@lancher-dev/jaamd'
import tailwindcss from '@tailwindcss/vite'
// @ts-check
import { defineConfig } from 'astro/config'
import svgr from 'vite-plugin-svgr'

// https://astro.build/config
export default defineConfig({
    site: 'https://lucapattocchio.dev',
    base: '/',

    vite: {
        plugins: [tailwindcss(), svgr()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
            dedupe: ['react', 'react-dom'],
        },
        optimizeDeps: {
            include: ['react', 'react-dom', 'react-intersection-observer'],
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
            theme: { light: 'rose-pine-dawn', dark: 'rose-pine' },
        }),
        react(),
    ],

    adapter: cloudflare({
        prerenderEnvironment: 'node',
    }),
})
