/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ls:  ['Rubik', 'sans-serif'],
      },
      colors: {
        blue: 'hsl(246, 80%, 60%)',
        lightRed: 'hsl(14, 100%, 70%)',
        softBlue: 'hsl(195, 74%, 62%)',
        redStudy: 'hsl(348. 100%. 68%)',
        limeGreen: 'hsl(145, 58%, 55%)',
        violet:  'hsl(264, 64, 52%)',
        softOrange: 'hsl(43, 84%, 65%)',

        veryDark: 'hsl(226, 43%, 10%)',
        darkBlue: 'hsl(235, 46%, 20%)',
        naturalBlue: 'hsl(235, 45%, 61%)',
        paleBlue: 'hsl(236, 100%, 87%)'
      },
    },
  },
  plugins: [],
}
