import type { Meta, StoryObj } from '@storybook/react';
import LoadSpinner from './LoadSpinner';
import { css } from 'styled-system/css';

const meta = {
  title: 'Design System/Components/Spinners/LoadSpinner',
  component: LoadSpinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { 
      control: 'color',
      description: '스피너의 색상'
    },
    size: { 
      control: { type: 'number', min: 4, max: 48, step: 4 },
      description: '스피너의 크기(px)'
    },
  },
  decorators: [
    (Story) => (
      <div className={css({ 
        padding: '40px',
        background: '#f5f5f5',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '200px'
      })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoadSpinner>;

export default meta;
type Story = StoryObj<typeof LoadSpinner>;

export const Default: Story = {
  args: {
    color: '#b3b3b3',
    size: 12,
  },
};

export const Blue: Story = {
  args: {
    color: '#0F5777',
    size: 12,
  },
};

export const Large: Story = {
  args: {
    color: '#b3b3b3',
    size: 24,
  },
};

export const Small: Story = {
  args: {
    color: '#b3b3b3',
    size: 8,
  },
}; 