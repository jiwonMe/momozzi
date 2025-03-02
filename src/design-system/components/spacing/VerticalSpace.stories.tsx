import type { Meta, StoryObj } from '@storybook/react';
import VerticalSpace from './VerticalSpace';
import { css } from 'styled-system/css';

const meta = {
  title: 'Design System/Components/Spacing/VerticalSpace',
  component: VerticalSpace,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { 
      control: { type: 'number', min: 0, max: 100, step: 4 },
      description: '수직 여백의 높이(px)'
    },
  },
  decorators: [
    (Story) => (
      <div className={css({ 
        padding: '20px',
        background: '#f5f5f5',
        width: '300px'
      })}>
        <div className={css({ background: '#e0e0e0', height: '50px', width: '100%' })} />
        <Story />
        <div className={css({ background: '#e0e0e0', height: '50px', width: '100%' })} />
      </div>
    ),
  ],
} satisfies Meta<typeof VerticalSpace>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 8,
  },
};

export const Medium: Story = {
  args: {
    size: 16,
  },
};

export const Large: Story = {
  args: {
    size: 32,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 64,
  },
}; 