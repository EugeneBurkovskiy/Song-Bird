import React, { useContext, useEffect, useState } from 'react';
import GameMode from './GameMode/GameMode';
import classes from './Game.module.scss';
import Container from '../../components/Container/Container';
import GameQuestion from './GameQuestion/GameQuestion';
import GameProgress from './GameProgress/GameProgress';
import { BirdsContext } from '../../context/BirdsContext';
import GameVariants from './GameVariants/GameVariants';
import CustomButton from '../../components/Buttons/CustomButton/CustomButton';
import Loading from '../../components/Loading/Loading';

export default function Game() {
  const data = useContext(BirdsContext);
  const [gameMode, setGameMode] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setGameMode(data[0].category);
    }
  }, [data]);

  return data && gameMode ? (
    <article className={classes.game}>
      <Container>
        <GameMode currentMode={gameMode} data={data} setGameMode={setGameMode} />
        <GameProgress />
        <GameQuestion data={data} gameMode={gameMode} />
        <GameVariants data={data} gameMode={gameMode}></GameVariants>
        <CustomButton>Next</CustomButton>
      </Container>
    </article>
  ) : (
    <Loading />
  );
}
