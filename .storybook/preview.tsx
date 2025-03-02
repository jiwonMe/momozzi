import type { Preview } from '@storybook/react';
import React from 'react';
import '../styled-system/styles.css'; // Panda CSS 스타일 임포트
import { ThemeProvider } from '../src/design-system/ThemeProvider';

// ThemeProvider를 사용하는 decorator
const withThemeProvider = (Story, context) => {
  // Storybook 컨트롤에서 테마를 선택할 수 있도록 합니다
  const theme = context.globals.theme || 'light';
  
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withThemeProvider],
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
  // 테마 전환을 위한 글로벌 설정
  globalTypes: {
    theme: {
      name: '테마',
      description: '컴포넌트 테마',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: '라이트 모드' },
          { value: 'dark', icon: 'moon', title: '다크 모드' },
        ],
        showName: true,
      },
    },
  },
};

export default preview; 