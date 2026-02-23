import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Download, Trash2, Save, ArrowRight } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: 'boolean',
    },
    rounded: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Primary Button',
    variant: 'default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon"><Save className="w-4 h-4" /></Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">
        <Save className="w-4 h-4" />
        Save
      </Button>
      <Button variant="success">
        <Download className="w-4 h-4" />
        Download
      </Button>
      <Button variant="destructive">
        <Trash2 className="w-4 h-4" />
        Delete
      </Button>
      <Button variant="outline">
        Continue
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="default" size="icon"><Save className="w-4 h-4" /></Button>
      <Button variant="destructive" size="icon"><Trash2 className="w-4 h-4" /></Button>
      <Button variant="success" size="icon"><Download className="w-4 h-4" /></Button>
      <Button variant="outline" size="icon"><ArrowRight className="w-4 h-4" /></Button>
      <Button variant="ghost" size="icon"><Save className="w-4 h-4" /></Button>
    </div>
  ),
};

export const RoundedVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button rounded>Default Rounded</Button>
      <Button variant="destructive" rounded>Destructive Rounded</Button>
      <Button variant="success" rounded>Success Rounded</Button>
      <Button variant="warning" rounded>Warning Rounded</Button>
      <Button variant="outline" rounded>Outline Rounded</Button>
      <Button variant="secondary" rounded>Secondary Rounded</Button>
      <Button variant="ghost" rounded>Ghost Rounded</Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button disabled>Disabled Default</Button>
      <Button variant="destructive" disabled>Disabled Destructive</Button>
      <Button variant="outline" disabled>Disabled Outline</Button>
    </div>
  ),
};

export const Destructive: Story = {
  args: {
    children: 'Delete Item',
    variant: 'destructive',
  },
};

export const Success: Story = {
  args: {
    children: 'Download PDF',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Reset Form',
    variant: 'warning',
  },
};

export const Outline: Story = {
  args: {
    children: 'Cancel',
    variant: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Action',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Learn more',
    variant: 'link',
  },
};
