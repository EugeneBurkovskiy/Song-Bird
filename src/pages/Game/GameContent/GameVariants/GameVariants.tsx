import React from 'react';
import Card from '../../../../components/Сard/Card';
import classes from './GameVariants.module.scss';
import OptionButton from '../../../../components/Buttons/OptionButton/OptionButton';
import { ILvlOptions } from '../GameContent';
import { IBird } from 'context/BirdsContext';

interface IProps {
  options: ILvlOptions;
  setOptionsObj: React.Dispatch<React.SetStateAction<ILvlOptions>>;
}

const GameVariants: React.FC<IProps> = ({ options, setOptionsObj }) => {
  function checkAnswer(userAnswer: IBird) {
    if (options.question.id !== userAnswer.id) {
      setOptionsObj({ ...options, falseAnswers: [...options.falseAnswers, userAnswer] });
    } else if (options.question.id === userAnswer.id) {
      setOptionsObj({ ...options, answer: userAnswer });
    }
  }

  function generateOptions(options: ILvlOptions) {
    return options.options.map((item) => {
      if (
        (options.answer && item.id !== options.answer.id) ||
        options.falseAnswers.find((falseAnswer) => falseAnswer.id === item.id)
      ) {
        return (
          <li key={item.id}>
            <OptionButton title={item.name} onClick={() => checkAnswer(item)} status={false} />
          </li>
        );
      } else if (options.answer && item.id === options.answer.id) {
        return (
          <li key={item.id}>
            <OptionButton title={item.name} onClick={() => checkAnswer(item)} status={true} />
          </li>
        );
      }
      return (
        <li key={item.id}>
          <OptionButton title={item.name} onClick={() => checkAnswer(item)} />
        </li>
      );
    });
  }

  return (
    <div className={classes.variants}>
      <Card>
        <ul className={classes.variants__list}>{generateOptions(options)}</ul>
      </Card>
    </div>
  );
};

export default GameVariants;
