import { IBird } from '../../../../context/BirdsContext';
import React from 'react';
import BirdCard from '../../../../components/BirdCard/BirdCard';
import classes from './GameQuestion.module.scss';

interface IProps {
  question: IBird;
}

const GameQuestion: React.FC<IProps> = ({ question }) => {
  return <section className={classes.question}>{<BirdCard bird={question} />}</section>;
};

export default GameQuestion;
