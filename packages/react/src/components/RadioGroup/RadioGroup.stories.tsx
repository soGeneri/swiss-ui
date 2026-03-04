import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    rounded: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const planOptions = [
  { value: 'free', label: 'Free', description: 'Up to 3 resumes, basic templates' },
  { value: 'pro', label: 'Pro', description: 'Unlimited resumes, all templates' },
  { value: 'team', label: 'Team', description: 'Everything in Pro + team features' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('free');
    return (
      <RadioGroup
        options={planOptions}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithDisabledOption: Story = {
  render: () => {
    const [value, setValue] = useState('free');
    const options = [
      { value: 'free', label: 'Free' },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise', description: 'Contact sales', disabled: true },
    ];
    return (
      <RadioGroup options={options} value={value} onChange={setValue} />
    );
  },
};

export const Rounded: Story = {
  render: () => {
    const [value, setValue] = useState('pro');
    return (
      <RadioGroup options={planOptions} value={value} onChange={setValue} rounded />
    );
  },
};

export const Uncontrolled: Story = {
  render: () => (
    <RadioGroup
      options={[
        { value: 'a', label: 'Option A' },
        { value: 'b', label: 'Option B' },
        { value: 'c', label: 'Option C' },
      ]}
    />
  ),
};
