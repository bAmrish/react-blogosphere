import React, { Component } from "react";
import classes from "./Posts.module.css";
import { Link } from "react-router-dom";

import Post from "./Post/Post";
import axios from "../../../../axios";

class Posts extends Component {
    state = {
        posts: null
    };

    componentWillMount() {
        axios.get("/posts").then(response => {
            this.setState({ posts: response.data.slice(0, 4) });
        });
    }


    render() {
        let posts = "Loading...";
        if (this.state.posts) {
            posts = this.state.posts.map(post => {
                return (
                    <Link key={post.id} to={"/posts/" + post.id}>
                        <Post
                           
                            title={post.title}
                            author={post.author}
                        />
                    </Link>
                );
            });
        }
        return <div className={classes.Posts}>{posts}</div>;
    }
}

export default Posts;
