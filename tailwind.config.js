/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-left': 'slide-left 20s linear infinite',
      },
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        'darkGray': '#202124',
        'darkerGray': '#141517',
        'darkGreen': '#3c9670',
        'lightGreen': '#4bbc8c'
      },
    },
  },
  plugins: [],
}

