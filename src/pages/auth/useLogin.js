import { useState } from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";


export const useLogin = () => {
    const history = useHistory()
  const [user, setUser] = useState({
    name: "",
  });

  const handleValue = (event) => {
    setUser({
      name: event.target.value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:3000/profile", {
        user,
      })
      .then((res) => console.log(res));
    setUser({
      name: "",
    });
    setTimeout(() => {
        history.push('/profile')
    }, 1000);
  };

  return { handleValue, login, user };
};
