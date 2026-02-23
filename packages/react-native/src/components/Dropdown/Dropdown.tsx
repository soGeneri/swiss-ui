import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { colors, shadows } from '@swiss-ui/tokens';

export interface DropdownOption {
  id: string;
  label: string;
  description?: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  placeholder?: string;
  rounded?: boolean;
}

export function Dropdown({
  options,
  value,
  onChange,
  label,
  description,
  disabled = false,
  placeholder = 'Select an option',
  rounded = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.id === value);
  const borderRadius = rounded ? 6 : 0;

  const handleSelect = (optionId: string) => {
    onChange(optionId);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      {description && <Text style={styles.description}>{description}</Text>}

      {/* Trigger */}
      <Pressable
        onPress={() => !disabled && setIsOpen(true)}
        disabled={disabled}
        style={[
          styles.trigger,
          { borderRadius },
          disabled && styles.disabled,
        ]}
      >
        <View style={styles.triggerContent}>
          {selectedOption ? (
            <View style={styles.selectedTextContainer}>
              <Text style={styles.selectedLabel}>{selectedOption.label}</Text>
              {selectedOption.description && (
                <Text style={styles.optionDescription}>{selectedOption.description}</Text>
              )}
            </View>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
        </View>
        <Text style={[styles.chevron, isOpen && styles.chevronOpen]}>▾</Text>
      </Pressable>

      {/* Picker Modal */}
      <Modal visible={isOpen} transparent animationType="fade" onRequestClose={() => setIsOpen(false)}>
        <View style={styles.overlay}>
          <Pressable style={StyleSheet.absoluteFill} onPress={() => setIsOpen(false)} />
          <View
            style={[
              styles.pickerPanel,
              { borderRadius },
              {
                shadowColor: shadows.default.color,
                shadowOffset: { width: shadows.default.offsetX, height: shadows.default.offsetY },
                shadowOpacity: shadows.default.opacity,
                shadowRadius: 0,
                elevation: 4,
              },
            ]}
          >
            <ScrollView style={styles.scrollView}>
              {options.map((option) => {
                const isSelected = option.id === value;
                return (
                  <Pressable
                    key={option.id}
                    onPress={() => handleSelect(option.id)}
                    style={[
                      styles.option,
                      { borderRadius: 0 },
                      isSelected && styles.optionSelected,
                    ]}
                  >
                    <View style={styles.optionContent}>
                      <Text style={[styles.optionLabel, isSelected && styles.optionLabelSelected]}>
                        {option.label}
                      </Text>
                      {option.description && (
                        <Text style={[styles.optionDescription, isSelected && styles.optionDescriptionSelected]}>
                          {option.description}
                        </Text>
                      )}
                    </View>
                    {isSelected && <Text style={styles.checkmark}>✓</Text>}
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
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
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 48,
  },
  triggerContent: { flex: 1 },
  selectedTextContainer: { flex: 1 },
  selectedLabel: {
    fontFamily: 'Courier New',
    fontSize: 14,
    fontWeight: '700',
    color: colors.ink,
  },
  placeholder: {
    fontFamily: 'Courier New',
    fontSize: 14,
    color: colors.placeholder,
  },
  chevron: {
    fontSize: 16,
    color: colors.ink,
    marginLeft: 8,
  },
  chevronOpen: {
    transform: [{ rotate: '180deg' }],
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  pickerPanel: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  scrollView: { maxHeight: 300 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  optionSelected: {
    backgroundColor: colors.success,
  },
  optionContent: { flex: 1 },
  optionLabel: {
    fontFamily: 'Courier New',
    fontSize: 14,
    fontWeight: '700',
    color: colors.ink,
  },
  optionLabelSelected: { color: colors.white },
  optionDescription: {
    fontFamily: 'Courier New',
    fontSize: 11,
    color: colors.muted,
    marginTop: 2,
  },
  optionDescriptionSelected: { color: 'rgba(255,255,255,0.8)' },
  checkmark: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
  },
  disabled: { opacity: 0.5 },
});
