import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    rounded: { control: 'boolean' },
    initials: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithInitials: Story = {
  args: { initials: 'JD', size: 'default' },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" initials="SM" />
      <Avatar size="default" initials="MD" />
      <Avatar size="lg" initials="LG" />
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" initials="A" rounded />
      <Avatar size="default" initials="BC" rounded />
      <Avatar size="lg" initials="XY" rounded />
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        src="https://github.com/srbhr.png"
        alt="srbhr"
        size="lg"
        rounded
      />
      <Avatar
        src="https://github.com/srbhr.png"
        alt="srbhr"
        size="default"
      />
    </div>
  ),
};

export const FallbackOnError: Story = {
  render: () => (
    <Avatar
      src="https://broken-url.invalid/image.jpg"
      alt="User"
      initials="FB"
      size="lg"
    />
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-2">
      {['AM', 'JD', 'KL', 'PR', '+3'].map((initials, i) => (
        <Avatar
          key={i}
          initials={initials}
          size="default"
          rounded
          className="border-2 border-white"
        />
      ))}
    </div>
  ),
};
