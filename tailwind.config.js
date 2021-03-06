module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        'blue-500': '1px solid rgb(59, 130, 246)',
      },
      colors: {
        'apple-link-blue': '#0066cc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
