import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Result from '../components/Result';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const data = {post_name: 'test', post_content: 'testing'};
  ReactDOM.render(<BrowserRouter><Result data = {data}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});