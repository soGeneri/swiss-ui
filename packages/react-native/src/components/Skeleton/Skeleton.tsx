import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, type ViewProps } from 'react-native';
import { colors } from 'swiss-ui-tokens';

export interface SkeletonProps extends ViewProps {
  width?: number | string;
  height?: number | string;
  rounded?: boolean;
}

export function Skeleton({ width, height = 16, rounded = false, style, ...props }: SkeletonProps) {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.4, duration: 800, useNativeDriver: true }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [opacity]);

  const borderRadius = rounded ? (typeof height === 'number' ? height / 2 : 8) : 0;

  return (
    <Animated.View
      accessibilityLabel="Loading"
      style={[
        styles.base,
        {
          width: (width ?? '100%') as `${number}%` | number,
          height: height as number,
          borderRadius,
          opacity,
        },
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.panel,
  },
});
