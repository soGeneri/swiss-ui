import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { colors } from 'swiss-ui-tokens';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  rounded?: boolean;
  style?: object;
}

export function Checkbox({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  rounded = false,
  style,
}: CheckboxProps) {
  const borderRadius = rounded ? 4 : 0;

  return (
    <Pressable
      onPress={() => !disabled && onChange?.(!checked)}
      disabled={disabled}
      style={[styles.container, disabled && styles.disabled, style]}
    >
      <View
        style={[
          styles.box,
          { borderRadius, backgroundColor: checked ? colors.primary : colors.white },
        ]}
      >
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      {(label || description) && (
        <View style={styles.labelContainer}>
          {label && <Text style={styles.label}>{label}</Text>}
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  disabled: { opacity: 0.5 },
  box: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
  labelContainer: { flex: 1, gap: 2 },
  label: {
    fontFamily: 'Courier New',
    fontSize: 13,
    fontWeight: '600',
    color: colors.ink,
  },
  description: {
    fontFamily: 'Courier New',
    fontSize: 11,
    color: colors.muted,
  },
});
