import React from 'react';
import BirdCard from '../../../../components/BirdCard/BirdCard';
import classes from './GameVariantsPreview.module.scss';
import { ILvlOptions } from '../GameContent';

interface IProps {
  options: ILvlOptions;
}

const GameVariantsPreview: React.FC<IProps> = ({ options }) => {
  function showPreview() {
    if (options.falseAnswers.length) {
      return options.falseAnswers[options.falseAnswers.length - 1];
    }
    return options.options[0];
  }
  return (
    <BirdCard
      bird={showPreview()}
      hide={false}
      details={true}
      cover={!!options.falseAnswers.length}
    />
  );
};

export default GameVariantsPreview;
