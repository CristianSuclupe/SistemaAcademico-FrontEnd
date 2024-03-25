/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#0A8592',
        secondary: '#002C38'
      },
      backgroundImage: {
        login: 'url(/images/login-fondo.webp)',
        degraded: 'radial-gradient(var(--main), var(--secondary))'
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        medium: ['Montserrat', 'sans-serif']
      },
      borderRadius: {
        bradius: '100% 0% 100% 0% / 0% 94% 6% 100%'
      }
    }
  },
  plugins: []
};
