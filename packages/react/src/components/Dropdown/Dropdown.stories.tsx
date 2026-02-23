import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const BasicDropdown = () => {
  const [value, setValue] = useState('');
  const options = [
    { id: 'opt1', label: 'Option One' },
    { id: 'opt2', label: 'Option Two' },
    { id: 'opt3', label: 'Option Three' },
  ];

  return (
    <div className="w-72">
      <Dropdown
        options={options}
        value={value}
        onChange={setValue}
        label="Select Option"
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <BasicDropdown />,
};

const WithDescriptionsRender = () => {
  const [value, setValue] = useState('modern');
  const options = [
    { id: 'classic', label: 'Classic', description: 'Traditional single-column layout' },
    { id: 'modern', label: 'Modern', description: 'Two-column design with sidebar' },
    { id: 'minimal', label: 'Minimal', description: 'Clean and simple presentation' },
    { id: 'creative', label: 'Creative', description: 'Bold design for creative fields' },
  ];

  return (
    <div className="w-80">
      <Dropdown
        options={options}
        value={value}
        onChange={setValue}
        label="Resume Template"
        description="Choose a template style for your resume"
      />
    </div>
  );
};

export const WithDescriptions: Story = {
  render: () => <WithDescriptionsRender />,
};

const PreselectedValueRender = () => {
  const [value, setValue] = useState('english');
  const options = [
    { id: 'english', label: 'English', description: 'US English' },
    { id: 'spanish', label: 'Spanish', description: 'Espa\u00f1ol' },
    { id: 'french', label: 'French', description: 'Fran\u00e7ais' },
    { id: 'german', label: 'German', description: 'Deutsch' },
  ];

  return (
    <div className="w-72">
      <Dropdown
        options={options}
        value={value}
        onChange={setValue}
        label="Language"
      />
    </div>
  );
};

export const PreselectedValue: Story = {
  render: () => <PreselectedValueRender />,
};

const DisabledDropdown = () => {
  const options = [
    { id: 'opt1', label: 'Option One' },
    { id: 'opt2', label: 'Option Two' },
  ];

  return (
    <div className="w-72">
      <Dropdown
        options={options}
        value="opt1"
        onChange={() => {}}
        label="Disabled Dropdown"
        disabled
      />
    </div>
  );
};

export const Disabled: Story = {
  render: () => <DisabledDropdown />,
};

const CustomPlaceholderRender = () => {
  const [value, setValue] = useState('');
  const options = [
    { id: 'sm', label: 'Small' },
    { id: 'md', label: 'Medium' },
    { id: 'lg', label: 'Large' },
    { id: 'xl', label: 'Extra Large' },
  ];

  return (
    <div className="w-72">
      <Dropdown
        options={options}
        value={value}
        onChange={setValue}
        label="Size"
        placeholder="Choose a size..."
      />
    </div>
  );
};

export const CustomPlaceholder: Story = {
  render: () => <CustomPlaceholderRender />,
};

const ManyOptionsRender = () => {
  const [value, setValue] = useState('');
  const options = Array.from({ length: 20 }, (_, i) => ({
    id: `item-${i + 1}`,
    label: `Item ${i + 1}`,
    description: `Description for item ${i + 1}`,
  }));

  return (
    <div className="w-80">
      <Dropdown
        options={options}
        value={value}
        onChange={setValue}
        label="Scrollable List"
        description="This dropdown scrolls when there are many options"
      />
    </div>
  );
};

export const ManyOptions: Story = {
  render: () => <ManyOptionsRender />,
};
