import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'destructive'],
    },
    rounded: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>
        Your resume will be automatically saved every 30 seconds.
      </AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-lg">
      <Alert variant="default">
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>This is a default informational alert.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle variant="success">Success</AlertTitle>
        <AlertDescription variant="success">Your resume was exported successfully.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle variant="warning">Warning</AlertTitle>
        <AlertDescription variant="warning">Your session will expire in 5 minutes.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle variant="destructive">Error</AlertTitle>
        <AlertDescription variant="destructive">Failed to save changes. Please try again.</AlertDescription>
      </Alert>
    </div>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTitle variant="warning">Free plan limit reached</AlertTitle>
    </Alert>
  ),
};

export const DescriptionOnly: Story = {
  render: () => (
    <Alert variant="success">
      <AlertDescription variant="success">
        Changes saved successfully.
      </AlertDescription>
    </Alert>
  ),
};
