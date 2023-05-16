import classNames from 'classnames';

interface ButtonIconProps {
  children: JSX.Element;
}

function ButtonIcon(props: ButtonIconProps) {
  const { children } = props;
  const classes = [];

  classes.push('h-5', 'w-5');
  classes.push('-ml-1', 'mr-2');

  return <span className={classNames(classes)}>{children}</span>;
}

export default ButtonIcon;
