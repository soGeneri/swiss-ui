import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from 'swiss-ui-tokens';

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'default' | 'lg';
  rounded?: boolean;
  style?: object;
}

const sizeMap = { sm: 32, default: 40, lg: 56 };
const fontSizeMap = { sm: 12, default: 14, lg: 18 };

export function Avatar({
  src,
  alt,
  initials,
  size = 'default',
  rounded = false,
  style,
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const dim = sizeMap[size];
  const fontSize = fontSizeMap[size];
  const borderRadius = rounded ? dim / 2 : 0;
  const showImage = src && !imgError;

  return (
    <View style={[styles.base, { width: dim, height: dim, borderRadius }, style]}>
      {showImage ? (
        <Image
          source={{ uri: src }}
          style={{ width: dim, height: dim, borderRadius }}
          onError={() => setImgError(true)}
          accessibilityLabel={alt}
        />
      ) : (
        <Text style={[styles.initials, { fontSize }]}>{initials ?? '?'}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.panel,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  initials: {
    fontFamily: 'Courier New',
    fontWeight: '700',
    color: colors.ink,
    textTransform: 'uppercase',
  },
});
