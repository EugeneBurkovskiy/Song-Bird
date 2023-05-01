import { BirdsContext, IBird } from '../../../context/BirdsContext';
import React, { useContext, useEffect, useMemo, useState } from 'react';
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

interface IProps {
  data: IBird[];
}

const GameContent: React.FC<IProps> = ({ data }) => {
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

  const gameModsArr = useMemo(() => [...new Set(data.map((item) => item.category))], [data]);

  const options = useMemo(
    () => data.filter((item) => item.category === currentGameMode),
    [currentGameMode, data, newGame]
  );

  const availableOptions = useMemo(() => options.slice(), [options, newGame]);

  useEffect(() => {
    setOptionsObj(getInitialOptions(options, availableOptions));
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

  function getInitialOptions(options: IBird[], availableOptions: IBird[]) {
    const questionId = Math.floor(Math.random() * availableOptions.length);
    const question = availableOptions[questionId];
    availableOptions.splice(questionId, 1);
    return { question: question, options: options, falseAnswers: [], answer: null };
  }

  function handleNextLvl(options: IBird[]) {
    setOptionsObj(getInitialOptions(options, availableOptions));
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
        gameModsArr={gameModsArr}
      />
      <GameProgress stats={stats} />
      <GameQuestion options={optionsObj} />
      <section className={classes.answer}>
        <GameVariants options={optionsObj} setOptionsObj={setOptionsObj} />
        <GameVariantsPreview options={optionsObj} />
      </section>
      {stats.currentLvl < 5 ? (
        <CustomButton
          title="Next"
          disable={!optionsObj.answer}
          onClick={() => handleNextLvl(options)}
        />
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
};

export default GameContent;
