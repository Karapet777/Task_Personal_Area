import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { actionTypes } from "../../context/actionTypes";

export const useLogin = () => {
  const context = useContext(AppContext);
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
  });

  const handleValue = (event) => {
    setUser({
      name: event.target.value,
    });
  };

  const login = async () => {
    try {
      axios.post("http://localhost:3000/profile", {
        user,
      });
      context.dispatch({ type: actionTypes.SET_USER, payload: { user } });
      localStorage.setItem("user", JSON.stringify(user));
      setUser({
        name: "",
      });
      setTimeout(() => {
        history.push("/profile");
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return { handleValue, login, user };
};
