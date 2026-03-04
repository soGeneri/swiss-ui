import React from 'react';
import { View, Text, StyleSheet, type ViewProps } from 'react-native';
import { colors } from 'swiss-ui-tokens';

export interface SeparatorProps extends ViewProps {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
}

export function Separator({
  orientation = 'horizontal',
  label,
  style,
  ...props
}: SeparatorProps) {
  if (orientation === 'vertical') {
    return <View style={[styles.vertical, style]} {...props} />;
  }

  if (label) {
    return (
      <View style={[styles.labelRow, style]} {...props}>
        <View style={styles.line} />
        <Text style={styles.labelText}>{label}</Text>
        <View style={styles.line} />
      </View>
    );
  }

  return <View style={[styles.horizontal, style]} {...props} />;
}

const styles = StyleSheet.create({
  horizontal: {
    width: '100%',
    height: 2,
    backgroundColor: colors.border,
  },
  vertical: {
    width: 2,
    alignSelf: 'stretch',
    backgroundColor: colors.border,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: colors.border,
  },
  labelText: {
    fontFamily: 'Courier New',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: colors.muted,
  },
});
