import { useMachine, normalizeProps, Portal } from '@zag-js/react';
import { type Placement } from '@zag-js/toast';
import * as toast from '@zag-js/toast';
import { useId, type ReactNode } from 'react';

import ToastContext from './ToastContext';
import ToastItem from './ToastItem';

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
        {Object.entries(api.toastsByPlacement).map(
          ([placementName, toasts]) => {
            const placement = placementName as Placement;

            return (
              <div key={placement} {...api.getGroupProps({ placement })}>
                {toasts.map((toast) => (
                  <ToastItem key={toast.id} actor={toast} />
                ))}
              </div>
            );
          },
        )}
      </Portal>

      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
