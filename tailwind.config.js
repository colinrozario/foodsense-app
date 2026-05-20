/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#edfdf4",
          100: "#d3f9e3",
          200: "#a9f1c9",
          300: "#6fe5a9",
          400: "#35d082",
          500: "#16b868",   // primary green
          600: "#0d9652",
          700: "#0d7643",
          800: "#0f5e37",
          900: "#0d4e2f",
        },
        surface: {
          DEFAULT: "#0f1117",
          card:    "#1a1d27",
          muted:   "#23263a",
        },
        ink: {
          DEFAULT: "#f0f4f8",
          muted:   "#8b93a7",
          faint:   "#3d4255",
        },
        danger: "#ef4444",
        warn:   "#f59e0b",
      },
      fontFamily: {
        sans:  ["Inter", "system-ui"],
        mono:  ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
