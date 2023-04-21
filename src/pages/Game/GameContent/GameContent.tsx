import { BirdsContext, IBird } from '../../../context/BirdsContext';
import React, { useContext, useEffect, useState } from 'react';
import classes from './GameContent.module.scss';
import GameMode from './GameMode/GameMode';
import GameQuestion from './GameQuestion/GameQuestion';
import GameVariants from './GameVariants/GameVariants';
import GameVariantsPreview from './GameVariantsPreview/GameVariantsPreview';
import CustomButton from '../../../components/Buttons/CustomButton/CustomButton';
import GameProgress from './GameProgress/GameProgress';
import GameFinishWindow from './GameFinishWindow/GameFinishWindow';

export interface ILvlOptions {
  question: IBird;
  options: IBird[];
  falseAnswers: IBird[];
  answer: IBird | null;
}

export interface IStats {
  currentLvl: number;
  currentPoints: number;
}

export default function GameContent({ data }: { data: IBird[] }) {
  const { setScore } = useContext(BirdsContext);
  const [currentGameMode, setCurrentGameMode] = useState<string>(data[0].category);
  const [optionsObj, setOptionsObj] = useState<ILvlOptions>({
    question: data[0],
    options: data,
    falseAnswers: [],
    answer: null,
  });
  const [stats, setStats] = useState({ currentLvl: 1, currentPoints: 0 });
  const [showModal, setShowModal] = useState(false);
  const [newGame, setNewGame] = useState(false);

  useEffect(() => {
    setOptionsObj(getLvlOptions(data));
    setStats({ currentLvl: 1, currentPoints: 0 });
  }, [currentGameMode, newGame]);

  useEffect(() => {
    if (showModal) {
      setScore((prev) => [
        ...prev,
        { points: stats.currentPoints, mode: currentGameMode, date: new Date() },
      ]);
    }
  }, [showModal]);

  function getGameModsArr(data: IBird[]) {
    const gameModsArr = [...new Set(data.map((item) => item.category))];
    return gameModsArr;
  }

  function getLvlOptions(data: IBird[]) {
    const options = data.filter((item) => item.category === currentGameMode);
    const questionId = Math.ceil(Math.random() * 5);
    const question = options[questionId];
    return { question: question, options: options, falseAnswers: [], answer: null };
  }

  function handleNextLvl() {
    setOptionsObj(getLvlOptions(data));
    setStats({
      ...stats,
      currentLvl: (stats.currentLvl += 1),
      currentPoints: stats.currentPoints + (6 - optionsObj.falseAnswers.length),
    });
  }

  function handeFinishGame() {
    setStats({
      ...stats,
      currentPoints: stats.currentPoints + (6 - optionsObj.falseAnswers.length),
    });
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      setNewGame((prev) => !prev);
    }, 3000);
  }

  return (
    <>
      <GameMode
        currentGameMode={currentGameMode}
        setCurrentGameMode={setCurrentGameMode}
        gameModsArr={getGameModsArr(data)}
      />
      <GameProgress stats={stats} />
      <GameQuestion options={optionsObj} />
      <section className={classes.answer}>
        <GameVariants options={optionsObj} setOptionsObj={setOptionsObj} />
        <GameVariantsPreview options={optionsObj} />
      </section>
      {stats.currentLvl < 5 ? (
        <CustomButton title="Next" disable={!optionsObj.answer} onClick={() => handleNextLvl()} />
      ) : (
        <CustomButton
          title="Finish"
          disable={!optionsObj.answer}
          onClick={() => handeFinishGame()}
        />
      )}
      {showModal && <GameFinishWindow gameMode={currentGameMode} points={stats.currentPoints} />}
    </>
  );
}
