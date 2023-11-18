import { useCallback, useContext, useEffect } from "react";
import { PasswordContext, PasswordCtx } from "contexts";
import { LOWERCASE, NUMBERS, SYMBOLS, UPPERCASE } from "constants/characters";
import { Level } from "constants/levels";

const usePasswordStrength = () => {
  const { password, strength, setStrength } = useContext(
    PasswordContext
  ) as PasswordCtx;

  const updateStrengthByScore = useCallback(
    (score: number) => {
      switch (score) {
        case 1:
          setStrength(Level.VERY_WEAK);
          break;
        case 2:
          setStrength(Level.WEAK);
          break;
        case 3:
        case 4:
          setStrength(Level.MEDIUM);
          break;
        case 5:
          setStrength(Level.STRONG);
          break;
        case 6:
          setStrength(Level.VERY_STRONG);
          break;
        default:
          return;
      }
    },
    [setStrength]
  );

  const calculatePasswordStrength = useCallback(
    (password: string) => {
      let score = 0;
      const regex = new RegExp(`[${password}]`);

      regex.test(LOWERCASE) && score++;
      regex.test(UPPERCASE) && score++;
      regex.test(NUMBERS) && score++;
      regex.test(SYMBOLS) && score++;
      password.length >= 8 && score++;
      password.length >= 14 && score++;

      updateStrengthByScore(score);
    },
    [updateStrengthByScore]
  );

  useEffect(() => {
    password && calculatePasswordStrength(password);
  }, [password, calculatePasswordStrength]);

  return { strength };
};

export default usePasswordStrength;
