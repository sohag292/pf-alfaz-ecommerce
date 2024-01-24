/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": {
          "50": "#fff4ed",
          "100": "#ffe6d5",
          "200": "#feccaa",
          "300": "#fdac74",
          "400": "#fb8a3c",
          "500": "#f97316",
          "600": "#ea670c",
          "700": "#c2570c",
          "800": "#9a4a12",
          "900": "#7c3d12",
          "950": "#432007",
        },

      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
