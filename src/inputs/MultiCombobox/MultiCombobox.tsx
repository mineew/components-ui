import { useMachine, normalizeProps } from '@zag-js/react';
import * as tagsInput from '@zag-js/tags-input';
import { useId } from 'react';

import * as Tag from '../../data-display/Tag';
import Input from '../Input/Input';

function MultiCombobox() {
  const [state, send] = useMachine(
    tagsInput.machine({
      id: useId(),
      allowEditTag: false,
    }),
  );

  const api = tagsInput.connect(state, send, normalizeProps);

  return (
    <Tag.Group {...api.rootProps}>
      {api.value.map((value, index) => {
        const tagProps = api.getTagProps({ index, value });
        const closeProps = api.getTagDeleteTriggerProps({ index, value });
        const active =
          'data-selected' in tagProps &&
          typeof tagProps['data-selected'] !== 'undefined';

        return (
          <Tag.Tag key={index} active={active} {...tagProps}>
            <span>{value}</span>
            <Tag.CloseButton {...closeProps} />
          </Tag.Tag>
        );
      })}

      <Input placeholder="Add tag..." {...api.inputProps} />
    </Tag.Group>
  );
}

export default MultiCombobox;
