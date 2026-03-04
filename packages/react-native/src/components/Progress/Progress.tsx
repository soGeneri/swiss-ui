import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from 'swiss-ui-tokens';

export interface ProgressProps {
  value?: number;
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  rounded?: boolean;
  showLabel?: boolean;
  style?: object;
}

const variantFill: Record<string, string> = {
  default:     colors.primary,
  success:     colors.success,
  warning:     colors.warning,
  destructive: colors.destructive,
};

export function Progress({
  value = 0,
  variant = 'default',
  rounded = false,
  showLabel = false,
  style,
}: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const borderRadius = rounded ? 8 : 0;

  return (
    <View style={[styles.wrapper, style]}>
      {showLabel && (
        <View style={styles.labelRow}>
          <Text style={styles.labelLeft}>Progress</Text>
          <Text style={styles.labelRight}>{clamped}%</Text>
        </View>
      )}
      <View
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max: 100, now: clamped }}
        style={[styles.track, { borderRadius }]}
      >
        <View
          style={[
            styles.fill,
            { width: `${clamped}%` as `${number}%`, backgroundColor: variantFill[variant], borderRadius },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: '100%' },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  labelLeft: {
    fontFamily: 'Courier New',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: colors.muted,
  },
  labelRight: {
    fontFamily: 'Courier New',
    fontSize: 10,
    fontWeight: '700',
    color: colors.ink,
  },
  track: {
    height: 16,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});
