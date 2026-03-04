import * as React from 'react';
import { cn } from '../../utils/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Animate a shimmer across the skeleton */
  shimmer?: boolean;
  rounded?: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, shimmer = true, rounded = false, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-[var(--swiss-panel,#E5E5E0)]',
        shimmer && [
          'bg-gradient-to-r from-[var(--swiss-panel,#E5E5E0)] via-[var(--swiss-panel-dark,#D8D8D2)] to-[var(--swiss-panel,#E5E5E0)]',
          'bg-[length:200%_100%]',
          'animate-[swiss-shimmer_1.5s_ease-in-out_infinite]',
        ],
        rounded ? 'rounded-md' : 'rounded-none',
        className
      )}
      style={style}
      aria-hidden
      {...props}
    />
  )
);
Skeleton.displayName = 'Skeleton';

export { Skeleton };
