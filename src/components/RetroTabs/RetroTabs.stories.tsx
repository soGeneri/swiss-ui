import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RetroTabs } from './RetroTabs';

const meta: Meta<typeof RetroTabs> = {
  title: 'Components/RetroTabs',
  component: RetroTabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RetroTabs>;

const BasicTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const tabs = [
    { id: 'tab1', label: 'Overview' },
    { id: 'tab2', label: 'Details' },
    { id: 'tab3', label: 'Settings' },
  ];

  return (
    <div className="w-96">
      <RetroTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="border border-t-0 border-black bg-white p-4">
        <p className="font-mono text-sm">Content for: {activeTab}</p>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <BasicTabs />,
};

const TabsWithDisabled = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const tabs = [
    { id: 'tab1', label: 'Active' },
    { id: 'tab2', label: 'Available' },
    { id: 'tab3', label: 'Disabled', disabled: true },
    { id: 'tab4', label: 'Also OK' },
  ];

  return (
    <div className="w-[500px]">
      <RetroTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="border border-t-0 border-black bg-white p-4">
        <p className="font-mono text-sm">Selected: {tabs.find(t => t.id === activeTab)?.label}</p>
      </div>
    </div>
  );
};

export const WithDisabledTab: Story = {
  render: () => <TabsWithDisabled />,
};

const ManyTabs = () => {
  const [activeTab, setActiveTab] = useState('general');
  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'security', label: 'Security' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'billing', label: 'Billing' },
    { id: 'team', label: 'Team' },
  ];

  return (
    <div className="w-[600px]">
      <RetroTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="border border-t-0 border-black bg-white p-4">
        <p className="font-mono text-sm">Managing: {tabs.find(t => t.id === activeTab)?.label} settings</p>
      </div>
    </div>
  );
};

export const ManyTabsExample: Story = {
  render: () => <ManyTabs />,
};

const TabsWithContent = () => {
  const [activeTab, setActiveTab] = useState('resume');
  const tabs = [
    { id: 'resume', label: 'Resume' },
    { id: 'cover', label: 'Cover Letter' },
    { id: 'preview', label: 'Preview' },
  ];

  const content: Record<string, React.ReactNode> = {
    resume: (
      <div className="space-y-4">
        <h3 className="font-serif text-lg font-bold">Resume Editor</h3>
        <p className="text-sm text-gray-600">Edit your resume content here.</p>
      </div>
    ),
    cover: (
      <div className="space-y-4">
        <h3 className="font-serif text-lg font-bold">Cover Letter</h3>
        <p className="text-sm text-gray-600">Customize your cover letter.</p>
      </div>
    ),
    preview: (
      <div className="space-y-4">
        <h3 className="font-serif text-lg font-bold">Preview</h3>
        <p className="text-sm text-gray-600">See how your documents will look.</p>
      </div>
    ),
  };

  return (
    <div className="w-96">
      <RetroTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="border border-t-0 border-black bg-white p-6">
        {content[activeTab]}
      </div>
    </div>
  );
};

export const WithRichContent: Story = {
  render: () => <TabsWithContent />,
};
