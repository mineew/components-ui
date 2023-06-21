import { useActor, useMachine, normalizeProps } from '@zag-js/react';
import { type Service, type Placement } from '@zag-js/toast';
import * as toast from '@zag-js/toast';
import { createContext, useContext, useId, type ReactNode } from 'react';

import Toast from '../Toast/Toast';
import ToastTitle from '../Toast/ToastTitle';

// -----------------------------------------------------------------------------

interface ToastItemProps {
  actor: Service;
}

function ToastItem(props: ToastItemProps) {
  const { actor } = props;

  const [state, send] = useActor(actor);
  const api = toast.connect(state, send, normalizeProps);

  return (
    <Toast
      {...api.rootProps}
      toastType={api.type}
      onClose={() => api.dismiss()}
    >
      {api.title && <ToastTitle {...api.titleProps}>{api.title}</ToastTitle>}
      {api.description && <p {...api.descriptionProps}>{api.description}</p>}
    </Toast>
  );
}

// -----------------------------------------------------------------------------

type ToastGroupMachine = ReturnType<typeof toast.group.connect>;
const ToastContext = createContext<ToastGroupMachine | null>(null);
const useToast = () => useContext(ToastContext);

// -----------------------------------------------------------------------------

interface ToastProviderProps {
  children: ReactNode;
}

function ToastProvider(props: ToastProviderProps) {
  const { children } = props;

  const [state, send] = useMachine(
    toast.group.machine({
      id: useId(),
    }),
  );

  const api = toast.group.connect(state, send, normalizeProps);

  return (
    <ToastContext.Provider value={api}>
      {Object.entries(api.toastsByPlacement).map(([placementName, toasts]) => {
        const placement = placementName as Placement;

        return (
          <div key={placement} {...api.getGroupProps({ placement })}>
            {toasts.map((toast) => (
              <ToastItem key={toast.id} actor={toast} />
            ))}
          </div>
        );
      })}

      {children}
    </ToastContext.Provider>
  );
}

// -----------------------------------------------------------------------------

export default ToastProvider;
export { useToast };
