/**
 * Centralized color constants for FoodSense.
 * Matches the design theme — use these in StyleSheet-based styles.
 * For NativeWind className, use tailwind.config.js token names directly.
 */
export const colors = {
  // ── Background ────────────────────────────────────────────
  /** Warm cream — used as the app background on every screen */
  background: "#F5EDD4",

  // ── Surfaces ──────────────────────────────────────────────
  /** White — card and panel surfaces */
  surface: "#FFFFFF",

  // ── Primary brand ─────────────────────────────────────────
  /** Purple-indigo — buttons, active tabs, links, brand text */
  primary:      "#4747CF",
  /** Tinted light purple — chip backgrounds, pressed states */
  primaryLight: "#ECEAFA",
  /** Darker purple — pressed / active variant */
  primaryDark:  "#3535A8",

  // ── Text ──────────────────────────────────────────────────
  /** Near-black charcoal — headings and primary text */
  text:        "#1A1A2E",
  /** Medium gray — secondary / subtitle text */
  textMuted:   "#6B6B82",
  /** Light gray — placeholders, disabled text */
  textFaint:   "#A0A0B0",
  /** White — text on primary/danger backgrounds */
  textInverse: "#FFFFFF",

  // ── Semantic ──────────────────────────────────────────────
  /** Red — allergen alert banner background, error states */
  danger:      "#C0302A",
  /** Light red — allergen chip background tint */
  dangerLight: "#FDECEA",

  /** Amber — "Scan Result" badge, grade B indicator */
  warning:      "#F5A623",
  /** Light amber — warning chip background */
  warningLight: "#FFF3CD",

  /** Green — grade A indicator, success states */
  success:      "#27AE60",
  /** Light green — success chip background */
  successLight: "#D4EDDA",

  // ── Borders ───────────────────────────────────────────────
  /** Default light border / divider */
  border:        "#E5E5F0",
  /** Purple dashed border — Add Allergen button */
  borderPrimary: "#4747CF",

  // ── Tab Bar ───────────────────────────────────────────────
  tabBar:          "#FFFFFF",
  tabBarActive:    "#4747CF",
  tabBarInactive:  "#6B6B82",
  tabBarActiveBg:  "#ECEAFA",
} as const;

export type ColorKey = keyof typeof colors;
