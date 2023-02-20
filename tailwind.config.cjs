/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        menu: ['Fira Code', 'monospace'],
        serif: ['Noto Serif', 'ui-serif', 'Georgia', 'Cambria'],
        sans: ['Lato', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont']
      }
    },
  },
  plugins: [require("daisyui"),
  require('flowbite/plugin')],
}
