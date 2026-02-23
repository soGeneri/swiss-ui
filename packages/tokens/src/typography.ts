export const fontFamilies = {
  sans: ['System', 'ui-sans-serif', 'sans-serif'],
  serif: ['Georgia', 'Times New Roman', 'serif'],
  mono: ['Courier New', 'Courier', 'monospace'],
} as const;

export const fontSizes = {
  xs: 10,
  sm: 12,
  base: 14,
  lg: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 24,
} as const;

export const fontWeights = {
  normal: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
} as const;

export const letterSpacings = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1.2,
  widest: 2.0,
} as const;
