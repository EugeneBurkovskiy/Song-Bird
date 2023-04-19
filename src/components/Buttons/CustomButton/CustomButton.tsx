import React, { ReactNode } from 'react';
import classes from './CustomButton.module.scss';

export default function CustomButton({
  title,
  active = false,
  children,
  ...args
}: {
  title?: string;
  active?: boolean;
  children?: ReactNode;
}) {
  return (
    <button className={`${classes.button} ${active && classes.category_active}`} {...args}>
      {title || children}
    </button>
  );
}
