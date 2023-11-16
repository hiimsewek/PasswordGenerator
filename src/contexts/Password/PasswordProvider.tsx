import { useState } from "react";
import { Level } from "constants/levels";
import { PasswordCtx } from "./PasswordContext.types";
import PasswordContext from "./PasswordContext";

type PasswordProviderProps = {
  children: React.ReactNode;
};

export const PasswordProvider = ({ children }: PasswordProviderProps) => {
  const [password, setPassword] = useState<string | null>(null);
  const [length, setLength] = useState<number>(20);
  const [strength, setStrength] = useState<Level | null>(null);
  const [lowercaseActive, setLowercaseActive] = useState<boolean>(true);
  const [uppercaseActive, setUppercaseActive] = useState<boolean>(true);
  const [numbersActive, setNumbersActive] = useState<boolean>(true);
  const [symbolsActive, setSymbolsActive] = useState<boolean>(true);

  const value: PasswordCtx = {
    password,
    setPassword,
    length,
    setLength,
    strength,
    setStrength,
    lowercaseActive,
    setLowercaseActive,
    uppercaseActive,
    setUppercaseActive,
    numbersActive,
    setNumbersActive,
    symbolsActive,
    setSymbolsActive,
  };

  return (
    <PasswordContext.Provider value={value}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
