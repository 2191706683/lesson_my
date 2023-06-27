/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
     padding: {
      '1': '30px'
     },
     fontSize: {
      'base': ['30px', '2rem'],
     }
    },
    screens: {
      'md': '300px',
    }
  },
  plugins: [],
}

