/**
 * FoodSense Design Tokens
 * Extracted from the official FoodSense design theme (Stitch export).
 * Single source of truth — use these everywhere StyleSheet is required.
 * For NativeWind className usage, refer to tailwind.config.js.
 */

// ---------------------------------------------------------------------------
// Colors
// ---------------------------------------------------------------------------
export const colors = {
  /** Warm cream — app background across all screens */
  background: "#F5EDD4",

  /** Pure white — card / surface background */
  surface: "#FFFFFF",

  /** Purple-indigo — primary brand color (buttons, active states, links) */
  primary: "#4747CF",
  /** Very light purple — chip/tag tint, pressed backgrounds */
  primaryLight: "#ECEAFA",
  /** Darker purple — pressed / active variant */
  primaryDark: "#3535A8",

  /** Near-black charcoal — primary text */
  text: "#1A1A2E",
  /** Medium gray — secondary / muted text */
  textMuted: "#6B6B82",
  /** Light gray — placeholder, disabled text */
  textFaint: "#A0A0B0",
  /** White — text on dark/primary backgrounds */
  textInverse: "#FFFFFF",

  /** Red — allergen alert card, danger banners */
  danger: "#C0302A",
  /** Light red — allergen tag chip background */
  dangerLight: "#FDECEA",

  /** Amber / Golden — "Scan Result" badge, grade B indicator */
  warning: "#F5A623",
  /** Light amber — warning chip background */
  warningLight: "#FFF3CD",

  /** Green — grade A indicator, success states */
  success: "#27AE60",
  /** Light green — success chip background */
  successLight: "#D4EDDA",

  /** Light border / divider */
  border: "#E5E5F0",
  /** Dashed purple border (Add Allergen button) */
  borderPrimary: "#4747CF",

  /** Tab bar background */
  tabBar: "#FFFFFF",

  // Semantic aliases used throughout the app
  allergenBg: "#C0302A",    // allergen alert background
  scanBadge: "#F5A623",     // "Scan Result" floating badge
  energyCard: "#4747CF",    // calorie / energy density card
} as const;

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------
export const fonts = {
  regular: "DMSans_400Regular",
  medium:  "DMSans_500Medium",
  bold:    "DMSans_700Bold",
} as const;

export const fontSizes = {
  xs:   11,
  sm:   13,
  base: 14,
  md:   16,
  lg:   18,
  xl:   20,
  "2xl": 24,
  "3xl": 28,
  "4xl": 36,
  hero:  52,
} as const;

export const lineHeights = {
  tight:  1.2,
  snug:   1.35,
  normal: 1.5,
  relaxed: 1.65,
} as const;

// ---------------------------------------------------------------------------
// Spacing (8-pt grid)
// ---------------------------------------------------------------------------
export const spacing = {
  0:    0,
  0.5:  2,
  1:    4,
  1.5:  6,
  2:    8,
  2.5:  10,
  3:    12,
  3.5:  14,
  4:    16,
  5:    20,
  6:    24,
  7:    28,
  8:    32,
  10:   40,
  12:   48,
  16:   64,
} as const;

// ---------------------------------------------------------------------------
// Border Radius
// ---------------------------------------------------------------------------
export const radius = {
  none:    0,
  sm:      6,
  md:      10,
  lg:      16,   // cards
  xl:      20,   // large cards
  "2xl":   24,   // modals
  chip:    999,  // tags / chips (pill)
  button:  999,  // CTA buttons (pill)
  icon:    12,   // header icon buttons
  circle:  9999, // avatar / score circles
} as const;

// ---------------------------------------------------------------------------
// Shadows (use in StyleSheet, not className)
// ---------------------------------------------------------------------------
export const shadows = {
  card: {
    shadowColor: "#1A1A2E",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  strong: {
    shadowColor: "#1A1A2E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },
} as const;

// ---------------------------------------------------------------------------
// Tab Bar
// ---------------------------------------------------------------------------
export const tabBar = {
  height:      64,
  paddingBottom: 8,
  background:  colors.tabBar,
  borderColor: colors.border,
  activeColor: colors.primary,
  inactiveColor: colors.textMuted,
  activeBg:    colors.primaryLight,
} as const;
