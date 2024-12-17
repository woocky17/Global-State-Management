import useAuthUser from "./store";

const LoginStatus = () => {
  const { user, login, logout } = useAuthUser();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("davidortet@gmail.com")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
