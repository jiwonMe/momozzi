import type { Preview } from '@storybook/react'
import '../styled-system/styles.css'; // Panda CSS 스타일 임포트

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'gray',
          value: '#F9FAFB',
        },
        {
          name: 'dark',
          value: '#1F2937',
        },
      ],
    },
    layout: 'padded',
  },
};

export default preview;