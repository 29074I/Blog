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
      gridTemplateColumns: {
        '2': '1fr 3fr',
      },
      maxWidth:{
        '1200': '1200px'
      },
      boxShadow: {
        'custom': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      },
      minHeight: {
        'custom': 'calc(100vh - 14rem)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
