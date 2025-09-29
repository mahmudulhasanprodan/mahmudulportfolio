/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   container: {
      center: true,
    },
      fontFamily: {
         Oswald : "var(--Oswald)",
         JosefinSans : "var(--JosefinSans)",
    },
    extend: {
       colors: {
        textColorOne: "var(--textColorOne)",
        textColorTwo: "var(--textColorTwo)",
        textColorThree: "var(--textColorThree)",
      },
       backgroundImage: {
        bgColor: "var(--bgColor)",
        bgColortwo: "var(--bgColortwo)",
      },
    },
  },
  plugins: [],
}
