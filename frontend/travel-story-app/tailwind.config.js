/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins","sans-serif"],
    },
    extend: {

      //Colors used in the project
      colors: {
        primary:  "#4B0082",
        secondary:"#6A5ACD"
      },
      backgroundImage: {
        'login-bg-img': "url('./src/assets/images/bg-image.webp')",
        'signup-bg-img': "url('./src/assets/images/signup-bg-img.jpg')",
      }
    },
  },
  plugins: [],
}

