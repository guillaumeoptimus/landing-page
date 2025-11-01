/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: { soft: "0 10px 25px -12px rgba(2, 6, 23, 0.15)" }
    }
  },
  plugins: []
};
