/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
      "big-shoulders-display": ['"Big Shoulders Display"', "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
};
