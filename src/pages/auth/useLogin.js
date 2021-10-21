import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { actionTypes } from "../../context/actionTypes";
import { validateEmail, validatePassword } from "./validtaions";
import { dataAuth } from "./dataAuth";

export const useLogin = () => {
  const basUrl = 'http://localhost:3000'
  const context = useContext(AppContext);
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    coincidence: "",
  });

  const handleValue = (name, event) => {
    setCredentials({
      ...credentials,
      [name]: event.target.value,
    });
  };

  const login = async () => {
    if (!validateEmail(credentials.email)) {
      return setError({
        ...error,
        email: "The email address is improperly formatted",
      });
    } else if (!validatePassword(credentials.password)) {
      setError({
        email: "",
        password: "Password should be at least 6 characters",
      });
    } else if (
      dataAuth.email === credentials.email &&
      dataAuth.password === credentials.password
    ) {
      try {
        axios.post(`${basUrl}/profile`, {
          credentials,
        });
        context.dispatch({
          type: actionTypes.SET_USER,
          payload: { credentials },
        });
        localStorage.setItem("user", JSON.stringify(credentials));
        setCredentials({
          email: "",
          password: "",
        });
        setTimeout(() => {
          history.push("/profile");
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    } else {
      setError({
        email: "",
        password: "",
        coincidence: "No coincidence with the testing account",
      });
    }
  };

  return { handleValue, login, credentials, error };
};
