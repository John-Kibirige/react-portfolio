/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        'zei-800': '#191765',
        'zei-400': '#9390ff',
        'zei-600': '#7d73fc',
      },
    },
  },
  plugins: [],
};
