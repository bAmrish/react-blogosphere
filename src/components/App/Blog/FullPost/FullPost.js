import React, { Component } from "react";
import classes from "./FullPost.module.css";
import axios from "../../../../axios";

class FullPost extends Component {
    state = {
        post: null
    };

    componentDidMount() {

        axios.get(`/posts/${this.props.match.params.id}`).then(response => {
            this.setState({ post: response.data });
        });
    }

    deletePostHandler = post => {
        axios.delete(`/posts/${post.id}`).then(response => {
            console.log(response);
            this.props.history.push('/posts');
        });
    };

    render() {
        let postNode = (
            <div className={classes.FullPost}>
                <p>Loading Your Post Please Wait...</p>
            </div>
        );

        if (this.state.post) {
            postNode = (
                <div className={classes.FullPost}>
                    <h2 className={classes.postTitle}>{this.state.post.title}</h2>
                    <div className={classes.author}>{this.state.post.author}</div>
                    <div className={classes.content}>{this.state.post.body}</div>
                    <div className={classes.delete}>
                        <button onClick={() => this.deletePostHandler(this.state.post)}>Delete</button>
                    </div>
                </div>
            );
        }
        return postNode;
    }
}

export default FullPost;
