/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Alan'],
        serif: ['Alan'],
        Inter:['Inter']
      },
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1000px',
          '2xl': '1000px',
        },
      },
      colors: {
        "custom-blue": "#28A5FF",
        "custom-orange": "#FF6633",
        "custom-pink": "#E71872",
        "custom-blue-dark": "#181D2F",
        "custom-white": "#F2F1F0",
      },
    },
  },
  plugins: [],
};
