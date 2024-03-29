import formsPlugin from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'cloud-pattern': 'url("/src/assets/svgs/cloud-pattern.svg")',
        'hero-page': 'linear-gradient(180deg, #7AB7FF 0%, #D1E6FF 100%)',
        'header-logo': 'linear-gradient(180deg, #fff 43.21%, #67adff 102.46%)'
      },
      boxShadow: {
        'make-selection': '0px 6px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        primary: {
          50: '#D1E6FF',
          100: '#8AC0FF',
          200: '#7AB7FF',
          300: '#5ea8fb',
          400: '#1882FF',
          500: '#587DFF',
          600: '#5D80FF'
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
  plugins: [formsPlugin]
}
