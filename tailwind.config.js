module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#111111",
        "secundary": "#181818",
        "tertiary": "#1E1E1E",
        "quaternary": "#202020",
        "costum-red": "#e93c3c",
        "light-costum-red": "#e93c3c",
      }
    },
    fontFamily: {
      // "Open_Sans": ["Open Sans", "sans-serif"]
    }, screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}