import React from "react";
import Link from "../link/Link";

import './Header.scss'

const Header = () => {
  const headerLinks = [
    { to: "/", title: "Auth" },
    { to: "posts", title: "Posts" },
    { to: "profile", title: "Profile" },
  ];
  return (
    <div className="app-header-container">
      <ul className="app-header-container_nav">
        {headerLinks.map((el) => (
          <li key={el.to}>
            <Link to={el.to} title={el.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
