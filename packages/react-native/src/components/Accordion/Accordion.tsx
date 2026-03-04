import React, { useRef, useState } from 'react';
import { Pressable, View, Text, Animated, StyleSheet } from 'react-native';
import { colors } from 'swiss-ui-tokens';

export interface AccordionItem {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  rounded?: boolean;
  style?: object;
}

function AccordionItemComponent({
  item,
  isOpen,
  onToggle,
  isLast,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  const animValue = useRef(new Animated.Value(isOpen ? 1 : 0)).current;

  React.useEffect(() => {
    Animated.timing(animValue, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOpen, animValue]);

  const rotate = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={!isLast && styles.itemBorder}>
      <Pressable
        onPress={() => !item.disabled && onToggle()}
        disabled={item.disabled}
        style={[styles.trigger, isOpen && styles.triggerOpen, item.disabled && styles.disabled]}
      >
        <Text style={styles.triggerText}>
          {typeof item.trigger === 'string' ? item.trigger : item.trigger}
        </Text>
        <Animated.Text style={[styles.chevron, { transform: [{ rotate }] }]}>▼</Animated.Text>
      </Pressable>
      {isOpen && (
        <View style={styles.content}>
          {typeof item.content === 'string' ? (
            <Text style={styles.contentText}>{item.content}</Text>
          ) : (
            item.content
          )}
        </View>
      )}
    </View>
  );
}

export function Accordion({
  items,
  type = 'single',
  defaultValue,
  rounded = false,
  style,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    if (!defaultValue) return new Set();
    if (Array.isArray(defaultValue)) return new Set(defaultValue);
    return new Set([defaultValue]);
  });

  const toggle = (value: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        if (type === 'single') next.clear();
        next.add(value);
      }
      return next;
    });
  };

  const borderRadius = rounded ? 8 : 0;

  return (
    <View style={[styles.container, { borderRadius }, style]}>
      {items.map((item, idx) => (
        <AccordionItemComponent
          key={item.value}
          item={item}
          isOpen={openItems.has(item.value)}
          onToggle={() => toggle(item.value)}
          isLast={idx === items.length - 1}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  itemBorder: {
    borderBottomWidth: 2,
    borderBottomColor: colors.border,
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.canvas,
  },
  triggerOpen: {
    backgroundColor: colors.panel,
  },
  triggerText: {
    fontFamily: 'Courier New',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: colors.ink,
    flex: 1,
  },
  chevron: {
    fontSize: 10,
    color: colors.ink,
    marginLeft: 8,
  },
  content: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 2,
    borderTopColor: colors.border,
  },
  contentText: {
    fontFamily: 'Courier New',
    fontSize: 13,
    lineHeight: 18,
    color: colors.ink,
  },
  disabled: { opacity: 0.5 },
});
