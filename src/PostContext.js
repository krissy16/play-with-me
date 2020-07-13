import React from 'react';

const PostContext = React.createContext({
  posts: [],
  addPost: () => {},
});

export default PostContext;
