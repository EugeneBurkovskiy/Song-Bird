import React from 'react';
import classes from './BirdCard.module.scss';
import { IBird } from 'context/BirdsContext';

export default function BirdCard({ bird }: { bird: IBird }) {
  return (
    <div className={classes.card}>
      <div className={classes.card__image}>
        <img src={bird.image} alt={bird.name} />
      </div>
      <h3 className={classes.card__name}>{bird.name}</h3>
      <div className={classes.card__divider}></div>
      <div className={classes.bird__audio}>
        <audio src={bird.audio} controls></audio>
      </div>
    </div>
  );
}
