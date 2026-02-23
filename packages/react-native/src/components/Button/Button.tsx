import React, { useRef } from 'react';
import {
  Pressable,
  Text,
  View,
  Animated,
  StyleSheet,
  type PressableProps,
} from 'react-native';
import { colors, shadows } from '@swiss-ui/tokens';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  rounded?: boolean;
  children?: React.ReactNode;
}

const variantColors: Record<string, { bg: string; text: string }> = {
  default:     { bg: colors.primary,     text: colors.white },
  destructive: { bg: colors.destructive, text: colors.white },
  success:     { bg: colors.success,     text: colors.white },
  warning:     { bg: colors.warning,     text: colors.white },
  outline:     { bg: colors.canvas,      text: colors.ink },
  secondary:   { bg: colors.panel,       text: colors.ink },
  ghost:       { bg: 'transparent',      text: colors.ink },
  link:        { bg: 'transparent',      text: colors.primary },
};

export function Button({
  variant = 'default',
  size = 'default',
  rounded = false,
  children,
  disabled,
  onPressIn,
  onPressOut,
  ...props
}: ButtonProps) {
  const pressAnim = useRef(new Animated.Value(0)).current;

  const handlePressIn = (e: Parameters<NonNullable<PressableProps['onPressIn']>>[0]) => {
    Animated.timing(pressAnim, {
      toValue: 1,
      duration: 80,
      useNativeDriver: true,
    }).start();
    onPressIn?.(e);
  };

  const handlePressOut = (e: Parameters<NonNullable<PressableProps['onPressOut']>>[0]) => {
    Animated.timing(pressAnim, {
      toValue: 0,
      duration: 80,
      useNativeDriver: true,
    }).start();
    onPressOut?.(e);
  };

  const translateX = pressAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 2] });
  const translateY = pressAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 2] });
  const shadowOpacity = pressAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });

  const vc = variantColors[variant];
  const borderRadius = rounded ? 6 : 0;

  const isLink = variant === 'link';
  const isGhost = variant === 'ghost';
  const hasHardShadow = !isLink && !isGhost;

  if (isLink) {
    return (
      <Pressable disabled={disabled} {...props}>
        <Text style={[styles.linkText, disabled && styles.disabled]}>
          {children}
        </Text>
      </Pressable>
    );
  }

  const sizeStyle = size === 'icon'
    ? styles.sizeIcon
    : size === 'sm'
    ? styles.sizeSm
    : size === 'lg'
    ? styles.sizeLg
    : styles.sizeDefault;

  return (
    <View style={[hasHardShadow && {
      shadowColor: shadows.sm.color,
      shadowOffset: { width: shadows.sm.offsetX, height: shadows.sm.offsetY },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 2,
      borderRadius,
    }]}>
      <Animated.View
        style={[
          { transform: [{ translateX }, { translateY }] },
          hasHardShadow && { shadowColor: shadows.sm.color, shadowOpacity },
        ]}
      >
        <Pressable
          disabled={disabled}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[
            styles.base,
            sizeStyle,
            { backgroundColor: vc.bg, borderRadius },
            !isGhost && styles.border,
            size === 'icon' && styles.iconContainer,
            disabled && styles.disabled,
          ]}
          {...props}
        >
          <Text style={[styles.label, { color: vc.text }]}>
            {children}
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontFamily: 'Courier New',
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sizeDefault: { height: 40, paddingHorizontal: 24, paddingVertical: 8 },
  sizeSm:      { height: 32, paddingHorizontal: 16, paddingVertical: 4 },
  sizeLg:      { height: 48, paddingHorizontal: 32, paddingVertical: 12 },
  sizeIcon:    { width: 40, height: 40, padding: 0 },
  iconContainer: { alignItems: 'center', justifyContent: 'center' },
  linkText: {
    fontFamily: 'Courier New',
    fontSize: 12,
    fontWeight: '500',
    color: colors.primary,
    textDecorationLine: 'underline',
    letterSpacing: 1.2,
  },
  disabled: { opacity: 0.5 },
});
