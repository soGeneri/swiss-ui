import type { Preview } from '@storybook/react';
import '../src/styles/swiss.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'swiss-canvas',
      values: [
        {
          name: 'swiss-canvas',
          value: '#F0F0E8',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a1a1a',
        },
      ],
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default preview;
