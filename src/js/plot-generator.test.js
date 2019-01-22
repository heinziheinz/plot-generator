import React from 'react';
import ReactDOM from 'react-dom';
import PlotGenerator from './plot-generator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlotGenerator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
