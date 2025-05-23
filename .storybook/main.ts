import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/web-components-vite",
    "options": {}
  },
  previewHead: (head) => `${head}
      <script type="module" src="./www/build/tommyzki-ui.esm.js"></script>
      <script nomodule src="./www/build/tommyzki-ui.js"></script>
    `,
  async viteFinal(config) {
    const {mergeConfig} = await import('vite');
    const {liveReload} = await import('vite-plugin-live-reload');

    return mergeConfig(config, {
      base: '/tommyzki-ui/',
      plugins: [
        liveReload(['./www/build/tommyzki-ui.esm.js', './www/build/tommyzki-ui.js']),
      ]
    });
  },
};
export default config;