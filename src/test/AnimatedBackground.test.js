import React from 'react';
import ReactDOM from 'react-dom';
import AnimatedBackground from '../components/AnimatedBackground';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnimatedBackground />, div);
  ReactDOM.unmountComponentAtNode(div);
});