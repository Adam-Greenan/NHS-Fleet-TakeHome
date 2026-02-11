import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  async viteFinal(viteConfig) {
    viteConfig.resolve ??= {};
    viteConfig.resolve.alias ??= {};

    Object.assign(viteConfig.resolve.alias, {
      "@domain": path.resolve(__dirname, "../src/domain"),
      "@helpers": path.resolve(__dirname, "../src/helpers"),
      "@features": path.resolve(__dirname, "../src/features"),
      "@mocks": path.resolve(__dirname, "../src/mocks"),
      "@hooks": path.resolve(__dirname, "../src/hooks"),
    });

    return viteConfig;
  },
  "framework": "@storybook/react-vite"
};
export default config;