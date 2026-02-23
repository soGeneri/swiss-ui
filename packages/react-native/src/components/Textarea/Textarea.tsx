import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, type TextInputProps } from 'react-native';
import { colors } from '@swiss-ui/tokens';

export interface TextareaProps extends TextInputProps {
  label?: string;
  description?: string;
  error?: string;
  rounded?: boolean;
}

export function Textarea({ label, description, error, rounded = false, editable = true, style, ...props }: TextareaProps) {
  const [focused, setFocused] = useState(false);
  const borderRadius = rounded ? 6 : 0;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      {description && <Text style={styles.description}>{description}</Text>}
      <TextInput
        multiline
        textAlignVertical="top"
        editable={editable}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={colors.placeholder}
        style={[
          styles.textarea,
          { borderRadius, borderColor: focused ? colors.focusRing : colors.border },
          !editable && styles.disabled,
          style,
        ]}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 4 },
  label: {
    fontFamily: 'Courier New',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2.0,
    color: colors.muted,
  },
  description: {
    fontFamily: 'Courier New',
    fontSize: 12,
    color: colors.muted,
  },
  textarea: {
    minHeight: 80,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontFamily: 'Courier New',
    fontSize: 14,
    color: colors.ink,
  },
  error: {
    fontFamily: 'Courier New',
    fontSize: 11,
    color: colors.destructive,
  },
  disabled: { opacity: 0.5 },
});
