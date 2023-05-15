import React from 'react';

import classes from './CustomRangeInput.module.scss';

interface IProps {
  min: string;
  max: string;
  step?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomRangeInput: React.FC<IProps> = ({ min, max, step, value, onChange }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      className={classes.input}
    />
  );
};

export default CustomRangeInput;
