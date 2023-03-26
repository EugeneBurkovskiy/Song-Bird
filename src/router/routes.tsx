import ErrorNotFound from '../pages/ErrorNotFound/ErrorNotFound';
import Game from '../pages/Game/Game';
import Home from '../pages/Home/Home';
import Score from '../pages/Score/Score';
import React from 'react';
export const routes = [
  {
    name: 'home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'game',
    path: '/game',
    element: <Game />,
  },
  {
    name: 'score',
    path: '/score',
    element: <Score />,
  },
  {
    name: 'error',
    path: '/*',
    element: <ErrorNotFound />,
  },
];
