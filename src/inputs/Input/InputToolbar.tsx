import { type ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import Tooltip from '../../feedback/Tooltip/Tooltip';

interface InputToolbarItem extends ButtonHTMLAttributes<HTMLButtonElement> {
  key?: string;
  icon: JSX.Element;
  tooltip?: string;
}

interface InputToolbarProps {
  items: InputToolbarItem[];
  active?: boolean;
  disabled?: boolean;
  invalid?: boolean;
}

function InputToolbar(props: InputToolbarProps) {
  const { items, active, disabled, invalid } = props;
  const wrapperClasses: string[] = [];
  const itemClasses: string[] = [];

  wrapperClasses.push('flex');

  itemClasses.push('h-full', 'px-1');
  itemClasses.push('border-l-2');
  itemClasses.push('outline-none');
  itemClasses.push('transition');

  if (disabled) {
    itemClasses.push('text-slate-300');
    itemClasses.push('border-slate-100');
    itemClasses.push('cursor-not-allowed');
  } else if (invalid) {
    itemClasses.push('text-red-600');
    itemClasses.push('border-red-600');
    itemClasses.push('hover:bg-red-50');
    itemClasses.push('focus:bg-red-50');
    itemClasses.push('active:bg-red-100');
  } else {
    itemClasses.push('text-slate-400');
    itemClasses.push('border-slate-300');
    itemClasses.push('hover:bg-slate-50');
    itemClasses.push('focus:bg-slate-50');
    itemClasses.push('active:bg-slate-100');
    itemClasses.push('group-hover:text-slate-600');
    itemClasses.push('group-hover:border-slate-600');
    itemClasses.push('group-focus-within:!text-slate-800');
    itemClasses.push('group-focus-within:!border-slate-800');

    if (active) {
      itemClasses.push('text-slate-800');
      itemClasses.push('border-slate-800');
    }
  }

  if (!disabled) {
    itemClasses.push('disabled:cursor-not-allowed');
    itemClasses.push('disabled:bg-transparent');
    itemClasses.push(
      invalid ? 'disabled:!text-red-200' : 'disabled:!text-slate-200',
    );
    itemClasses.push(
      invalid ? '' : 'group-focus-within:disabled:!text-slate-300',
    );
  }

  const focusInput = (
    eventTarget:
      | (EventTarget & HTMLDivElement)
      | (EventTarget & HTMLButtonElement),
  ) => {
    const node =
      eventTarget instanceof HTMLButtonElement
        ? eventTarget.parentNode?.previousSibling
        : eventTarget.previousSibling;

    const focusable =
      node && 'focus' in node ? (node as { focus: () => void }) : null;

    focusable?.focus();
  };

  return (
    <div
      className={classNames(wrapperClasses)}
      role="presentation"
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      onMouseUp={(e) => {
        e.preventDefault();
        focusInput(e.currentTarget);
      }}
    >
      {items.map((item, index) => {
        const actualDisabled = disabled || item.disabled;

        const button = (
          <button
            key={item.key || `item-${index}`}
            {...item}
            className={classNames(itemClasses, item.className)}
            type="button"
            disabled={actualDisabled}
            onKeyUp={(e) => {
              if (e.key === ' ') {
                e.preventDefault();
                focusInput(e.currentTarget);
                e.currentTarget.click();
              }

              item.onKeyUp?.(e);
            }}
          >
            <div className="w-5">{item.icon}</div>
          </button>
        );

        return !!item.tooltip && !actualDisabled ? (
          <Tooltip key={item.key || `item-${index}`} title={item.tooltip}>
            {button}
          </Tooltip>
        ) : (
          button
        );
      })}
    </div>
  );
}

export default InputToolbar;
export type { InputToolbarItem };
