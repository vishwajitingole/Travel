/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      cursor: {
        fancy: "url(/client/public/airplane.png)",
      },
      boxShadow: {
        thodabada: "2px 2px 5px -4px #dadada",
      },
    },
  },
  plugins: [],
};
