import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-secondary": "#DB4444",
        "white-secondary": "#F5F5F5",
        "tansparent": "#000000"
      },
    },
  },
  plugins: [],
};
export default config
