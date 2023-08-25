/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  // eslint-disable-next-line global-require
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};
