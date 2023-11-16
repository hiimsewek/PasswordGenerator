import { Input, Switch, ToggleContainer } from "./ToggleSwitch.styled";

type ToggleSwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onToggle: React.ChangeEventHandler<HTMLInputElement>;
};

const ToggleSwitch = ({ onToggle, ...restProps }: ToggleSwitchProps) => {
  return (
    <ToggleContainer>
      <Input {...restProps} onChange={onToggle} type="checkbox" />
      <Switch />
    </ToggleContainer>
  );
};

export default ToggleSwitch;
