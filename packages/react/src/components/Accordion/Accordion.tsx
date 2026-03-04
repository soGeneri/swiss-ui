import * as React from 'react';
import { cn } from '../../utils/cn';

export interface AccordionItem {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  rounded?: boolean;
}

const Accordion = ({
  items,
  type = 'single',
  defaultValue,
  rounded = false,
  className,
  ...props
}: AccordionProps) => {
  const [openItems, setOpenItems] = React.useState<Set<string>>(() => {
    if (!defaultValue) return new Set();
    if (Array.isArray(defaultValue)) return new Set(defaultValue);
    return new Set([defaultValue]);
  });

  const toggle = (value: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        if (type === 'single') next.clear();
        next.add(value);
      }
      return next;
    });
  };

  return (
    <div
      className={cn(
        'w-full divide-y-2 divide-[var(--swiss-border,#000000)] border-2 border-[var(--swiss-border,#000000)]',
        rounded ? 'rounded-lg overflow-hidden' : 'rounded-none',
        className
      )}
      {...props}
    >
      {items.map((item) => {
        const isOpen = openItems.has(item.value);
        return (
          <div key={item.value}>
            <button
              type="button"
              disabled={item.disabled}
              onClick={() => !item.disabled && toggle(item.value)}
              aria-expanded={isOpen}
              className={cn(
                'w-full flex items-center justify-between px-4 py-3',
                'font-mono text-sm font-bold uppercase tracking-wide text-left',
                'bg-[var(--swiss-canvas,#F0F0E8)]',
                'transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--swiss-focus-ring,#1D4ED8)]',
                isOpen && 'bg-[var(--swiss-panel,#E5E5E0)]',
                !item.disabled && 'hover:bg-[var(--swiss-panel,#E5E5E0)]',
                item.disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              <span>{item.trigger}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                className={cn(
                  'h-4 w-4 shrink-0 transition-transform duration-200',
                  isOpen && 'rotate-180'
                )}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-4 py-3 bg-white border-t-2 border-[var(--swiss-border,#000000)] font-mono text-sm text-[var(--swiss-ink,#000000)]">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
Accordion.displayName = 'Accordion';

export { Accordion };
