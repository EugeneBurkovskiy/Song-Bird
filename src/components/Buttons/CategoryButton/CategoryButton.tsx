import React from 'react';
import classes from './CategoryButton.module.scss';

export default function CategoryButton({
  title,
  active = false,
  onClick,
  ...args
}: {
  title: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      className={`${classes.category} ${active && classes.category_active}`}
      onClick={onClick}
      {...args}
    >
      {title}
    </button>
  );
}
