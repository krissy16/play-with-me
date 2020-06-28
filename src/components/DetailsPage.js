import React from 'react'
import PostContext from '../PostContext'
import Header from './Header'
//import Comment from './Comment'
import '../styles/DetailsPage.css'

class DetailsPage extends React.Component{
    state = {
        hideCommentForm: true,
        comment: ''
    } 
    toggleForm(){
        const hideCommentForm = !(this.state.hideCommentForm)
        this.setState({
            hideCommentForm
        })
    } 
    handleChange = e => {
        this.setState({ comment: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault();
        const { comment } = e.target;
        this.context.addComment(comment.value, parseInt(this.props.match.params.detailsId))
        this.setState({ hideCommentForm: true, comment: '' })
    }   
    static contextType = PostContext;
    static defaultProps = {
        posts: []
    };
    render(){
        const post = this.context.posts.find( post => post.id === parseInt(this.props.match.params.detailsId)) || []
        const comments = post.comments || []
        return(
            <>
                <Header />
                <div className="result-detail">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
                <ul className="comments">
                    {comments.map((comment, index) => 
                        <li key={index} className='comment'>{comment}</li>)}
                    {this.state.hideCommentForm ? <p onClick={() => this.toggleForm()}>Add Comment</p> : 
                        <li className="comment">
                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor="comment">Comment</label>
                                <textarea id="comment" name="comment" value={this.state.comment} onChange={this.handleChange}></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </li>}
                </ul>
            </>
        )
    }
}

export default DetailsPage;