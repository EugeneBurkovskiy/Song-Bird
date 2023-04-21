import React, { useEffect, useState } from 'react';
import { getAllBirds } from '../service/api';

interface IBirdContext {
  data: IBird[] | null;
  score: IScore[];
  setScore: React.Dispatch<React.SetStateAction<IScore[]>>;
}
export interface IBird {
  id: number;
  name: string;
  species: string;
  category: string;
  description: string;
  image: string;
  audio: string;
}

export interface IScore {
  points: number;
  mode: string;
  date: Date;
}

export const BirdsContext = React.createContext<IBirdContext>({
  data: null,
  score: [],
  setScore: () => {},
});

export default function BirdsContextProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<IBird[] | null>(null);
  const [score, setScore] = useState<IScore[]>(
    JSON.parse(localStorage.getItem('birdsScore') as string) || []
  );

  useEffect(() => {
    getAllBirds().then((res) => setData(res));
  }, []);

  // useEffect(() => {
  //   if (score.length) {
  //     if (localStorage.getItem('birdsScore')) {
  //       const storageScore = JSON.parse(localStorage.getItem('birdsScore') as string);
  //       localStorage.setItem('birdsScore', JSON.stringify(score));
  //     } else {
  //       localStorage.setItem('birdsScore', JSON.stringify(score));
  //     }
  //   }
  // }, [score]);

  const contextObj: IBirdContext = {
    data: data,
    score: score,
    setScore: setScore,
  };

  return <BirdsContext.Provider value={contextObj}>{children}</BirdsContext.Provider>;
}