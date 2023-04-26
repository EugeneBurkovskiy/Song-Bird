import React from 'react';
import BirdCard from '../../../../components/BirdCard/BirdCard';
import classes from './GameVariantsPreview.module.scss';
import { ILvlOptions } from '../GameContent';

interface IProps {
  options: ILvlOptions;
}

const GameVariantsPreview: React.FC<IProps> = ({ options }) => {
  return (
    <BirdCard
      bird={
        options.answer ||
        options.falseAnswers[options.falseAnswers.length - 1] ||
        options.options[0]
      }
      details={true}
      cover={!!options.falseAnswers.length || !!options.answer}
    />
  );
};

export default GameVariantsPreview;
