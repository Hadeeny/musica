import("tailwindcss").Config;
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      colors: {
        darkGray: "#1A1E1F",
        darkBlue: "#609EAF",
        yellow: "#FACD66",
      },
      width: {
        veryWide: "40rem",
      },
    },
  },
  plugins: [],
};
