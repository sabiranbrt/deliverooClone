/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#20E1B2",
        medium: "9F9AA1",
        green: "#437919",
        icon: "#ccc",
      },
      grey: {
        DEFAULT: "#EEE9F0",
        light: "#FCF8FF",
      },
      tint: {
        DEFAULT: "2f95dc",
      },
      white: {
        DEFAULT: "#fff",
      },
      black: {
        DEFAULT: "#000",
      },
    },
    extend: {},
  },
  plugins: [],
};
