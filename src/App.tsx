import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import { TaskProvider } from "./state-management/tasks";
import AuthProvider from "./state-management/auth/AuthProvider";
import Counter from "./state-management/counter/Counter";

function App() {
  return (
    <>
      <TaskProvider>
        <AuthProvider>
          <Counter />
          <NavBar />
          <HomePage />
        </AuthProvider>
      </TaskProvider>
    </>
  );
}

export default App;
