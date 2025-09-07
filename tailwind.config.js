import aspectRatio from "@tailwindcss/aspect-ratio";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        blue: {
          600: "hsl(231, 69%, 60%)",
          950: "hsl(229, 31%, 21%)",
        },
        red: {
          400: "hsl(0, 94%, 66%)",
        },
        gray: {
          50: "hsl(0, 0%, 97%)",
        },
      },
      fontFamily: { rubik: ["Rubik", "sans-serif"] },
      fontSize: { base: "18px" },
      fontWeight: { normal: "400", medium: "550" },
    },
  },
  plugins: [aspectRatio],
};
