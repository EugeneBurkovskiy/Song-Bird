import React, { ReactNode } from 'react';
import classes from './Card.module.scss';
interface IProps {
  children: ReactNode;
}

const Card: React.FC<IProps> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
