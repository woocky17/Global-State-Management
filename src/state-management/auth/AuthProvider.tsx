import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface LoginAction {
  type: "LOGIN";
  user: string;
}

interface LogoutnAction {
  type: "LOGOUT";
}

export type LogAction = LoginAction | LogoutnAction;

const loginReducer = (state: string, action: LogAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return "";
  }
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
