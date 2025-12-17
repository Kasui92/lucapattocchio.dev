import { defineConfig, Plugin, type AliasOptions } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import works from './src/data/works'

//@ts-ignore
import path from 'path'

//@ts-ignore
const root = path.resolve(__dirname, 'src')

/**
 * Plugin to dynamically inject preload links for the first project images
 */
function preloadProjectImages(count: number = 3): Plugin {
    return {
        name: 'preload-project-images',
        transformIndexHtml(html) {
            // Get the first N images from projects
            const imagesToPreload = works
                .slice(0, count)
                .filter((p) => p.image)
                .map((p) => p.image)

            // Create link tags for preloading
            const preloadLinks = imagesToPreload
                .map((image) => `<link rel="preload" as="image" href="${image}" />`)
                .join('\n        ')

            // Inject preload links before closing head tag
            return html.replace('</head>', `${preloadLinks}\n    </head>`)
        },
    }
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        {
            enforce: 'pre',
            ...mdx({}),
        },
        react(),
        tailwindcss(),
        preloadProjectImages(3),
    ],
    server: {
        open: true,
    },
    build: {
        // TODO: disable only for production
        sourcemap: false,
    },
    resolve: {
        alias: {
            '@': root,
        } as AliasOptions,
    },
})
