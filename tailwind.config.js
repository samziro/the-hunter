// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightFontHeading: "rgb(23,23,23)",
        lightFontText: "rgba(248, 247, 247, 1)",
        darkFontHeading: "rgb(238,189,43)",
        darkFontText: "rgb(148,163,184)",
        lightTheme: "rgb(248,250,252)",
        darkTheme: "#121212",
        btnDarkTheme: "rgb(238,189,43)", 
        darkCardTheme: "#282828",
        
      },
      boxShadow: {
        glow: "0 0 10px theme(colors.darkShadow)",
        "glow-strong": "0 0 15px theme(colors.darkShadow)",
      },
      ringColor: {
        gold: "theme(colors.btnDarkTheme)", // custom ring utility
      },
    },
  },
  plugins: [],
};
