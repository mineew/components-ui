import type { Preview } from '@storybook/react';
import './preview.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',

    controls: {
      hideNoControlsWarning: true,
    },

    options: {
      storySort: {
        order: ['Inputs', 'Feedback', 'Navigation'],
      },
    },
  },
};

export default preview;
