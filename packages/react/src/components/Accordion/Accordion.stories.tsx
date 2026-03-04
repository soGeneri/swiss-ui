import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    rounded: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const faqItems = [
  {
    value: 'q1',
    trigger: 'What is Resume Matcher?',
    content:
      'Resume Matcher is an AI-powered tool that helps you tailor your resume to specific job descriptions, improving your chances of passing ATS filters.',
  },
  {
    value: 'q2',
    trigger: 'Is it free to use?',
    content:
      'Yes — Resume Matcher is free and open source. You can self-host it or use the hosted version at no cost.',
  },
  {
    value: 'q3',
    trigger: 'How does ATS scoring work?',
    content:
      'The tool compares keywords, skills, and phrases between your resume and the job description, then calculates a relevance score.',
  },
  {
    value: 'q4',
    trigger: 'Can I use it with any job posting?',
    content: 'Yes — just paste the job description text and upload your resume PDF.',
    disabled: false,
  },
];

export const Default: Story = {
  render: () => (
    <div className="w-[520px]">
      <Accordion items={faqItems} />
    </div>
  ),
};

export const MultipleOpen: Story = {
  render: () => (
    <div className="w-[520px]">
      <Accordion items={faqItems} type="multiple" defaultValue={['q1', 'q3']} />
    </div>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <div className="w-[520px]">
      <Accordion items={faqItems} defaultValue="q1" />
    </div>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <div className="w-[520px]">
      <Accordion
        items={[
          { value: 'a', trigger: 'Available item', content: 'This item is open.' },
          { value: 'b', trigger: 'Disabled item', content: 'You cannot open this.', disabled: true },
          { value: 'c', trigger: 'Another available item', content: 'Also accessible.' },
        ]}
      />
    </div>
  ),
};
