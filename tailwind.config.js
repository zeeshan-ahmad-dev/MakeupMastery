/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm' : '470px'
      },
      transitionProperty: {
        'transform-color': 'transform, color',
      },
      transitionDuration: {
        '0': '0ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
      transform: {
        'custom-transform': 'scale(0, 0) translate(-50%, 0)',
      },
      backgroundPosition: {
        'bg-s-position': '-355px 65px', 
        'bg-position-none': 'none', 
      },
    },
  },
  plugins: [],
}

