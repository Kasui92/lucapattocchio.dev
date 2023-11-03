/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Source Sans Pro', 'sans-serif'],
        },
        extend: {
            colors: {
                background: '#011b1f',
                foreground: '#fafaf9',
                altuofianco: '#067da0',
            },
        },
    },
    plugins: [],
}
