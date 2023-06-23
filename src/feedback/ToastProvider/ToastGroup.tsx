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

  const transitions = useTransition(toasts, {
    from: {
      opacity: 0,
      scale: 0.9,
      x: placement.includes('end') ? 100 : -100,
    },
    enter: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    leave: {
      opacity: 0,
      scale: 0.9,
      x: placement.includes('end') ? 100 : -100,
    },
  });

  return (
    <div {...otherProps}>
      {transitions((style, item) => (
        <animated.div key={item.id} style={style}>
          <ToastItem actor={item} />
        </animated.div>
      ))}
    </div>
  );
}

export default ToastGroup;
