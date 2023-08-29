/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich-black": "#0f172a",
        "bg-gray": "#192436",
        "border-gray": "#475569",
        "snow-white": "#E7E8EA",
        accent: "#0068FF",
      },
    },
  },
  plugins: [],
};
