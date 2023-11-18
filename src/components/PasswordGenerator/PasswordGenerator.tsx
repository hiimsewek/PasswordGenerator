import { useContext } from "react";
import { PasswordContext, PasswordCtx } from "contexts";
import {
  Options,
  PasswordPanel,
  PasswordStrength,
  RangeSlider,
} from "components";
import {
  GeneratorContainer,
  MarginBox,
  Title,
  Wrapper,
} from "./PasswordGenerator.styled";

const PasswordGenerator = () => {
  const { length, setLength } = useContext(PasswordContext) as PasswordCtx;

  const sliderChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(+e.target.value);
  };

  return (
    <Wrapper>
      <GeneratorContainer>
        <Title>Password Generator</Title>

        <MarginBox>
          <PasswordPanel />
          <PasswordStrength />
        </MarginBox>

        <MarginBox>
          <RangeSlider
            label="Length"
            min={4}
            max={40}
            value={length}
            onChange={sliderChangeHandler}
          />
        </MarginBox>

        <MarginBox>
          <Options />
        </MarginBox>
      </GeneratorContainer>
    </Wrapper>
  );
};

export default PasswordGenerator;
