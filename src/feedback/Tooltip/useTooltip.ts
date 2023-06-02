import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useInteractions,
  useHover,
  useFocus,
  useDismiss,
  useRole,
} from '@floating-ui/react';
import { useState } from 'react';

function useTooltip() {
  const [isOpen, setIsOpen] = useState(false);
  const padding = 6;

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(padding), flip({ padding }), shift({ padding })],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return { isOpen, refs, floatingStyles, getReferenceProps, getFloatingProps };
}

export default useTooltip;
