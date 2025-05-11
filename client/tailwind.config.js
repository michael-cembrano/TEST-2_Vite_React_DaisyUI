/** @type {import('tailwindcss').Config} */
// import daisyui from './node_modules/daisyui'
// import tailwind_typography from './node_modules/@tailwindcss/typography'
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
    "./src/page/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: ["dark", "light"], // enable themes
    darkTheme: "dark", // set dark theme as default
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

