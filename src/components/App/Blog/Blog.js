import React, {Component} from 'react';
import classes from './Blog.module.css';
import axios from '../../../axios';

import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    state = {
        posts: null,
        selectedPost: null
    };

    componentWillMount(){
        axios.get('/posts')
            .then((response) => {
                this.setState({posts: response.data.slice(0, 4)});
            })
    }

    selectedPostHandler = (post) =>{
        axios.get(`/posts/${post.id}`)
            .then((response) => {
                this.setState({selectedPost: response.data});
            })
    }

    deletePostHandler = (post) => {
        axios.delete(`/posts/${post.id}`)
        .then((response) => {
            console.log(response);
        })
    }

    render(){
        return(
            <div className={classes.Blog}>
                <h1 className={classes.title}>My Blogs</h1>
                <Posts posts={this.state.posts} postClicked={this.selectedPostHandler}/>
                <FullPost post={this.state.selectedPost}
                    deleted={() => {this.deletePostHandler(this.state.selectedPost)}}/>
                <NewPost />
            </div>
        )
    }
}

export default Blog;