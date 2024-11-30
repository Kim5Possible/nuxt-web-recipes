/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        peachDark: "#FF642F",
        peachLight: "#FFD7C9",
        blueLight: "#E3F1FF",
        grayLight: "#E8E8E8",
        grayDark: "#7F7F7F",
        grayLighter: "#F9F9F9",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: "3rem",
    },
  },
  plugins: [],
};
