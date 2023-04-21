import React, { ReactNode } from 'react';
import classes from './OptionButton.module.scss';

interface IProps {
  title?: string;
  status?: boolean | 'pending';
  children?: ReactNode;
  onClick?: () => void;
}

const OptionsButton: React.FC<IProps> = ({
  title,
  status = 'pending',
  children,
  onClick,
  ...args
}) => {
  return (
    <button
      className={`${classes.button} ${
        (status === true && classes.button_true) || (status === false && classes.button_false)
      }`}
      {...args}
      onClick={onClick}
    >
      {title || children}
    </button>
  );
};

export default OptionsButton;
