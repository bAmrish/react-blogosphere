import React from 'react';
import classes from './Posts.module.css';

import Post from './Post/Post';

const posts = () => {
    return(
        <div className={classes.Posts}>
            <Post title="The Life as it ought to be!" author="Amrish" />
            <Post title="The Life as you ought to live" author="Aarushi" />
            <Post title="The Life" author="Anishka" />        
        </div>
    )
}

export default posts;