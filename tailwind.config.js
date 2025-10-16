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
          DEFAULT: '#C9A55A',
          50: '#F9F6F0',
          100: '#F3EBD9',
          200: '#E8D7B3',
          300: '#DDC28D',
          400: '#D6AE73',
          500: '#C9A55A',
          600: '#B89041',
          700: '#9A772E',
          800: '#735824',
          900: '#4D3B19'
        },
        cream: {
          DEFAULT: '#FAF8F5',
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F5F1EA',
          300: '#EBE4D7',
          400: '#E1D7C4'
        },
        navy: {
          DEFAULT: '#2C3E50',
          50: '#E8EAED',
          100: '#D1D6DB',
          200: '#A3ADB7',
          300: '#748493',
          400: '#465B6F',
          500: '#2C3E50',
          600: '#243240',
          700: '#1B2530',
          800: '#131920',
          900: '#0A0C10'
        },
        charcoal:{ DEFAULT:'#1F2937', 800:'#1F2937', 900:'#111827' },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom right, #FFFFFF, #FAF8F5)',
        'gradient-dark': 'linear-gradient(135deg, #2C3E50 0%, #1B2530 100%)',
        'gradient-cta':  'linear-gradient(135deg, #C9A55A 0%, #B89041 100%)',
      },
      boxShadow: {
        bold: '0 10px 40px -10px rgba(0,0,0,.15)',
        bolder: '0 20px 60px -15px rgba(0,0,0,.25)',
      },
    },
  },
  plugins: [],
}
