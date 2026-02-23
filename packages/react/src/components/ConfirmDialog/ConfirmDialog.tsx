'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../Dialog';
import { Button } from '../Button';

/**
 * Swiss International Style Confirm Dialog Component
 *
 * A modal dialog for confirming user actions with semantic variants:
 * - danger: Destructive actions (delete, remove)
 * - warning: Caution actions (reset, overwrite)
 * - success: Positive confirmations
 * - default: Neutral confirmations
 */

export interface ConfirmDialogProps {
  /** Whether the dialog is open */
  open: boolean;
  /** Callback when open state changes */
  onOpenChange: (open: boolean) => void;
  /** Dialog title */
  title: string;
  /** Dialog description */
  description: string;
  /** Optional error message to display */
  errorMessage?: string;
  /** Label for confirm button (default: "Confirm") */
  confirmLabel?: string;
  /** Label for cancel button (default: "Cancel") */
  cancelLabel?: string;
  /** Whether confirm button is disabled */
  confirmDisabled?: boolean;
  /** Semantic variant affecting button color */
  variant?: 'danger' | 'warning' | 'success' | 'default';
  /** Whether to close dialog on confirm (default: true) */
  closeOnConfirm?: boolean;
  /** Callback when confirm is clicked */
  onConfirm: () => void;
  /** Callback when cancel is clicked */
  onCancel?: () => void;
  /** Whether to show cancel button (default: true) */
  showCancelButton?: boolean;
  /** Use rounded corners instead of the default square Swiss aesthetic */
  rounded?: boolean;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
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
}) => {
  const handleConfirm = () => {
    if (confirmDisabled) return;
    onConfirm();
    if (closeOnConfirm) {
      onOpenChange(false);
    }
  };

  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  const iconClass = `w-12 h-12 border-2 flex items-center justify-center ${rounded ? 'rounded-full' : ''}`;

  const variantStyles = {
    danger: {
      icon: (
        <div className={`${iconClass} border-[var(--swiss-destructive,#DC2626)] bg-red-50`}>
          <span className="text-[var(--swiss-destructive,#DC2626)] text-2xl font-bold">!</span>
        </div>
      ),
      buttonVariant: 'destructive' as const,
    },
    warning: {
      icon: (
        <div className={`${iconClass} border-[var(--swiss-warning,#F97316)] bg-orange-50`}>
          <span className="text-[var(--swiss-warning,#F97316)] text-2xl font-bold">!</span>
        </div>
      ),
      buttonVariant: 'warning' as const,
    },
    success: {
      icon: (
        <div className={`${iconClass} border-[var(--swiss-success,#15803D)] bg-green-50`}>
          <span className="text-[var(--swiss-success,#15803D)] text-2xl font-bold">&#10003;</span>
        </div>
      ),
      buttonVariant: 'success' as const,
    },
    default: {
      icon: (
        <div className={`${iconClass} border-[var(--swiss-primary,#1D4ED8)] bg-blue-50`}>
          <span className="text-[var(--swiss-primary,#1D4ED8)] text-2xl font-bold">?</span>
        </div>
      ),
      buttonVariant: 'default' as const,
    },
  };

  const { icon, buttonVariant } = variantStyles[variant];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0 gap-0" rounded={rounded}>
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-start gap-4">
            {icon}
            <div className="flex-1">
              <DialogTitle className="font-serif text-xl font-bold uppercase tracking-tight">
                {title}
              </DialogTitle>
              <DialogDescription className="font-mono text-xs text-[var(--swiss-muted,#6B7280)] mt-2">
                {description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        {errorMessage && (
          <div className="px-6 pb-4">
            <div className="border-2 border-[var(--swiss-destructive,#DC2626)] bg-red-50 p-3 font-mono text-xs text-red-700">
              {errorMessage}
            </div>
          </div>
        )}
        <DialogFooter className="p-4 bg-[var(--swiss-panel,#E5E5E0)] border-t border-[var(--swiss-border,#000000)] flex-row justify-end gap-3">
          {showCancelButton && (
            <Button variant="outline" rounded={rounded} onClick={handleCancel}>
              {cancelLabel}
            </Button>
          )}
          <Button
            variant={buttonVariant}
            onClick={handleConfirm}
            rounded={rounded}
            disabled={confirmDisabled}
          >
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
