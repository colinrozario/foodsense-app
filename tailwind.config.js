/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      // -----------------------------------------------------------------------
      // Colors — exact tokens from FoodSense design theme
      // -----------------------------------------------------------------------
      colors: {
        // App background (warm cream)
        cream: "#F5EDD4",

        // Primary brand (purple-indigo)
        primary: {
          DEFAULT: "#4747CF",
          light:   "#ECEAFA",
          dark:    "#3535A8",
        },

        // Surfaces
        surface: "#FFFFFF",

        // Text hierarchy
        ink: {
          DEFAULT: "#1A1A2E",  // headings & primary text
          muted:   "#6B6B82",  // secondary / subtitle
          faint:   "#A0A0B0",  // placeholder / disabled
        },

        // Semantic states
        danger: {
          DEFAULT: "#C0302A",  // allergen alert, error
          light:   "#FDECEA",  // allergen chip bg
        },
        warning: {
          DEFAULT: "#F5A623",  // scan result badge, grade B
          light:   "#FFF3CD",
        },
        success: {
          DEFAULT: "#27AE60",  // grade A, positive
          light:   "#D4EDDA",
        },

        // Borders & dividers
        border: {
          DEFAULT: "#E5E5F0",
          primary: "#4747CF",  // dashed purple border
        },
      },

      // -----------------------------------------------------------------------
      // Typography — DM Sans
      // -----------------------------------------------------------------------
      fontFamily: {
        sans:   ["DMSans_400Regular", "System"],
        medium: ["DMSans_500Medium",  "System"],
        bold:   ["DMSans_700Bold",    "System"],
      },

      fontSize: {
        "2xs": ["10px", { lineHeight: "14px" }],
        xs:    ["11px", { lineHeight: "16px" }],
        sm:    ["13px", { lineHeight: "18px" }],
        base:  ["14px", { lineHeight: "20px" }],
        md:    ["16px", { lineHeight: "22px" }],
        lg:    ["18px", { lineHeight: "26px" }],
        xl:    ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["28px", { lineHeight: "36px" }],
        "4xl": ["36px", { lineHeight: "44px" }],
        hero:  ["52px", { lineHeight: "60px" }],
      },

      // -----------------------------------------------------------------------
      // Border Radius
      // -----------------------------------------------------------------------
      borderRadius: {
        none:   "0px",
        sm:     "6px",
        md:     "10px",
        lg:     "16px",   // cards, panels
        xl:     "20px",   // large cards
        "2xl":  "24px",   // modals, bottom sheets
        pill:   "999px",  // buttons, chips, tags
        icon:   "12px",   // header icon buttons (dashed border)
      },

      // -----------------------------------------------------------------------
      // Spacing — 4pt base grid
      // -----------------------------------------------------------------------
      spacing: {
        0.5:  "2px",
        1:    "4px",
        1.5:  "6px",
        2:    "8px",
        2.5:  "10px",
        3:    "12px",
        3.5:  "14px",
        4:    "16px",
        5:    "20px",
        6:    "24px",
        7:    "28px",
        8:    "32px",
        9:    "36px",
        10:   "40px",
        11:   "44px",
        12:   "48px",
        14:   "56px",
        16:   "64px",
        18:   "72px",
        20:   "80px",
      },

    },
  },
  plugins: [],
};
