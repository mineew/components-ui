import { useMachine, normalizeProps, Portal } from '@zag-js/react';
import { type Placement } from '@zag-js/toast';
import * as toast from '@zag-js/toast';
import { useId, type ReactNode } from 'react';

import ToastContext from './ToastContext';
import ToastGroup from './ToastGroup';

const placements: Placement[] = [
  'bottom',
  'bottom-end',
  'bottom-start',
  'top',
  'top-end',
  'top-start',
];

interface ToastProviderProps {
  children: ReactNode;
}

function ToastProvider(props: ToastProviderProps) {
  const { children } = props;

  const [state, send] = useMachine(
    toast.group.machine({
      id: useId(),
      gutter: '15px',
      offsets: '10px',
      pauseOnPageIdle: true,
      pauseOnInteraction: true,
    }),
  );

  const api = toast.group.connect(state, send, normalizeProps);

  return (
    <ToastContext.Provider value={api}>
      <Portal>
        {placements.map((placement) => (
          <ToastGroup
            key={placement}
            toasts={api.toastsByPlacement[placement]}
            placement={placement}
            {...api.getGroupProps({ placement })}
          />
        ))}
      </Portal>

      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
