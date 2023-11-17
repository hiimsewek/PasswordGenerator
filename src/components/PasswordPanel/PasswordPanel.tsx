import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { Clipboard } from "components";
import {
  IconsContainer,
  PanelContainer,
  RegenerateIcon,
  StyledInput,
} from "./PasswordPanel.styled";
import usePasswordPanel from "./usePasswordPanel";

const PasswordPanel = () => {
  const { generateAndUpdate, password } = usePasswordPanel();

  return (
    <PanelContainer>
      <StyledInput disabled value={password || ""} />
      <IconsContainer>
        <Clipboard />
        <RegenerateIcon icon={faUndo} onClick={generateAndUpdate} />
      </IconsContainer>
    </PanelContainer>
  );
};

export default PasswordPanel;
