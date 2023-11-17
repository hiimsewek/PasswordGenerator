import { PasswordContext, PasswordCtx } from "contexts";
import { useContext } from "react";

type Option =
  | "lowercaseActive"
  | "uppercaseActive"
  | "numbersActive"
  | "symbolsActive";

const useOptions = () => {
  const {
    lowercaseActive,
    setLowercaseActive,
    uppercaseActive,
    setUppercaseActive,
    numbersActive,
    setNumbersActive,
    symbolsActive,
    setSymbolsActive,
  } = useContext(PasswordContext) as PasswordCtx;

  const toggleOption = (option: Option) => {
    switch (option) {
      case "lowercaseActive":
        setLowercaseActive(!lowercaseActive);
        break;
      case "uppercaseActive":
        setUppercaseActive(!uppercaseActive);
        break;
      case "numbersActive":
        setNumbersActive(!numbersActive);
        break;
      case "symbolsActive":
        setSymbolsActive(!symbolsActive);
        break;
    }
  };

  const isToggleDisabled = (option: Option) => {
    const options: Record<Option, boolean> = {
      lowercaseActive,
      uppercaseActive,
      numbersActive,
      symbolsActive,
    };

    const restOptions: Option[] = [];

    for (const key in options) {
      option !== key && restOptions.push(key as Option);
    }

    const optionDisabled = restOptions.every((el) => !options[el]);

    return optionDisabled;
  };

  return {
    toggleOption,
    isToggleDisabled,
    options: {
      lowercaseActive,
      uppercaseActive,
      numbersActive,
      symbolsActive,
    },
  };
};

export default useOptions;
