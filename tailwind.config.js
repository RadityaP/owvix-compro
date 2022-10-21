/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        "red-primary": "#d60b05",
        "red-secondary": "#971313",
        "black-primary": "#323232",
        "grey-primary": "#595858",
      },
      aspectRatio: {
        "800/450": "800 / 450",
        "2/3": "2 / 3",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
