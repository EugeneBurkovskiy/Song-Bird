import React, { useEffect, useState } from 'react';

import Card from '../../../../components/Сard/Card';
import OptionButton from '../../../../components/Buttons/OptionButton/OptionButton';
import { IBird } from 'context/BirdsContext';
import BirdCard from '../../../../components/BirdCard/BirdCard';

import classes from './GameVariantsSection.module.scss';

interface IProps {
  options: IBird[];
  question: IBird;
  correctAnswer: IBird | undefined;
  currentLvL: number;
  setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
  setCorrectAnswer: React.Dispatch<React.SetStateAction<IBird | undefined>>;
}

const GameVariants: React.FC<IProps> = ({
  options,
  question,
  correctAnswer,
  currentLvL,
  setCorrectAnswer,
  setCurrentScore,
}) => {
  const [falseAnswers, setFalseAnswers] = useState<IBird[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<IBird>();

  useEffect(() => {
    return () => {
      setFalseAnswers([]);
      setCurrentAnswer(undefined);
    };
  }, [question, currentLvL]);

  function handleOptionButton(option: IBird) {
    setCurrentAnswer(option);
    if (option.id === question.id) {
      setCorrectAnswer(option);
      setCurrentScore((prev) => (prev += options.length - falseAnswers.length));
    } else {
      setFalseAnswers((prev) => [...prev, option]);
    }
  }

  function handleButtonStatus(
    option: IBird,
    falseAnswers: IBird[],
    correctAnswer: IBird | undefined
  ) {
    const isFalseAnswer = falseAnswers.find((item) => item.id === option.id);
    if (correctAnswer) {
      if (option.id === correctAnswer.id) {
        return true;
      }
      return false;
    }
    if (isFalseAnswer) {
      return false;
    }
    return 'pending';
  }

  return (
    <section className={classes.variants}>
      <div className={classes.variants__options}>
        <Card>
          <ul className={classes['variants__options-list']}>
            {options.map((item) => {
              const status = handleButtonStatus(item, falseAnswers, correctAnswer);
              return (
                <OptionButton
                  key={item.id}
                  title={item.name}
                  status={status}
                  onClick={() => handleOptionButton(item)}
                />
              );
            })}
          </ul>
        </Card>
      </div>
      <BirdCard bird={currentAnswer || options[0]} details={true} cover={!!!currentAnswer} />
    </section>
  );
};

export default GameVariants;
