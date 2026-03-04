import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { colors } from 'swiss-ui-tokens';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  rounded?: boolean;
  style?: object;
}

export function RadioGroup({ options, value, onChange, rounded = false, style }: RadioGroupProps) {
  return (
    <View style={[styles.container, style]}>
      {options.map((opt) => {
        const isSelected = value === opt.value;
        return (
          <Pressable
            key={opt.value}
            onPress={() => !opt.disabled && onChange?.(opt.value)}
            disabled={opt.disabled}
            style={[styles.row, opt.disabled && styles.disabled]}
          >
            <View style={[styles.radio, { borderRadius: rounded ? 10 : 0 }]}>
              {isSelected && (
                <View
                  style={[
                    styles.dot,
                    { borderRadius: rounded ? 6 : 0, backgroundColor: colors.primary },
                  ]}
                />
              )}
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>{opt.label}</Text>
              {opt.description && <Text style={styles.description}>{opt.description}</Text>}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8 },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  disabled: { opacity: 0.5 },
  radio: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  dot: { width: 8, height: 8 },
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
