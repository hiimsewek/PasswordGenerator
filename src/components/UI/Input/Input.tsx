import { StyledInput } from "./Input.styled";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
