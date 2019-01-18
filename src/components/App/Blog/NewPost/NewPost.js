import React from 'react';
import classes from './NewPost.module.css'

const newPost = () => {
    return (
        <div className={classes.NewPost}>
          <h3 className={classes.title}>Create a New Post</h3>
          <div className={classes.form}>
            <div className={classes["form-row"]}>
              <label htmlFor="postTitle">Title</label>
              <input name="title" className={classes.postTitle} />              
            </div>
            <div className={classes["form-row"]}>
              <label htmlFor="content">Content</label>
              <textarea name="content" className={classes.content}></textarea>
            </div>
            <div className={classes["form-row"]}>
              <label htmlFor="author">Author</label>
              <select name="author" className={classes.Author}>
                <option value="Amrish">Amrish</option>
                <option value="Aarushi">Aarushi</option>
                <option value="Anishka">Anishka</option>
              </select>           
            </div>       
            <div className={classes["form-row"]}>
                <button className={classes.submitButton}>Create Post</button>
            </div>     
          </div>
        </div>
    )
}

export default newPost;