/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: '#011b1f',
                foreground: '#fafaf9',
            },
        },
    },
    plugins: [],
}
