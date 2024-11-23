// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: "#18191C",
        hovergray: "#343333",
        theme1: "#6A00FF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
      },
      fontSize: {
        "custom-xl": "60px", // Custom font size
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "20px": "20px",
      },
      padding: {
        "custom-x": "5rem", // Custom padding
        "custom-y": "10rem", // Custom padding
      },
    },
  },
  plugins: [],
};
