import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { StyledIcon } from "./IconButton.styled";

type IconButtonProps = FontAwesomeIconProps & {
  onClick: () => void;
};

const IconButton = ({ onClick, ...restProps }: IconButtonProps) => {
  return <StyledIcon {...restProps} onClick={onClick} />;
};

export default IconButton;
