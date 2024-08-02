/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  animation: {
    "spin-slow": "spin 3s linear infinite",
  },
  theme: {
    extend: {
      colors: {
        primary: "#003080",
        secondary: "#FFE600",
        popover: "#003FA9",
        accent: "#212529",
        dark: "#3C4048",
        gray: "#95969A",
      },
    },
  },
  plugins: [],
};
