import * as React from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Use rounded corners instead of the default square Swiss aesthetic */
  rounded?: boolean;
}

/**
 * Swiss International Style Input Component
 *
 * Design Principles:
 * - Square corners (rounded-none) - Brutalist aesthetic
 * - Black border for high contrast
 * - Focus ring in Hyper Blue
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, rounded = false, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full border border-[var(--swiss-border,#000000)] bg-transparent px-3 py-2 text-sm',
          'shadow-sm placeholder:text-[var(--swiss-placeholder,#9CA3AF)]',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--swiss-focus-ring,#1D4ED8)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          rounded ? 'rounded-md' : 'rounded-none',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
