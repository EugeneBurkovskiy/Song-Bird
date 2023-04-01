import { BirdsContext } from '../../../context/BirdsContext';
import React, { useContext, useState } from 'react';

export interface IOptionsContext {
  currentMode: string;
  modes: string[];
  setMode?: React.Dispatch<React.SetStateAction<string>>;
}
export const GameOptionsContext = React.createContext({
  currentMode: '',
  modes: [''],
});

export default function GameOptionsContextProvider({ children }: { children: React.ReactNode }) {
  const birdsData = useContext(BirdsContext);
  const [mode, setMode] = useState(birdsData[0].category);

  const options = {
    currentMode: mode,
    modes: [...new Set(birdsData.map((item) => item.category))],
    setMode: setMode,
  };

  return <GameOptionsContext.Provider value={options}>{children}</GameOptionsContext.Provider>;
}
