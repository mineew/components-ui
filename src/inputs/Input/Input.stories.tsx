import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  UserCircleIcon,
  AdjustmentsHorizontalIcon,
  BellSlashIcon,
  EllipsisHorizontalIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { action } from '@storybook/addon-actions';
import { type Meta, type StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';

import Button from '../Button';

import Input from './Input';

export const Default: StoryFn<typeof Input> = ({
  active,
  invalid,
  disabled,
}) => {
  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <div style={{ marginBottom: 20 }}>
        <Input
          placeholder="Simple Input"
          active={active}
          invalid={invalid}
          disabled={disabled as boolean}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <Input
          placeholder="Input With Icon"
          icon={<UserCircleIcon />}
          active={active}
          invalid={invalid}
          disabled={disabled as boolean}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <Input
          placeholder="Input With Both Icons"
          icon={<UserCircleIcon />}
          rightIcon={<ChevronDownIcon />}
          active={active}
          invalid={invalid}
          disabled={disabled as boolean}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <Input
          placeholder="Input With Button"
          active={active}
          invalid={invalid}
          disabled={disabled as boolean}
          toolbar={{
            icon: <AdjustmentsHorizontalIcon />,
            tooltip: 'Settings',
            onClick: action('Click "Settings"'),
          }}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <Input
          placeholder="Input With Toolbar"
          icon={<ClockIcon />}
          active={active}
          invalid={invalid}
          disabled={disabled as boolean}
          toolbar={[
            {
              icon: <BellSlashIcon />,
              tooltip: 'Enable Notifications',
              onClick: action('Click "Enable Notifications"'),
            },
            {
              icon: <EllipsisHorizontalIcon />,
              tooltip: 'More Options',
              onClick: action('Click "More Options"'),
            },
          ]}
        />
      </div>
    </div>
  );
};

export const ReactHookForm = () => {
  type FormValues = { requiredText: string; optionalText: string };
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: { optionalText: 'Optional Text Value' },
  });

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <form onSubmit={handleSubmit(action('onSubmit'))}>
        <div style={{ marginBottom: 10 }}>
          <Input
            type="text"
            placeholder="Required Text Field"
            {...register('requiredText', { required: true })}
            invalid={!!formState.errors.requiredText}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input
            type="text"
            placeholder="Optional Text Field"
            {...register('optionalText')}
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
  title: 'Inputs/Input',
  component: Input,
  args: {
    active: false,
    invalid: false,
    disabled: false,
  },
} as Meta<typeof Input>;
