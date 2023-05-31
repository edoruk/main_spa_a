import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-col1": "var(--bg-col1)",
        "bg-col2": "var(--bg-col2)",
        "bg-col3": "var(--bg-col3)",
        "bg-col4": "var(--bg-col4)",
        "bg-col5": "var(--bg-col5)",
        "bg-col6": "var(--bg-col6)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "homepage-image": "url('/home/homepage.jpeg')",
        "content-image-[2]": "url('/home/content-2.webp')",
        "content-image-[3]": "url('/home/content-3.webp')",
        "content-image-[4]": "url('/home/content-4.webp')",
      },
      backgroundSize: {
        "0%": "0%",
        "100%": "100%",
      },
      boxShadow: {
        fade: " -10px 84px 30px rgba(0, 0, 0, .6)",
        topic: " 0 5px 0px rgba(255, 255, 255, .4)",
        inside:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
      },
    },
  },
  plugins: [],
}
