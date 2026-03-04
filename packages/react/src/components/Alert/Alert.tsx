import * as React from 'react';
import { cn } from '../../utils/cn';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  rounded?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', rounded = false, ...props }, ref) => {
    const variants = {
      default:
        'bg-[var(--swiss-canvas,#F0F0E8)] border-l-[var(--swiss-ink,#000000)] text-[var(--swiss-ink,#000000)]',
      success:
        'bg-[#dcfce7] border-l-[var(--swiss-success,#15803D)] text-[var(--swiss-success,#15803D)]',
      warning:
        'bg-[#fff7ed] border-l-[var(--swiss-warning,#F97316)] text-[var(--swiss-warning,#F97316)]',
      destructive:
        'bg-[#fee2e2] border-l-[var(--swiss-destructive,#DC2626)] text-[var(--swiss-destructive,#DC2626)]',
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'relative w-full p-4 border-l-4',
          'shadow-[2px_2px_0px_0px_#000000]',
          rounded ? 'rounded-md' : 'rounded-none',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('mb-1 font-mono font-bold uppercase tracking-wide text-sm', className)}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('font-mono text-sm opacity-90', className)} {...props} />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
