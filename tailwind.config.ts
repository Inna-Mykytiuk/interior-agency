import { Oswald } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
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
        sample: `url(/images/sample.jpg)`,
        sample1: `url(/images/sample1.jpg)`,
        // hero1: `url(/images/hero2.webp)`,
        hero: `url(/images/hero/hero2.png)`,
        hero2: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/images/hero/hero2.png)`,
        overlay: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))`,
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
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
        "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
      },
      colors: {
        mainBcg: '#242629',
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
