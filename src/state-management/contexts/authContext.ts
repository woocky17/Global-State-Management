import { Dispatch } from "react";
import { LogAction } from "../Reducer/loginReducer";
import React from "react";

interface AuthContexts {
  user: string;
  dispatch: Dispatch<LogAction>;
}

const AuthContext = React.createContext<AuthContexts>({} as AuthContexts);

export default AuthContext;
