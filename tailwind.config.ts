import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "gradient-corner-radial": "radial-gradient(at left top, #FCFBF6, #E3E0DB, #C0B7B0);"
      },
      fontFamily: {
        prata: ['var(--font-prata)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        'brown-900': '#484743'
      }
    },
  },
  plugins: [],
};
export default config;
