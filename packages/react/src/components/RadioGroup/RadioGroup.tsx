import * as React from 'react';
import { cn } from '../../utils/cn';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  rounded?: boolean;
  className?: string;
}

const RadioGroup = ({ options, value, onChange, name, rounded = false, className }: RadioGroupProps) => {
  const generatedName = React.useId();
  const groupName = name ?? generatedName;

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {options.map((opt) => (
        <label
          key={opt.value}
          className={cn(
            'flex items-start gap-3 cursor-pointer',
            opt.disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              type="radio"
              name={groupName}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange?.(opt.value)}
              disabled={opt.disabled}
              className={cn(
                'peer h-5 w-5 appearance-none',
                'border-2 border-[var(--swiss-border,#000000)]',
                'bg-white',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--swiss-focus-ring,#1D4ED8)] focus-visible:ring-offset-2',
                'cursor-pointer',
                rounded ? 'rounded-full' : 'rounded-none'
              )}
            />
            <span
              className="pointer-events-none absolute hidden h-2 w-2 bg-[var(--swiss-primary,#1D4ED8)] peer-checked:block"
              style={{ borderRadius: rounded ? '50%' : 0 }}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-mono font-medium text-[var(--swiss-ink,#000000)] select-none">
              {opt.label}
            </span>
            {opt.description && (
              <span className="text-xs font-mono text-[var(--swiss-muted,#6B7280)]">{opt.description}</span>
            )}
          </div>
        </label>
      ))}
    </div>
  );
};
RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
