import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.renderBrowse = (containerId, history) => {
  ReactDOM.render(<App history={history} />, document.getElementById(containerId));
  registerServiceWorker();
};
