import { PasswordContext, PasswordCtx } from "contexts";
import { useContext, useEffect, useCallback } from "react";
import { generatePassword } from "utils/generate";

const usePasswordPanel = () => {
  const {
    length,
    lowercaseActive,
    uppercaseActive,
    numbersActive,
    symbolsActive,
    password,
    setPassword,
  } = useContext(PasswordContext) as PasswordCtx;

  const generateAndUpdate = useCallback(() => {
    const generatedPassword = generatePassword({
      length,
      lowercaseActive,
      uppercaseActive,
      numbersActive,
      symbolsActive,
    });

    setPassword(generatedPassword);
  }, [
    length,
    lowercaseActive,
    uppercaseActive,
    numbersActive,
    symbolsActive,
    setPassword,
  ]);

  useEffect(() => {
    generateAndUpdate();
  }, [generateAndUpdate]);

  return { password, generateAndUpdate };
};

export default usePasswordPanel;
