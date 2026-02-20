import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx", "./mdx-components.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      gridTemplateColumns: {
        sidebar: "200px auto",
        "sidebar-collapsed": "40px auto",
        "sidebar-gone": "0px auto",
      },
      colors: {
        'regal-blue': '#243c5a',
        'clear-blue': '#204b60',
        'deep-blue': '#1b1e2d',
      },
    },
  },
  plugins: [],
} satisfies Config;
