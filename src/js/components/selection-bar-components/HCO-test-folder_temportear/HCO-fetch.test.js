import React from 'react';
import ReactDOM from 'react-dom';
import HCOFetch from './HCO-fetch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HCOFetch />, div);
  ReactDOM.unmountComponentAtNode(div);
});
