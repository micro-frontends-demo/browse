import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.renderBrowse = containerId => {
  ReactDOM.render(<App />, document.getElementById(containerId));
  registerServiceWorker();
};
