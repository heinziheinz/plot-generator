import React from 'react';
import ReactDOM from 'react-dom';
import SelectionBar from './../../selection-bar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectionBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
