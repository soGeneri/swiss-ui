import React from 'react';
import { View, Text, StyleSheet, type ViewProps } from 'react-native';
import { colors } from 'swiss-ui-tokens';

const variantTokens = {
  default:     { border: colors.ink,         bg: colors.canvas,  text: colors.ink },
  success:     { border: colors.success,     bg: '#dcfce7',      text: colors.success },
  warning:     { border: colors.warning,     bg: '#fff7ed',      text: colors.warning },
  destructive: { border: colors.destructive, bg: '#fee2e2',      text: colors.destructive },
};

export interface AlertProps extends ViewProps {
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  rounded?: boolean;
  children?: React.ReactNode;
}

export function Alert({ variant = 'default', rounded = false, children, style, ...props }: AlertProps) {
  const vc = variantTokens[variant];
  const borderRadius = rounded ? 8 : 0;

  return (
    <View
      style={[
        styles.base,
        { backgroundColor: vc.bg, borderLeftColor: vc.border, borderRadius },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

export interface AlertTitleProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  style?: object;
}

export function AlertTitle({ children, variant = 'default', style }: AlertTitleProps) {
  const vc = variantTokens[variant];
  return <Text style={[styles.title, { color: vc.text }, style]}>{children}</Text>;
}

export interface AlertDescriptionProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  style?: object;
}

export function AlertDescription({ children, variant = 'default', style }: AlertDescriptionProps) {
  const vc = variantTokens[variant];
  return <Text style={[styles.description, { color: vc.text }, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  base: {
    padding: 16,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 0,
    elevation: 2,
  },
  title: {
    fontFamily: 'Courier New',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 4,
  },
  description: {
    fontFamily: 'Courier New',
    fontSize: 13,
    lineHeight: 18,
  },
});
