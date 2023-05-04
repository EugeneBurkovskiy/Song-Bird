import React, { useEffect, useState } from 'react';
interface IBirdContext {
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
  score: [],
  setScore: () => {},
});

interface IProps {
  children: React.ReactNode;
}

const BirdsContextProvider: React.FC<IProps> = ({ children }) => {
  const [score, setScore] = useState<IScore[]>(
    JSON.parse(localStorage.getItem('birdsScore') as string) || []
  );

  useEffect(() => {
    const storageScore = JSON.parse(localStorage.getItem('birdsScore') as string);
    if (storageScore && score.length) {
      if (JSON.stringify(storageScore) !== JSON.stringify(score))
        localStorage.setItem(
          'birdsScore',
          JSON.stringify([...storageScore, score[score.length - 1]])
        );
    } else if (!storageScore && score.length) {
      localStorage.setItem('birdsScore', JSON.stringify(score));
    }
  }, [score]);

  const contextObj: IBirdContext = {
    score: score,
    setScore: setScore,
  };

  return <BirdsContext.Provider value={contextObj}>{children}</BirdsContext.Provider>;
};

export default BirdsContextProvider;
