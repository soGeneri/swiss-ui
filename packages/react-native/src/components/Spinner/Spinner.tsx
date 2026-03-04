import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { colors } from 'swiss-ui-tokens';

export interface SpinnerProps {
  size?: 'sm' | 'default' | 'lg';
  color?: string;
  style?: object;
}

export function Spinner({ size = 'default', color = colors.ink, style }: SpinnerProps) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      })
    );
    spin.start();
    return () => spin.stop();
  }, [spinValue]);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const dim = size === 'sm' ? 16 : size === 'lg' ? 48 : 32;
  const borderWidth = size === 'lg' ? 4 : 2;

  return (
    <Animated.View
      style={[
        styles.base,
        {
          width: dim,
          height: dim,
          borderWidth,
          borderColor: color,
          borderTopColor: 'transparent',
          transform: [{ rotate }],
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 0,
  },
});
