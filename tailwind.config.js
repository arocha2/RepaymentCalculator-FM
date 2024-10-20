/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["jakarta"],
      },
      colors: {
        "bg-button": "hsl(61, 70%, 52%)",
        "bg-input": " hsl(203, 41%, 72%)",
        "text-form": " hsl(200, 24%, 40%)",
        "text-normal": " hsl(202, 55%, 16%)",
      },
    },
  },
  plugins: [],
};
