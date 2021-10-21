import React, {  useEffect } from "react";
import CardPost from "./components/cardPost/CardPost";
import { usePosts } from "./usePosts";
import "./Posts.scss";

const Posts = () => {
 
  const {
    posts,
    handelrValue,
    text,
    createNewPost,
    handlerSearchPost,
    getPosts,
    removePost,
    editPost,
  } = usePosts();

 

  return (
    <div className="posts-container">
      <div className="posts-container_block-searching">
        <div>
          <input
            type="text"
            placeholder="Create new post"
            onChange={(event) => handelrValue("newPost", event.target.value)}
            value={text.newPost}
          />
          <button disabled={!text.newPost} onClick={createNewPost}>create New Post</button>
        </div>
        <div>
          <input
            type="text"
            placeholder={text.notificationText}
            onChange={(event) =>
              handelrValue("searchPostText", event.target.value)
            }
            value={text.searchPostText}
          />
          <button onClick={handlerSearchPost}>search</button>
        </div>
      </div>
      {posts ?
      <div className="posts-container_wrapper">
        {posts.map((post) => {
          return (
            <CardPost
              key={post.id}
              id={post.id}
              title={post.title}
              author={post.author}
              deletItem={() => removePost(post.id)}
              editItem={() => editPost(post.id)}
            />
          )
         })}
      </div>  : <div>loading</div>}
    </div>
  );
};

export default Posts;
