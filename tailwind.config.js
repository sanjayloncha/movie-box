/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#000B58",
                secondary: "#396ea3ff",
                danger: "#DD0303",
            },
        },
    },
}
