import { type ReactNode, createContext } from 'react';
import classNames from 'classnames';

import RadioGroupLegend from './RadioGroupLegend';

interface RadioGroupContextValue {
  name?: string;
  disabled?: boolean;
  invalid?: boolean;
}

interface RadioGroupProps extends RadioGroupContextValue {
  children: ReactNode;
  legend?: ReactNode;
  orientation?: 'horizontal' | 'vertical';
}

const RadioGroupContext = createContext<RadioGroupContextValue>({
  name: undefined,
  disabled: undefined,
  invalid: undefined,
});

function RadioGroup(props: RadioGroupProps) {
  const {
    children,
    legend,
    orientation = 'horizontal',
    name,
    disabled,
    invalid,
  } = props;

  const classes = [];

  classes.push('flex', 'gap-2');
  classes.push(orientation === 'horizontal' ? 'flex-col' : '');

  return (
    <fieldset>
      <RadioGroupLegend>{legend}</RadioGroupLegend>

      <div className={classNames(classes)}>
        <RadioGroupContext.Provider value={{ name, disabled, invalid }}>
          {children}
        </RadioGroupContext.Provider>
      </div>
    </fieldset>
  );
}

export default RadioGroup;
export { RadioGroupContext };
