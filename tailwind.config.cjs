/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f8fafc",
      blue: "#3181FA",
      blueHover: "#1d4ed8",
      darkBlue: "#132240",
      gray: "#656565",
      lightGray: "#f1f5f9",
      black: "#000",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1137px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1051px" },
      // => @media (max-width: 1023px) { ... }
      medium: { max: "900px" },
      xmd: { max: "833px" },

      md: { max: "414px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "700px" },
      // => @media (max-width: 639px) { ... }
      xsm: { max: "550px" },
      xxsm: { max: "485px" },
      small: { max: "470px" },
      xsmall: { max: "414px" },
    },
    extend: {},
  },
  plugins: [],
};
