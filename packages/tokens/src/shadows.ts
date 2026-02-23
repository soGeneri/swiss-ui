export interface ShadowToken {
  offsetX: number;
  offsetY: number;
  color: string;
  opacity: number;
}

export interface RNShadow {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export const shadows = {
  sm: { offsetX: 2, offsetY: 2, color: '#000000', opacity: 1.0 } as ShadowToken,
  default: { offsetX: 4, offsetY: 4, color: '#000000', opacity: 1.0 } as ShadowToken,
  lg: { offsetX: 6, offsetY: 6, color: '#000000', opacity: 1.0 } as ShadowToken,
  xl: { offsetX: 8, offsetY: 8, color: '#000000', opacity: 0.2 } as ShadowToken,
} as const;

export function shadowToRN(s: ShadowToken): RNShadow {
  return {
    shadowColor: s.color,
    shadowOffset: { width: s.offsetX, height: s.offsetY },
    shadowOpacity: s.opacity,
    shadowRadius: 0,
    elevation: s.offsetY * 2,
  };
}
