/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Belanosima", "sans-serif"],
        jetbrains: ["Jetbrains Mono", "monospace"],
      },
      colors: {
        "retro-black": "#232222",
        "retro-gray": "#545B64",
        "retro-lightgray": "rgb(201,199,196)",
        "retro-white": "#ECE8E0",
      },
      animation: {
        loading: "loading 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        loading: {
          "0%, 100%": { opacity: ".7" },
          "50%": { opacity: ".3" },
        },
      },
    },
    fontFamily: {
      sans: ["Lexend", "sans-serif"],
      mono: ["Jetbrains Mono", "monospace"],
    },
  },
  plugins: [],
};
