import * as React from 'react';
import { cn } from '../../utils/cn';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  rounded?: boolean;
  showLabel?: boolean;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, variant = 'default', rounded = false, showLabel = false, ...props }, ref) => {
    const clamped = Math.max(0, Math.min(100, value));

    const variantFill = {
      default: 'bg-[var(--swiss-primary,#1D4ED8)]',
      success: 'bg-[var(--swiss-success,#15803D)]',
      warning: 'bg-[var(--swiss-warning,#F97316)]',
      destructive: 'bg-[var(--swiss-destructive,#DC2626)]',
    };

    return (
      <div className={cn('w-full', className)} {...props}>
        {showLabel && (
          <div className="flex justify-between mb-1">
            <span className="text-xs font-mono uppercase tracking-wide text-[var(--swiss-muted,#6B7280)]">
              Progress
            </span>
            <span className="text-xs font-mono font-bold text-[var(--swiss-ink,#000000)]">
              {clamped}%
            </span>
          </div>
        )}
        <div
          ref={ref}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
          className={cn(
            'h-4 w-full bg-[var(--swiss-panel,#E5E5E0)] border border-[var(--swiss-border,#000000)] overflow-hidden',
            rounded ? 'rounded-full' : 'rounded-none'
          )}
        >
          <div
            className={cn(
              'h-full transition-all duration-300 ease-out',
              variantFill[variant],
              rounded ? 'rounded-full' : 'rounded-none'
            )}
            style={{ width: `${clamped}%` }}
          />
        </div>
      </div>
    );
  }
);
Progress.displayName = 'Progress';

export { Progress };
