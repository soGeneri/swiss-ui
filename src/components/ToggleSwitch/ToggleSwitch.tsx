'use client';

import * as React from 'react';
import { cn } from '../../utils/cn';

/**
 * Swiss International Style Toggle Switch Component
 *
 * Design Principles:
 * - Square container, pill shape for toggle knob
 * - High contrast states
 * - Clear label and description
 */

export interface ToggleSwitchProps {
  /** Whether the switch is checked */
  checked: boolean;
  /** Callback when checked state changes */
  onCheckedChange: (checked: boolean) => void;
  /** Label text */
  label: string;
  /** Optional description text */
  description?: string;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Use rounded corners instead of the default square Swiss aesthetic */
  rounded?: boolean;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onCheckedChange,
  label,
  description,
  disabled = false,
  className,
  rounded = false,
}) => {
  const labelId = React.useId();

  const handleToggle = () => {
    if (!disabled) {
      onCheckedChange(!checked);
    }
  };

  return (
    <div
      className={cn(
        'flex items-center justify-between p-4 border border-[var(--swiss-border,#000000)] bg-white',
        'shadow-[var(--swiss-shadow-soft-sm,2px_2px_0px_0px_rgba(0,0,0,0.1))]',
        rounded ? 'rounded-xl' : 'rounded-none',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      <div className="flex-1 mr-4">
        <div id={labelId} className="font-mono text-sm font-bold uppercase tracking-wider">
          {label}
        </div>
        {description && <div className="font-sans text-xs text-[var(--swiss-muted,#6B7280)] mt-1">{description}</div>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={labelId}
        disabled={disabled}
        onClick={handleToggle}
        className={cn(
          'relative inline-flex h-6 w-12 shrink-0 cursor-pointer items-center',
          'border-2 border-[var(--swiss-border,#000000)] transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--swiss-focus-ring,#1D4ED8)] focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed',
          rounded ? 'rounded-full' : 'rounded-none',
          checked ? 'bg-[var(--swiss-primary,#1D4ED8)]' : 'bg-gray-200'
        )}
      >
        <span
          className={cn(
            'pointer-events-none block h-4 w-4 bg-white border border-[var(--swiss-border,#000000)] shadow-sm',
            'transition-transform duration-200',
            rounded ? 'rounded-full' : 'rounded-none',
            checked ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </button>
    </div>
  );
};
