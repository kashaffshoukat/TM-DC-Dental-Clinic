/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4ff',
          100: '#d9e2ff',
          200: '#b3c5ff',
          300: '#8ca8ff',
          400: '#5a7eff',
          500: '#3a5fcd',
          600: '#2b4a9e',
          700: '#1e3a7a',
          800: '#16285a',
          900: '#0f1d42',
          950: '#0a1228',
        },
      },
      fontFamily: {
        urdu: ['Noto Nastaliq Urdu', 'serif'],
      },
    },
  },
  plugins: [],
};
