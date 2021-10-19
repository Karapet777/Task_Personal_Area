import React from "react";
import { useLogin } from "./useLogin";

import "./Login.scss";

const Login = () => {
  const { handleValue, login, user } = useLogin();

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        onChange={handleValue}
        value={user.name}
        placeholder="Email"
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
