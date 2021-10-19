import {useState} from 'react'
import axios from "axios";


export const usePosts = () => {
    const baseURL = "http://localhost:3000";
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
          author: "Kar",
        });
        getPosts();
      } catch (err) {
        console.log(err);
      }
    };
  
    const handelValue = ({ terget: { value } }) => {
      setNewPost(value);
    };

  return {posts, handelValue, createNewPost, getPosts};
};
