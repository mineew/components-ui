import { type Meta, type StoryFn } from '@storybook/react';

import Tag from './Tag';
import TagCloseButton from './TagCloseButton';
import TagGroup from './TagGroup';

export const Default: StoryFn<typeof Tag> = ({ active }) => {
  return (
    <div style={{ padding: 20 }}>
      <Tag active={active}>
        Tag Content
        <TagCloseButton />
      </Tag>
    </div>
  );
};

export const Group: StoryFn = () => {
  const tags = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'];

  return (
    <div style={{ padding: 20, width: 400 }}>
      <TagGroup>
        {tags.map((tag) => (
          <Tag key={tag} active={tag === 'JavaScript'}>
            {tag}
            <TagCloseButton />
          </Tag>
        ))}
      </TagGroup>
    </div>
  );
};

export default {
  title: 'Data Display/Tag',
  component: Tag,
  args: {
    active: false,
  },
} as Meta<typeof Tag>;
