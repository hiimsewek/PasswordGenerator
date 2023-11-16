import { Level } from "constants/levels";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type PasswordCtx = {
  password: string | null;
  setPassword: SetState<string | null>;
  strength: Level | null;
  setStrength: SetState<Level | null>;
  length: number;
  setLength: SetState<number>;
  lowercaseActive: boolean;
  setLowercaseActive: SetState<boolean>;
  uppercaseActive: boolean;
  setUppercaseActive: SetState<boolean>;
  numbersActive: boolean;
  setNumbersActive: SetState<boolean>;
  symbolsActive: boolean;
  setSymbolsActive: SetState<boolean>;
};
