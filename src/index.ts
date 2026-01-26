/**
 * Swiss UI - React Component Library
 *
 * Swiss International Style components with:
 * - Square corners (brutalist aesthetic)
 * - Hard shadows for depth
 * - High contrast black borders
 * - Hyper Blue primary color
 *
 * @example
 * ```tsx
 * import '@swiss-ui/react/styles';
 * import { Button, Card, Dialog } from '@swiss-ui/react';
 * ```
 */

// Core Components (Tier 1)
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Input } from './components/Input';
export type { InputProps } from './components/Input';

export { Textarea } from './components/Textarea';
export type { TextareaProps } from './components/Textarea';

export { Label } from './components/Label';
export type { LabelProps } from './components/Label';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './components/Card';
export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
} from './components/Card';

export { RetroTabs } from './components/RetroTabs';
export type { RetroTabsProps, Tab } from './components/RetroTabs';

// Complex Components (Tier 2)
export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './components/Dialog';
export type {
  DialogProps,
  DialogTriggerProps,
  DialogCloseProps,
  DialogContentProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogDescriptionProps,
} from './components/Dialog';

export { ConfirmDialog } from './components/ConfirmDialog';
export type { ConfirmDialogProps } from './components/ConfirmDialog';

export { Dropdown } from './components/Dropdown';
export type { DropdownProps, DropdownOption } from './components/Dropdown';

export { ToggleSwitch } from './components/ToggleSwitch';
export type { ToggleSwitchProps } from './components/ToggleSwitch';

// Utility exports
export { cn } from './utils/cn';
