import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.purple400};
  border: none;
  outline: none;
  padding: 15px 30px;
  border-radius: 30px;
  color: ${({ theme: { colors } }) => colors.purple100};
  caret-color: ${({ theme: { colors } }) => colors.purple100};
  font-size: 1.6rem;
  letter-spacing: 0.1rem;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    font-size: 1.8rem;
  }
`;
