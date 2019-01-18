import React, {Component} from 'react';
import classes from './Blog.module.css';

import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    state = {
        selectedPost: {
            id: 101,
            title: 'The Life as it ought to be!',
            content: `
            This is a my first ever post. I didn't want to do some lorem ipsum bullshit here. 
            I actually took some effort into writing this bullshit in an enternal hope of some 
            lost soul stumbling across this piece of art I categorize as morden art in 
            the field of literature by an up and coming artist of the new age. To the lost 
            soul I have but one message. Have hope. No matter how lost you may feel right now. 
            Its nothing compared to the darkness that is going to follow. The worst is yet to come. 
            So in fact I should have said abandon all hope.
             What good would it do to worry about anything? Its not going to solve anything. 
             Enjoy your life as its right now. OK. Enough of rambling. Back to Business.`,
            author: 'Amrish'
        }
    }
    render(){
        return(
            <div className={classes.Blog}>
                <h1 className={classes.title}>My Blogs</h1>
                <Posts />
                <FullPost post={this.state.selectedPost}/>
                <NewPost />
            </div>
        )
    }
}

export default Blog;