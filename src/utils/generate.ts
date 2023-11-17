import { LOWERCASE, NUMBERS, SYMBOLS, UPPERCASE } from "constants/characters";
import { PasswordCtx } from "contexts";

const getRandomIndex = (length: number) => Math.floor(Math.random() * length);

const generateCharacterSets = ({
  lowercaseActive,
  uppercaseActive,
  numbersActive,
  symbolsActive,
}: Partial<PasswordCtx>) => {
  const characterSets: string[] = [];

  lowercaseActive && characterSets.push(LOWERCASE);
  uppercaseActive && characterSets.push(UPPERCASE);
  numbersActive && characterSets.push(NUMBERS);
  symbolsActive && characterSets.push(SYMBOLS);

  return characterSets;
};

export const generatePassword = ({
  length,
  lowercaseActive,
  uppercaseActive,
  numbersActive,
  symbolsActive,
}: Partial<PasswordCtx>) => {
  const characterSets = generateCharacterSets({
    lowercaseActive,
    uppercaseActive,
    numbersActive,
    symbolsActive,
  });

  const generatedPassword = Array(length)
    .fill("*")
    .map(() => {
      const arrIndex = getRandomIndex(characterSets.length);
      const charIndex = getRandomIndex(characterSets[arrIndex].length);

      const character = characterSets[arrIndex][charIndex];

      return character;
    })
    .join("");

  return generatedPassword;
};
