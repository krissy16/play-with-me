import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PostContext from './PostContext'
import LandingPage from './components/LandingPage'
import MainPage from './components/MainPage'
import DetailsPage from './components/DetailsPage'
import NewPostPage from './components/NewPostPage'
import NotFoundPage from './components/NotFoundPage'

class App extends React.Component {
  state={
    posts: [
      {
        id: 0,
        title: 'test',
        content: 'sample test',
        comments: []
      }
    ]
  }
  setPosts = posts => {
    this.setState({
      posts
    })
  }

  addPost = post => {
    this.setState({
      posts: [ ...this.state.posts, post ],
    })
  }

  addComment = (comment, postId) => {
    let updatedPost = this.state.posts.find( post => post.id === postId).comments.push(comment)
    this.setState({
      posts: this.state.posts.map(post =>
        (post.id !== updatedPost.id) ? post : updatedPost
      )
    })
  }
  componentDidMount(){
    //api call will go here
  }
  render(){
    const contextValue={
      posts: this.state.posts,
      addPost: this.addPost,
      addComment: this.addComment
    }
    return (
      <main className='App'>
        <PostContext.Provider value={contextValue}>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/results' component={MainPage}/>
            <Route path='/details/:detailsId' component={DetailsPage}/>
            <Route path='/make-post' component={NewPostPage}/>
            <Route component={NotFoundPage} />
          </Switch>
        </PostContext.Provider>
      </main>
    )
  }
}

export default App;