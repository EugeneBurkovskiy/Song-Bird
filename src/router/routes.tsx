import React from 'react';

import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import GamePage from '../pages/GamePage/GamePage';
import HomePage from '../pages/HomePage/HomePage';
import ScorePage from '../pages/ScorePage/ScorePage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';

export const routes = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />,
  },
  {
    name: 'Game',
    path: '/game',
    element: <GamePage />,
  },
  {
    name: 'Score',
    path: '/score',
    element: <ScorePage />,
  },
  {
    name: 'Gallery',
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    name: '404',
    path: '/*',
    element: <NotFoundPage />,
  },
];
