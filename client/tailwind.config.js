/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
