import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from './Sidebar';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    bordered: { control: 'boolean' },
    collapsed: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const NavIcon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d={d} />
  </svg>
);

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'resumes', label: 'Resumes', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { id: 'builder', label: 'Builder', icon: 'M12 4v16m8-8H4' },
  { id: 'analytics', label: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
];

const SidebarDemo = ({ collapsed = false }: { collapsed?: boolean }) => {
  const [active, setActive] = useState('resumes');
  return (
    <div className="flex h-[500px] border-2 border-black overflow-hidden">
      <Sidebar collapsed={collapsed}>
        <SidebarHeader>
          {collapsed ? (
            <div className="w-6 h-6 bg-blue-700 border border-black mx-auto" />
          ) : (
            <span className="font-mono font-bold text-xs uppercase tracking-widest">Resume Matcher</span>
          )}
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            {!collapsed && <SidebarGroupLabel>Navigation</SidebarGroupLabel>}
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    active={active === item.id}
                    onClick={() => setActive(item.id)}
                  >
                    <NavIcon d={item.icon} />
                    {!collapsed && item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          {!collapsed && (
            <SidebarGroup className="mt-4">
              <SidebarGroupLabel>Recent</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <span className="truncate">Software Eng. — Google</span>
                    <Badge variant="success" className="ml-auto">92%</Badge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <span className="truncate">Frontend Dev — Meta</span>
                    <Badge variant="default" className="ml-auto">78%</Badge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          )}
        </SidebarContent>
        <SidebarFooter>
          <Avatar size="sm" initials="JD" rounded />
          {!collapsed && (
            <div className="ml-2 min-w-0">
              <p className="font-mono text-xs font-bold truncate">Jane Doe</p>
              <p className="font-mono text-xs text-gray-500 truncate">Pro plan</p>
            </div>
          )}
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 p-6 bg-[#F0F0E8] overflow-auto">
        <h1 className="font-serif text-2xl font-bold capitalize">{active}</h1>
        <p className="font-mono text-sm text-gray-500 mt-1">Select a nav item to update this content.</p>
      </main>
    </div>
  );
};

export const Default: Story = {
  render: () => <SidebarDemo />,
};

export const Collapsed: Story = {
  render: () => <SidebarDemo collapsed />,
};

export const Collapsible: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <div className="flex flex-col gap-2">
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="self-start font-mono text-xs uppercase tracking-wide border border-black px-3 py-1 hover:bg-gray-100"
        >
          {collapsed ? 'Expand' : 'Collapse'} sidebar
        </button>
        <SidebarDemo collapsed={collapsed} />
      </div>
    );
  },
};
