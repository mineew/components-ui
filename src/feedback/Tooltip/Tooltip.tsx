import { useId } from 'react';
import { useMachine, normalizeProps, Portal } from '@zag-js/react';
import * as tooltip from '@zag-js/tooltip';
import classNames from 'classnames';

interface TooltipProps {
  className?: string;
  title: string;
  children: JSX.Element;
}

function Tooltip(props: TooltipProps) {
  const { className, title, children } = props;

  const [state, send] = useMachine(tooltip.machine({ id: useId() }));
  const api = tooltip.connect(state, send, normalizeProps);

  const classes = [];

  classes.push('px-2', 'py-1', 'rounded');
  classes.push('bg-slate-800', 'opacity-80');
  classes.push('text-xs', 'text-white', 'font-semibold');
  classes.push('text-center', 'whitespace-pre-line');
  classes.push('shadow-sm', 'shadow-slate-200');

  if (!title) return children;

  return (
    <>
      <span
        className={classNames('inline-block', className)}
        {...api.triggerProps}
      >
        {children}
      </span>

      {api.isOpen && (
        <Portal>
          <div {...api.positionerProps}>
            <div className={classNames(classes)} {...api.contentProps}>
              {title}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}

export default Tooltip;
