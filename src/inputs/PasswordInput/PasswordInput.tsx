import {
  type HTMLInputTypeAttribute,
  type Ref,
  forwardRef,
  useState,
} from 'react';
import { KeyIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

import Input, { type InputProps } from '../Input/Input';

type PasswordInputProps = Omit<
  InputProps<'input'>,
  | 'type'
  | 'as'
  | 'leftIcon'
  | 'rightIcon'
  | 'rightButtonIcon'
  | 'rightButtonTooltip'
  | 'onRightButtonClick'
>;

function PasswordInput(props: PasswordInputProps, ref: Ref<HTMLInputElement>) {
  const [type, setType] = useState<HTMLInputTypeAttribute>('password');
  const toggleType = () => setType(type === 'password' ? 'text' : 'password');

  const icon = type === 'password' ? <EyeIcon /> : <EyeSlashIcon />;
  const tooltip = type === 'password' ? 'Показать пароль' : 'Скрыть пароль';

  return (
    <Input
      ref={ref}
      type={type}
      leftIcon={<KeyIcon />}
      rightButtonIcon={icon}
      rightButtonTooltip={tooltip}
      onRightButtonClick={toggleType}
      {...props}
    />
  );
}

export default forwardRef(PasswordInput);
