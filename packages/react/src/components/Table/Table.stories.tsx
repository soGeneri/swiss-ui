import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from './Table';
import { Badge } from '../Badge';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    responsive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const resumes = [
  { title: 'Software Engineer', company: 'Google', score: 92, status: 'success' },
  { title: 'Frontend Developer', company: 'Meta', score: 78, status: 'default' },
  { title: 'Full Stack Dev', company: 'Stripe', score: 65, status: 'warning' },
  { title: 'React Developer', company: 'Vercel', score: 41, status: 'destructive' },
] as const;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Resume</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Score</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resumes.map((r) => (
          <TableRow key={r.title}>
            <TableCell>{r.title}</TableCell>
            <TableCell>{r.company}</TableCell>
            <TableCell>{r.score}%</TableCell>
            <TableCell>
              <Badge variant={r.status}>{r.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <Table>
      <TableCaption>Your recent resume submissions</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Resume</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resumes.map((r) => (
          <TableRow key={r.title}>
            <TableCell>{r.title}</TableCell>
            <TableCell>{r.company}</TableCell>
            <TableCell>{r.score}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Resume</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resumes.map((r) => (
          <TableRow key={r.title}>
            <TableCell>{r.title}</TableCell>
            <TableCell>{r.company}</TableCell>
            <TableCell>{r.score}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Average</TableCell>
          <TableCell>
            {Math.round(resumes.reduce((s, r) => s + r.score, 0) / resumes.length)}%
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const StripedRows: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Resume</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resumes.map((r, i) => (
          <TableRow key={r.title} striped={i % 2 !== 0}>
            <TableCell>{r.title}</TableCell>
            <TableCell>{r.company}</TableCell>
            <TableCell>{r.score}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
