import React from 'react';
import classes from './FullPost.module.css';

const fullPost = (props) => {
    return (
        <div className={classes.FullPost}>
            <h2 className={classes.postTitle}>{props.post.title}</h2>
            <div className={classes.content}>{props.post.content}</div>
        </div>
    );
}

export default fullPost;