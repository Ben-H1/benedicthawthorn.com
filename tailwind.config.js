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
                window: '5px 5px 0 rgba(0, 0, 0, 0.25)',
                icon: '5px 5px 0 rgba(0, 0, 0, 0.25)'
            },
            animation: {
                fadeOut: 'fadeOut 5s ease-out'
            },
            keyframes: {
                fadeOut: {
                    '0%': { backgroundColor: 'black', backdropFilter: 'blur(8px)' },
                    '50%': { backdropFilter: 'blur(0px)' },
                    '100%': {}
                }
            }
        }
    },
    plugins: []
};
