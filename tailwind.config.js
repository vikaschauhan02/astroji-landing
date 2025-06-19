/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F47C26',
        secondary: '#1F1F1F',
        bgLight: '#FDF7F3',
        textPrimary: '#FFFFFF',
        textDark: '#1C1C1C',
        highlight: '#E9B44C',
        warning: '#E74C3C',
        borderLight: '#DADADA',
      }
    }
  },
  plugins: [],
};
