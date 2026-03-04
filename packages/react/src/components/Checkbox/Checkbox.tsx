import * as React from 'react';
import { cn } from '../../utils/cn';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
  rounded?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, rounded = false, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    return (
      <div className="flex items-start gap-3">
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            className={cn(
              'peer h-5 w-5 appearance-none',
              'border-2 border-[var(--swiss-border,#000000)]',
              'bg-white',
              'checked:bg-[var(--swiss-primary,#1D4ED8)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--swiss-focus-ring,#1D4ED8)] focus-visible:ring-offset-2',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'cursor-pointer transition-colors duration-100',
              rounded ? 'rounded-sm' : 'rounded-none',
              className
            )}
            {...props}
          />
          <svg
            className="pointer-events-none absolute hidden h-3 w-3 text-white peer-checked:block"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path d="M2 6l3 3 5-5" />
          </svg>
        </div>
        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <label
                htmlFor={inputId}
                className="text-sm font-mono font-medium text-[var(--swiss-ink,#000000)] cursor-pointer select-none"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs font-mono text-[var(--swiss-muted,#6B7280)]">{description}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };
