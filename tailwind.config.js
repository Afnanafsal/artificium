module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        // For example:
        // 'custom-blue': '#3b82f6',
        // 'custom-green': '#10b981',
      },
      fontFamily: {
        // Define your custom fonts here
        // For example:
        // sans: ['Roboto', 'sans-serif'],
        // serif: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
