/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Nunito Sans', 'sans-serif']
    },
    screens: {
      'md': '641px',
      'lg': '1024px',
      'xl': '1140px'
    },
    extend: {
      colors: {
        'primary-gold': '#8c8253',
        'primary-orange': '#df510b',
        'dark-orange': '#d42813',
        'primary-yellow': '#ffc83c',
        'primary-beige': '#e7cea0',
        'dark-grey': '#454545',
        'light-grey': '#9d9d9d',
        'white': '#ffffff',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
