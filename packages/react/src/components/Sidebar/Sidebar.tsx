import * as React from 'react';
import { cn } from '../../utils/cn';

/* ─────────────────────────────────────────────────────────────
   Sidebar — vertical navigation panel
───────────────────────────────────────────────────────────── */

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  /** Width of the sidebar */
  width?: string;
  /** Show a right border */
  bordered?: boolean;
  /** Collapse to icon-only mode */
  collapsed?: boolean;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, width, bordered = true, collapsed = false, style, ...props }, ref) => (
    <aside
      ref={ref}
      style={{ width: collapsed ? '64px' : (width ?? '240px'), ...style }}
      className={cn(
        'flex flex-col h-full overflow-hidden',
        'bg-[var(--sidebar,#E5E5E0)] text-[var(--sidebar-foreground,#000000)]',
        'transition-[width] duration-200 ease-out shrink-0',
        bordered && 'border-r-2 border-[var(--sidebar-border,#000000)]',
        className
      )}
      {...props}
    />
  )
);
Sidebar.displayName = 'Sidebar';

/* ─────────────────────────────────────────────────────────────
   SidebarHeader
───────────────────────────────────────────────────────────── */

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center h-14 px-4 shrink-0',
        'border-b-2 border-[var(--sidebar-border,#000000)]',
        className
      )}
      {...props}
    />
  )
);
SidebarHeader.displayName = 'SidebarHeader';

/* ─────────────────────────────────────────────────────────────
   SidebarContent — scrollable middle section
───────────────────────────────────────────────────────────── */

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col flex-1 overflow-y-auto py-2', className)}
      {...props}
    />
  )
);
SidebarContent.displayName = 'SidebarContent';

/* ─────────────────────────────────────────────────────────────
   SidebarFooter
───────────────────────────────────────────────────────────── */

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center px-4 py-3 shrink-0',
        'border-t-2 border-[var(--sidebar-border,#000000)]',
        className
      )}
      {...props}
    />
  )
);
SidebarFooter.displayName = 'SidebarFooter';

/* ─────────────────────────────────────────────────────────────
   SidebarGroup — a labeled group of menu items
───────────────────────────────────────────────────────────── */

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('px-2 py-1', className)} {...props} />
  )
);
SidebarGroup.displayName = 'SidebarGroup';

const SidebarGroupLabel = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'px-2 mb-1 text-xs font-mono font-bold uppercase tracking-widest',
        'text-[var(--sidebar-foreground,#000000)] opacity-50',
        className
      )}
      {...props}
    />
  )
);
SidebarGroupLabel.displayName = 'SidebarGroupLabel';

/* ─────────────────────────────────────────────────────────────
   SidebarMenu / SidebarMenuItem / SidebarMenuButton
───────────────────────────────────────────────────────────── */

const SidebarMenu = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-col gap-0.5 list-none', className)} {...props} />
  )
);
SidebarMenu.displayName = 'SidebarMenu';

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn('', className)} {...props} />
  )
);
SidebarMenuItem.displayName = 'SidebarMenuItem';

export interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  asChild?: boolean;
}

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, active, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        'flex items-center gap-2 w-full px-2 py-1.5',
        'font-mono text-xs uppercase tracking-wide text-left',
        'text-[var(--sidebar-foreground,#000000)]',
        'transition-colors duration-100',
        'hover:bg-[var(--sidebar-accent,#D8D8D2)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sidebar-ring,#1D4ED8)]',
        active && 'bg-[var(--sidebar-accent,#D8D8D2)] font-bold border-l-2 border-[var(--sidebar-primary,#1D4ED8)]',
        className
      )}
      {...props}
    />
  )
);
SidebarMenuButton.displayName = 'SidebarMenuButton';

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
};
