/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#365314',
        secondary: '#4b5563',
        hitam: '#09090b',
      },
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

