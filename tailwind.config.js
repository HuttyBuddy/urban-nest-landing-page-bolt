/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#FFD700',
        'charcoal': '#36454F',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom right, #f9fafb, #ffffff)',
      }
    },
  },
  plugins: [],
}
