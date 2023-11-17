import { useState, useContext } from "react";
import { PasswordContext, PasswordCtx } from "contexts";

const SECONDS_VISIBLE = 2;

const useClipboard = () => {
  const [toastActive, setToastActive] = useState<boolean>(false);

  const { password } = useContext(PasswordContext) as PasswordCtx;

  const triggerToast = () => {
    setToastActive(true);

    setTimeout(() => {
      setToastActive(false);
    }, SECONDS_VISIBLE * 1000);
  };

  const copyToClipboard = () => {
    if (!password || toastActive) return;

    navigator.clipboard.writeText(password);
    triggerToast();
  };

  return { copyToClipboard, toastActive, SECONDS_VISIBLE };
};

export default useClipboard;
