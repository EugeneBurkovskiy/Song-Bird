import React, { ReactNode } from 'react';
import classes from './Container.module.scss';

interface IProps {
  children: ReactNode;
}

const Container: React.FC<IProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
