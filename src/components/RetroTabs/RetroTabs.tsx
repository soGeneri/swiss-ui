'use client';

import * as React from 'react';
import { cn } from '../../utils/cn';

/**
 * Swiss International Style Tabs Component
 *
 * Design Principles:
 * - Square corners (rounded-none) - Brutalist aesthetic
 * - Hard shadows on active tab
 * - Black borders for high contrast
 * - Monospace uppercase text
 */

export interface Tab {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface RetroTabsProps {
  /** Array of tab definitions */
  tabs: Tab[];
  /** Currently active tab ID */
  activeTab: string;
  /** Callback when tab changes */
  onTabChange: (tabId: string) => void;
  /** Additional CSS classes */
  className?: string;
}

export const RetroTabs: React.FC<RetroTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className,
}) => {
  return (
    <div className={cn('flex gap-0 border-b border-[var(--swiss-border,#000000)]', className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const isDisabled = tab.disabled;

        return (
          <button
            key={tab.id}
            onClick={() => !isDisabled && onTabChange(tab.id)}
            disabled={isDisabled}
            className={cn(
              'px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all',
              'border border-b-0 border-[var(--swiss-border,#000000)] -mb-px',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--swiss-focus-ring,#1D4ED8)] focus-visible:ring-offset-2',
              isActive && [
                'bg-white text-[var(--swiss-ink,#000000)] font-bold',
                'shadow-[2px_-2px_0px_0px_rgba(0,0,0,0.1)]',
                'border-b-white',
              ],
              !isActive &&
                !isDisabled && [
                  'bg-[var(--swiss-panel,#E5E5E0)] text-[var(--swiss-muted,#6B7280)]',
                  'hover:bg-[var(--swiss-panel-dark,#D8D8D2)] hover:text-[var(--swiss-ink,#000000)]',
                ],
              isDisabled && ['bg-gray-100 text-gray-300 cursor-not-allowed opacity-50']
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
