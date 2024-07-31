import { Oswald } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      xl: '1280px',
      xxl: '1440px',

      smOnly: { max: '767.98px' },
      lgOnly: { min: '480px', max: '1279.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXL: { max: '1279.98px' },
      xlOnly: { min: '1280px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      backgroundImage: {
        backdrop: `linear-gradient(rgba(41, 41, 41, 0.40),rgba(41, 41, 41, 0.40))`,
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        palms: `url(/pictures/palm.png)`,
      },
      content: {
        line: `url(/images/elements/roundedLine.png)`,
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.5)" },
        },
      },
      animation: {
        scale: "scale 0.7s ease infinite alternate",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      fontSize: {
        medium: ['28px', '1.28'],

      },
      colors: {
        mainBcg: '#001E23',
        lightBlue: '#4A8087',
        mainBlue: '#1879EA',
        btnBorder: '#00A189',
        titleColor: '#42a8bb',
        textBlue: '#2FA8B9',
        dark: '#32323D',

        backdrop: 'rgba(1, 10, 5, 0.75)',
        backdropBlue: 'rgba(52, 98, 153, 0.85)',
      },
    },
  },
  plugins: [],
};
export default config;
