// postcss.config.js
module.exports = {
    plugins: [
      require('@tailwindcss/postcss'), // 👈 en lugar de require('tailwindcss')
      require('autoprefixer'),
    ],
  };
  