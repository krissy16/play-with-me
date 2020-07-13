import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import NewPostPage from '../components/NewPostPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><NewPostPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});