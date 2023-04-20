import { IBird } from '../../../../context/BirdsContext';
import React from 'react';
import Card from '../../../../components/Сard/Card';
import classes from './GameVariants.module.scss';
import OptionButton from '../../../../components/Buttons/OptionButton/OptionButton';

interface IProps {
  options: IBird[];
}

const GameQuestion: React.FC<IProps> = ({ options }) => {
  return (
    <div className={classes.variants}>
      <Card>
        <ul className={classes.variants__list}>
          {options.map((item) => (
            <li key={item.id}>
              <OptionButton title={item.name} />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default GameQuestion;
