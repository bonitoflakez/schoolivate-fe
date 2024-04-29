/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'uw': '2048px', // You can customize this value
      },
    },
  },
  plugins: [],
};
