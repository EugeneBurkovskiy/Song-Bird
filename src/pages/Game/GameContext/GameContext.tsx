import React, { useState } from 'react';
import birdsData from '../../../utils/birds';

export interface IOptionsContext {
  currentMode: string;
  modes: string[];
  setMode?: React.Dispatch<React.SetStateAction<string>>;
}

export const OptionsContext = React.createContext({
  currentMode: birdsData[0].category,
  modes: [...new Set(birdsData.map((item) => item.category))],
});

export default function OptionsContextProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState(birdsData[0].category);

  const options = {
    currentMode: mode,
    modes: [...new Set(birdsData.map((item) => item.category))],
    setMode: setMode,
  };

  return <OptionsContext.Provider value={options}>{children}</OptionsContext.Provider>;
}
