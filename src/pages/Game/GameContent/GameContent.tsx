import { IBird } from '../../../context/BirdsContext';
import React, { useState } from 'react';
import classes from './GameContent.module.scss';
import GameMode from './GameMode/GameMode';
import GameQuestion from './GameQuestion/GameQuestion';
import GameVariants from './GameVariants/GameVariants';
import GameVariantsPreview from './GameVariantsPreview/GameVariantsPreview';
import CustomButton from '../../../components/Buttons/CustomButton/CustomButton';

export default function GameContent({ data }: { data: IBird[] }) {
  const [currentGameMode, setCurrentGameMode] = useState<string>(getGameModsArr(data)[0]);
  const [options, setOptions] = useState<IBird[]>(getOptions(data, currentGameMode));
  const [question, setQuestion] = useState<IBird>(getRandomQuestion(options));

  function getGameModsArr(data: IBird[]) {
    const gameModsArr = [...new Set(data.map((item) => item.category))];
    return gameModsArr;
  }

  function getOptions(data: IBird[], currentGameMode: string) {
    const options = data.filter((item) => item.category === currentGameMode);
    return options;
  }

  function getRandomQuestion(options: IBird[]) {
    const questionId = Math.ceil(Math.random() * 5);
    const question = options[questionId];
    return question;
  }

  return (
    <>
      <GameMode
        currentGameMode={currentGameMode}
        setCurrentGameMode={setCurrentGameMode}
        gameModsArr={getGameModsArr(data)}
      />
      <GameQuestion question={question} />
      <section className={classes.answer}>
        <GameVariants options={options} />
        <GameVariantsPreview preview={question} />
      </section>
      <CustomButton title="Next" />
    </>
  );
}
