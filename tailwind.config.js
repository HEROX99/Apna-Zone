/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6E9F5',
          100: '#BDC5E7',
          200: '#919ED6',
          300: '#6677C6',
          400: '#4559B9',
          500: '#3046C6', // Main primary color
          600: '#283FA8',
          700: '#1F3389',
          800: '#17286A',
          900: '#0F1D4C',
        },
        secondary: {
          50: '#FFEDE5',
          100: '#FFD2BC',
          200: '#FFB592',
          300: '#FF9868',
          400: '#FF824A',
          500: '#FF6B35', // Main secondary color
          600: '#E85C29',
          700: '#D04B1F',
          800: '#B83A16',
          900: '#A0290D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};