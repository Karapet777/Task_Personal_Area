import React, { useEffect } from "react";
import { usePostInfo } from "./usePostInfo";

import "./PostInfo.scss";

const PostInfo = () => {
  const { SaveChenge, getPosts, chengeValue, editText } = usePostInfo();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="postInfo-container">
      <div className="postInfo-container_block">
          <h2>Chenge post</h2>
        <input
          onChange={(evt) => chengeValue(evt.target.value)}
          type="text"
          value={editText ? editText.title : 'loading...'}
        />
        <button onClick={SaveChenge}>Save</button>
      </div>
    </div>
  );
};

export default PostInfo;
