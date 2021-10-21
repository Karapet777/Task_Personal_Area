import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "./../../context/AppContext";
import { useHistory } from "react-router";

export const usePosts = () => {
  const baseURL = "http://localhost:3000";
  const context = useContext(AppContext);
  const history = useHistory();
  const [posts, setPosts] = useState(null);
  const [text, setText] = useState({
    newPost: "",
    searchPostText: "",
    notificationText: "",
  });

  const getPosts = async () => {
    try {
      const response = await axios.get(`${baseURL}/posts`);
      setPosts(response.data);
      setText({
        ...text,
        notificationText: "Search",
        newPost: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const createNewPost = async () => {
    if (text.newPost.trim().length) {
      try {
        await axios.post(`${baseURL}/posts`, {
          id: Date.now(),
          title: text.newPost,
          author: context.state.user.email,
        });
        setText({
          ...text,
          newPost: " ",
        });
        getPosts();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handlerSearchPost = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/posts?q=${text.searchPostText}`
      );
      if (response.data.length) {
        setPosts(response.data);
        setText({
          ...text,
          notificationText: "Search",
        });
      } else {
        setPosts(null);
        setText({
          ...text,
          notificationText: "No such an item found",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (text.searchPostText === "") {
      getPosts();
    }
  }, [text.searchPostText]);

  const removePost = async (id) => {
    try {
      await axios.delete(`${baseURL}/posts/${id}`);
      getPosts();
    } catch (err) {
      console.log(err);
    }
  };
  const handelrValue = (name, value) => {
    setText({
      ...text,
      [name]: value,
    });
  };

  const editPost = (id) => {
    history.push(`/posts/${id}`);
  };

  return {
    posts,
    handelrValue,
    text,
    createNewPost,
    handlerSearchPost,
    getPosts,
    removePost,
    editPost,
  };
};
