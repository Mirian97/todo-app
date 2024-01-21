/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#D1E6FF',
          100: '#8AC0FF',
          200: '#7AB7FF',
          300: '#5ea8fb',
          400: '#1882FF',
          500: '#587DFF'
        },
        secondary: {
          300: '#858585',
          400: '#606060',
          500: '#494949',
          800: '#0D0D0D'
        }
      },
      animation: {
        'tracking-in-expand': 'tracking-in-expand .5s ease-in-out 1 normal forwards',
        'scale-in-background': 'scale-in-background .5s ease-in-out 1 normal'
      },
      keyframes: {
        'tracking-in-expand': {
          '0%': {
            left: '50%',
            width: 0
          },
          '100%': {
            width: '100%'
          }
        },
        'scale-in-background': {
          '0%': {
            height: 0
          },
          '100%': {
            height: '102%'
          }
        }
      }
    }
  },
  plugins: []
}
