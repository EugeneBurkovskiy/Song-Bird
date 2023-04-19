import { IBird } from '../../../context/BirdsContext';
import React, { useState } from 'react';

export interface IOptionsContext {
  currentMode: string;
  modes: string[];
  setMode?: React.Dispatch<React.SetStateAction<string>>;
}
export const GameOptionsContext = React.createContext({
  currentMode: '',
  modes: [''],
});

export default function GameOptionsContextProvider({
  children,
  birdsData,
}: {
  children: React.ReactNode;
  birdsData: IBird[];
}) {
  const [mode, setMode] = useState(birdsData?.[0].category);
  const options = {
    currentMode: mode,
    modes: [...new Set(birdsData.map((item) => item.category))],
    setMode: setMode,
  };
  return <GameOptionsContext.Provider value={options}>{children}</GameOptionsContext.Provider>;
}
