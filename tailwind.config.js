/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'soft': '0 10px 25px -10px rgba(17, 24, 39, 0.15)',
      }
    }
  },
  plugins: []
};
