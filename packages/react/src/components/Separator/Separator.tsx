import * as React from 'react';
import { cn } from '../../utils/cn';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', label, ...props }, ref) => {
    if (label && orientation === 'horizontal') {
      return (
        <div ref={ref} className={cn('flex items-center gap-3 w-full', className)} {...props}>
          <div className="flex-1 h-0.5 bg-[var(--swiss-border,#000000)]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--swiss-muted,#6B7280)] whitespace-nowrap">
            {label}
          </span>
          <div className="flex-1 h-0.5 bg-[var(--swiss-border,#000000)]" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          orientation === 'vertical'
            ? 'w-0.5 self-stretch bg-[var(--swiss-border,#000000)]'
            : 'h-0.5 w-full bg-[var(--swiss-border,#000000)]',
          className
        )}
        {...props}
      />
    );
  }
);
Separator.displayName = 'Separator';

export { Separator };
