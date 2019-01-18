import React from 'react';
import classes from './FullPost.module.css';

const fullPost = (props) => {
    let post =  <div className={classes.FullPost}>
        <p>Please select a Post...</p>
    </div>;
    
    if(props.post){
        post = (
            <div className={classes.FullPost}>
                <h2 className={classes.postTitle}>{props.post.title}</h2>
                <div className={classes.author}>{props.post.author}</div>
                <div className={classes.content}>{props.post.body}</div>
            </div>
        )
    }
    return post;
}

export default fullPost;