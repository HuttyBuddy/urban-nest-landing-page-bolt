/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ADD YOUR CUSTOM COLORS HERE
      colors: {
        'gold': '#FFD700',      // A standard gold color
        'charcoal': '#36454F',  // A dark charcoal color
      }
      // If you had custom fonts, they would go here too.
      // fontFamily: {
      //   'sans': ['Your Font Name', 'sans-serif'],
      // }
    },
  },
  plugins: [],
}
