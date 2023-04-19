import React, { useEffect, useState } from 'react';
import { getAllBirds } from '../service/api';
import birdsData from '../utils/birds';
export interface IBird {
  id: number;
  name: string;
  species: string;
  category: string;
  description: string;
  image: string;
  audio: string;
}
export const BirdsContext = React.createContext<IBird[] | null>(null);

export default function BirdsContextProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<IBird[] | null>(null);

  useEffect(() => {
    getAllBirds().then((res) => setData(res));
  }, []);

  return <BirdsContext.Provider value={data}>{children}</BirdsContext.Provider>;
}
