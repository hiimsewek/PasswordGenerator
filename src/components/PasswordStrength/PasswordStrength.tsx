import { Strength, StrengthContainer } from "./PasswordStrength.styled";
import usePasswordStrength from "./usePasswordStrength";
import { Level } from "constants/levels";

const PasswordStrength = () => {
  const { strength } = usePasswordStrength();

  return (
    strength && (
      <StrengthContainer>
        Your password is{" "}
        <Strength $strength={strength as Level}>{strength}</Strength>
      </StrengthContainer>
    )
  );
};

export default PasswordStrength;
