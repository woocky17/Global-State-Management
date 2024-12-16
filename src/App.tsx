import { useReducer } from "react";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/Reducer/tasksReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";
import loginReducer from "./state-management/Reducer/loginReducer";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(loginReducer, "");
  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
          <NavBar />
          <HomePage />
        </AuthContext.Provider>
      </TasksContext.Provider>
    </>
  );
}

export default App;
