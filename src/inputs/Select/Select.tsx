import {
  type ButtonHTMLAttributes,
  type Ref,
  Fragment,
  useId,
  forwardRef,
} from 'react';
import { useMachine, normalizeProps, Portal } from '@zag-js/react';
import * as select from '@zag-js/select';

import * as DropdownMenu from '../../feedback/DropdownMenu';
import Input from '../Input';

import SelectPlaceholder from './SelectPlaceholder';
import SelectChevron from './SelectChevron';
import buildSelectGroups from './buildSelectGroups';

type SelectButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'ref' | 'value' | 'onChange'
>;

interface SelectProps<T> extends SelectButtonProps {
  value?: string;
  onChange?: (value?: string, option?: T) => void;
  options: T[];
  getOptionValue: (option: T) => string;
  getOptionLabel: (option: T) => string;
  renderOption?: (option: T, disabled?: boolean) => JSX.Element;
  isOptionDisabled?: (option: T) => boolean;
  getOptionGroup?: (option: T) => string | undefined;
  groupSort?: string[];
  invalid?: boolean;
}

function Select<T>(props: SelectProps<T>, ref: Ref<HTMLButtonElement>) {
  const {
    value,
    onChange,
    options,
    getOptionValue,
    getOptionLabel,
    renderOption = getOptionLabel,
    isOptionDisabled,
    getOptionGroup,
    groupSort,
    invalid,
    disabled,
    placeholder,
    ...buttonProps
  } = props;

  const selectedOption = options.find(
    (option) => getOptionValue(option) === value,
  );

  const [state, send] = useMachine(
    select.machine({
      id: useId(),
      selectedOption: selectedOption
        ? {
            value: getOptionValue(selectedOption),
            label: getOptionLabel(selectedOption),
          }
        : undefined,
      onChange(selected) {
        onChange?.(
          selected?.value,
          options.find((option) => getOptionValue(option) === selected?.value),
        );
      },
      disabled,
      invalid,
      loop: true,
      positioning: { sameWidth: true },
    }),
  );

  const api = select.connect(state, send, normalizeProps);
  const groups = buildSelectGroups(options, getOptionGroup, groupSort);

  const menu = (
    <DropdownMenu.Menu {...api.contentProps}>
      {groups.map((group, groupIndex) => {
        const groupId = group
          ? `${group}-${groupIndex}`
          : `no-group-${groupIndex}`;

        const groupOptions = options.filter(
          (option) => (getOptionGroup?.(option) || '') === group,
        );

        const list = groupOptions.map((option) => {
          const value = getOptionValue(option);
          const label = getOptionLabel(option);
          const selected = api.selectedOption?.value === value;
          const active = api.highlightedOption?.value === value;
          const disabled = isOptionDisabled?.(option);

          return (
            <DropdownMenu.Item
              key={value}
              {...api.getOptionProps({ value, label, disabled })}
              selected={selected}
              active={active}
              disabled={disabled}
            >
              {renderOption(option, disabled)}
            </DropdownMenu.Item>
          );
        });

        return group ? (
          <Fragment key={groupId}>
            <DropdownMenu.Group
              {...api.getOptionGroupLabelProps({ htmlFor: groupId })}
            >
              {group}
            </DropdownMenu.Group>
            <DropdownMenu.List {...api.getOptionGroupProps({ id: groupId })}>
              {list}
            </DropdownMenu.List>
          </Fragment>
        ) : (
          <DropdownMenu.List key={groupId}>{list}</DropdownMenu.List>
        );
      })}
    </DropdownMenu.Menu>
  );

  const apiSelectedOption = options.find(
    (option) => getOptionValue(option) === api.selectedOption?.value,
  );

  const selectContent = apiSelectedOption ? (
    renderOption(
      apiSelectedOption,
      isOptionDisabled?.(apiSelectedOption) || disabled,
    )
  ) : (
    <SelectPlaceholder placeholder={placeholder} />
  );

  return (
    <>
      <Input
        as="button"
        className="text-left"
        rightIcon={<SelectChevron rotated={api.isOpen} />}
        active={api.isOpen}
        disabled={disabled}
        invalid={invalid}
        ref={ref}
        {...buttonProps}
        {...api.triggerProps}
      >
        {selectContent}
      </Input>

      <Portal>
        <div {...api.positionerProps}>{menu}</div>
      </Portal>
    </>
  );
}

export default forwardRef(Select) as <T>(
  props: SelectProps<T> & { ref?: Ref<HTMLButtonElement> },
) => JSX.Element;
