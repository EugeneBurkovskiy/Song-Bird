import React, { useContext } from 'react';
import GameMode from './GameMode/GameMode';
import classes from './Game.module.scss';
import Container from '../../components/Container/Container';
import GameOptionsContextProvider from './GameOptionsContext/GameOptionsContext';
import GameQuestion from './GameQuestion/GameQuestion';
import GameProgress from './GameProgress/GameProgress';
import { BirdsContext } from '../../context/BirdsContext';
import GameVariants from './GameVariants/GameVariants';

export default function Game() {
  const data = useContext(BirdsContext);
  return data ? (
    <GameOptionsContextProvider birdsData={data}>
      <article className={classes.game}>
        <Container>
          <GameMode />
          <GameProgress />
          <GameQuestion data={data} />
          <GameVariants data={data}></GameVariants>
        </Container>
      </article>
    </GameOptionsContextProvider>
  ) : null;
}
