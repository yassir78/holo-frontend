const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';
 const colors = require('tailwindcss/colors')
module.exports = {
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
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
};
