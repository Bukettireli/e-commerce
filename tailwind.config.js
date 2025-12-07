/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#23A6F0',
        secondary: '#2DC071',
        dark: '#252B42',
        muted: '#737373',
        light: '#FAFAFA',
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
      },
      maxWidth: {
        'container': '1050px',
      },
    },
  },
  plugins: [],
}