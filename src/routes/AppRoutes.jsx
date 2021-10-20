import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../componets/heater/Heater";
import Layout from "../componets/layout/Layout";
import Login from "../pages/auth/Login";
import Posts from "../pages/posts/Posts";
import Profile from "../pages/profiles/Profile";
import PostInfo from "../pages/posts/components/postInfo/PostInfo";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Header />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:id" component={PostInfo} />
          <Route exact path="/profile" component={Profile} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
