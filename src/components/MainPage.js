import React from 'react'
import PostContext from '../PostContext'
import Header from './Header'
import Result from './Result'
import '../styles/MainPage.css'

class MainPage extends React.Component{
    static contextType = PostContext;
    static defaultProps = {
        posts: []
      };
    render(){
        const { posts } = this.context;
        return(
            <>
                <Header />
                <ul className="results">
                   { posts.map(post => <Result key={post.id} data={post}/>) }
                </ul>
            </>
            
        )
    }
}

export default MainPage;