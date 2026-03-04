import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';
import { Button } from '../Button';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: { size: 'default' },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner size="default" />
      <Spinner size="lg" />
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="default" disabled>
        <Spinner size="sm" className="border-white border-t-transparent" />
        Saving…
      </Button>
      <Button variant="outline" disabled>
        <Spinner size="sm" />
        Loading…
      </Button>
    </div>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-3 p-12 border-2 border-black">
      <Spinner size="lg" />
      <p className="font-mono text-xs uppercase tracking-widest text-gray-500">Loading…</p>
    </div>
  ),
};
