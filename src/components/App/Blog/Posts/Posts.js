import React from 'react';
import classes from './Posts.module.css';

import Post from './Post/Post';

const posts = (props) => {
    let posts = 'Loading...'
    if(props.posts){
        posts = props.posts.map(post => {
            return(
                <Post key={post.id} 
                    title={post.title} 
                    author={post.author} 
                    clicked ={() => props.postClicked(post)}
                    />
            );
        });

    }
    return(
        <div className={classes.Posts}>
            {posts}            
        </div>
    )
}

export default posts;