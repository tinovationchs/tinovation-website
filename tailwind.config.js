/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Belanosima", "sans-serif"],
      },
      colors: {
        "retro-black": "#232222",
        "retro-white": "#ECE8E0",
      },
    },
    fontFamily: {
      sans: ["Lexend", "sans-serif"],
    },
  },
  plugins: [],
};
