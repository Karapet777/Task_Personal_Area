import React from "react";

import "./CardPost.scss";

const CardPost = ({ title, author, deletItem, editItem }) => {
  return (
    <div className="CardPost-container">
      <p className="CardPost-container_title">{title}</p>
      <p className="CardPost-container_author">
        author. <span>{author}</span>
      </p>
      <button onClick={deletItem}>delete</button>
      <button className="CardPost-container_editBtn" onClick={editItem}>Edit</button>
    </div>
  );
};

export default CardPost;
