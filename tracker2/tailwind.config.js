/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem'
    }
  },
  plugins: [],
}
