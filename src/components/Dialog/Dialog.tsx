'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Swiss International Style Dialog Component
 *
 * Native implementation without external dependencies.
 * - Square corners (rounded-none) - Brutalist aesthetic
 * - Black borders and hard shadows
 * - Canvas background (#F0F0E8)
 */

interface DialogContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext = React.createContext<DialogContextValue | null>(null);

const useDialogContext = () => {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error('Dialog components must be used within a Dialog');
  }
  return context;
};

export interface DialogProps {
  /** Whether the dialog is open */
  open: boolean;
  /** Callback when open state changes */
  onOpenChange: (open: boolean) => void;
  /** Dialog content */
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  return <DialogContext.Provider value={{ open, onOpenChange }}>{children}</DialogContext.Provider>;
};

export interface DialogTriggerProps {
  /** Merge trigger props with child element */
  asChild?: boolean;
  /** Trigger content */
  children: React.ReactNode;
}

const DialogTrigger: React.FC<DialogTriggerProps> = ({ asChild, children }) => {
  const { onOpenChange } = useDialogContext();

  if (asChild && React.isValidElement(children)) {
    const childProps = (children as React.ReactElement<{ onClick?: () => void }>).props;
    const originalOnClick = childProps.onClick;
    return React.cloneElement(children as React.ReactElement<{ onClick?: () => void }>, {
      onClick: () => {
        originalOnClick?.();
        onOpenChange(true);
      },
    });
  }

  return <button onClick={() => onOpenChange(true)}>{children}</button>;
};

export interface DialogCloseProps {
  /** Merge close props with child element */
  asChild?: boolean;
  /** Close button content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

const DialogClose: React.FC<DialogCloseProps> = ({ asChild, children, className }) => {
  const { onOpenChange } = useDialogContext();

  if (asChild && React.isValidElement(children)) {
    const childProps = (children as React.ReactElement<{ onClick?: () => void }>).props;
    const originalOnClick = childProps.onClick;
    return React.cloneElement(children as React.ReactElement<{ onClick?: () => void }>, {
      onClick: () => {
        originalOnClick?.();
        onOpenChange(false);
      },
    });
  }

  return (
    <button onClick={() => onOpenChange(false)} className={className}>
      {children}
    </button>
  );
};

export interface DialogContentProps {
  /** Dialog content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label for close button */
  closeLabel?: string;
}

const DialogContent: React.FC<DialogContentProps> = ({
  children,
  className,
  closeLabel = 'Close',
}) => {
  const { open, onOpenChange } = useDialogContext();

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onOpenChange(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onOpenChange]);

  // Prevent body scroll when dialog is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 swiss-animate-fade-in"
        onClick={() => onOpenChange(false)}
      />
      {/* Content */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          className={cn(
            'relative w-full max-w-lg',
            'border border-[var(--swiss-border,#000000)] bg-[var(--swiss-canvas,#F0F0E8)]',
            'shadow-[var(--swiss-shadow-xl,8px_8px_0px_0px_rgba(0,0,0,0.2))]',
            'rounded-none',
            'swiss-animate-zoom-in',
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--swiss-focus-ring,#1D4ED8)] focus:ring-offset-2"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">{closeLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export interface DialogHeaderProps {
  /** Header content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

const DialogHeader: React.FC<DialogHeaderProps> = ({ className, children, ...props }) => (
  <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props}>
    {children}
  </div>
);

export interface DialogFooterProps {
  /** Footer content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

const DialogFooter: React.FC<DialogFooterProps> = ({ className, children, ...props }) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  >
    {children}
  </div>
);

export interface DialogTitleProps {
  /** Title content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

const DialogTitle: React.FC<DialogTitleProps> = ({ className, children, ...props }) => (
  <h2
    className={cn('font-serif text-lg font-bold leading-none tracking-tight', className)}
    {...props}
  >
    {children}
  </h2>
);

export interface DialogDescriptionProps {
  /** Description content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

const DialogDescription: React.FC<DialogDescriptionProps> = ({ className, children, ...props }) => (
  <p className={cn('text-sm text-[var(--swiss-muted,#6B7280)]', className)} {...props}>
    {children}
  </p>
);

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
