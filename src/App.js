import React from 'react';
import { Route, Switch } from 'react-router-dom'
import config from './config';
import PostContext from './PostContext'
import LandingPage from './components/LandingPage'
import MainPage from './components/MainPage'
import DetailsPage from './components/DetailsPage'
import NewPostPage from './components/NewPostPage'
import NotFoundPage from './components/NotFoundPage'

class App extends React.Component {
  state={
    posts: []
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

  componentDidMount(){
    fetch(`${config.API_ENDPOINT}/posts`, {
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
      .then(this.setPosts)
      .catch(error => {
        console.error(error)
      })
  }
  render(){
    const contextValue={
      posts: this.state.posts,
      addPost: this.addPost
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