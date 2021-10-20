import React, { useEffect } from "react";
import CardPost from "./components/cardPost/CardPost";
import { usePosts } from "./usePosts";
import "./Posts.scss";

const Posts = () => {
  const {
    posts,
    newPost,
    handelValue,
    createNewPost,
    getPosts,
    removePost,
    editPost,
  } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="posts-container">
      <div className="posts-container_block-searching">
        <div>
          <input
            type="text"
            placeholder="create new post"
            onChange={({ target: { value } }) => handelValue(value)}
            value={newPost}
          />
          <button onClick={createNewPost}>create New Post</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="search"
            onChange={({ target: { value } }) => handelValue(value)}
          />
          <button onClick={createNewPost}>search</button>
        </div>
      </div>
      <div className="posts-container_wrapper">
        {posts?.map((post) => {
          return (
            <CardPost
              key={post.id}
              id={post.id}
              title={post.title}
              author={post.author}
              deletItem={() => removePost(post.id)}
              editItem={() => editPost(post.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
