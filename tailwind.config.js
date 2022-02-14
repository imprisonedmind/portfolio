module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hideout': "  url('/patterns/hideout.svg')"
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '100%'},
          '25%': {opacity: '0'},
          '50%': {opacity: '0'},
          '75%':  {opacity: '0'},
        }
      },
      animation: {
        'blink': "blink 0.8s ease-in-out infinite"
      },
    },
  },
  plugins: [],
}