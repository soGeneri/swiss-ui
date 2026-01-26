import * as React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant:
   * - `default`: Canvas background
   * - `interactive`: Hover effects with border and shadow
   * - `outline`: Visible border at rest
   * - `ghost`: Transparent background
   */
  variant?: 'default' | 'interactive' | 'outline' | 'ghost';
  /** Remove default padding */
  noPadding?: boolean;
}

/**
 * Swiss International Style Card Component
 *
 * Design Principles:
 * - Square corners (rounded-none)
 * - Clean composition with header/content/footer slots
 * - Interactive variant shows depth on hover
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', noPadding = false, ...props }, ref) => {
    const baseStyles = 'rounded-none flex flex-col relative';

    const variants = {
      default: 'bg-[var(--swiss-canvas,#F0F0E8)]',
      interactive: cn(
        'bg-[var(--swiss-canvas,#F0F0E8)] border-2 border-transparent',
        'transition-all duration-200 ease-in-out',
        'cursor-pointer group',
        'hover:z-20 hover:border-[var(--swiss-ink,#000000)] hover:shadow-[var(--swiss-shadow-default,4px_4px_0px_0px_#000000)] hover:-translate-y-[2px] hover:-translate-x-[2px]'
      ),
      outline: 'bg-[var(--swiss-canvas,#F0F0E8)] border-2 border-[var(--swiss-ink,#000000)]',
      ghost: 'bg-transparent border-none shadow-none',
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], !noPadding && 'p-6 md:p-8', className)}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 mb-4', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-serif text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-[var(--swiss-muted,#6B7280)] font-mono', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('flex-1', className)} {...props} />
);
CardContent.displayName = 'CardContent';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center pt-4 mt-auto', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
