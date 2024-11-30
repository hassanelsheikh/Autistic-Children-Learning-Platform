import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EBF4FA", // Soft light blue
          100: "#D6E9F5",
          200: "#ADD4E8",
          300: "#84C0DB",
          400: "#5AAACC",
          500: "#3094BF", // Primary focus blue
          600: "#25789A",
          700: "#1A5C74",
          800: "#10404F",
          900: "#08242B",
          950: "#051922",
        },
        accent: {
          50: "#FDF7F1", // Soft cream
          100: "#FBF0E3",
          200: "#F7E2C8",
          300: "#F2D5AE",
          400: "#EEC793",
          500: "#E9B97A", // Warm and inviting
          600: "#C99B60",
          700: "#997648",
          800: "#704F30",
          900: "#48331E",
          950: "#332418",
        },
        neutral: {
          50: "#FAFAFA", // Soft neutral for backgrounds
          100: "#F5F5F5",
          200: "#EDEDED",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E", // Neutral gray for contrast
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          950: "#121212",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
