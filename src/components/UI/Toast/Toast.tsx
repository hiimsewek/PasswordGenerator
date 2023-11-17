import { createPortal } from "react-dom";
import { StyledToast } from "./Toast.styled";

type ToastProps = {
  children: React.ReactNode;
  secondsVisible: number;
};

const Toast = ({ children, secondsVisible }: ToastProps) => {
  return createPortal(
    <StyledToast $secondsVisible={secondsVisible}>{children}</StyledToast>,
    document.body
  );
};

export default Toast;
