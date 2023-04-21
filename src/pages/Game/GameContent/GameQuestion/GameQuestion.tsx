import React from 'react';
import BirdCard from '../../../../components/BirdCard/BirdCard';
import classes from './GameQuestion.module.scss';
import { ILvlOptions } from '../GameContent';

interface IProps {
  options: ILvlOptions;
}

const GameQuestion: React.FC<IProps> = ({ options }) => {
  return (
    <section className={classes.question}>
      {<BirdCard bird={options.question} hide={!options.answer} />}
    </section>
  );
};

export default GameQuestion;
