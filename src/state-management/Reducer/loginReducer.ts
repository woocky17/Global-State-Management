interface LoginAction {
  type: "LOGIN";
  user: string;
}

interface LogoutnAction {
  type: "LOGOUT";
}

type LogAction = LoginAction | LogoutnAction;

const loginReducer = (state: string, action: LogAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return "";
  }
};

export default loginReducer;
