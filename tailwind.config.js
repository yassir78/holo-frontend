const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';
const colors = require('tailwindcss/colors')
module.exports = {
<<<<<<< HEAD
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },  
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
          colors: {
          'warm-gray': colors.warmGray,
          teal: colors.teal,
        },
        width: {
          'lw': '1150px',
          'sw': '450px'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
=======
  prefix: '',
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'warm-gray': colors.warmGray,
        teal: colors.teal,
      }
    },
  },
  variants: {
    extend: { },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
>>>>>>> 67a1a91aeee166c874dba05f85504a0513da9b29
};
