import { useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";

export const usePostInfo = () => {
  const history = useHistory();
  const baseURL = "http://localhost:3000";
  const { id } = useParams();
  const [editText, seteditText] = useState(null);

  const getPosts = async () => {
    try {
      const response = await axios.get(`${baseURL}/posts/${id}`);
      setTimeout(() => {
        seteditText(response.data);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const SaveChenge = async () => {
    try {
      await axios.put(`${baseURL}/posts/${id}`, {
        ...editText,
      });
      history.push("/posts");
    } catch (err) {
      console.log(err);
    }
  };

  const chengeValue = (value) => {
    seteditText({ ...editText, title: value });
  };

  return { getPosts, SaveChenge, chengeValue, editText };
};
