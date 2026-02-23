import React, { createContext, useContext } from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { colors, shadows } from '@swiss-ui/tokens';

interface DialogContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextValue | null>(null);

function useDialogContext() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error('Dialog components must be used within a Dialog');
  return ctx;
}

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

export interface DialogTriggerProps {
  children: React.ReactElement;
  asChild?: boolean;
}

export function DialogTrigger({ children }: DialogTriggerProps) {
  const { onOpenChange } = useDialogContext();
  return React.cloneElement(children, {
    onPress: () => onOpenChange(true),
  });
}

export interface DialogContentProps {
  children: React.ReactNode;
  closeLabel?: string;
  rounded?: boolean;
}

export function DialogContent({ children, closeLabel = 'Close', rounded = false }: DialogContentProps) {
  const { open, onOpenChange } = useDialogContext();
  const borderRadius = rounded ? 12 : 0;

  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={() => onOpenChange(false)}
    >
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={() => onOpenChange(false)} />
        <View
          style={[
            styles.content,
            { borderRadius },
            {
              shadowColor: shadows.xl.color,
              shadowOffset: { width: shadows.xl.offsetX, height: shadows.xl.offsetY },
              shadowOpacity: shadows.xl.opacity,
              shadowRadius: 0,
              elevation: 8,
            },
          ]}
        >
          <ScrollView>
            {children}
          </ScrollView>
          <Pressable
            onPress={() => onOpenChange(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeIcon}>×</Text>
            <Text style={styles.srOnly}>{closeLabel}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export interface DialogHeaderProps {
  children: React.ReactNode;
}

export function DialogHeader({ children }: DialogHeaderProps) {
  return <View style={styles.header}>{children}</View>;
}

export interface DialogFooterProps {
  children: React.ReactNode;
  style?: object;
}

export function DialogFooter({ children, style }: DialogFooterProps) {
  return <View style={[styles.footer, style]}>{children}</View>;
}

export interface DialogTitleProps {
  children: React.ReactNode;
}

export function DialogTitle({ children }: DialogTitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

export interface DialogDescriptionProps {
  children: React.ReactNode;
}

export function DialogDescription({ children }: DialogDescriptionProps) {
  return <Text style={styles.description}>{children}</Text>;
}

export interface DialogCloseProps {
  children: React.ReactElement;
  asChild?: boolean;
}

export function DialogClose({ children }: DialogCloseProps) {
  const { onOpenChange } = useDialogContext();
  return React.cloneElement(children, {
    onPress: () => onOpenChange(false),
  });
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  content: {
    width: '90%',
    maxWidth: 500,
    backgroundColor: colors.canvas,
    borderWidth: 1,
    borderColor: colors.border,
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    padding: 4,
  },
  closeIcon: {
    fontSize: 24,
    color: colors.ink,
    opacity: 0.7,
    lineHeight: 24,
  },
  srOnly: {
    position: 'absolute',
    width: 1,
    height: 1,
    overflow: 'hidden',
    opacity: 0,
  },
  header: {
    flexDirection: 'column',
    gap: 6,
    padding: 24,
    paddingBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    padding: 16,
    backgroundColor: colors.panel,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  title: {
    fontFamily: 'Georgia',
    fontSize: 18,
    fontWeight: '700',
    color: colors.ink,
    letterSpacing: -0.5,
  },
  description: {
    fontFamily: 'Courier New',
    fontSize: 12,
    color: colors.muted,
    marginTop: 8,
  },
});
