import { IconButton, Input } from "components";
import styled from "styled-components";

export const PanelContainer = styled.div`
  position: relative;
`;
export const StyledInput = styled(Input)`
  padding: 15px 80px 15px 20px;
  text-overflow: ellipsis;
`;

export const IconsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;

export const RegenerateIcon = styled(IconButton)`
  padding-left: 10px;
`;
