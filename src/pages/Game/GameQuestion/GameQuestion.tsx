import { IBird } from '../../../context/BirdsContext';
import React, { useEffect, useState } from 'react';
import BirdCard from '../../../components/BirdCard/BirdCard';
import classes from './GameQuestion.module.scss';

export default function GameQuestion({ data, gameMode }: { data: IBird[]; gameMode: string }) {
  const [question, setGameQuestion] = useState<IBird | null>(null);

  useEffect(() => {
    const randomQuestion = getRandomQuestion(data.filter((item) => item.category === gameMode));
    setGameQuestion(randomQuestion);
  }, [gameMode, data]);

  function getRandomQuestion(variantsArr: IBird[]) {
    const randomIndex = Math.ceil(Math.random() * (variantsArr.length - 1));
    const questionBird = variantsArr[randomIndex];
    return questionBird;
  }

  return question ? (
    <section className={classes.question}>{<BirdCard bird={question} />}</section>
  ) : null;
}
