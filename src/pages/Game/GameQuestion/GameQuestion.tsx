import { BirdsContext } from '../../../context/BirdsContext';
import React, { useContext } from 'react';
import { IOptionsContext, GameOptionsContext } from '../GameOptionsContext/GameOptionsContext';
import classes from './GameQuestion.module.scss';
import BirdCard from '../../../components/BirdCard/BirdCard';

export default function GameQuestion() {
  const options = useContext<IOptionsContext>(GameOptionsContext);
  const data = useContext(BirdsContext);

  function getRandomQuestion() {
    const randomNum = Math.ceil(Math.random() * 6);
    return data[randomNum];
  }
  return (
    <section>
      <BirdCard bird={getRandomQuestion()} />
    </section>
  );
}
