import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import { TaskProvider } from "./state-management/tasks";
import AuthProvider from "./state-management/auth/AuthProvider";

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
