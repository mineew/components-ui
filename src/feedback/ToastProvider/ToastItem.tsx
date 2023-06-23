import { useActor, normalizeProps } from '@zag-js/react';
import { type Service } from '@zag-js/toast';
import * as toast from '@zag-js/toast';

import Toast from '../Toast/Toast';
import ToastTitle from '../Toast/ToastTitle';

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

export default ToastItem;
