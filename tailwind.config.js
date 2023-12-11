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
        colorPrimary: "#55e6a5",
        bodyBg: "#02050a",
        bgColor: "#09101a",
        bodyColor: "#a2a2a2",
        colorWhite: "#fff",
        colorBlack: "#141b26",
      },
    },
  },
  plugins: [],
};
