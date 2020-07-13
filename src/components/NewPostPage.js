import React from 'react';
import config from '../config';
import Header from './Header';
import PostContext from '../PostContext';
import '../styles/NewPostPage.css';

class NewPostPage extends React.Component{
    static contextType = PostContext;
    handleSubmit = e => {
        e.preventDefault();
        const { title, content } = e.target;
        const post = {
            post_name: title.value,
            post_content: content.value
        };
        fetch(`${config.API_ENDPOINT}/posts`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${config.API_KEY}`
            }
          })
            .then(res => {
              if (!res.ok) {
                return res.json().then(error => Promise.reject(error));
              }
              return res.json();
            })
            .then(post => {
                this.context.addPost(post);
                this.props.history.push('/results');
            })
            .catch(error => {
              console.error(error);
            })
    }
    handleCancel = e => {
        e.preventDefault();
        this.props.history.push('/results');
    }
    render(){
        return(
            <>
                <Header />
                <h1 className="create-post-title">Create a Post</h1>
                <form className="add-post-form" onSubmit={this.handleSubmit}>
                    <span className="form-title">
                            <label htmlFor="title">Title: </label>
                            <input type="text" id="title" name="title" />
                    </span>
                    <span className="form-content">
                        <label htmlFor="content">Description: </label>
                        <textarea id="content" name="content"></textarea>
                    </span>
                    <span className="new-post-buttons">
                        <button className="cancel" type="cancel"  onClick={ e => this.handleCancel(e) }>Cancel</button>
                        <button className="submit-post" type="submit">Submit</button>
                    </span>
                </form>
            </>
        )
    }
}

export default NewPostPage;
