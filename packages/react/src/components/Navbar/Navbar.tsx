import * as React from 'react';
import { cn } from '../../utils/cn';

/* ─────────────────────────────────────────────────────────────
   Navbar — sticky top navigation bar
───────────────────────────────────────────────────────────── */

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /** Stick to the top of the viewport */
  sticky?: boolean;
  /** Show a bottom border */
  bordered?: boolean;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, sticky = true, bordered = true, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(
        'flex items-center justify-between h-14 px-4 md:px-6',
        'bg-[var(--swiss-canvas,#F0F0E8)] text-[var(--swiss-ink,#000000)]',
        'z-40',
        sticky && 'sticky top-0',
        bordered && 'border-b-2 border-[var(--swiss-border,#000000)]',
        className
      )}
      {...props}
    />
  )
);
Navbar.displayName = 'Navbar';

/* ─────────────────────────────────────────────────────────────
   NavbarBrand — left slot (logo / app name)
───────────────────────────────────────────────────────────── */

export interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarBrand = React.forwardRef<HTMLDivElement, NavbarBrandProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-2 shrink-0', className)}
      {...props}
    />
  )
);
NavbarBrand.displayName = 'NavbarBrand';

/* ─────────────────────────────────────────────────────────────
   NavbarContent — center / right slot (nav links, actions)
───────────────────────────────────────────────────────────── */

export interface NavbarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end';
}

const NavbarContent = React.forwardRef<HTMLDivElement, NavbarContentProps>(
  ({ className, align = 'end', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center gap-2',
        align === 'center' && 'flex-1 justify-center',
        align === 'end'    && 'ml-auto',
        align === 'start'  && 'mr-auto',
        className
      )}
      {...props}
    />
  )
);
NavbarContent.displayName = 'NavbarContent';

/* ─────────────────────────────────────────────────────────────
   NavbarItem — an individual nav link wrapper
───────────────────────────────────────────────────────────── */

export interface NavbarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

const NavbarItem = React.forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ className, active, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center',
        active && 'font-bold underline underline-offset-4',
        className
      )}
      {...props}
    />
  )
);
NavbarItem.displayName = 'NavbarItem';

export { Navbar, NavbarBrand, NavbarContent, NavbarItem };
