import { action } from '@storybook/addon-actions';
import { type Meta, type StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';

import Button from '../Button';

import Radio from './Radio';
import RadioGroup from './RadioGroup';

interface Color {
  code: string;
  name: string;
}

const colors: Color[] = [
  { code: '#F08080', name: 'Light Coral' },
  { code: '#8A2BE2', name: 'Blue Violet' },
  { code: '#9932CC', name: 'Dark Orchid' },
];

export const Default: StoryFn<typeof RadioGroup> = ({
  legend,
  orientation,
  disabled,
  invalid,
}) => {
  return (
    <div style={{ padding: 20 }}>
      <RadioGroup
        legend={legend}
        orientation={orientation}
        name="color"
        disabled={disabled}
        invalid={invalid}
      >
        {colors.map((color) => (
          <Radio key={color.code} label={color.name} value={color.code} />
        ))}
      </RadioGroup>
    </div>
  );
};

export const ReactHookForm = () => {
  type FormValues = { radioRequired: string; radioOptional: string };
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: { radioOptional: 'two' },
  });

  return (
    <div style={{ padding: 20 }}>
      <form onSubmit={handleSubmit(action('onSubmit'))}>
        <div style={{ marginBottom: 20 }}>
          <RadioGroup
            legend="Required Radio Field"
            invalid={!!formState.errors.radioRequired}
          >
            <Radio
              label="One"
              value="one"
              {...register('radioRequired', { required: true })}
            />
            <Radio
              label="Two"
              value="two"
              {...register('radioRequired', { required: true })}
            />
            <Radio
              label="Three"
              value="three"
              {...register('radioRequired', { required: true })}
            />
          </RadioGroup>
        </div>

        <div style={{ marginBottom: 20 }}>
          <RadioGroup legend="Optional Radio Field">
            <Radio label="One" value="one" {...register('radioOptional')} />
            <Radio label="Two" value="two" {...register('radioOptional')} />
            <Radio label="Three" value="three" {...register('radioOptional')} />
          </RadioGroup>
        </div>

        <Button type="submit" theme="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default {
  title: 'Inputs/Radio',
  component: Radio,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    legend: 'Select Your Favorite Color',
    orientation: 'horizontal',
    disabled: false,
    invalid: false,
  },
} as Meta<typeof Radio>;
