module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
      },
      colors: {
        'primary-cyan': 'hsl(172, 67%, 45%)',
        'dark-cyan': 'hsl(184, 14%, 56%)',
        'darker-cyan': 'hsl(186, 14%, 43%)',
        'darkest-cyan': 'hsl(183, 100%, 15%)',
        'light-cyan': 'hsl(189, 41%, 97%)',
        'lighter-cyan': 'hsl(185, 41%, 84%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
