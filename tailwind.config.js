/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'dashboard': "url('./assets/bgimg.png')",
        'login': "url('./assets/login.png')",
        'mark': "url('./assets/mark.png')"
      }
    },
  },
  plugins: [],
}

