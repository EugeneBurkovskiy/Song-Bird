import React, { ReactNode } from 'react';
import classes from './OptionButton.module.scss';

interface IProps {
  title?: string;
  disable?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const OptionsButton: React.FC<IProps> = ({
  title,
  disable = false,
  children,
  onClick,
  ...args
}) => {
  return (
    <button
      className={`${classes.button} ${disable && classes.button_disable}`}
      {...args}
      onClick={onClick}
    >
      {title || children}
    </button>
  );
};

export default OptionsButton;
