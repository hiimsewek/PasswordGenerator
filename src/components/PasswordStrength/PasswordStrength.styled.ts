import { Level } from "constants/levels";
import styled from "styled-components";

type StrengthProps = {
  $strength: Level;
};

export const StrengthContainer = styled.div`
  font-size: 1.4rem;
  text-align: center;
  margin-top: 20px;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    font-size: 1.6rem;
  }
`;

export const Strength = styled.span<StrengthProps>`
  text-transform: uppercase;
  color: ${({ $strength, theme: { colors } }) =>
    $strength === Level.STRONG || $strength === Level.VERY_STRONG
      ? colors.green
      : $strength === Level.MEDIUM
      ? colors.orange
      : colors.red};
`;
