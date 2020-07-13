import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import DetailsPage from '../components/DetailsPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><DetailsPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});