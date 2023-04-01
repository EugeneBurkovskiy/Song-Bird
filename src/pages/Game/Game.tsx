import React from 'react';
import GameMode from './GameMode/GameMode';
import classes from './Game.module.scss';
import Container from '../../components/Container/Container';
import GameOptionsContextProvider from './GameOptionsContext/GameOptionsContext';
import GameQuestion from './GameQuestion/GameQuestion';
import GameProgress from './GameProgress/GameProgress';

export default function Game() {
  return (
    <GameOptionsContextProvider>
      <article className={classes.game}>
        <Container>
          <GameMode />
          <GameProgress />
          <GameQuestion />
        </Container>
      </article>
    </GameOptionsContextProvider>
  );
}
