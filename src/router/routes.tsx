import React, { Suspense, lazy } from 'react';

const GamePage = lazy(() => import('../pages/GamePage/GamePage'));
const ScorePage = lazy(() => import('../pages/ScorePage/ScorePage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage/GalleryPage'));
import HomePage from '../pages/HomePage/HomePage';
import Loading from '../components/Loading/Loading';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export const routes = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />,
  },
  {
    name: 'Game',
    path: '/game',
    element: (
      <Suspense fallback={<Loading />}>
        <GamePage />
      </Suspense>
    ),
  },
  {
    name: 'Score',
    path: '/score',
    element: (
      <Suspense fallback={<Loading />}>
        <ScorePage />
      </Suspense>
    ),
  },
  {
    name: 'Gallery',
    path: '/gallery',
    element: (
      <Suspense fallback={<Loading />}>
        <GalleryPage />
      </Suspense>
    ),
  },
  {
    name: '404',
    path: '/*',
    element: <NotFoundPage />,
  },
];
