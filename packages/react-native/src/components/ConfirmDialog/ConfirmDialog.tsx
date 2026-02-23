import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../Dialog';
import { Button } from '../Button';
import { colors } from '@swiss-ui/tokens';

export interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  errorMessage?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmDisabled?: boolean;
  variant?: 'danger' | 'warning' | 'success' | 'default';
  closeOnConfirm?: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
  showCancelButton?: boolean;
  rounded?: boolean;
}

const variantConfig = {
  danger:  { char: '!', borderColor: colors.destructive, bgColor: '#FEF2F2', textColor: colors.destructive, buttonVariant: 'destructive' as const },
  warning: { char: '!', borderColor: colors.warning,     bgColor: '#FFF7ED', textColor: colors.warning,     buttonVariant: 'warning' as const },
  success: { char: '✓', borderColor: colors.success,     bgColor: '#F0FDF4', textColor: colors.success,     buttonVariant: 'success' as const },
  default: { char: '?', borderColor: colors.primary,     bgColor: '#EFF6FF', textColor: colors.primary,     buttonVariant: 'default' as const },
};

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  errorMessage,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  confirmDisabled = false,
  variant = 'default',
  closeOnConfirm = true,
  onConfirm,
  onCancel,
  showCancelButton = true,
  rounded = false,
}: ConfirmDialogProps) {
  const cfg = variantConfig[variant];
  const iconBorderRadius = rounded ? 9999 : 0;

  const handleConfirm = () => {
    if (confirmDisabled) return;
    onConfirm();
    if (closeOnConfirm) onOpenChange(false);
  };

  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent rounded={rounded}>
        <DialogHeader>
          <View style={styles.headerRow}>
            <View
              style={[
                styles.iconContainer,
                { borderColor: cfg.borderColor, backgroundColor: cfg.bgColor, borderRadius: iconBorderRadius },
              ]}
            >
              <Text style={[styles.iconText, { color: cfg.textColor }]}>{cfg.char}</Text>
            </View>
            <View style={styles.headerText}>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </View>
          </View>
        </DialogHeader>
        {errorMessage && (
          <View style={[styles.errorBox, { borderColor: colors.destructive }]}>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        )}
        <DialogFooter>
          {showCancelButton && (
            <Button variant="outline" rounded={rounded} onPress={handleCancel}>
              {cancelLabel}
            </Button>
          )}
          <Button
            variant={cfg.buttonVariant}
            rounded={rounded}
            disabled={confirmDisabled}
            onPress={handleConfirm}
          >
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Courier New',
  },
  headerText: { flex: 1 },
  errorBox: {
    marginHorizontal: 24,
    marginBottom: 16,
    borderWidth: 2,
    padding: 12,
  },
  errorText: {
    fontFamily: 'Courier New',
    fontSize: 11,
    color: '#B91C1C',
  },
});
