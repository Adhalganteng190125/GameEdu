/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef1ff",
          100: "#e0e4ff",
          500: "#4f5eea",
          600: "#3d3df0",
          700: "#2f2fcf",
        },
      },
    },
  },
  plugins: [],
};
