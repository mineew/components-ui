import classNames from 'classnames';

function ErrorReloadableDivider() {
  const classes = [];

  classes.push('h-[1px]');
  classes.push('my-2');
  classes.push('bg-white/90');

  return <div className={classNames(classes)} />;
}

export default ErrorReloadableDivider;
