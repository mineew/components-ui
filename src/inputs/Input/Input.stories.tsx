import { type Meta, type StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  UserCircleIcon,
  BackspaceIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';

import Input from './Input';

const H1 = ({ children }: { children: string }) => {
  return <h1 style={{ fontSize: 20, marginBottom: 10 }}>{children}</h1>;
};

const H2 = ({ children }: { children: string }) => {
  return <h2 style={{ fontSize: 16, marginBottom: 10 }}>{children}</h2>;
};

export const Default: StoryFn<typeof Input> = () => {
  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>Default</H1>

        <div style={{ marginBottom: 10 }}>
          <Input placeholder="введите фамилию" />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input placeholder="введите фамилию" disabled />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input value="Иван Иванов" disabled />
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Invalid</H1>

        <div style={{ marginBottom: 10 }}>
          <Input placeholder="введите фамилию" invalid />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input placeholder="введите фамилию" disabled invalid />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input value="Иван Иванов" disabled invalid />
        </div>
      </div>
    </div>
  );
};

export const WithIcons: StoryFn<typeof Input> = () => {
  const leftIcon = <UserCircleIcon />;
  const rightIcon = <BackspaceIcon />;

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>Default</H1>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="введите фамилию"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
          />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="введите фамилию"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            disabled
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input
            value="Иван Иванов"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            disabled
          />
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Invalid</H1>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="введите фамилию"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            invalid
          />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="введите фамилию"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            disabled
            invalid
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input
            value="Иван Иванов"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            disabled
            invalid
          />
        </div>
      </div>
    </div>
  );
};

export const WithButton: StoryFn<typeof Input> = () => {
  const rightButtonIcon = <AdjustmentsHorizontalIcon />;
  const rightButtonTooltip = 'Настройки';
  const onRightButtonClick = action('Click');

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>Default</H1>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="введите фамилию"
            rightButtonIcon={rightButtonIcon}
            rightButtonTooltip={rightButtonTooltip}
            onRightButtonClick={onRightButtonClick}
          />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="введите фамилию"
            rightButtonIcon={rightButtonIcon}
            rightButtonTooltip={rightButtonTooltip}
            onRightButtonClick={onRightButtonClick}
            disabled
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input
            value="Иван Иванов"
            rightButtonIcon={rightButtonIcon}
            rightButtonTooltip={rightButtonTooltip}
            onRightButtonClick={onRightButtonClick}
            disabled
          />
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Invalid</H1>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="введите фамилию"
            rightButtonIcon={rightButtonIcon}
            rightButtonTooltip={rightButtonTooltip}
            onRightButtonClick={onRightButtonClick}
            invalid
          />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="введите фамилию"
            rightButtonIcon={rightButtonIcon}
            rightButtonTooltip={rightButtonTooltip}
            onRightButtonClick={onRightButtonClick}
            disabled
            invalid
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input
            value="Иван Иванов"
            rightButtonIcon={rightButtonIcon}
            rightButtonTooltip={rightButtonTooltip}
            onRightButtonClick={onRightButtonClick}
            disabled
            invalid
          />
        </div>
      </div>
    </div>
  );
};

export const AsSelect: StoryFn<typeof Input> = () => {
  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>Default</H1>

        <div style={{ marginBottom: 10 }}>
          <Input as="select">
            <option value={0}>-- Выберите цвет --</option>
            <option value={1}>Красный</option>
            <option value={2}>Зеленый</option>
            <option value={3}>Синий</option>
          </Input>
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input as="select" disabled>
            <option value={0}>-- Выберите цвет --</option>
            <option value={1}>Красный</option>
            <option value={2}>Зеленый</option>
            <option value={3}>Синий</option>
          </Input>
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input as="select" value={2} disabled>
            <option value={0}>-- Выберите цвет --</option>
            <option value={1}>Красный</option>
            <option value={2}>Зеленый</option>
            <option value={3}>Синий</option>
          </Input>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Invalid</H1>

        <div style={{ marginBottom: 10 }}>
          <Input as="select" invalid>
            <option value={0}>-- Выберите цвет --</option>
            <option value={1}>Красный</option>
            <option value={2}>Зеленый</option>
            <option value={3}>Синий</option>
          </Input>
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input as="select" invalid disabled>
            <option value={0}>-- Выберите цвет --</option>
            <option value={1}>Красный</option>
            <option value={2}>Зеленый</option>
            <option value={3}>Синий</option>
          </Input>
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input as="select" value={2} invalid disabled>
            <option value={0}>-- Выберите цвет --</option>
            <option value={1}>Красный</option>
            <option value={2}>Зеленый</option>
            <option value={3}>Синий</option>
          </Input>
        </div>
      </div>
    </div>
  );
};

export const AsButton: StoryFn<typeof Input> = () => {
  const onClick = action('Click');

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>Default</H1>

        <div style={{ marginBottom: 10 }}>
          <Input as="button" onClick={onClick}>
            Button
          </Input>
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input as="button" onClick={onClick} disabled>
            Button
          </Input>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Invalid</H1>

        <div style={{ marginBottom: 10 }}>
          <Input as="button" onClick={onClick} invalid>
            Button
          </Input>
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input as="button" onClick={onClick} disabled invalid>
            Button
          </Input>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Inputs/Input',
  component: Input,
} as Meta<typeof Input>;
