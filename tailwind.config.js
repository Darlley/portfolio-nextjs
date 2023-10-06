/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#e6e7e9",
          "200": "#dadbde",
          "300": "#b3b4ba",
          "500": "#090e20",
          "900": "#070b18",
        },
        secundary: {
          "100": "#effbff",
          "200": "#e7f9ff",
          "300": "#cef4fe",
          "500": "#62dafc",
          "900": "#224c58",
        },
      },
      animation: {
        'rotate': 'spin 80s linear infinite',
        'rotate-reverse': 'spin 80s linear infinite reverse',
      }
    },
  },
  keyframes: {
    spin: {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  },
  variants: {
    extend: {
      transform: ['active'],
    }
},
  plugins: [
    require('@tailwindcss/forms')
  ],
}
