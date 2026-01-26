import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { Label } from '../Label';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    rows: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter description...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Label htmlFor="bio">Biography</Label>
      <Textarea id="bio" placeholder="Tell us about yourself..." rows={4} />
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    value: 'This is some pre-filled content that demonstrates the textarea component with actual text inside it.',
    onChange: () => {},
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled',
    disabled: true,
  },
};

export const LargeTextarea: Story = {
  args: {
    placeholder: 'Enter long-form content...',
    rows: 8,
    className: 'w-96',
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="feedback">Feedback</Label>
        <Textarea id="feedback" placeholder="Share your thoughts..." rows={5} />
      </div>
      <p className="text-xs text-gray-500 font-mono">0/500 characters</p>
    </div>
  ),
};
