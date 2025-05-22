import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        {
            enforce: 'pre',
            ...mdx({}),
        },
        react(),
        tailwindcss(),
    ],
    server: {
        open: true,
    },
})
