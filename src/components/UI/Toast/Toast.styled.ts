import styled, { keyframes } from "styled-components";

type StyledToastProps = {
  $secondsVisible: number;
};

const animate = keyframes`
  0% {
    opacity: 0;
     transform: translate(-50%, 0);
  }

  75% {
    opacity: 1;
    transform: translate(-50%, 10px);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, 10px);
  }
`;

export const StyledToast = styled.div<StyledToastProps>`
  position: absolute;
  top: 20px;
  left: 50%;
  width: 80%;
  max-width: 300px;
  padding: 10px 30px;
  border-radius: 100px;
  background-color: ${({ theme: { colors } }) => colors.purple100};
  color: ${({ theme: { colors } }) => colors.purple400};
  font-size: 1.4rem;
  text-align: center;
  animation: ${animate} ${({ $secondsVisible }) => `${$secondsVisible}s`}
    forwards;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    font-size: 1.6rem;
  }
`;
