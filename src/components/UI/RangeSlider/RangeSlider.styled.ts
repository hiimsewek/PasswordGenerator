import styled from "styled-components";

export const Label = styled.div`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSlider = styled.input`
  appearance: none;
  outline: none;
  width: 100%;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme: { colors } }) => colors.purple400};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme: { colors } }) => colors.purple100};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme: { colors } }) => colors.purple100};
    cursor: pointer;
  }
`;

export const SliderValue = styled.div`
  font-size: 1.4rem;
  width: 10%;
  text-align: right;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    font-size: 1.6rem;
  }
`;
