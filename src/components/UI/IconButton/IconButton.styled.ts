import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    font-size: 2rem;
  }
`;
