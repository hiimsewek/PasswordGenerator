import { ClipboardIcon } from "./Clipboard.styled";
import { Toast } from "components";
import {
  faClipboardList,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import useClipboard from "./useClipboard";

const Clipboard = () => {
  const { copyToClipboard, toastActive, SECONDS_VISIBLE } = useClipboard();

  const icon = !toastActive ? faClipboardList : faClipboardCheck;

  return (
    <>
      <ClipboardIcon
        $clicked={toastActive}
        icon={icon}
        onClick={copyToClipboard}
      />
      {toastActive && (
        <Toast secondsVisible={SECONDS_VISIBLE}>
          Password copied to clipboard!
        </Toast>
      )}
    </>
  );
};

export default Clipboard;
