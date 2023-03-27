import ErrorNotFound from '../pages/ErrorNotFound/ErrorNotFound';
import Game from '../pages/Game/Game';
import Home from '../pages/Home/Home';
import Score from '../pages/Score/Score';
import Gallery from '../pages/Gallery/Gallery';
import React from 'react';
export const routes = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'Game',
    path: '/game',
    element: <Game />,
  },
  {
    name: 'Score',
    path: '/score',
    element: <Score />,
  },
  {
    name: 'Gallery',
    path: '/gallery',
    element: <Gallery />,
  },
  {
    name: '404',
    path: '/*',
    element: <ErrorNotFound />,
  },
];
