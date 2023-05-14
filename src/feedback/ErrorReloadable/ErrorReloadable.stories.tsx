import { type Meta, type StoryFn } from '@storybook/react';

import ErrorReloadable from './ErrorReloadable';

export const Default: StoryFn<typeof ErrorReloadable> = () => {
  return (
    <div style={{ padding: 20, maxWidth: 700 }}>
      <ErrorReloadable
        title="Произошла ошибка"
        message={
          <>
            <p className="mb-2">
              Детальное описание ошибки передано в техподдержку. В скором
              времени мы устраним причины ее возникновения.
            </p>

            <p>Попробуйте перезагрузить страницу.</p>
          </>
        }
        onReset={() => undefined}
      />
    </div>
  );
};

export default {
  title: 'Feedback/ErrorReloadable',
  component: ErrorReloadable,
} as Meta<typeof ErrorReloadable>;
