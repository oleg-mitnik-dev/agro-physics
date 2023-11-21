const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'sml': '700px',

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'mid': '980px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lrg': '1170px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'sans': ['"Lato"', ...defaultTheme.fontFamily.sans],
        'lato': '"Lato", sans-serif',
        'vollkorn': '"Vollkorn", sans-serif',
        'russo': '"Russo One", sans-serif',
        'terminator': '"Terminator Cyr", sans-serif'
      },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

