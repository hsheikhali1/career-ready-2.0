/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
      "big-shoulders-display": ['"Big Shoulders Display"', "sans-serif"],
    },
    extend: {
      colors: {
        "career-dark": "#0C1827",
        "career-green": "#5FE668",
        "career-gray": "#96A3B2",
        "career-slate": "#272B36",
        "career-gray-2": "#3C404B",
        "career-orange": "#FF543D",
      },
    },
  },
  plugins: [],
};
