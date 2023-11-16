import { useState } from "react";
import {
  Label,
  SliderContainer,
  SliderValue,
  StyledSlider,
} from "./RangeSlider.styled";

type RangeSliderProps = React.HTMLAttributes<HTMLInputElement> & {
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: number;
  min: number;
  max: number;
};

const RangeSlider = ({
  label,
  onChange,
  min,
  max,
  value,
  ...restProps
}: RangeSliderProps) => {
  const [val, setVal] = useState<number>(value);

  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(+e.target.value);
    onChange(e);
  };

  return (
    <div>
      <Label>{label}</Label>
      <SliderContainer>
        <StyledSlider
          {...restProps}
          value={val}
          min={min}
          max={max}
          onChange={changeValueHandler}
          type="range"
        />
        <SliderValue>{value}</SliderValue>
      </SliderContainer>
    </div>
  );
};

export default RangeSlider;
