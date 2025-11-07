module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#0077B6',
          600: '#006699',
          700: '#0F52BA',
          800: '#005580',
          900: '#004466',
        },
        amber: {
          500: '#FFB400',
          600: '#E6A200',
        },
        gray: {
          400: '#9CA3AF',
          500: '#334155',
          600: '#4B5563',
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'Poppins', 'Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}