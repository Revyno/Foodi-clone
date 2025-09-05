/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,css,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#39DB4A',
        secondary: '#53EC62', 
        accent: '#FF6868',
        dark: '#1E1E1E',
        gray: {
          550: '#555555',
          750: '#4A4A4A'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}