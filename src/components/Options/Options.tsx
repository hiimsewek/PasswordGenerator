import { ToggleSwitch } from "components";
import { Label, OptionContainer, OptionsWrapper } from "./Options.styled";
import useOptions from "./useOptions";

const Options = () => {
  const { options, toggleOption, isToggleDisabled } = useOptions();

  return (
    <OptionsWrapper>
      <OptionContainer>
        <Label>Include lowercase</Label>
        <ToggleSwitch
          checked={options.lowercaseActive}
          onToggle={toggleOption.bind(this, "lowercaseActive")}
          disabled={isToggleDisabled("lowercaseActive")}
        />
      </OptionContainer>
      <OptionContainer>
        <Label>Include uppercase</Label>
        <ToggleSwitch
          checked={options.uppercaseActive}
          onToggle={toggleOption.bind(this, "uppercaseActive")}
          disabled={isToggleDisabled("uppercaseActive")}
        />
      </OptionContainer>

      <OptionContainer>
        <Label>Include numbers</Label>
        <ToggleSwitch
          checked={options.numbersActive}
          onToggle={toggleOption.bind(this, "numbersActive")}
          disabled={isToggleDisabled("numbersActive")}
        />
      </OptionContainer>

      <OptionContainer>
        <Label>Include symbols</Label>
        <ToggleSwitch
          checked={options.symbolsActive}
          onToggle={toggleOption.bind(this, "symbolsActive")}
          disabled={isToggleDisabled("symbolsActive")}
        />
      </OptionContainer>
    </OptionsWrapper>
  );
};

export default Options;
