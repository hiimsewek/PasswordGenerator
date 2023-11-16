import { createContext } from "react";
import { PasswordCtx } from "./PasswordContext.types";

const PasswordContext = createContext<PasswordCtx | undefined>(undefined);

export default PasswordContext;
