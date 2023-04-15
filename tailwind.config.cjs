/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'rgb(var(--brandcolor))',
          20: 'var(--brandcolor), 0.2)',
        },
        background: {
          basic: 'rgb(var(--back-ground-basic))',
          basic2: 'rgb(var(--back-ground-basic2))',
        },
        gray: {
          1: 'rgb(var(--gray1))',
          2: 'rgb(var(--gray2))',
          3: 'rgb(var(--gray3))',
        },
        darkgray: {
          DEFAULT: 'rgb(var(--dark-gray-basic))',
          1: 'rgb(var(--dark-gray1))',
          2: 'rgb(var(--dark-gray2))',
        },
        midgray: {
          1: 'rgb(var(--mid-gray1))',
          2: 'rgb(var(--mid-gray2))',
        },
        icon: 'rgb(var(--icon))',
      },
      boxShadow: {
        cards: '0px 0px 4px rgba(0, 0, 0, 0.2)',
        chips: '0px 0px 2px rgba(0, 0, 0, 0.2)',
      },
    },
    screens: {
      sm: '370px',
      // => @media (min-width: 576px) { ... }

      md: '810px',
      // => @media (min-width: 960px) { ... }

      lg: '1200px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
