import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "viteFinal": async (config) => {
    // Panda CSS의 styled-system 디렉토리에 대한 alias 설정
    if (config.resolve && config.resolve.alias) {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({
          find: 'styled-system',
          replacement: resolve(__dirname, '../styled-system')
        });
      } else {
        config.resolve.alias['styled-system'] = resolve(__dirname, '../styled-system');
      }
    } else if (config.resolve) {
      config.resolve.alias = {
        'styled-system': resolve(__dirname, '../styled-system')
      };
    }
    
    return config;
  }
};
export default config;