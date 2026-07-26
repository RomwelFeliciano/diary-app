/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      colors: {
        // Vue.js green (#42b883) as the primary brand shade, extended into a
        // full dark-green scale (nods to Nuxt's green identity too).
        brand: {
          50: "#eefaf4",
          100: "#d3f2e3",
          200: "#a8e4c8",
          300: "#75d1a8",
          400: "#4dbd8d",
          500: "#42b883",
          600: "#339a6d",
          700: "#277a57",
          800: "#1f5f45",
          900: "#16402f",
          950: "#0c2a1f",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -8px rgba(15, 23, 42, 0.12)",
        card: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.08)",
        "card-hover":
          "0 12px 24px -8px rgba(15, 23, 42, 0.18), 0 4px 8px -4px rgba(15, 23, 42, 0.1)",
      },
      keyframes: {
        "overlay-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "modal-in": {
          from: { opacity: "0", transform: "scale(0.96) translateY(8px)" },
          to: { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "overlay-in": "overlay-in 0.15s ease-out",
        "modal-in": "modal-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.25s ease-out",
      },
    },
  },
  plugins: [],
};
