js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#A9D6E5',
          100: '#89C2D9',
          200: '#61A5C2',
          300: '#468FAF',
          400: '#2C7DA0',
          500: '#2A6F97',
          600: '#014F86',
          700: '#01497C',
          800: '#013A63',
          900: '#012A4A',
        },
      },
    },
  },
  plugins: [],
}