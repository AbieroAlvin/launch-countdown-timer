/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
       fontFamily: {
        body : ['Red Hat Text', 'sans-serif']
       },
       colors: {
        grayishblue: 'hsl(237, 18%, 59%)',
        softred: 'hsl(345, 95%, 68%)',
        White: 'hsl(0, 0%, 100%)',
        Darkdesaturatedblue: 'hsl(236, 21%, 26%)',
        Verydarkblue: 'hsl(235, 16%, 14%)',
        Veryblackblue: 'hsl(234, 17%, 12%)'
       }
    },
  },
  plugins: [],
}

