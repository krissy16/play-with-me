import React from 'react'
import config from '../config';
import PostContext from '../PostContext'
import Header from './Header'
import NotFoundPage from './NotFoundPage'
import '../styles/DetailsPage.css'

class DetailsPage extends React.Component{
    state = {
        hideCommentForm: true,
        comments: [],
        newComment: ''
    } 
    componentDidMount(){
        fetch(`${config.API_ENDPOINT}/comments`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${config.API_KEY}`
          }
        })
          .then(res => {
            if (!res.ok) {
              return res.json().then(error => Promise.reject(error))
            }
            return res.json()
          })
          .then(this.setComments)
          .catch(error => {
            console.error(error)
          })
      }
      setComments = comments => {
        this.setState({
          comments
        })
      }
    toggleForm(){
        const hideCommentForm = !(this.state.hideCommentForm)
        this.setState({
            hideCommentForm
        })
    } 
    handleChange = e => {
        this.setState({ newComment: e.target.value })
    }
    handleSubmit = (e, postId) => {
        e.preventDefault();
        const comment = {
            content: e.target.comment.value,
            post_id: postId
        };
        this.postComment(comment)
    }  
    postComment(comment){
        fetch(`${config.API_ENDPOINT}/comments`, {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${config.API_KEY}`
            }
          })
            .then(res => {
              if (!res.ok) {
                return res.json().then(error => Promise.reject(error))
              }
              return res.json()
            })
            .then( res => {
                const newComments = [...this.state.comments, res]
                this.setState({ 
                    comments: newComments,
                    hideCommentForm: true, 
                    comment: ''
                })
            })
            .catch(error => {
              console.error(error)
            })
    }
    static contextType = PostContext;
    static defaultProps = {
        posts: [
        ],
        comments: []
    };
    render(){
        const post = this.context.posts.find( post => post.id === parseInt(this.props.match.params.detailsId)) || null
        if(post === null) return <NotFoundPage />
        const comments = this.state.comments.filter( comment => comment.post_id === post.id) || []
        return(
            <>
                <Header />
                <div className="result detail">
                    <h2>{post.post_name}</h2>
                    <p>{post.post_content}</p>
                </div>
                <ul className="comments">
                  <li className="comments-title">{comments.length} Comments: </li>
                    {comments.map((comment, index) => 
                        <li key={index} className='comment'>{comment.content}</li>)}
                    {this.state.hideCommentForm ? <p className="addComment" onClick={() => this.toggleForm()}>Add Comment</p> : 
                        <li className="add comment">
                            <form className="comment-form" onSubmit={ e => this.handleSubmit(e, post.id)}>
                                <input type="text" id="comment" name="comment" value={this.state.newComment} onChange={this.handleChange} placeholder="Add Comment" />
                                <span className="buttons">
                                  <button className="cancel button" type="cancel"  onClick={() => this.toggleForm()}>Cancel</button>
                                  <button className="submit-comment button" type="submit">Comment</button>
                                </span>
                            </form>
                        </li>}
                </ul>
            </>
        )
    }
}

export default DetailsPage;