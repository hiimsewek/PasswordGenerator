import styled from "styled-components";

const spacing = "60px";

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const GeneratorContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: ${spacing};

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    background-color: ${({ theme: { colors } }) => colors.purple800};
    border-radius: 10px;
    box-shadow: 5px 5px 5px black;
  }
`;

export const Title = styled.div`
  font-size: 2.2rem;
  text-align: center;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    font-size: 2.4rem;
  }
`;

export const MarginBox = styled.div`
  margin-top: ${spacing};
`;
