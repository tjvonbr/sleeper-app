import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shake: "shake 1s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "rotate(5deg)",
          },

          "20%, 80%": {
            transform: "rotate(-5deg)",
          },

          "30%, 50%, 70%": {
            transform: "rotate(5deg)",
          },

          "40%, 60%": {
            transform: "rotate(-5deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
