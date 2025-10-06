/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#495155',
        gold: '#EBCA71',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom, #f5f7fa, #eef1f5)',
      },
    },
  },
  plugins: [],
};
