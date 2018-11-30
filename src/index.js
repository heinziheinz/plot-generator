import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './errorBoundary';
import * as serviceWorker from './serviceWorker';
import PlotGenerator from './js/plot-generator';


ReactDOM.render(
  <ErrorBoundary>
    <PlotGenerator />
  </ErrorBoundary>,
  document.querySelector('#root')
);
serviceWorker.unregister();
