import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBg: "#FAFAFA",
        blackColor: "#000",
        lightBg: "#f4f4f4",
        accentColor: "#00c29f",
        primaryColor: "#171E1D",
        secondaryColor: "#787878",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
