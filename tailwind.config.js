module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'beige': '#faf3f3',
        'lightblue': '#e1e5ea',
        'mediumblue':'#a7bbc7',
        'rose': '#da7f8f',
      }
    },
  },
  variants: {
    extend: {
      scale: ["group-hover", "hover"],
      borderWidth: ["group-hover"],
      animation: ["group-hover", "hover", "focus",],
      fontWeight: ["group-hover","hover",],
    },
  },
  plugins: [],
}
