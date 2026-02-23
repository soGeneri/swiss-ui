export const colors = {
  // Core Colors
  canvas: '#F0F0E8',
  ink: '#000000',
  panel: '#E5E5E0',
  panelDark: '#D8D8D2',
  white: '#FFFFFF',

  // Semantic Colors
  primary: '#1D4ED8',
  primaryHover: '#1E40AF',
  success: '#15803D',
  successHover: '#166534',
  warning: '#F97316',
  warningHover: '#EA580C',
  destructive: '#DC2626',
  destructiveHover: '#B91C1C',

  // UI Colors
  border: '#000000',
  focusRing: '#1D4ED8',
  muted: '#6B7280',
  placeholder: '#9CA3AF',
} as const;

export type Colors = typeof colors;
