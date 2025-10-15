/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    // keep core brand colors
    { pattern: /(bg|text|border)-(amber|orange|gold|charcoal|slate)-(50|100|200|300|400|500|600|700|800|900)/ },
    // allow variant + opacity forms: hover:bg-amber-500/20 etc.
    { pattern: /(hover:|focus:)?(bg|text|border)-(amber|orange|gold|charcoal|slate)-(50|100|200|300|400|500|600|700|800|900)(\/(5|10|20|25|30|40|50|60|70|75|80|90))?/ },
    // gradients
    { pattern: /(from|via|to)-(amber|orange|slate)-(100|200|300|400|500|600|700|800|900)/ },
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A842',
          50: '#FDF9EF',
          100: '#F9F0D9',
          200: '#F0E0B0',
          300: '#E7CF87',
          400: '#E0B855',
          500: '#D4A842',
          600: '#C89830',
          700: '#A87D1A',
          800: '#7D5E14',
          900: '#523F0D'
        },
        cream: {
          DEFAULT: '#FAF8F5',
          50: '#FFFFFF',
          100: '#F7F3ED',
          200: '#F0EBE0',
          300: '#E4DCC9',
          400: '#D8CDB4'
        },
        navy: {
          DEFAULT: '#1E2F42',
          50: '#E8EAED',
          100: '#D1D6DB',
          200: '#9BA7B4',
          300: '#667A8C',
          400: '#3A4E62',
          500: '#1E2F42',
          600: '#1A2633',
          700: '#141E2A',
          800: '#0F161F',
          900: '#090D13'
        },
        charcoal:{ DEFAULT:'#1F2937', 800:'#1F2937', 900:'#111827' },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom right, #FFFFFF, #FAF8F5)',
        'gradient-dark': 'linear-gradient(135deg, #2C3E50 0%, #1B2530 100%)',
        'gradient-cta':  'linear-gradient(135deg, #D4A842 0%, #C89830 100%)',
      },
      boxShadow: {
        bold: '0 10px 40px -10px rgba(0,0,0,.15)',
        bolder: '0 20px 60px -15px rgba(0,0,0,.25)',
      },
    },
  },
  plugins: [],
}
