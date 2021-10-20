import { useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "./../../context/AppContext";
import { useHistory } from "react-router";

export const usePosts = () => {
  const baseURL = "http://localhost:3000";
  const context = useContext(AppContext);
  const history = useHistory();
  const [posts, setPosts] = useState(null);
  const [newPost, setNewPost] = useState("");

  const getPosts = async () => {
    try {
      const response = await axios.get(`${baseURL}/posts`);
      setPosts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createNewPost = async () => {
    try {
      await axios.post(`${baseURL}/posts`, {
        id: Math.random(),
        title: newPost,
        author: context.state.user.name,
      });
      getPosts();
      setNewPost("");
    } catch (err) {
      console.log(err);
    }
  };

  const removePost = async (id) => {
    try {
      await axios.delete(`${baseURL}/posts/${id}`);
      getPosts();
    } catch (err) {
      console.log(err);
    }
  };
  const handelValue = (value) => {
    setNewPost(value);
  };

  const editPost = (id) => {
    history.push(`/posts/${id}`)
  };

  return {
    posts,
    newPost,
    handelValue,
    createNewPost,
    getPosts,
    removePost,
    editPost,
  };
};
