/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'rgb(var(--brandcolor))',
          20: 'rgba(var(--brandcolor), 0.2)',
          30: 'rgba(var(--brandcolor), 0.3)',
          40: 'rgba(var(--brandcolor), 0.4)',
          50: 'rgba(var(--brandcolor), 0.5)',
          60: 'rgba(var(--brandcolor), 0.6)',
          70: 'rgba(var(--brandcolor), 0.7)',
          80: 'rgba(var(--brandcolor), 0.8)',
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
      md: '810px',
      lg: '1200px',
    },
  },
  plugins: [],
};
