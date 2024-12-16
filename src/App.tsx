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
import AuthProvider from "./state-management/AuthProvider";
import TaskProvider from "./state-management/TaskProvider";

function App() {
  return (
    <>
      <TaskProvider>
        <AuthProvider>
          <NavBar />
          <HomePage />
        </AuthProvider>
      </TaskProvider>
    </>
  );
}

export default App;
