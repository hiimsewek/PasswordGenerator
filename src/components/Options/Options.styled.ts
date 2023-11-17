import styled from "styled-components";

export const OptionsWrapper = styled.div`
  width: 100%;
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Label = styled.span`
  font-size: 1.4rem;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    font-size: 1.6rem;
  }
`;
