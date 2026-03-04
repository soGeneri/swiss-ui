import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'warning', 'destructive', 'outline'],
    },
    rounded: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: 'Badge', variant: 'default' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const RoundedVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default" rounded>Default</Badge>
      <Badge variant="secondary" rounded>Secondary</Badge>
      <Badge variant="success" rounded>Success</Badge>
      <Badge variant="warning" rounded>Warning</Badge>
      <Badge variant="destructive" rounded>Destructive</Badge>
      <Badge variant="outline" rounded>Outline</Badge>
    </div>
  ),
};

export const InlineUsage: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="font-mono text-sm">
        Status: <Badge variant="success">Active</Badge>
      </p>
      <p className="font-mono text-sm">
        Role: <Badge variant="default">Admin</Badge>
      </p>
      <p className="font-mono text-sm">
        Plan: <Badge variant="warning">Pro Trial</Badge>
      </p>
      <p className="font-mono text-sm">
        Account: <Badge variant="destructive">Suspended</Badge>
      </p>
    </div>
  ),
};
