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
        animation: {
            'fade-in': 'fadeIn 0.5s ease-in forwards',
            'scale-in': 'scaleIn 0.7s ease-in-out forwards',
            'scale-fade-in': 'scaleIn 0.3s ease-in-out forwards, fadeIn 0.7s ease-in forwards',
        },
        keyframes: {
            fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
            },
            scaleIn: {
                '0%': { scale: '0.9' },
                '100%': { scale: '1' },
            },
        },
    },
    plugins: [],
}
