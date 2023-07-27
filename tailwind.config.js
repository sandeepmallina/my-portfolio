/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  }, // Add this line for production builds
  plugins: [],
};
