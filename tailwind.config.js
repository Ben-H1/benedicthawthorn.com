/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'chicago': ['Chicago'],
                'appleGaramond': ['Apple Garamond']
            },
            dropShadow: {
                window: '5px 5px 0 rgba(0, 0, 0, 0.25)'
            }
        }
    },
    plugins: []
};
