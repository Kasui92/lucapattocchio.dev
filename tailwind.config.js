/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
        extend: {
            colors: {
                // Palette
                black: {
                    DEFAULT: '#221e22',
                    100: '#070607',
                    200: '#0e0c0e',
                    300: '#151315',
                    400: '#1c191c',
                    500: '#221e22',
                    600: '#524952',
                    700: '#817381',
                    800: '#aca1ac',
                    900: '#d5d0d5',
                },
                silver: {
                    DEFAULT: '#bfc0c0',
                    100: '#262727',
                    200: '#4c4d4d',
                    300: '#727474',
                    400: '#989a9a',
                    500: '#bfc0c0',
                    600: '#cbcdcd',
                    700: '#d8d9d9',
                    800: '#e5e6e6',
                    900: '#f2f2f2',
                },
                white: {
                    DEFAULT: '#ffffff',
                    100: '#333333',
                    200: '#666666',
                    300: '#999999',
                    400: '#cccccc',
                    500: '#ffffff',
                    600: '#ffffff',
                    700: '#ffffff',
                    800: '#ffffff',
                    900: '#ffffff',
                },
                cerulean: {
                    DEFAULT: '#2978a0',
                    100: '#081820',
                    200: '#10303f',
                    300: '#18475f',
                    400: '#215f7f',
                    500: '#2978a0',
                    600: '#399bcc',
                    700: '#6bb4d9',
                    800: '#9ccde5',
                    900: '#cee6f2',
                },
                green: {
                    DEFAULT: '#496f5d',
                    100: '#0f1613',
                    200: '#1d2c25',
                    300: '#2c4338',
                    400: '#3a594a',
                    500: '#496f5d',
                    600: '#62977e',
                    700: '#89b29e',
                    800: '#b0cbbf',
                    900: '#d8e5df',
                },
                // Custom
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
