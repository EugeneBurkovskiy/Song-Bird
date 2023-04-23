import React from 'react';
import classes from './SearchInput.module.scss';

export default function SearchInput({
  onChange,
}: {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type="search"
      placeholder="Place bird name here"
      className={classes.search}
      onChange={onChange}
    />
  );
}
