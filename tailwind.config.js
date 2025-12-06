/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ez-dark': '#172736',
        'ez-purple': '#817DFF',
        'ez-light': '#FAFAFA',
      },
    },
  },
  plugins: [],
}

