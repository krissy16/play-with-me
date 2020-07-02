import React from 'react'
import config from '../config';
import PostContext from '../PostContext'
import Header from './Header'
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
        posts: [],
        comments: []
    };
    render(){
        const post = this.context.posts.find( post => post.id === parseInt(this.props.match.params.detailsId)) || []
        const comments = this.state.comments.filter( comment => comment.post_id === post.id) || []
        return(
            <>
                <Header />
                <div className="result detail">
                    <h2>{post.post_name}</h2>
                    <p>{post.post_content}</p>
                </div>
                <ul className="comments">
                    {comments.map((comment, index) => 
                        <li key={index} className='comment'>{comment.content}</li>)}
                    {this.state.hideCommentForm ? <p onClick={() => this.toggleForm()}>Add Comment</p> : 
                        <li className="comment">
                            <form onSubmit={ e => this.handleSubmit(e, post.id)}>
                                <label htmlFor="comment">Comment</label>
                                <textarea id="comment" name="comment" value={this.state.newComment} onChange={this.handleChange}></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </li>}
                </ul>
            </>
        )
    }
}

export default DetailsPage;