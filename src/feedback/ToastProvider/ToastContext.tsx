import type * as toast from '@zag-js/toast';
import { createContext } from 'react';

type ToastGroupMachine = ReturnType<typeof toast.group.connect>;

const ToastContext = createContext<ToastGroupMachine | null>(null);

export default ToastContext;
