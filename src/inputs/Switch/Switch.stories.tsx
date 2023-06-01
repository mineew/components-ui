import { type Meta, type StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';

import Button from '../Button';
import Switch from './Switch';

export const Default: StoryFn<typeof Switch> = ({
  label,
  disabled,
  invalid,
}) => {
  return (
    <div style={{ padding: 20 }}>
      <Switch label={label} disabled={disabled} invalid={invalid} />
    </div>
  );
};

export const ReactHookForm = () => {
  type FormValues = { switchRequired: boolean; switchOptional: boolean };
  const { register, handleSubmit, formState } = useForm<FormValues>();

  return (
    <div style={{ padding: 20 }}>
      <form onSubmit={handleSubmit(action('onSubmit'))}>
        <div style={{ marginBottom: 10 }}>
          <Switch
            label="Required Switch Field"
            {...register('switchRequired', { required: true })}
            invalid={!!formState.errors.switchRequired}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Switch
            label="Optional Switch Field"
            {...register('switchOptional')}
          />
        </div>

        <Button type="submit" theme="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default {
  title: 'Inputs/Switch',
  component: Switch,
  args: {
    label: 'Enable Email Notifications',
    disabled: false,
    invalid: false,
  },
} as Meta<typeof Switch>;
