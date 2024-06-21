/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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

