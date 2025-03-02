import type { Meta, StoryObj } from '@storybook/react';
import AdBanner from './AdBanner';
import { css } from 'styled-system/css';
import AdImage from '../../../assets/ad image.png';

const meta = {
  title: 'Design System/Components/Banners/AdBanner',
  component: AdBanner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: { 
      control: 'text',
      description: '광고 이미지 경로'
    },
    altText: { 
      control: 'text',
      description: '광고 이미지 대체 텍스트'
    },
    width: { 
      control: 'text',
      description: '이미지 너비'
    },
  },
  decorators: [
    (Story) => (
      <div className={css({ 
        padding: '20px',
        width: '100%',
        maxWidth: '600px'
      })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AdBanner>;

export default meta;
type Story = StoryObj<typeof AdBanner>;

export const Default: Story = {
  args: {
    imageSrc: AdImage,
    altText: 'advertisement',
    width: '320px',
  },
};

export const CustomWidth: Story = {
  args: {
    imageSrc: AdImage,
    altText: 'advertisement',
    width: '400px',
  },
}; 