import React from 'react'

const PostContext = React.createContext({
    posts: [],
    addPost: () => {},
    addComment: () => {}
})

export default PostContext;