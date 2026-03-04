import * as React from 'react';
import { cn } from '../../utils/cn';

/* ─────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────── */

export type ToastVariant = 'default' | 'success' | 'warning' | 'destructive';

export interface ToastData {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextValue {
  toasts: ToastData[];
  toast: (data: Omit<ToastData, 'id'>) => void;
  dismiss: (id: string) => void;
}

/* ─────────────────────────────────────────────────────────────
   Context
───────────────────────────────────────────────────────────── */

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastData[]>([]);

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = React.useCallback(
    (data: Omit<ToastData, 'id'>) => {
      const id = Math.random().toString(36).slice(2);
      const duration = data.duration ?? 4000;
      setToasts((prev) => [...prev, { ...data, id }]);
      if (duration > 0) {
        setTimeout(() => dismiss(id), duration);
      }
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

/* ─────────────────────────────────────────────────────────────
   Hook
───────────────────────────────────────────────────────────── */

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
}

/* ─────────────────────────────────────────────────────────────
   Single Toast item
───────────────────────────────────────────────────────────── */

const variantStyles: Record<ToastVariant, string> = {
  default:
    'bg-[var(--swiss-canvas,#F0F0E8)] border-[var(--swiss-border,#000000)] text-[var(--swiss-ink,#000000)]',
  success:
    'bg-[#dcfce7] border-[var(--swiss-success,#15803D)] text-[var(--swiss-success,#15803D)]',
  warning:
    'bg-[#fff7ed] border-[var(--swiss-warning,#F97316)] text-[var(--swiss-warning,#F97316)]',
  destructive:
    'bg-[#fee2e2] border-[var(--swiss-destructive,#DC2626)] text-[var(--swiss-destructive,#DC2626)]',
};

interface ToastItemProps {
  data: ToastData;
  onDismiss: (id: string) => void;
}

function ToastItem({ data, onDismiss }: ToastItemProps) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        'flex items-start justify-between gap-3 w-full max-w-sm p-4',
        'border-2 shadow-[var(--swiss-shadow-default,4px_4px_0px_0px_#000000)]',
        'animate-[swiss-slide-in-right_200ms_ease-out]',
        variantStyles[data.variant ?? 'default']
      )}
    >
      <div className="flex flex-col gap-0.5 min-w-0">
        {data.title && (
          <p className="font-mono text-xs font-bold uppercase tracking-wide">{data.title}</p>
        )}
        {data.description && (
          <p className="font-mono text-sm opacity-90">{data.description}</p>
        )}
      </div>
      <button
        type="button"
        onClick={() => onDismiss(data.id)}
        className="shrink-0 opacity-60 hover:opacity-100 transition-opacity text-current"
        aria-label="Dismiss"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Toaster — place once near the root of your app
───────────────────────────────────────────────────────────── */

export function Toaster() {
  const { toasts, dismiss } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 items-end"
    >
      {toasts.map((t) => (
        <ToastItem key={t.id} data={t} onDismiss={dismiss} />
      ))}
    </div>
  );
}
