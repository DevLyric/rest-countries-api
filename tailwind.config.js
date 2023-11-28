/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                "dark-mode-elements": "hsl(209, 23%, 22%)",
                "dark-mode-background": "hsl(207, 26%, 17%)",
                "light-mode-text": "hsl(200, 15%, 8%)",
                "light-mode-input": "hsl(0, 0%, 52%)",
                "light-mode-background": "hsl(0, 0%, 98%)",
                "dark-mode-text-&-light-mode-elementes": "hsl(0, 0%, 100%)"
            }
        }
    },
    plugins: []
};
