import styled from "styled-components";
import { IconButton } from "components";

type ClipboardIconProps = {
  $clicked: boolean;
};

export const ClipboardIcon = styled(IconButton)<ClipboardIconProps>`
  cursor: ${({ $clicked }) => ($clicked ? "auto" : "pointer")};

  &:hover {
    opacity: ${({ $clicked }) => ($clicked ? 1 : 0.8)};
  }
`;
