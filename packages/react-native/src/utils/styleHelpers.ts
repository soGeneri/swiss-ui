import { StyleSheet } from 'react-native';
import { shadowToRN, type ShadowToken } from '@swiss-ui/tokens';

export function createShadow(token: ShadowToken) {
  return shadowToRN(token);
}

export function createBorderStyle(width: number, color: string) {
  return { borderWidth: width, borderColor: color };
}
