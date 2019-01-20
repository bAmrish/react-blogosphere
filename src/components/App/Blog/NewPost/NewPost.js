import React, {Component} from 'react';
import classes from './NewPost.module.css';
import axios from '../../../../axios';

class NewPost extends Component {
  state = {
    title: '',
    body: '',
    author: ''
  }

  titleChangeHandler = (event) => {
    this.setState({title: event.target.value});
  }

  contentChangeHandler = (event) => {
    this.setState({body: event.target.value});
  }

  authorChangeHandler = (event) => {
    this.setState({author: event.target.value});
  }

  formSubmitHandler = () => {
    console.log(this.state);
    axios.post('/posts', this.state)
      .then( (response) => {
        console.log(response);
      });
  }

  render(){
    return (
        <div className={classes.NewPost}>
          <h3 className={classes.title}>Create a New Post</h3>
          <div className={classes.form}>
            <div className={classes["form-row"]}>
              <label htmlFor="postTitle">Title</label>
              <input name="title" 
                value={this.state.title} 
                className={classes.postTitle} 
                onChange={this.titleChangeHandler}/>              
            </div>
            <div className={classes["form-row"]}>
              <label htmlFor="content">Content</label>
              <textarea name="content" 
                value={this.state.content}  
                className={classes.content}
                onChange={this.contentChangeHandler}>   
              </textarea>
            </div>
            <div className={classes["form-row"]}>
              <label htmlFor="author">Author</label>
              <select name="author" 
                className={classes.Author}
                value={this.state.author} 
                onChange={this.authorChangeHandler}>
                <option value="Amrish">Amrish</option>
                <option value="Aarushi">Aarushi</option>
                <option value="Anishka">Anishka</option>
              </select>           
            </div>       
            <div className={classes["form-row"]}>
                <button className={classes.submitButton}
                  onClick={this.formSubmitHandler}>
                  Create Post
                </button>
            </div>     
          </div>
        </div>
    )
  }
}

export default NewPost;