import * as React from 'react';
import { cn } from '../../utils/cn';

/**
 * Swiss International Style Button Component
 *
 * Design Principles:
 * - Hard shadows (no blur) that create depth
 * - Square corners (rounded-none) - Brutalist aesthetic
 * - High contrast black borders
 * - Hover: translate + shadow removal creates "press" effect
 * - Clear semantic variants for different actions
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant determining color and purpose:
   * - `default`: Hyper Blue (#1D4ED8) - Primary actions (save, submit, create)
   * - `destructive`: Alert Red (#DC2626) - Destructive actions (delete, remove)
   * - `success`: Signal Green (#15803D) - Positive actions (download, confirm, complete)
   * - `warning`: Alert Orange (#F97316) - Caution actions (reset, clear, undo)
   * - `outline`: Transparent + black border - Secondary actions (cancel, back)
   * - `secondary`: Panel Grey (#E5E5E0) - Tertiary actions
   * - `ghost`: No background - Subtle actions (icon buttons, navigation)
   * - `link`: Text only with underline - Inline links
   */
  variant?:
    | 'default'
    | 'destructive'
    | 'success'
    | 'warning'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  /**
   * Button size:
   * - `default`: Standard button (h-10)
   * - `sm`: Small button (h-8)
   * - `lg`: Large button (h-12)
   * - `icon`: Square icon button (h-10 w-10)
   */
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    // Base styles applied to ALL buttons
    // Swiss Design: clean, functional, high contrast
    const baseStyles = cn(
      // Layout & Typography
      'inline-flex items-center justify-center gap-2',
      'whitespace-nowrap text-sm font-medium font-mono uppercase tracking-wide',
      // Transitions
      'transition-all duration-150 ease-out',
      // Focus state - sharp blue ring (not soft glow)
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--swiss-focus-ring,#1D4ED8)] focus-visible:ring-offset-2',
      // Disabled state
      'disabled:pointer-events-none disabled:opacity-50',
      // SVG icon sizing
      "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
      // Swiss Design: NO rounded corners
      'rounded-none'
    );

    // Variant styles - each has distinct purpose and color
    const variants = {
      // PRIMARY - Hyper Blue
      default: cn(
        'bg-[var(--swiss-primary,#1D4ED8)] text-white',
        'border border-[var(--swiss-border,#000000)]',
        'shadow-[var(--swiss-shadow-sm,2px_2px_0px_0px_#000000)]',
        'hover:bg-[var(--swiss-primary-hover,#1E40AF)]',
        'hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none',
        'active:translate-y-[2px] active:translate-x-[2px]'
      ),

      // DESTRUCTIVE - Alert Red
      destructive: cn(
        'bg-[var(--swiss-destructive,#DC2626)] text-white',
        'border border-[var(--swiss-border,#000000)]',
        'shadow-[var(--swiss-shadow-sm,2px_2px_0px_0px_#000000)]',
        'hover:bg-[var(--swiss-destructive-hover,#B91C1C)]',
        'hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none',
        'active:translate-y-[2px] active:translate-x-[2px]'
      ),

      // SUCCESS - Signal Green
      success: cn(
        'bg-[var(--swiss-success,#15803D)] text-white',
        'border border-[var(--swiss-border,#000000)]',
        'shadow-[var(--swiss-shadow-sm,2px_2px_0px_0px_#000000)]',
        'hover:bg-[var(--swiss-success-hover,#166534)]',
        'hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none',
        'active:translate-y-[2px] active:translate-x-[2px]'
      ),

      // WARNING - Alert Orange
      warning: cn(
        'bg-[var(--swiss-warning,#F97316)] text-white',
        'border border-[var(--swiss-border,#000000)]',
        'shadow-[var(--swiss-shadow-sm,2px_2px_0px_0px_#000000)]',
        'hover:bg-[var(--swiss-warning-hover,#EA580C)]',
        'hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none',
        'active:translate-y-[2px] active:translate-x-[2px]'
      ),

      // OUTLINE - Canvas background with black border
      outline: cn(
        'bg-[var(--swiss-canvas,#F0F0E8)] text-[var(--swiss-ink,#000000)]',
        'border border-[var(--swiss-border,#000000)]',
        'shadow-[var(--swiss-shadow-sm,2px_2px_0px_0px_#000000)]',
        'hover:bg-[var(--swiss-panel,#E5E5E0)]',
        'hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none',
        'active:translate-y-[2px] active:translate-x-[2px]'
      ),

      // SECONDARY - Panel Grey
      secondary: cn(
        'bg-[var(--swiss-panel,#E5E5E0)] text-[var(--swiss-ink,#000000)]',
        'border border-[var(--swiss-border,#000000)]',
        'shadow-[var(--swiss-shadow-sm,2px_2px_0px_0px_#000000)]',
        'hover:bg-[var(--swiss-panel-dark,#D8D8D2)]',
        'hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none',
        'active:translate-y-[2px] active:translate-x-[2px]'
      ),

      // GHOST - No background, minimal styling
      ghost: cn(
        'bg-transparent text-[var(--swiss-ink,#000000)]',
        'border-none shadow-none',
        'hover:bg-gray-100',
        'active:bg-gray-200'
      ),

      // LINK - Text only with underline
      link: cn(
        'bg-transparent text-[var(--swiss-primary,#1D4ED8)]',
        'border-none shadow-none',
        'underline-offset-4 hover:underline',
        'p-0 h-auto'
      ),
    };

    // Size styles
    const sizes = {
      default: 'h-10 px-6 py-2',
      sm: 'h-8 px-4 py-1 text-xs',
      lg: 'h-12 px-8 py-3 text-base',
      icon: 'h-10 w-10 p-0',
    };

    const variantClass = variants[variant];
    const sizeClass = sizes[size];

    return (
      <button ref={ref} className={cn(baseStyles, variantClass, sizeClass, className)} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button };
