import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Design System/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: { type: 'select' }, 
      options: ['primary', 'secondary', 'danger'],
      description: '버튼의 시각적 스타일을 결정합니다.'
    },
    size: { 
      control: { type: 'select' }, 
      options: ['sm', 'md', 'lg'],
      description: '버튼의 크기를 결정합니다.'
    },
    onClick: { 
      action: 'clicked',
      description: '버튼 클릭 시 실행될 함수입니다.'
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: '기본 버튼',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: '보조 버튼',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    children: '위험 버튼',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: '작은 버튼',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: '중간 버튼',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: '큰 버튼',
  },
}; 