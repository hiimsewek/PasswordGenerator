import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { StyledIcon } from "./IconButton.styled";

const IconButton = (props: FontAwesomeIconProps) => {
  return <StyledIcon {...props} />;
};

export default IconButton;
