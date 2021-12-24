module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
      },
      colors: {
        "grayish-cyan": "hsl(184, 14%, 56%)",
        teal: {
          150: 'hsl(185, 41%, 84%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
