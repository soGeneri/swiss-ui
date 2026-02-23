import React, { useRef, useEffect } from 'react';
import { View, Text, Pressable, Animated, StyleSheet } from 'react-native';
import { colors, radius } from '@swiss-ui/tokens';

export interface ToggleSwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
  description?: string;
  disabled?: boolean;
  rounded?: boolean;
}

export function ToggleSwitch({
  checked,
  onCheckedChange,
  label,
  description,
  disabled = false,
  rounded = false,
}: ToggleSwitchProps) {
  const knobAnim = useRef(new Animated.Value(checked ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(knobAnim, {
      toValue: checked ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [checked, knobAnim]);

  const translateX = knobAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 24],
  });

  const trackBorderRadius = rounded ? radius.full : radius.none;
  const knobBorderRadius = rounded ? radius.full : radius.none;

  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      <Pressable
        onPress={() => !disabled && onCheckedChange(!checked)}
        disabled={disabled}
        style={[
          styles.track,
          { borderRadius: trackBorderRadius, backgroundColor: checked ? colors.primary : '#E5E7EB' },
        ]}
      >
        <Animated.View
          style={[
            styles.knob,
            { borderRadius: knobBorderRadius, transform: [{ translateX }] },
          ]}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  textContainer: { flex: 1, marginRight: 16 },
  label: {
    fontFamily: 'Courier New',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    color: colors.ink,
  },
  description: {
    fontSize: 11,
    color: colors.muted,
    marginTop: 2,
  },
  track: {
    width: 48,
    height: 24,
    borderWidth: 2,
    borderColor: colors.border,
    justifyContent: 'center',
  },
  knob: {
    position: 'absolute',
    width: 16,
    height: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  disabled: { opacity: 0.5 },
});
