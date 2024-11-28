/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#1e2422",
        medDark: "#006494",
        neutral: "#247BA0",
        light: "#1B98E0",
        white: "#fff",
        gray: "#E8F1F2",
        textGray: "#7c8198",
        orange: "#fe7841",
        lightYellow: "#f4f6eb",
        darkYellow: "#f0f2e7",
        deepDark: "#0e1412",
      },
      screens: {
        "max-lg": { max: "1024px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "576px" },
        "3xl": { min: "1690px" },
        "min-md": { min: "768px" },
        "min-lg": { min: "1024px" },
        "min-sm": { min: "576px" },
      },
      dropShadow: {
        deepDark: "35px 35px 10px rgba(14, 20, 18, 1)",
      },
    },
  },
  plugins: [],
};
