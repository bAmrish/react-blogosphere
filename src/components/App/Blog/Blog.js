import React, { Component } from "react";
import classes from "./Blog.module.css";
import { Route, Redirect, Switch, NavLink } from "react-router-dom";

import Posts from "./Posts/Posts";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  state = {
    posts: null,
    selectedPost: null
  };

  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <h1 className={classes.title}>My Blogs</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts" activeClassName={classes.active}>Posts</NavLink>
              </li>
              <li>
                <NavLink to="/new-post" activeClassName={classes.active}>New Posts</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/posts/:id" component={FullPost} />          
          <Route path="/posts" exact component={Posts} />
          <Redirect from="/" exact to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
