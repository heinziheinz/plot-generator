import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import PlotGenerator from './js/plot-generator';



ReactDOM.render(
  <PlotGenerator />,
  document.querySelector('#root')
);

/**
 * 
 */
serviceWorker.unregister();
