import { IBird } from '../../../../context/BirdsContext';
import React from 'react';
import BirdCard from '../../../../components/BirdCard/BirdCard';
import classes from './GameVariantsPreview.module.scss';

interface IProps {
  preview: IBird;
}

const GameVariantsPreview: React.FC<IProps> = ({ preview }) => {
  return <div className={classes.preview}>{<BirdCard bird={preview} />}</div>;
};

export default GameVariantsPreview;
