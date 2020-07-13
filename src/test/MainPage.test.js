import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import MainPage from '../components/MainPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><MainPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});