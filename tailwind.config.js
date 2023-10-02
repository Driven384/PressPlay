/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue", "./src/**/**/*.vue"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      colors: {
        primary: {
          DEFAULT: '#42c3d3',
          50: '#e2f8fa',
          100: '#b7edf1',
          200: '#8be2e9',
          300: '#63d6e0',
          400: '#4cccd9',
          500: '#42c3d3',
          600: '#3eb3c1',
          700: '#399da7',
          800: '#34898f',
          900: '#2c6565'
        },
        secondary: {
          DEFAULT: '#cf554c',
          50: '#f8ebee',
          100: '#efced3',
          200: '#d79d9f',
          300: '#c67a7b',
          400: '#cd605f',
          500: '#cf554c',
          600: '#c14d48',
          700: '#af4542',
          800: '#a1403c',
          900: '#8f3a34'
        }
      }
    },
    extend: {
      backgroundImage: {
        'gradient': "url('/src/assets/gradient.svg')",
      }
    },
  },
  plugins: [],
}

