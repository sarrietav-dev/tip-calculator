const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'space-mono': ['Space Mono', 'monospace'],
    },
    colors: {
      gray: colors.gray,
      white: colors.white,
      'primary-cyan': 'hsl(172, 67%, 45%)',
      'dark-cyan': 'hsl(184, 14%, 56%)',
      'darker-cyan': 'hsl(186, 14%, 43%)',
      'darkest-cyan': 'hsl(183, 100%, 15%)',
      'opaque-cyan': '#0d696e',
      'opaquest-cyan': '#065e62',
      'light-cyan': 'hsl(185, 41%, 84%)',
      'lighter-cyan': 'hsl(189, 41%, 97%)',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
