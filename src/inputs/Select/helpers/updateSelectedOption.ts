import { type SelectProps, type SelectMachine } from '../SelectProps';

import getSelectedOption from './getSelectedOption';

function updateSelectedOption<T>(
  props: SelectProps<T>,
  api: SelectMachine,
  value?: string,
) {
  const selectedOption = getSelectedOption(props, value);

  if (selectedOption) {
    api.setSelectedOption(selectedOption);
  } else {
    api.clearSelectedOption();
  }
}

export default updateSelectedOption;
