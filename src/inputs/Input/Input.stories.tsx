import { type Meta, type StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  UserCircleIcon,
  ShieldExclamationIcon,
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
          <Input placeholder="Last Name" />
        </div>

        <H2>Active</H2>

        <div style={{ marginBottom: 10 }}>
          <Input placeholder="Last Name" active />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input placeholder="Last Name" disabled />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input value="Archibald Joseph Cronin" disabled />
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Invalid</H1>

        <div style={{ marginBottom: 10 }}>
          <Input placeholder="Last Name" invalid />
        </div>

        <H2>Active</H2>

        <div style={{ marginBottom: 10 }}>
          <Input placeholder="Last Name" active invalid />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input placeholder="Last Name" disabled invalid />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input value="Archibald Joseph Cronin" disabled invalid />
        </div>
      </div>
    </div>
  );
};

export const WithIcons: StoryFn<typeof Input> = () => {
  const leftIcon = <UserCircleIcon />;
  const rightIcon = <ShieldExclamationIcon />;

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>Default</H1>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="Last Name"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
          />
        </div>

        <H2>Active</H2>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="Last Name"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            active
          />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="Last Name"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            disabled
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input
            value="Archibald Joseph Cronin"
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
            placeholder="Last Name"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            invalid
          />
        </div>

        <H2>Active</H2>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="Last Name"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            active
            invalid
          />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="Last Name"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            disabled
            invalid
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input
            value="Archibald Joseph Cronin"
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
  const rightButtonTooltip = 'Settings';
  const onRightButtonClick = action('Click');

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>Default</H1>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="Last Name"
            rightButtonIcon={rightButtonIcon}
            rightButtonTooltip={rightButtonTooltip}
            onRightButtonClick={onRightButtonClick}
          />
        </div>

        <H2>Active</H2>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="Last Name"
            rightButtonIcon={rightButtonIcon}
            rightButtonTooltip={rightButtonTooltip}
            onRightButtonClick={onRightButtonClick}
            active
          />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="Last Name"
            rightButtonIcon={rightButtonIcon}
            rightButtonTooltip={rightButtonTooltip}
            onRightButtonClick={onRightButtonClick}
            disabled
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input
            value="Archibald Joseph Cronin"
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
            placeholder="Last Name"
            rightButtonIcon={rightButtonIcon}
            rightButtonTooltip={rightButtonTooltip}
            onRightButtonClick={onRightButtonClick}
            invalid
          />
        </div>

        <H2>Active</H2>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="Last Name"
            rightButtonIcon={rightButtonIcon}
            rightButtonTooltip={rightButtonTooltip}
            onRightButtonClick={onRightButtonClick}
            active
            invalid
          />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder="Last Name"
            rightButtonIcon={rightButtonIcon}
            rightButtonTooltip={rightButtonTooltip}
            onRightButtonClick={onRightButtonClick}
            disabled
            invalid
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input
            value="Archibald Joseph Cronin"
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
            <option value={0}>-- Select a color --</option>
            <option value={1}>Red</option>
            <option value={2}>Green</option>
            <option value={3}>Blue</option>
          </Input>
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input as="select" disabled>
            <option value={0}>-- Select a color --</option>
            <option value={1}>Red</option>
            <option value={2}>Green</option>
            <option value={3}>Blue</option>
          </Input>
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input as="select" value={2} disabled>
            <option value={0}>-- Select a color --</option>
            <option value={1}>Red</option>
            <option value={2}>Green</option>
            <option value={3}>Blue</option>
          </Input>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Invalid</H1>

        <div style={{ marginBottom: 10 }}>
          <Input as="select" invalid>
            <option value={0}>-- Select a color --</option>
            <option value={1}>Red</option>
            <option value={2}>Green</option>
            <option value={3}>Blue</option>
          </Input>
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Input as="select" invalid disabled>
            <option value={0}>-- Select a color --</option>
            <option value={1}>Red</option>
            <option value={2}>Green</option>
            <option value={3}>Blue</option>
          </Input>
        </div>

        <div style={{ marginBottom: 10 }}>
          <Input as="select" value={2} invalid disabled>
            <option value={0}>-- Select a color --</option>
            <option value={1}>Red</option>
            <option value={2}>Green</option>
            <option value={3}>Blue</option>
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
