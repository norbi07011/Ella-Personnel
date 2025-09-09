
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-sora)", "sans-serif"],
      },
      colors: {
        dark: {
          bg: '#0B0E2A',
          text: '#E6EAF2',
          subtext: '#8EA1B2',
        },
        accent: {
          cyan: '#22d3ee',
          teal: '#2dd4bf',
          fuchsia: '#d946ef',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
