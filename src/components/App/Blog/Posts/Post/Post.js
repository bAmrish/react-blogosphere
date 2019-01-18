import React from 'react';
import classes from './Post.module.css';

const post = (props) => {
    return (
        <div className={classes.Post} >
            <h2 className={classes.postTitle} onClick={props.clicked}>{props.title}</h2>
            <div className={classes.author}>{props.author}</div>
        </div>
    )
}

export default post;