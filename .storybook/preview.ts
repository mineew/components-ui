import type { Preview } from '@storybook/react';
import '@storybook/addon-console';
import './preview.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',

    controls: {
      hideNoControlsWarning: true,
    },

    options: {
      storySort: {
        order: ['Inputs', 'Feedback', 'Data Display'],
      },
    },
  },
};

export default preview;
