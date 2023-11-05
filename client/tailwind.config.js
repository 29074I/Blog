/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '128' : '50rem',
      },
      height: {
        '16' : '4.5rem',
      },
      screens: {
        'sm' : '450px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
