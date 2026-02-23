import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'interactive', 'outline', 'ghost'],
    },
    noPadding: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can put any content.</p>
      </CardContent>
      <CardFooter>
        <Button variant="default">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <Card variant="default" className="w-64">
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Canvas background</CardDescription>
        </CardHeader>
        <CardContent>Basic card style</CardContent>
      </Card>
      <Card variant="interactive" className="w-64">
        <CardHeader>
          <CardTitle>Interactive</CardTitle>
          <CardDescription>Hover for effects</CardDescription>
        </CardHeader>
        <CardContent>Hover to see animation</CardContent>
      </Card>
      <Card variant="outline" className="w-64">
        <CardHeader>
          <CardTitle>Outline</CardTitle>
          <CardDescription>Visible border</CardDescription>
        </CardHeader>
        <CardContent>Always shows border</CardContent>
      </Card>
      <Card variant="ghost" className="w-64">
        <CardHeader>
          <CardTitle>Ghost</CardTitle>
          <CardDescription>Transparent background</CardDescription>
        </CardHeader>
        <CardContent>No background or border</CardContent>
      </Card>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    variant: 'interactive',
    className: 'w-80',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>Hover to see the animation effect</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card lifts and shows a shadow on hover.</p>
      </CardContent>
    </Card>
  ),
};

export const WithOutline: Story = {
  args: {
    variant: 'outline',
    className: 'w-80',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Outlined Card</CardTitle>
        <CardDescription>Has visible border</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card shows a border at rest.</p>
      </CardContent>
    </Card>
  ),
};

export const NoPadding: Story = {
  render: () => (
    <Card variant="outline" noPadding className="w-80">
      <div className="bg-blue-700 text-white p-4">
        <h3 className="font-bold">Featured Image Area</h3>
      </div>
      <div className="p-6">
        <CardTitle>Card With Custom Padding</CardTitle>
        <CardDescription className="mt-2">Using noPadding for custom layout</CardDescription>
      </div>
    </Card>
  ),
};

export const CompositionExample: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} variant="interactive" className="w-64">
          <CardHeader>
            <CardTitle>Project {i}</CardTitle>
            <CardDescription>Created 2 days ago</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">A brief description of project {i} and its purpose.</p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="outline" size="sm">View</Button>
            <Button variant="default" size="sm">Edit</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
};
