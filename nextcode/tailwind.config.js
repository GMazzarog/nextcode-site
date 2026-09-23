/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0B0C",
        bone: "#F2F0EB",
        graphite: "#202022",
        steel: "#858585",
        silver: "#C7C7C7",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
