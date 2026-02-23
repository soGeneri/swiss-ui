import React from 'react';
import { Text, StyleSheet, type TextProps } from 'react-native';
import { colors } from '@swiss-ui/tokens';

export interface LabelProps extends TextProps {
  htmlFor?: string;
}

export function Label({ children, style, ...props }: LabelProps) {
  return (
    <Text style={[styles.label, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Courier New',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2.0,
    color: colors.muted,
  },
});
