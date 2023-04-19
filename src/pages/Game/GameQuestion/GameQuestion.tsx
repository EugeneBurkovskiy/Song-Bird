import { IBird } from '../../../context/BirdsContext';
import React from 'react';
import BirdCard from '../../../components/BirdCard/BirdCard';
import classes from './GameQuestion.module.scss';

export default function GameQuestion({ data }: { data: IBird[] }) {
  function getRandomQuestion() {
    const randomNum = Math.ceil(Math.random() * 6);
    return data[randomNum];
  }

  return (
    <section className={classes.question}>
      <BirdCard bird={getRandomQuestion()} />
    </section>
  );
}
