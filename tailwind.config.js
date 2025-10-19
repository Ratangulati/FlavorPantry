/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
        slab: ['"Alfa Slab One"', 'cursive'],
      },
    },
  },
  plugins: [],
};
