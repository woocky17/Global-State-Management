import { Dispatch } from "react";
import React from "react";
import { LogAction } from "./AuthProvider";

interface AuthContexts {
  user: string;
  dispatch: Dispatch<LogAction>;
}

const AuthContext = React.createContext<AuthContexts>({} as AuthContexts);

export default AuthContext;
