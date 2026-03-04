import * as React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline';
  rounded?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', rounded = false, ...props }, ref) => {
    const base = cn(
      'inline-flex items-center px-2 py-0.5',
      'text-xs font-mono font-bold uppercase tracking-wide',
      'border border-[var(--swiss-border,#000000)]',
      rounded ? 'rounded-full' : 'rounded-none'
    );

    const variants = {
      default: 'bg-[var(--swiss-primary,#1D4ED8)] text-white',
      secondary: 'bg-[var(--swiss-panel,#E5E5E0)] text-[var(--swiss-ink,#000000)]',
      success: 'bg-[var(--swiss-success,#15803D)] text-white',
      warning: 'bg-[var(--swiss-warning,#F97316)] text-white',
      destructive: 'bg-[var(--swiss-destructive,#DC2626)] text-white',
      outline: 'bg-transparent text-[var(--swiss-ink,#000000)]',
    };

    return (
      <span ref={ref} className={cn(base, variants[variant], className)} {...props} />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };
