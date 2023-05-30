import { type Meta, type StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  UserCircleIcon,
  ShieldExclamationIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';

import Input from './Input';

export const Default: StoryFn<typeof Input> = ({
  placeholder,
  active,
  invalid,
  disabled,
}) => {
  const leftIcon = <UserCircleIcon />;
  const rightIcon = <ShieldExclamationIcon />;

  const rightButtonIcon = <AdjustmentsHorizontalIcon />;
  const rightButtonTooltip = 'Settings';
  const onRightButtonClick = action('Click');

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <div style={{ marginBottom: 20 }}>
        <Input
          placeholder={placeholder as string}
          active={active}
          invalid={invalid}
          disabled={disabled as boolean}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <Input
          placeholder={placeholder as string}
          active={active}
          invalid={invalid}
          disabled={disabled as boolean}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        />
      </div>

      <div>
        <Input
          placeholder={placeholder as string}
          active={active}
          invalid={invalid}
          disabled={disabled as boolean}
          rightButtonIcon={rightButtonIcon}
          rightButtonTooltip={rightButtonTooltip}
          onRightButtonClick={onRightButtonClick}
        />
      </div>
    </div>
  );
};

export const AsSelect: StoryFn<typeof Input> = ({
  active,
  invalid,
  disabled,
}) => {
  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <Input
        as="select"
        active={active}
        invalid={invalid}
        disabled={disabled as boolean}
      >
        <option value={0}>-- Select a color --</option>
        <option value={1}>Red</option>
        <option value={2}>Green</option>
        <option value={3}>Blue</option>
      </Input>
    </div>
  );
};

export const AsButton: StoryFn<typeof Input> = ({
  active,
  invalid,
  disabled,
}) => {
  const onClick = action('Click');

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <div style={{ marginBottom: 20 }}>
        <Input
          as="button"
          active={active}
          invalid={invalid}
          disabled={disabled as boolean}
          onClick={onClick}
        >
          Click me
        </Input>
      </div>
    </div>
  );
};

export default {
  title: 'Inputs/Input',
  component: Input,
  args: {
    placeholder: 'Your Name',
    active: false,
    invalid: false,
    disabled: false,
  },
} as Meta<typeof Input>;
