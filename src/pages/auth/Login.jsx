import React,{useEffect} from "react";
import { useLogin } from "./useLogin";

import "./Login.scss";

const Login = () => {
  const { handleValue, login, credentials, error } = useLogin();
  
  useEffect(() => {
    localStorage.removeItem("user");
  }, [])

  return (
    <div className="login-container">
      <div className="login-container_block">
        <h2>Login</h2>
        <input
          type="text"
          onChange={(event) => handleValue("email", event)}
          value={credentials.email}
          placeholder="Email"
        />
        {error.email && <p className="errorText">{error.email}</p>}
        <input
          type="password"
          onChange={(event) => handleValue("password", event)}
          value={credentials.password}
          placeholder="Password"
        />
        {error.password && <p className="errorText">{error.password}</p>}
        <button onClick={login}>Login</button>
        {error.coincidence && <p className="errorText">{error.coincidence}</p>}

      </div>
    </div>
  );
};

export default Login;
