import { createContext, ReactNode, useContext, useState } from "react";

type InputContext = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  isChanged: boolean;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  suggestions: Suggestions;
  setSuggestions: React.Dispatch<React.SetStateAction<Suggestions>>;
};

type Suggestions = {
  predictions: string[];
  combos: string[];
};

const inputContext = createContext({} as InputContext);

export const InputProvider = (props: { children?: ReactNode }) => {
  const [inputValue, setInputValue] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  const [suggestions, setSuggestions] = useState({
    predictions: [],
    combos: [],
  } as Suggestions);

  const value = {
    inputValue,
    setInputValue,
    isChanged,
    setIsChanged,
    suggestions,
    setSuggestions,
  };

  return <inputContext.Provider value={value} {...props} />;
};

export function useInputContext() {
  return useContext(inputContext);
}
