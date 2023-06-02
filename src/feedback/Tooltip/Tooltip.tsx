import { type HTMLProps, cloneElement } from 'react';
import { FloatingPortal } from '@floating-ui/react';
import classNames from 'classnames';

import useTooltip from './useTooltip';

interface TooltipProps {
  title: string;
  children: JSX.Element;
}

function Tooltip(props: TooltipProps) {
  const { title, children } = props;
  const tooltip = useTooltip();

  const classes = [];

  classes.push('px-2', 'py-1', 'rounded');
  classes.push('bg-slate-800', 'opacity-80');
  classes.push('text-xs', 'text-white', 'font-semibold');
  classes.push('text-center', 'whitespace-pre-line');
  classes.push('shadow-sm', 'shadow-slate-200');

  if (!title) return children;

  return (
    <>
      {cloneElement(
        children,
        tooltip.getReferenceProps({
          ref: tooltip.refs.setReference,
          ...(children.props as HTMLProps<Element>),
        }),
      )}

      {tooltip.isOpen && (
        <FloatingPortal>
          <div
            ref={tooltip.refs.setFloating}
            className={classNames(classes)}
            style={tooltip.floatingStyles}
            {...tooltip.getFloatingProps()}
          >
            {title}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}

export default Tooltip;
