import React, { Dispatch, SetStateAction } from 'react';
import classes from './CategoryButton.module.scss';

export default function CategoryButton({
  title,
  active = false,
  changeMode,
  ...args
}: {
  title: string;
  changeMode?: Dispatch<SetStateAction<string>>;
  active?: boolean;
}) {
  return (
    <button
      className={`${classes.category} ${active && classes.category_active}`}
      onClick={() => (changeMode ? changeMode(title) : null)}
      {...args}
    >
      {title}
    </button>
  );
}
