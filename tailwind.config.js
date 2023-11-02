/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: "#e0e4e0",
                foreground: "#2f2f30",
                neutral: {
                    50: "#f7fbf7",
                    100: "#f7faf7",
                    200: "#ecefed",
                    300: "#dee1df",
                    400: "#aeb0ae",
                    500: "#7d7e7e",
                    600: "#5d5e5e",
                    700: "#4a4a4b",
                    800: "#2f2f30",
                    900: "#181819",
                },
                green: {
                    DEFAULT: "#5ac9b3",
                    50: "#f0fdf9",
                    100: "#cdf8ed",
                    200: "#a0f0dc",
                    300: "#75e1c9",
                    400: "#5ac9b3",
                    500: "#43b09c",
                    600: "#2f8f81",
                    700: "#217369",
                    800: "#185d56",
                    900: "#154e48",
                },
                blue: {
                    DEFAULT: "#94abe3",
                    50: "#ecf3ff",
                    100: "#d8e3f8",
                    200: "#bacaef",
                    300: "#94abe3",
                    400: "#6e8ae1",
                    500: "#4d6add",
                    600: "#374fd6",
                    700: "#2d40c2",
                    800: "#2636a0",
                    900: "#253282",
                },
                gray: {
                    DEFAULT: "#c3caca",
                    50: "#ecfefd",
                    100: "#d8e5e5",
                    200: "#c3caca",
                    300: "#b2c0c1",
                    400: "#9ab1b4",
                    500: "#809ea2",
                    600: "#5f828b",
                    700: "#436c76",
                    800: "#2b5b67",
                    900: "#0f4f60",
                },
            },
        },
    },
    plugins: [],
}
/**
 * TO USE:
 *
 * <body class="bg-background text-foreground dark:bg-foreground dark:text-background"></div>
 */

