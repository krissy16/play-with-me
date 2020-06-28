import React from 'react'
import Header from './Header'
import PostContext from '../PostContext'
import '../styles/NewPostPage.css'

class NewPostPage extends React.Component{
    static contextType = PostContext;
    handleSubmit = e => {
        e.preventDefault();
        const { title, content } = e.target;
        const post = {
            id: this.context.posts.length,
            title: title.value,
            content: content.value,
            comments: []
        }
        this.context.addPost(post)
        this.props.history.push('/results')
    }
    render(){
        return(
            <>
                <Header />
                <form className="add-post-form" onSubmit={this.handleSubmit}>
                    <span className="form-title">
                            <label htmlFor="title">Title: </label>
                            <input type="text" id="title" name="title" />
                    </span>
                    <span className="form-content">
                        <label htmlFor="content">Description: </label>
                        <textarea id="content" name="content"></textarea>
                    </span>
                    <button className="submit" type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default NewPostPage;



/*
posts[
   {
        title
        content
        comments
            [
                {
                    content
                    replies
                        [
                            'replies'
                        ]
                }
            ]
    }
]


*/