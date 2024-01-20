/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#8AC0FF',
          200: '#5ea8fb',
          300: '#1882FF',
          500: '#587DFF'
        },
        secondary: {
          300: '#858585',
          400: '#606060',
          500: '#494949',
          800: '#0D0D0D'
        }
      }
    }
  },
  plugins: []
}
