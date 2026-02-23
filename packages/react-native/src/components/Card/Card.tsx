import React, { useRef } from 'react';
import {
  View,
  Text,
  Pressable,
  Animated,
  StyleSheet,
  type ViewProps,
  type TextProps,
  type PressableProps,
} from 'react-native';
import { colors, shadows } from '@swiss-ui/tokens';

export interface CardProps extends ViewProps {
  variant?: 'default' | 'interactive' | 'outline' | 'ghost';
  noPadding?: boolean;
  rounded?: boolean;
}

export function Card({ variant = 'default', noPadding = false, rounded = false, children, style, ...props }: CardProps) {
  const pressAnim = useRef(new Animated.Value(0)).current;
  const borderRadius = rounded ? 12 : 0;

  const translateX = pressAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 2] });
  const translateY = pressAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 2] });

  if (variant === 'interactive') {
    return (
      <Animated.View style={{ transform: [{ translateX }, { translateY }] }}>
        <Pressable
          onPressIn={() => Animated.timing(pressAnim, { toValue: 1, duration: 80, useNativeDriver: true }).start()}
          onPressOut={() => Animated.timing(pressAnim, { toValue: 0, duration: 80, useNativeDriver: true }).start()}
          style={[
            styles.base,
            styles.interactive,
            { borderRadius },
            !noPadding && styles.padding,
            style,
          ]}
          {...(props as PressableProps)}
        >
          {children}
        </Pressable>
      </Animated.View>
    );
  }

  const variantStyle = variant === 'outline'
    ? styles.outline
    : variant === 'ghost'
    ? styles.ghost
    : styles.default;

  return (
    <View
      style={[
        styles.base,
        variantStyle,
        { borderRadius },
        !noPadding && styles.padding,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

export interface CardHeaderProps extends ViewProps {}

export function CardHeader({ children, style, ...props }: CardHeaderProps) {
  return (
    <View style={[styles.header, style]} {...props}>
      {children}
    </View>
  );
}

export interface CardTitleProps extends TextProps {}

export function CardTitle({ children, style, ...props }: CardTitleProps) {
  return (
    <Text style={[styles.title, style]} {...props}>
      {children}
    </Text>
  );
}

export interface CardDescriptionProps extends TextProps {}

export function CardDescription({ children, style, ...props }: CardDescriptionProps) {
  return (
    <Text style={[styles.description, style]} {...props}>
      {children}
    </Text>
  );
}

export interface CardContentProps extends ViewProps {}

export function CardContent({ children, style, ...props }: CardContentProps) {
  return (
    <View style={[styles.content, style]} {...props}>
      {children}
    </View>
  );
}

export interface CardFooterProps extends ViewProps {}

export function CardFooter({ children, style, ...props }: CardFooterProps) {
  return (
    <View style={[styles.footer, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'column',
  },
  default: {
    backgroundColor: colors.canvas,
  },
  interactive: {
    backgroundColor: colors.canvas,
    borderWidth: 2,
    borderColor: colors.border,
    shadowColor: shadows.default.color,
    shadowOffset: { width: shadows.default.offsetX, height: shadows.default.offsetY },
    shadowOpacity: shadows.default.opacity,
    shadowRadius: 0,
    elevation: 4,
  },
  outline: {
    backgroundColor: colors.canvas,
    borderWidth: 2,
    borderColor: colors.ink,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  padding: {
    padding: 24,
  },
  header: {
    flexDirection: 'column',
    gap: 6,
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Georgia',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.5,
    color: colors.ink,
  },
  description: {
    fontFamily: 'Courier New',
    fontSize: 12,
    color: colors.muted,
  },
  content: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    marginTop: 'auto',
  },
});
