import { animated, useTransition } from '@react-spring/web';
import { type Service, type Placement } from '@zag-js/toast';
import { type HTMLAttributes } from 'react';

import ToastItem from './ToastItem';

interface ToastGroupProps extends HTMLAttributes<HTMLDivElement> {
  toasts?: Service[];
  placement: Placement;
}

function ToastGroup(props: ToastGroupProps) {
  const { toasts = [], placement, ...otherProps } = props;

  const isEnd = placement.includes('end');
  const isStart = placement.includes('start');
  const isTop = placement === 'top';
  const isBottom = placement === 'bottom';

  const transitions = useTransition(toasts, {
    from: {
      opacity: 0,
      scale: 0.9,
      x: isEnd ? 100 : isStart ? -100 : 0,
      y: isTop ? -100 : isBottom ? 100 : 0,
    },
    enter: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    },
    leave: {
      opacity: 0,
      scale: 0.9,
      x: isEnd ? 100 : isStart ? -100 : 0,
      y: isTop ? -100 : isBottom ? 100 : 0,
    },
  });

  return (
    <div {...otherProps}>
      {transitions((style, item) => (
        <animated.div style={style}>
          <ToastItem actor={item} />
        </animated.div>
      ))}
    </div>
  );
}

export default ToastGroup;
