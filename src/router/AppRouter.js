import React, { Component } from "react";
import { Switch, Route, NavLink, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Header from "./Header";
import Footer from "./Footer";

import {
  Blogs,
  FormCreate,
  FormUpdate,
  FormCreateAsync,
  FormUpdateAsync
} from "../blogs";

// import Blogs from "./Blogs";

class AppRouter extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs/create" exact component={FormCreate} />
          <Route path="/blogs/create-async" exact component={FormCreateAsync} />
          <Route path="/blogs/update/:id" exact component={FormUpdate} />
          <Route
            path="/blogs/update-async/:id"
            exact
            component={FormUpdateAsync}
          />
          <Route path="/blogs" exact component={Blogs} />

          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default AppRouter;
