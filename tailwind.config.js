/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',   // if you have a /components dir
    './lib/**/*.{js,ts,jsx,tsx}',           // if you keep UI helpers here
  ],
  safelist: [
    // Keep brand/dynamic color utilities in production
    { pattern: /(bg|text|border)-(amber|orange|gold|charcoal|slate)-(50|100|200|300|400|500|600|700|800|900)/ },
    // Gradients (if you compose them dynamically)
    { pattern: /(from|via|to)-(amber|orange|slate)-(100|200|300|400|500|600|700|800|900)/ },
  ],
  theme: {
    extend: {
      colors: {
        gold: '#F59E0B',
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        orange: {
          500: '#F97316',
          600: '#EA580C',
        },
        charcoal: {
          DEFAULT: '#1F2937',
          800: '#1F2937',
          900: '#111827',
        },
        slate: {
          900: '#0F172A',
          950: '#020617',
        },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom right, #ffffff, #f9fafb)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1F2937 100%)',
        'gradient-cta': 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
      },
      boxShadow: {
        bold: '0 10px 40px -10px rgba(0, 0, 0, 0.4)',
        bolder: '0 20px 60px -15px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
