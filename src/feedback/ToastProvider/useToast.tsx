import { useContext } from 'react';

import ToastContext from './ToastContext';

function useToast() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return useContext(ToastContext)!;
}

export default useToast;
