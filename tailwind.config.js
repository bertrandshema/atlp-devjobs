/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {

    colors: {
      'violet': '#5964e0',
      'lightViolet': '#939bf4',
      'darkBlue': '#19202D',
      'midnight': '#121721',
      'gray': '#9daec2',
      'darkGrey': '#6e8098',
      'white': '#ffffff',
      'lightGrey': '#f4f6f8',
    },
    fontFamily: {
      text : ['Kumbh Sans', 'sans-serif'],
    },
    backgroundImage: {
      'header-hero' : "url('images/bg-pattern-header.svg')",
    },
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}