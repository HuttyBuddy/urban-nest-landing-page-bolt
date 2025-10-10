/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-main': 'linear-gradient(to right, #495155, #2c3e50)',
      }
    },
  },
  plugins: [],
}
