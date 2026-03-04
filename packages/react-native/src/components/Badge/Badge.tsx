import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from 'swiss-ui-tokens';

export interface BadgeProps {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline';
  rounded?: boolean;
  children: React.ReactNode;
  style?: object;
}

const variantStyles: Record<string, { bg: string; text: string }> = {
  default:     { bg: colors.primary,     text: colors.white },
  secondary:   { bg: colors.panel,       text: colors.ink },
  success:     { bg: colors.success,     text: colors.white },
  warning:     { bg: colors.warning,     text: colors.white },
  destructive: { bg: colors.destructive, text: colors.white },
  outline:     { bg: 'transparent',      text: colors.ink },
};

export function Badge({ variant = 'default', rounded = false, children, style }: BadgeProps) {
  const vc = variantStyles[variant];
  const borderRadius = rounded ? 12 : 0;

  return (
    <View style={[styles.base, { backgroundColor: vc.bg, borderRadius }, style]}>
      <Text style={[styles.text, { color: vc.text }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    fontFamily: 'Courier New',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.0,
  },
});
