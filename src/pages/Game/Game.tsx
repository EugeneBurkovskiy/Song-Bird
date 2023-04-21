import Container from '../../components/Container/Container';
import Loading from '../../components/Loading/Loading';
import { BirdsContext } from '../../context/BirdsContext';
import React, { useContext } from 'react';
import GameContent from './GameContent/GameContent';
import classes from './Game.module.scss';

export default function Game() {
  const { data } = useContext(BirdsContext);

  return data ? (
    <article className={classes.game}>
      <Container>
        <GameContent data={data} />
      </Container>
    </article>
  ) : (
    <Loading />
  );
}
