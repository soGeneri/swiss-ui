import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

const BasicToggle = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-80">
      <ToggleSwitch
        checked={checked}
        onCheckedChange={setChecked}
        label="Enable Feature"
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <BasicToggle />,
};

const WithDescriptionRender = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="w-96">
      <ToggleSwitch
        checked={checked}
        onCheckedChange={setChecked}
        label="Email Notifications"
        description="Receive email updates about your account activity"
      />
    </div>
  );
};

export const WithDescription: Story = {
  render: () => <WithDescriptionRender />,
};

const CheckedState = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="w-80">
      <ToggleSwitch
        checked={checked}
        onCheckedChange={setChecked}
        label="Dark Mode"
        description="Enable dark theme"
      />
    </div>
  );
};

export const Checked: Story = {
  render: () => <CheckedState />,
};

const DisabledToggle = () => (
  <div className="space-y-4 w-80">
    <ToggleSwitch
      checked={false}
      onCheckedChange={() => {}}
      label="Disabled Off"
      description="This toggle is disabled"
      disabled
    />
    <ToggleSwitch
      checked={true}
      onCheckedChange={() => {}}
      label="Disabled On"
      description="This toggle is disabled"
      disabled
    />
  </div>
);

export const Disabled: Story = {
  render: () => <DisabledToggle />,
};

const SettingsPanel = () => {
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-2 w-96">
      <h3 className="font-mono text-xs uppercase tracking-wider text-gray-600 mb-4">
        [ Settings ]
      </h3>
      <ToggleSwitch
        checked={notifications}
        onCheckedChange={setNotifications}
        label="Push Notifications"
        description="Get notified about important updates"
      />
      <ToggleSwitch
        checked={autoSave}
        onCheckedChange={setAutoSave}
        label="Auto-Save"
        description="Automatically save changes while editing"
      />
      <ToggleSwitch
        checked={analytics}
        onCheckedChange={setAnalytics}
        label="Usage Analytics"
        description="Help improve the app by sharing anonymous usage data"
      />
      <ToggleSwitch
        checked={darkMode}
        onCheckedChange={setDarkMode}
        label="Dark Mode"
        description="Use dark theme for the interface"
      />
    </div>
  );
};

export const SettingsPanelExample: Story = {
  render: () => <SettingsPanel />,
};

const AllStatesRender = () => (
  <div className="space-y-4 w-80">
    <ToggleSwitch
      checked={false}
      onCheckedChange={() => {}}
      label="Off State"
    />
    <ToggleSwitch
      checked={true}
      onCheckedChange={() => {}}
      label="On State"
    />
    <ToggleSwitch
      checked={false}
      onCheckedChange={() => {}}
      label="Disabled Off"
      disabled
    />
    <ToggleSwitch
      checked={true}
      onCheckedChange={() => {}}
      label="Disabled On"
      disabled
    />
  </div>
);

export const AllStates: Story = {
  render: () => <AllStatesRender />,
};
