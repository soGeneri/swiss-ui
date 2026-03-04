import type { Meta, StoryObj } from '@storybook/react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from './Navbar';
import { Button } from '../Button';
import { Avatar } from '../Avatar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    sticky: { control: 'boolean' },
    bordered: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => (
    <Navbar sticky={false}>
      <NavbarBrand>
        <span className="font-mono font-bold text-sm uppercase tracking-widest">Swiss UI</span>
      </NavbarBrand>
      <NavbarContent align="center">
        <NavbarItem active>
          <a href="#" className="font-mono text-xs uppercase tracking-wide hover:underline">Docs</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#" className="font-mono text-xs uppercase tracking-wide hover:underline">About</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#" className="font-mono text-xs uppercase tracking-wide hover:underline">Blog</a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent align="end">
        <Button size="sm" variant="outline">Sign in</Button>
        <Button size="sm">Get started</Button>
      </NavbarContent>
    </Navbar>
  ),
};

export const AppNav: Story = {
  render: () => (
    <Navbar sticky={false}>
      <NavbarBrand>
        <div className="w-6 h-6 bg-blue-700 border border-black" />
        <span className="font-mono font-bold text-sm uppercase tracking-widest">Resume Matcher</span>
      </NavbarBrand>
      <NavbarContent align="end" className="gap-3">
        <Button size="sm" variant="ghost">Help</Button>
        <Avatar initials="JD" size="sm" rounded />
      </NavbarContent>
    </Navbar>
  ),
};

export const MinimalNav: Story = {
  render: () => (
    <Navbar sticky={false}>
      <NavbarBrand>
        <span className="font-serif font-bold text-xl">Acme</span>
      </NavbarBrand>
      <NavbarContent align="end">
        <Button size="sm" variant="default">Launch App</Button>
      </NavbarContent>
    </Navbar>
  ),
};

export const WithPageContent: Story = {
  render: () => (
    <div className="min-h-[300px] bg-[#F0F0E8]">
      <Navbar sticky={false}>
        <NavbarBrand>
          <span className="font-mono font-bold text-sm uppercase tracking-widest">Swiss UI</span>
        </NavbarBrand>
        <NavbarContent align="end">
          <Button size="sm" variant="outline">Docs</Button>
          <Button size="sm">Get Started</Button>
        </NavbarContent>
      </Navbar>
      <main className="p-8">
        <h1 className="font-serif text-4xl font-bold">Page Content</h1>
        <p className="font-mono text-sm text-gray-500 mt-2">The navbar is sticky above this content.</p>
      </main>
    </div>
  ),
};
