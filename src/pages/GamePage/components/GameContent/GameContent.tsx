import React, { useContext, useEffect, useMemo, useState } from 'react';

import { BirdsContext, IBird } from '../../../../context/BirdsContext';
import GameMode from '../GameMode/GameMode';
import GameQuestion from '../GameQuestion/GameQuestion';
import GameVariantsSection from '../GameVariantsSection/GameVariantsSection';
import CustomButton from '../../../../components/Buttons/CustomButton/CustomButton';
import GameProgress from '../GameProgress/GameProgress';
import GameFinishWindow from '../GameFinishWindow/GameFinishWindow';
import getRandomQuestion from '../../../../utils/getRandomQuestion';

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
  const [currentLvl, setCurrentLvl] = useState<number>(1);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [correctAnswer, setCorrectAnswer] = useState<IBird>();
  const [question, setQuestion] = useState<IBird>(data[0]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const options = useMemo(
    () => data.filter((item) => item.category === currentGameMode),
    [currentGameMode, data]
  );

  useEffect(() => {
    setQuestion(getRandomQuestion(options));
    return () => {
      setCorrectAnswer(undefined);
      setQuestion(getRandomQuestion(options));
    };
  }, [currentLvl, options]);

  useEffect(() => {
    setQuestion(getRandomQuestion(options));
    return () => {
      setCurrentLvl(1);
      setCurrentScore(0);
    };
  }, [currentGameMode, options]);

  const handleNextLvl = () => {
    setCurrentLvl((prev) => (prev += 1));
  };

  const handleFinish = () => {
    setScore((prev) => [
      ...prev,
      { points: currentScore, mode: currentGameMode, date: new Date() },
    ]);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      setCurrentLvl(1);
      setCurrentScore(0);
    }, 2000);
  };

  return (
    <>
      <GameMode
        currentGameMode={currentGameMode}
        setCurrentGameMode={setCurrentGameMode}
        data={data}
      />
      <GameProgress currentScore={currentScore} currentLvL={currentLvl} />
      <GameQuestion question={question} correctAnswer={correctAnswer} />
      <GameVariantsSection
        options={options}
        question={question}
        correctAnswer={correctAnswer}
        setCorrectAnswer={setCorrectAnswer}
        currentLvL={currentLvl}
        setCurrentScore={setCurrentScore}
      />
      {currentLvl < 5 ? (
        <CustomButton title="Next" disable={!!!correctAnswer} onClick={() => handleNextLvl()} />
      ) : (
        <CustomButton title="Finish" disable={!!!correctAnswer} onClick={() => handleFinish()} />
      )}

      {showModal && <GameFinishWindow gameMode={currentGameMode} points={currentScore} />}
    </>
  );
};

export default GameContent;
