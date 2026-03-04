import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-80">
      <p className="font-mono text-sm mb-4">Above the separator</p>
      <Separator />
      <p className="font-mono text-sm mt-4">Below the separator</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-80">
      <Separator label="OR" />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-12">
      <span className="font-mono text-sm">Left</span>
      <Separator orientation="vertical" />
      <span className="font-mono text-sm">Right</span>
    </div>
  ),
};

export const InCardLayout: Story = {
  render: () => (
    <div className="w-80 p-6 border-2 border-black">
      <p className="font-mono text-xs uppercase tracking-widest font-bold">Section One</p>
      <p className="font-mono text-sm mt-2 text-gray-600">Some content here.</p>
      <Separator className="my-4" />
      <p className="font-mono text-xs uppercase tracking-widest font-bold">Section Two</p>
      <p className="font-mono text-sm mt-2 text-gray-600">More content here.</p>
    </div>
  ),
};

export const LabeledSections: Story = {
  render: () => (
    <div className="w-96 flex flex-col gap-4">
      <Separator label="Personal Info" />
      <div className="font-mono text-sm text-gray-600">Name, email, phone…</div>
      <Separator label="Work Experience" />
      <div className="font-mono text-sm text-gray-600">Companies, roles…</div>
      <Separator label="Education" />
      <div className="font-mono text-sm text-gray-600">Schools, degrees…</div>
    </div>
  ),
};
