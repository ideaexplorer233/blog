/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["variant", [
    "@media (prefers-color-scheme: dark) { &:not(.light, .light *) }",
    "&:is(.dark, .dark *)"
  ]],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
