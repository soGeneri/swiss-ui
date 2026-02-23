import * as React from 'react';
import { cn } from '../../utils/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Use rounded corners instead of the default square Swiss aesthetic */
  rounded?: boolean;
}

/**
 * Swiss International Style Textarea Component
 *
 * Design Principles:
 * - Square corners (rounded-none) - Brutalist aesthetic
 * - Black border for high contrast
 * - Focus ring in Hyper Blue
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rounded = false, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[60px] w-full border border-[var(--swiss-border,#000000)] bg-transparent px-3 py-2 text-sm',
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
Textarea.displayName = 'Textarea';

export { Textarea };
