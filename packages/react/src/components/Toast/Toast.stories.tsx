import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, Toaster, useToast } from './Toast';
import { Button } from '../Button';

const meta: Meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <Toaster />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

const ToastDemo = ({
  variant,
  title,
  description,
}: {
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  title?: string;
  description?: string;
}) => {
  const { toast } = useToast();
  return (
    <Button
      variant={variant === 'destructive' ? 'destructive' : variant === 'success' ? 'success' : variant === 'warning' ? 'warning' : 'outline'}
      onClick={() => toast({ variant, title, description })}
    >
      Show {variant ?? 'default'} toast
    </Button>
  );
};

export const Default: Story = {
  render: () => (
    <ToastDemo
      title="Saved"
      description="Your changes have been saved."
    />
  ),
};

export const AllVariants: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" onClick={() => toast({ title: 'Info', description: 'Something happened.' })}>
          Default
        </Button>
        <Button variant="success" onClick={() => toast({ variant: 'success', title: 'Exported!', description: 'Your resume PDF is ready.' })}>
          Success
        </Button>
        <Button variant="warning" onClick={() => toast({ variant: 'warning', title: 'Session expiring', description: 'You will be logged out in 5 minutes.' })}>
          Warning
        </Button>
        <Button variant="destructive" onClick={() => toast({ variant: 'destructive', title: 'Error', description: 'Failed to save changes.' })}>
          Destructive
        </Button>
      </div>
    );
  },
};

export const TitleOnly: Story = {
  render: () => (
    <ToastDemo title="Changes saved" />
  ),
};

export const DescriptionOnly: Story = {
  render: () => (
    <ToastDemo description="Your resume has been updated." />
  ),
};

export const StackedToasts: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <Button
        onClick={() => {
          toast({ title: 'Step 1 complete', variant: 'success' });
          setTimeout(() => toast({ title: 'Step 2 complete', variant: 'success' }), 300);
          setTimeout(() => toast({ title: 'All done!', variant: 'success', description: 'Your resume is ready.' }), 600);
        }}
      >
        Trigger 3 toasts
      </Button>
    );
  },
};
