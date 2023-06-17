import {
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { type Meta, type StoryFn } from '@storybook/react';

import Button from './Button';

const H1 = ({ children }: { children: string }) => {
  return <h1 style={{ fontSize: 20, marginBottom: 10 }}>{children}</h1>;
};

export const Default: StoryFn<typeof Button> = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>Default</H1>

        <div style={{ display: 'flex', gap: 10 }}>
          <Button>Sign In</Button>
          <Button disabled>Sign In</Button>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Primary</H1>

        <div style={{ display: 'flex', gap: 10 }}>
          <Button theme="primary">Register</Button>
          <Button theme="primary" disabled>
            Register
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Danger</H1>

        <div style={{ display: 'flex', gap: 10 }}>
          <Button theme="danger">Delete</Button>
          <Button theme="danger" disabled>
            Delete
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Loading</H1>

        <div style={{ display: 'flex', gap: 10 }}>
          <Button loading>Loading</Button>
          <Button theme="primary" loading>
            Loading
          </Button>
          <Button theme="danger" loading>
            Loading
          </Button>
          <Button theme="primary" loading disabled>
            Loading
          </Button>
        </div>
      </div>
    </div>
  );
};

export const WithIcon: StoryFn<typeof Button> = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>Default</H1>

        <div style={{ display: 'flex', gap: 10 }}>
          <Button icon={<ArrowRightOnRectangleIcon />}>Sign In</Button>
          <Button icon={<ArrowRightOnRectangleIcon />} disabled>
            Sign In
          </Button>
          <Button icon={<ArrowRightOnRectangleIcon />} disabled loading>
            Sign In
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Primary</H1>

        <div style={{ display: 'flex', gap: 10 }}>
          <Button icon={<UserPlusIcon />} theme="primary">
            Register
          </Button>
          <Button icon={<UserPlusIcon />} theme="primary" disabled>
            Register
          </Button>
          <Button icon={<UserPlusIcon />} theme="primary" disabled loading>
            Register
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Danger</H1>

        <div style={{ display: 'flex', gap: 10 }}>
          <Button icon={<TrashIcon />} theme="danger">
            Delete
          </Button>
          <Button icon={<TrashIcon />} theme="danger" disabled>
            Delete
          </Button>
          <Button icon={<TrashIcon />} theme="danger" disabled loading>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Inputs/Button',
  component: Button,
} as Meta<typeof Button>;
