import { type Meta, type StoryFn } from '@storybook/react';

import Card from './Card';

const title = 'Card Title';
const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse augue turpis, auctor ac nulla vitae.';
const content = (
  <p
    style={{
      height: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textTransform: 'uppercase',
      backgroundColor: 'aliceblue',
      color: 'midnightblue',
    }}
  >
    Card Content
  </p>
);
const footer =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse augue turpis, auctor ac nulla vitae.';

export const Default: StoryFn<typeof Card> = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ width: 400 }}>
        <Card>{content}</Card>
      </div>
    </div>
  );
};

export const WithTitle: StoryFn<typeof Card> = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ width: 400 }}>
        <Card title={title}>{content}</Card>
      </div>
    </div>
  );
};

export const WithDescription: StoryFn<typeof Card> = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ width: 400 }}>
        <Card description={description}>{content}</Card>
      </div>
    </div>
  );
};

export const WithTitleAndDescription: StoryFn<typeof Card> = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ width: 400 }}>
        <Card title={title} description={description}>
          {content}
        </Card>
      </div>
    </div>
  );
};

export const WithFooter: StoryFn<typeof Card> = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ width: 400 }}>
        <Card title={title} description={description} footer={footer}>
          {content}
        </Card>
      </div>
    </div>
  );
};

export default {
  title: 'Data Display/Card',
  component: Card,
} as Meta<typeof Card>;
