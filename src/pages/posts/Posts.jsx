import React, { useEffect } from "react";
import CardPost from "./components/cardPost/CardPost";
import { usePosts } from "./usePosts";

const Posts = () => {
  const { posts, handelValue, createNewPost, getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="create new post"
          onChange={() => handelValue}
        />
        <button onClick={createNewPost}>create New Post</button>
      </div>
      {posts?.map((post) => {
        return (
          <CardPost
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            deletItem={post.id}
          />
        );
      })}
    </div>
  );
};

export default Posts;
