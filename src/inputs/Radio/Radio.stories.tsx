import { type Meta, type StoryFn } from '@storybook/react';

import Radio from './Radio';

interface Color {
  code: string;
  name: string;
}

const colors: Color[] = [
  { code: '#F08080', name: 'Light Coral' },
  { code: '#8A2BE2', name: 'Blue Violet' },
  { code: '#9932CC', name: 'Dark Orchid' },
];

export const Default: StoryFn<typeof Radio> = ({ disabled, invalid }) => {
  return (
    <div style={{ padding: 20 }}>
      <fieldset style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {colors.map((color) => (
          <Radio
            key={color.code}
            label={color.name}
            name="color"
            value={color.code}
            disabled={disabled}
            invalid={invalid}
          />
        ))}
      </fieldset>
    </div>
  );
};

export default {
  title: 'Inputs/Radio',
  component: Radio,
  args: {
    disabled: false,
    invalid: false,
  },
} as Meta<typeof Radio>;
