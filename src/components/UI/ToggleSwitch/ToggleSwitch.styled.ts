import styled from "styled-components";

export const ToggleContainer = styled.label`
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 46px;
  height: 26px;
  border-radius: 13px;
  background-color: ${({ theme: { colors } }) => colors.darkgrey};
  transition: 0.3s all;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme: { colors } }) => colors.lightGrey};
    transform: translate(0, -50%);
    transition: 0.3s all;
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background-color: ${({ theme: { colors } }) => colors.purple400};
  }

  &:checked + ${Switch}:before {
    background-color: ${({ theme: { colors } }) => colors.purple100};
    transform: translate(100%, -50%);
  }
`;
