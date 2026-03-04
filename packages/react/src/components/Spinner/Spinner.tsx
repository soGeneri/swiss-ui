import * as React from 'react';
import { cn } from '../../utils/cn';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'default' | 'lg';
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = 'default', ...props }, ref) => {
    const sizes = {
      sm: 'h-4 w-4 border-2',
      default: 'h-8 w-8 border-2',
      lg: 'h-12 w-12 border-4',
    };

    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn(
          'animate-spin',
          'border-[var(--swiss-border,#000000)] border-t-transparent',
          'rounded-none',
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Spinner.displayName = 'Spinner';

export { Spinner };
