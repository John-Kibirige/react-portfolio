/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
      },
      colors: {
        'zei-800': '#191765',
        'zei-400': '#9390ff',
        'zei-600': '#7d73fc',
        'zei-900': '#5e42d7',
        'zei-dark': '#383867',
      },
      rotate: {
        51: '51deg',
        27: '27deg',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
