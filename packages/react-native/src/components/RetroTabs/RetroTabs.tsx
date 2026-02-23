import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { colors } from '@swiss-ui/tokens';

export interface Tab {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface RetroTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  rounded?: boolean;
}

export function RetroTabs({ tabs, activeTab, onTabChange, rounded = false }: RetroTabsProps) {
  const borderRadius = rounded ? 6 : 0;

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isDisabled = tab.disabled;

          return (
            <Pressable
              key={tab.id}
              onPress={() => !isDisabled && onTabChange(tab.id)}
              disabled={isDisabled}
              style={[
                styles.tab,
                {
                  borderTopLeftRadius: borderRadius,
                  borderTopRightRadius: borderRadius,
                  backgroundColor: isActive ? colors.white : colors.panel,
                  borderBottomWidth: isActive ? 0 : 1,
                  marginBottom: isActive ? -1 : 0,
                },
                isDisabled && styles.disabledTab,
              ]}
            >
              <Text
                style={[
                  styles.tabLabel,
                  { color: isActive ? colors.ink : colors.muted, fontWeight: isActive ? '700' : '400' },
                  isDisabled && styles.disabledLabel,
                ]}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  scrollView: {
    flexDirection: 'row',
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tabLabel: {
    fontFamily: 'Courier New',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  disabledTab: { opacity: 0.5 },
  disabledLabel: { color: colors.muted },
});
