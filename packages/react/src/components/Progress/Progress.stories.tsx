import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'destructive'],
    },
    rounded: { control: 'boolean' },
    showLabel: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: { value: 60 },
};

export const WithLabel: Story = {
  args: { value: 72, showLabel: true },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Progress value={80} variant="default" showLabel />
      <Progress value={65} variant="success" showLabel />
      <Progress value={45} variant="warning" showLabel />
      <Progress value={30} variant="destructive" showLabel />
    </div>
  ),
};

export const ResumeScore: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80 p-6 border-2 border-black">
      <p className="font-mono text-xs uppercase tracking-widest font-bold">Match Score</p>
      <Progress value={87} variant="success" showLabel />
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-gray-500">Keywords</span>
          <Progress value={92} variant="success" className="w-40" />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-gray-500">Experience</span>
          <Progress value={78} variant="default" className="w-40" />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-gray-500">Skills</span>
          <Progress value={55} variant="warning" className="w-40" />
        </div>
      </div>
    </div>
  ),
};

export const Animated: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const timer = setTimeout(() => setValue(75), 500);
      return () => clearTimeout(timer);
    }, []);
    return (
      <div className="w-80">
        <Progress value={value} variant="success" showLabel />
      </div>
    );
  },
};
