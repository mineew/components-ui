import type { Preview } from '@storybook/react';
import '@storybook/addon-console';
import './preview.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',

    controls: {
      hideNoControlsWarning: true,
    },

    docs: {
      // https://github.com/storybookjs/storybook/issues/17720
      source: { code: 'disabled' },
    },

    options: {
      storySort: {
        order: ['Inputs', 'Feedback', 'Data Display', 'Utils'],
      },
    },
  },
};

export default preview;
