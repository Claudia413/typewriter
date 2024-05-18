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
        lato: ['var(--font-lato)'],
      },
      colors: {
        'brown-900': '#484743',
        'lilac': '#dae0ef'
      },
      boxShadow: {
        'right-bottom-shade': '5px 5px 7px 1px rgba(0,0,0,0.75)',
        'top-left-highlight': 'inset 5px 4px 17px -3px rgba(255,255,255,1)',
        'button-shade-combi': '5px 5px 7px 1px rgba(119,119,119,0.75), inset 5px 4px 17px -3px rgba(245,239,235,0.88),  inset -7px -3px 17px -3px rgba(189,189,189,0.88);',
        'spacebar': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
        'spacebar-press': 'rgba(0, 0, 0, 0.4) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px -3px, rgba(0, 0, 0, 0.2) 0px 3px 6px inset',
      }
    },
  },
  plugins: [],
};
export default config;
