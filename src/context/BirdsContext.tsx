import React from 'react';
import birdsData from '../utils/birds';

export const BirdsContext = React.createContext(birdsData);

export default function BirdsContextProvider({ children }: { children: React.ReactNode }) {
  const data = birdsData;
  return <BirdsContext.Provider value={data}>{children}</BirdsContext.Provider>;
}
