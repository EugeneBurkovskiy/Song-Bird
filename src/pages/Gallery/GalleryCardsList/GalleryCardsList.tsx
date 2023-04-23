import BirdCard from '../../../components/BirdCard/BirdCard';
import { IBird } from 'context/BirdsContext';
import React from 'react';
import classes from './GalleryCardsList.module.scss';

export default function GalleryList({ birds }: { birds: IBird[] }) {
  return (
    <ul className={classes.list}>
      {birds.map((bird) => (
        <li key={bird.id} className={classes.list__item}>
          <BirdCard bird={bird} details={true} hide={false} />
        </li>
      ))}
    </ul>
  );
}
