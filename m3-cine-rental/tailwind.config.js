/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class' /* IMPORTANT: Must Need To Do for Theme-Switching */,
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.25rem',
      },
      colors: {
        primary: '#00D991',
      },
    },
  },
  plugins: [],
};
