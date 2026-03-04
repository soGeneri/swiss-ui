import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    rounded: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="Accept terms and conditions"
      />
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="Marketing emails"
        description="Receive updates about new features and promotions."
      />
    );
  },
};

export const Checked: Story = {
  render: () => (
    <Checkbox defaultChecked label="Already checked" />
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox disabled label="Disabled unchecked" />
      <Checkbox disabled defaultChecked label="Disabled checked" />
    </div>
  ),
};

export const Rounded: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        rounded
        checked={checked}
        onChange={setChecked}
        label="Rounded checkbox"
      />
    );
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['email']);
    const toggle = (val: string) =>
      setSelected((prev) =>
        prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
      );
    const options = [
      { id: 'email', label: 'Email notifications', desc: 'Get notified via email' },
      { id: 'sms', label: 'SMS notifications', desc: 'Get notified via text message' },
      { id: 'push', label: 'Push notifications', desc: 'Get notified in your browser' },
    ];
    return (
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <Checkbox
            key={opt.id}
            checked={selected.includes(opt.id)}
            onChange={() => toggle(opt.id)}
            label={opt.label}
            description={opt.desc}
          />
        ))}
      </div>
    );
  },
};
