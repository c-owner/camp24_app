/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        "components/**/*.{js,vue,ts}",
        "layouts/**/*.vue",
        "pages/**/*.vue",
        "plugins/**/*.{js,ts}",
        "nuxt.config.{js,ts}",
        "store/**/*.js",
    ],
    // darkMode: 'bg-black', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': '#1a202c',
            }
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['disabled'],
        },
    },
    plugins: [
        plugin(function ({addUtilities}) {
            const newUtilities = {
                '.safe-top': {
                    paddingTop: 'constant(safe-area-inset-top)',
                    paddingTop: 'env(safe-area-inset-top)'
                },
                '.safe-left': {
                    paddingLeft: 'constant(safe-area-inset-left)',
                    paddingLeft: 'env(safe-area-inset-left)'
                },
                '.safe-right': {
                    paddingRight: 'constant(safe-area-inset-right)',
                    paddingRight: 'env(safe-area-inset-right)'
                },
                '.safe-bottom': {
                    paddingBottom: 'constant(safe-area-inset-bottom)',
                    paddingBottom: 'env(safe-area-inset-bottom)'
                },
                '.disable-scrollbars' : {
                    scrollbarWidth: 'none',
                    '-ms-overflow-style': 'none',
                    '&::-webkit-scrollbar' : {
                        width: '0px',
                        background: 'transparent',
                        display: 'none'
                    },
                    '& *::-webkit-scrollbar' : {
                        width: '0px',
                        background: 'transparent',
                        display: 'none'
                    },
                    '& *' : {
                        scrollbarWidth: 'none',
                        '-ms-overflow-style': 'none'
                    }
                }
            }

            addUtilities(newUtilities);
        })
    ],
}
