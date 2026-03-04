import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    shimmer: { control: 'boolean' },
    rounded: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => <Skeleton className="h-6 w-48" />,
};

export const TextLines: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-5/6" />
      <Skeleton className="h-5 w-2/3" />
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-80 border-2 border-black p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 shrink-0" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-px w-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-9 w-24" />
        <Skeleton className="h-9 w-24" />
      </div>
    </div>
  ),
};

export const ResumeDashboardSkeleton: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border-2 border-black p-4 flex flex-col gap-3" style={{ aspectRatio: '3/4' }}>
          <Skeleton className="flex-1 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      ))}
    </div>
  ),
};

export const NoShimmer: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Skeleton shimmer={false} className="h-5 w-full" />
      <Skeleton shimmer={false} className="h-5 w-4/5" />
      <Skeleton shimmer={false} className="h-5 w-3/5" />
    </div>
  ),
};
