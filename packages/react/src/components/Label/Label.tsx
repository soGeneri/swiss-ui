import * as React from 'react';
import { cn } from '../../utils/cn';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

/**
 * Swiss International Style Label Component
 *
 * Design Principles:
 * - Monospace uppercase text
 * - Wide letter spacing
 * - Muted color for hierarchy
 */
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'text-sm font-medium leading-none',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        'font-mono uppercase tracking-wider text-[var(--swiss-muted,#6B7280)]',
        className
      )}
      {...props}
    />
  )
);
Label.displayName = 'Label';

export { Label };
