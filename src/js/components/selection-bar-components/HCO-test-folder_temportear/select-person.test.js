import React from 'react';
import ReactDOM from 'react-dom';
import SelectPerson from './select-person.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectPerson />, div);
  ReactDOM.unmountComponentAtNode(div);
});
