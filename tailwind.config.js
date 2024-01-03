/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-o': '#063660',
        'azul-f': '#1B8EF2',
        'azul-m': '#1BA0F2',
        'azul-c': '#38BDF2',
        'azul-v': '#38D0F2',
        'naranja': '#F2A516',
        'rose': '#FA508E'
      },
    },
  },
  plugins: [],
}

