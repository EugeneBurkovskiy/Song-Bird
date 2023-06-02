import { IBird } from 'context/BirdsContext';
import Card from '../Сard/Card';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';

import classes from './BirdCard.module.scss';

interface IProps {
  bird: IBird;
  hide?: boolean;
  details?: boolean;
  cover?: boolean;
}

const BirdCard: React.FC<IProps> = ({ bird, hide = false, details = false, cover }) => {
  return (
    <Card>
      {cover !== undefined && (
        <div className={`${classes.cover} ${!cover && classes.cover__off}`}>
          Select an option to see details
        </div>
      )}
      <div className={classes.card}>
        <div className={classes.card__image}>
          {hide ? (
            <div className={classes['card__image-question']}>?</div>
          ) : (
            <img src={bird.image} alt={bird.name} />
          )}
        </div>
        <h3 className={classes.card__name}>{hide ? '***' : bird.name}</h3>
        {details && <h4 className={classes.card__species}>{bird.species}</h4>}
        {details && <h4 className={classes.card__сategory}>{bird.category}</h4>}
        <div className={classes.card__divider}></div>
        <div className={`${classes.card__audio} ${details && classes['card__audio-details']}`}>
          <AudioPlayer audioUrl={bird.audio} />
        </div>
      </div>
      {details && <p className={classes.card__description}>{bird.description}</p>}
    </Card>
  );
};

export default BirdCard;
