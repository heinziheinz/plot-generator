import React from 'react';
import ReactDOM from 'react-dom';
import PoltGenerator from './plot-generator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PoltGenerator />, div);
});
