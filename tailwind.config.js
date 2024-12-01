/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        peachDark: "#FF642F",
        peachLight: "#FFD7C9",
        peachLighter: "#FFF1EC",
        blueDark: "#3B82F6",
        blueLight: "#E3F1FF",
        blueLighter: "#F2F8FF",
        grayLight: "#717171",
        grayDark: "#333333",
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
